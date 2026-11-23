#!/usr/bin/env node
// Imports AMC problems from the static archive in the public GitHub repo
// vqbc/trivial (https://github.com/vqbc/trivial, `public/data/aops/`), which
// holds the AoPS wiki's AMC 8/10/12 tests as JSON: problem HTML with \(…\)
// math, answer letters, solutions, and figure PNGs. Reading that archive never
// touches the AoPS site itself.
//
//   git clone --depth 1 https://github.com/vqbc/trivial ../trivial
//   node scripts/import-amc-trivial.mjs ../trivial/public/data/aops --only amc12 --from 2002
//
// Writes (commit them; they are generated — never hand-edit):
//   src/data/amc/bank/<testId>.json       problems + choices + answers
//   src/data/amc/solutions/<testId>.json  { "<n>": "<solutions markdown>" }
//   public/amc/fig/<testId>/…png          figures used by problems/solutions
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, copyFileSync, rmSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseHtml, NodeType } from 'node-html-parser';
import { splitChoices } from './lib/amc-choices.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const src = args.find((a) => !a.startsWith('--') && args[args.indexOf(a) - 1] !== '--only' && args[args.indexOf(a) - 1] !== '--from');
const argVal = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };
const only = (argVal('--only') ?? 'amc8,amc10,amc12').split(',');
const fromYear = Number(argVal('--from') ?? 0);
if (!src || !existsSync(join(src, 'index.json'))) {
  console.error('Usage: node scripts/import-amc-trivial.mjs <trivial>/public/data/aops [--only amc12] [--from 2002]');
  process.exit(1);
}

const bankDir = join(root, 'src/data/amc/bank');
const solDir = join(root, 'src/data/amc/solutions');
const figRoot = join(root, 'public/amc/fig');
for (const d of [bankDir, solDir, figRoot]) mkdirSync(d, { recursive: true });

/** "2021 Fall AMC 12A" → { id: "2021-amc12fa", contest, year } */
function testInfo(title) {
  const m = title.match(/^(\d{4}) (Fall )?AMC (8|10|12)([ABP])?$/);
  if (!m) return null;
  const [, year, fall, num, ab] = m;
  return { id: `${year}-amc${num}${fall ? 'f' : ''}${(ab ?? '').toLowerCase()}`, contest: `amc${num}`, year: Number(year), title };
}

// ── HTML → Markdown (math as $…$ / $$…$$) ────────────────────────────────────

const MATH = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g;
const escapeProse = (t) => t.replace(/([\\*_`$])/g, '\\$1').replace(/^(\s*)([#>+-]|\d+\.)(\s)/gm, '$1\\$2$3');

/** Make the wiki's LaTeX KaTeX-compatible. */
function fixTex(t) {
  return t
    // A dollar sign inside math: `\$` would end the $…$ span in Markdown, so use \char36.
    .replace(/\\textdollar(?![a-zA-Z])\s*|\\\$\s*/g, '\\char36 ')
    .replace(/\\overarc\b/g, '\\overset{\\frown}')
    .replace(/\\begin\{tabular\}(?:\[[a-z]\])?/g, '\\begin{array}')
    .replace(/\\end\{tabular\}/g, '\\end{array}')
    .trim();
}

function textToMd(text) {
  // Pieces in order; adjacent inline formulas are merged, since "$a$$b$" would
  // read as a $$ display block in Markdown.
  const pieces = [];
  let last = 0;
  for (const m of text.matchAll(MATH)) {
    const prose = text.slice(last, m.index);
    if (prose) pieces.push({ prose });
    if (m[1] !== undefined) {
      const prev = pieces.at(-1);
      if (prev?.inline !== undefined) {
        // The archive turned the wiki's "$1" into \(\,\)\(1\): restore the dollar sign.
        prev.inline = prev.inline.trim() === '\\,' && /^\s*\d/.test(m[1]) ? '\\char36 ' : `${prev.inline}{}`;
        prev.inline += fixTex(m[1]);
      } else {
        pieces.push({ inline: fixTex(m[1]) });
      }
    } else {
      pieces.push({ display: fixTex(m[2]) });
    }
    last = m.index + m[0].length;
  }
  const rest = text.slice(last);
  if (rest) pieces.push({ prose: rest });
  return pieces
    .map((p) => (p.prose !== undefined ? escapeProse(p.prose) : p.inline !== undefined ? `$${p.inline}$` : `\n\n$$\n${p.display}\n$$\n\n`))
    .join('');
}

function htmlToMd(node, img) {
  let out = '';
  for (const ch of node.childNodes) {
    if (ch.nodeType === NodeType.TEXT_NODE) { out += textToMd(ch.text); continue; }
    if (ch.nodeType !== NodeType.ELEMENT_NODE) continue;
    const tag = ch.rawTagName?.toLowerCase();
    if (tag === 'img') { out += img(ch.getAttribute('src') ?? ''); continue; }
    if (tag === 'script' || tag === 'style') continue;
    const inner = htmlToMd(ch, img);
    if (tag === 'br') out += '  \n';
    else if (/^h[1-6]$/.test(tag)) out += `\n\n#### ${inner.trim()}\n\n`;
    else if (['p', 'div', 'center', 'blockquote', 'pre'].includes(tag)) out += `\n\n${inner.trim()}\n\n`;
    else if (tag === 'b' || tag === 'strong') out += inner.trim() ? `**${inner.trim()}**` : '';
    else if (tag === 'i' || tag === 'em') out += inner.trim() ? `*${inner.trim()}*` : '';
    else if (tag === 'li') out += `\n- ${inner.trim()}`;
    else if (tag === 'ul' || tag === 'ol') out += `\n${inner}\n\n`;
    else if (tag === 'a') out += inner;
    else out += inner;
  }
  return out;
}

const tidy = (md) => md.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();

// ── Import ───────────────────────────────────────────────────────────────────

const fileFor = (title) => join(src, `${title.replace(/ /g, '_')}.json`);
const cache = new Map();
const loadTest = (title) => {
  if (!cache.has(title)) cache.set(title, existsSync(fileFor(title)) ? JSON.parse(readFileSync(fileFor(title), 'utf8')) : null);
  return cache.get(title);
};

const index = JSON.parse(readFileSync(join(src, 'index.json'), 'utf8'));
const issues = [];
let tests = 0, total = 0, figs = 0;

for (const title of Object.keys(index)) {
  const info = testInfo(title);
  if (!info || !only.includes(info.contest) || info.year < fromYear) continue;
  const data = loadTest(title);
  if (!data) { issues.push(`${title}: file missing`); continue; }

  const figDir = join(figRoot, info.id);
  rmSync(figDir, { recursive: true, force: true });
  const problems = [];
  const solutions = {};

  for (const [nStr, entry] of Object.entries(data.problems).sort((a, b) => Number(a[0]) - Number(b[0]))) {
    const n = Number(nStr);
    let p = entry;
    // Shared AMC 10/12 problems point at the other test's page.
    if (p.page) {
      const m = p.page.match(/^(.*) Problems\/Problem (\d+)$/);
      const other = m && loadTest(m[1])?.problems?.[m[2]];
      if (!other?.problem) { issues.push(`${title} #${n}: redirect to "${p.page}" not found`); continue; }
      p = { ...other, answer: entry.answer ?? other.answer };
    }
    let k = 0;
    const img = (srcUrl) => {
      // "/data/aops/2025_AMC_10B/1-fig1.png" → file in the archive
      const rel = srcUrl.replace(/^\/data\/aops\//, '');
      const file = join(src, decodeURIComponent(rel));
      if (!existsSync(file)) { issues.push(`${title} #${n}: figure ${rel} missing`); return ''; }
      mkdirSync(figDir, { recursive: true });
      const name = `${n}-${++k}${basename(file).match(/\.\w+$/)?.[0] ?? '.png'}`;
      copyFileSync(file, join(figDir, name));
      figs++;
      return `\n\n![figure](/amc/fig/${info.id}/${name})\n\n`;
    };

    const body = tidy(htmlToMd(parseHtml(p.problem ?? ''), img));
    if (!/^[A-E]$/.test(p.answer ?? '')) {
      issues.push(`${title} #${n}: skipped (answer "${p.answer}")`);
      continue;
    }
    let split = splitChoices(body);
    if (!split) {
      // e.g. choices drawn in a figure: keep the whole statement, letter-only buttons.
      issues.push(`${title} #${n}: choices not found — using letter-only buttons`);
      split = { q: body, choices: ['A', 'B', 'C', 'D', 'E'].map((l) => `\\text{(${l})}`) };
    }
    problems.push({ id: `${info.id}-${String(n).padStart(2, '0')}`, test: info.id, n, q: split.q, choices: split.choices, a: p.answer });
    if (p.solutions) solutions[n] = tidy(htmlToMd(parseHtml(p.solutions), img));
  }

  if (!problems.length) { issues.push(`${title}: no problems imported`); continue; }
  writeFileSync(join(bankDir, `${info.id}.json`), JSON.stringify({ id: info.id, title, contest: info.contest, year: info.year, problems }));
  writeFileSync(join(solDir, `${info.id}.json`), JSON.stringify(solutions));
  tests++;
  total += problems.length;
}

console.log(`Imported ${total} problems from ${tests} tests (${figs} figures) → src/data/amc/`);
if (issues.length) {
  console.log(`\n${issues.length} issue(s):`);
  for (const s of issues.slice(0, 100)) console.log(`  - ${s}`);
}
