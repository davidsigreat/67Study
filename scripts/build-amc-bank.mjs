#!/usr/bin/env node
// Converts content-src/amc/<testId>/ (downloaded by scripts/fetch-amc.mjs)
// → src/data/amc/bank/<testId>.json + public/amc/fig/<testId>-NN.png
//
//   npm run amc:build                 # all tests
//   AMC_SRC=/in AMC_OUT=/out npm run amc:build   # other folders (testing)
//
// Never hand-edit the JSON; fix the parser or the source instead.
// Problems that can't be parsed cleanly (missing choices/answer) are skipped
// and listed at the end.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, copyFileSync, rmSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcRoot = process.env.AMC_SRC ?? join(root, 'content-src/amc');
const outRoot = process.env.AMC_OUT ?? root; // AMC_OUT: write somewhere else (testing)
const outDir = join(outRoot, 'src/data/amc/bank');
const figDir = join(outRoot, 'public/amc/fig');

if (!existsSync(srcRoot)) {
  console.log('No content-src/amc yet — run `node scripts/fetch-amc.mjs` first.');
  process.exit(0);
}
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
mkdirSync(figDir, { recursive: true });

// ── Wikitext → Markdown + LaTeX ──────────────────────────────────────────────

function stripTemplates(s) {
  let prev;
  do {
    prev = s;
    s = s.replace(/\{\{[^{}]*\}\}/g, '');
  } while (s !== prev);
  return s;
}

/** Replace diagrams with numbered placeholders, in page order. */
function markFigures(wiki) {
  let k = 0;
  const uploads = [];
  const text = wiki.replace(
    /<asy>[\s\S]*?<\/asy>|\[\[(?:Image|File):([^|\]]+)(?:\|[^\]]*)?\]\]/gi,
    (m, file) => {
      if (file) uploads.push({ idx: k, name: file.trim() });
      return `\u0000FIG${k++}\u0000`;
    },
  );
  return { text, count: k, uploads };
}

function wikiToMarkdown(s) {
  return s
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<math\s+display\s*=\s*["']?block["']?\s*>([\s\S]*?)<\/math>/gi, (_, m) => `\n$$${m.trim()}$$\n`)
    .replace(/<cmath>([\s\S]*?)<\/cmath>/gi, (_, m) => `\n$$${m.trim()}$$\n`)
    .replace(/<math>([\s\S]*?)<\/math>/gi, (_, m) => `$${m.trim()}$`)
    .replace(/<\/?(?:center|div|span|p|font|small|big)[^>]*>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?b>/gi, '**')
    .replace(/<\/?i>/gi, '*')
    .replace(/'''(.+?)'''/g, '**$1**')
    .replace(/''(.+?)''/g, '*$1*')
    .replace(/\[\[[^|\]]*\|([^\]]+)\]\]/g, '$1')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ── Answer choices ───────────────────────────────────────────────────────────

const MARK = /(?:\\(?:textbf|mathrm|text|mathbf|textrm|bf|rm)\s*\{\s*)?\(\s*([A-E])\s*\)(?:\s*\\?\s*\})?/g;

function balanceBraces(s) {
  let depth = 0;
  let out = '';
  for (const ch of s) {
    if (ch === '{') depth++;
    if (ch === '}') {
      if (depth === 0) continue; // drop stray closer
      depth--;
    }
    out += ch;
  }
  return out + '}'.repeat(depth);
}

function cleanChoice(s, hadMath) {
  let c = s
    .replace(/\\q?quad\b/g, ' ')
    .replace(/\\hspace\*?\{[^}]*\}/g, ' ')
    .replace(/\\(?:qquad|quad|,|;|:|!)/g, ' ')
    .replace(/\\\\/g, ' ')
    .replace(/\\ /g, ' ')
    .replace(/~/g, ' ')
    .replace(/\\text\{\s*\}/g, ' ')
    .replace(/\\mbox\{\s*\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  c = balanceBraces(c).trim();
  c = c.replace(/^\}+|\{+$/g, '').trim();
  if (!hadMath && c && !/^\\text/.test(c)) c = `\\text{${c}}`;
  return c;
}

/** Split a problem body into { q, choices } at the (A)…(E) block. */
function splitChoices(body) {
  // Find the last "(A)" that is followed by (B)…(E).
  const marks = [...body.matchAll(MARK)];
  let start = -1;
  for (let i = marks.length - 1; i >= 0; i--) {
    if (marks[i][1] !== 'A') continue;
    const letters = marks.slice(i).map((m) => m[1]).join('');
    if (/A.*B.*C.*D.*E/.test(letters)) { start = i; break; }
  }
  if (start < 0) return null;
  const aPos = marks[start].index;

  // Back up to the opening `$`/`$$` of the math span holding (A), if any.
  const before = body.slice(0, aPos);
  const dollars = (before.match(/\$/g) ?? []).length;
  let cut = aPos;
  if (dollars % 2 === 1) {
    cut = before.lastIndexOf('$');
    if (cut > 0 && before[cut - 1] === '$') cut--;
  }

  const block = body.slice(cut);
  const hadMath = block.includes('$');
  const flat = block.replace(/\$/g, ' ');
  const ms = [...flat.matchAll(MARK)].filter((m) => 'ABCDE'.includes(m[1]));
  // Keep the first A..E sequence in order.
  const seq = [];
  for (const m of ms) if (m[1] === 'ABCDE'[seq.length]) seq.push(m);
  if (seq.length !== 5) return null;

  const choices = seq.map((m, i) => {
    const from = m.index + m[0].length;
    const to = i < 4 ? seq[i + 1].index : flat.length;
    return cleanChoice(flat.slice(from, to), hadMath);
  });
  if (choices.some((c) => !c && !/\u0000FIG/.test(c))) return null;
  return { q: body.slice(0, cut).trim(), choices };
}

// ── Main ─────────────────────────────────────────────────────────────────────

const problems = [];
const problemsByTest = {};
const issues = [];
let tests = 0;

for (const id of readdirSync(srcRoot).sort()) {
  const dir = join(srcRoot, id);
  if (!existsSync(join(dir, 'manifest.json'))) continue;
  const manifest = JSON.parse(readFileSync(join(dir, 'manifest.json'), 'utf8'));
  const wiki = readFileSync(join(dir, 'problems.wiki'), 'utf8');
  const answerWiki = existsSync(join(dir, 'answers.wiki')) ? readFileSync(join(dir, 'answers.wiki'), 'utf8') : '';

  const answers = [...answerWiki.matchAll(/^\s*(?:#|\d+\s*[.)])\s*\(?\s*([A-E])\b/gm)].map((m) => m[1]);

  // Figures → copy to public/, map placeholder index → URL.
  const { text, count, uploads } = markFigures(stripTemplates(wiki.replace(/<!--[\s\S]*?-->/g, '')));
  const imgs = manifest.images ?? [];
  const figUrl = {};
  const asyImgs = imgs.filter((x) => x.alt === '[asy]');
  const upImgs = imgs.filter((x) => x.alt !== '[asy]');
  let asyK = 0;
  for (let k = 0; k < count; k++) {
    const up = uploads.find((u) => u.idx === k);
    let img;
    if (count === imgs.length) img = imgs[k];
    else if (up) img = upImgs.find((x) => decodeURIComponent(x.src).replace(/ /g, '_').endsWith(up.name.replace(/ /g, '_')));
    else img = asyImgs[asyK++];
    if (!img?.file || !existsSync(join(dir, img.file))) continue;
    const name = `${id}-${String(k + 1).padStart(2, '0')}${extname(img.file)}`;
    copyFileSync(join(dir, img.file), join(figDir, name));
    figUrl[k] = `/amc/fig/${name}`;
  }
  if (count !== imgs.length) issues.push(`${id}: ${count} figures in wikitext but ${imgs.length} images downloaded (matched by order/name)`);

  const sections = text.split(/^==+\s*(.*?)\s*==+\s*$/m);
  const testProblems = [];
  for (let i = 1; i < sections.length; i += 2) {
    const m = sections[i].match(/^Problem\s+(\d+)$/i);
    if (!m) continue;
    const n = Number(m[1]);
    let body = sections[i + 1]
      .split('\n')
      .filter((l) => !/^\s*\[\[[^\]]*\|\s*Solution\s*\]\]\s*$/i.test(l) && !/^\s*Solution\s*$/i.test(l))
      .join('\n');
    body = wikiToMarkdown(body);
    const split = splitChoices(body);
    const a = answers[n - 1];
    if (!split || !a) {
      issues.push(`${id} #${n}: ${!split ? 'could not find choices (A)–(E)' : 'no answer in key'}`);
      continue;
    }
    const fig = (s) => s.replace(/\u0000FIG(\d+)\u0000/g, (_, k) => (figUrl[k] ? `\n\n![figure](${figUrl[k]})\n\n` : ''));
    const choiceHasFig = split.choices.some((c) => /\u0000FIG/.test(c));
    const q = fig(split.q).replace(/\n{3,}/g, '\n\n').trim();
    const p = {
      id: `${id}-${String(n).padStart(2, '0')}`,
      test: id,
      n,
      q: choiceHasFig ? `${q}\n\n${fig(split.choices.map((c, j) => `**(${'ABCDE'[j]})** ${c}`).join('\n\n'))}` : q,
      choices: choiceHasFig ? ['(A)', '(B)', '(C)', '(D)', '(E)'].map((x) => `\\text{${x}}`) : split.choices,
      a,
    };
    testProblems.push(p);
  }
  if (!testProblems.length) {
    issues.push(`${id}: no problems parsed`);
    continue;
  }
  tests++;
  problems.push(...testProblems);
  problemsByTest[id] = testProblems.length;
  writeFileSync(
    join(outDir, `${id}.json`),
    JSON.stringify({ id, title: manifest.title, contest: manifest.contest, year: manifest.year, problems: testProblems }),
  );
}

console.log(`Built ${problems.length} problems from ${tests} tests → src/data/amc/bank/`);
const short = Object.entries(problemsByTest).filter(([, n]) => n < 25);
if (short.length) console.log(`Tests with fewer than 25 problems: ${short.map(([t, n]) => `${t} (${n})`).join(', ')}`);
if (issues.length) {
  console.log(`\n${issues.length} issue(s):`);
  for (const s of issues.slice(0, 200)) console.log(`  - ${s}`);
  if (issues.length > 200) console.log(`  … and ${issues.length - 200} more`);
}
