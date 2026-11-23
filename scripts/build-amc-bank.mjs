#!/usr/bin/env node
// Converts content-src/amc/<testId>/ (downloaded by scripts/fetch-amc.mjs)
// → src/data/amc/bank/<testId>.json + public/amc/fig/<testId>-NN.png
//
//   npm run amc:build                 # all tests
//   AMC_SRC=/in AMC_OUT=/out npm run amc:build   # other folders (testing)
//
// Sources (both optional):
//   content-src/amc-saved/*.html  pages saved by hand in a browser (main source)
//   content-src/amc/<testId>/     pages downloaded by scripts/fetch-amc.mjs
//
// Never hand-edit the JSON; fix the parser or the source instead.
// Problems that can't be parsed cleanly (missing choices/answer) are skipped
// and listed at the end.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, copyFileSync, rmSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseHtml, NodeType } from 'node-html-parser';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcRoot = process.env.AMC_SRC ?? join(root, 'content-src/amc');
// Pages saved by hand from a browser ("Webpage, Complete"): see content-src/amc-saved/README.md
const savedRoot = process.env.AMC_SAVED ?? join(root, 'content-src/amc-saved');
const outRoot = process.env.AMC_OUT ?? root; // AMC_OUT: write somewhere else (testing)
const outDir = join(outRoot, 'src/data/amc/bank');
const figDir = join(outRoot, 'public/amc/fig');

if (!existsSync(srcRoot) && !existsSync(savedRoot)) {
  console.log('No AMC sources yet (content-src/amc-saved/ or content-src/amc/).');
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
  // Unescaped `$` positions (an escaped \$ is a literal dollar sign in the text).
  const dollarAt = [...before.matchAll(/(?<!\\)\$/g)].map((m) => m.index);
  let cut = aPos;
  if (dollarAt.length % 2 === 1) {
    cut = dollarAt[dollarAt.length - 1];
    if (cut > 0 && before[cut - 1] === '$') cut--;
  }

  const block = body.slice(cut);
  const hadMath = /(?<!\\)\$/.test(block);
  const flat = block.replace(/(?<!\\)\$/g, ' ').replace(/\\\$/g, '\\$');
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

// ── Saved browser pages → Markdown ───────────────────────────────────────────

/** "2023 AMC 12A Problems" / "2021 Fall AMC 10B Answer Key" → test info. */
function parseTitle(title) {
  const m = title.match(/(\d{4})\s+(Fall\s+)?AMC\s*(8|10|12)\s*([AB])?\s+(Problems|Answer Key)/i);
  if (!m) return null;
  const [, year, fall, num, ab, kind] = m;
  const contest = `amc${num}`;
  const id = `${year}-${contest}${fall ? 'f' : ''}${(ab ?? '').toLowerCase()}`;
  const label = `${year} ${fall ? 'Fall ' : ''}AMC ${num}${ab ?? ''}`;
  return { id, contest, year: Number(year), label, kind: /key/i.test(kind) ? 'key' : 'problems' };
}

const escapeText = (t) =>
  t
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/\\\$/g, '$')
    .replace(/([$*_`\\])/g, '\\$1');

/** LaTeX from an AoPS math image's alt text, as inline or display Markdown math. */
function altToMath(alt, display) {
  let t = alt.trim();
  let block = display;
  if (/^\\\[[\s\S]*\\\]$/.test(t)) { t = t.slice(2, -2); block = true; }
  else if (/^\$\$[\s\S]*\$\$$/.test(t)) { t = t.slice(2, -2); block = true; }
  else if (/^\$[\s\S]*\$$/.test(t)) t = t.slice(1, -1);
  else if (/^\\begin\{(?:align|equation|eqnarray|gather)\*?\}/.test(t)) {
    t = t.replace(/\\(begin|end)\{(?:eqnarray|equation)(\*?)\}/g, '\\$1{aligned}').replace(/\\(begin|end)\{(?:align|gather)\*?\}/g, '\\$1{aligned}');
    block = true;
  }
  t = t.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').trim();
  return block ? `\n\n$$${t}$$\n\n` : `$${t}$`;
}

/** Walk the rendered wiki HTML and produce Markdown; figures become placeholders. */
function htmlToMarkdown(node, figs) {
  let out = '';
  for (const ch of node.childNodes) {
    if (ch.nodeType === NodeType.TEXT_NODE) { out += escapeText(ch.rawText.replace(/\s+/g, ' ')); continue; }
    if (ch.nodeType !== NodeType.ELEMENT_NODE) continue;
    const tag = ch.rawTagName?.toLowerCase();
    if (['script', 'style', 'sup', 'noscript'].includes(tag)) continue;
    if (ch.classList?.contains('mw-editsection') || ch.classList?.contains('toc')) continue;
    if (tag === 'img') {
      const alt = ch.getAttribute('alt') ?? '';
      const cls = ch.getAttribute('class') ?? '';
      if (/latex/.test(cls) && !alt.trim().startsWith('[asy]')) {
        out += altToMath(alt, /latexcenter|latexdisplay/.test(cls));
      } else {
        figs.push(ch.getAttribute('src') ?? '');
        out += `\u0000FIG${figs.length - 1}\u0000`;
      }
      continue;
    }
    const inner = htmlToMarkdown(ch, figs);
    if (tag === 'br') out += '\n';
    else if (tag === 'p' || tag === 'center' || tag === 'div' || tag === 'blockquote' || tag === 'pre') out += `\n\n${inner.trim()}\n\n`;
    else if (tag === 'b' || tag === 'strong') out += inner.trim() ? `**${inner.trim()}** ` : '';
    else if (tag === 'i' || tag === 'em') out += inner.trim() ? `*${inner.trim()}* ` : '';
    else if (tag === 'li') out += `\n- ${inner.trim()}`;
    else if (tag === 'ul' || tag === 'ol') out += `\n${inner}\n\n`;
    else if (tag === 'tr') out += `\n\n${inner.trim()}`;
    else if (tag === 'td' || tag === 'th') out += ` ${inner.trim()} `;
    else out += inner;
  }
  return out;
}

const tidy = (md) => md.replace(/[ \t]+\n/g, '\n').replace(/\n[ \t]+/g, '\n').replace(/[ \t]{2,}/g, ' ').replace(/\n{3,}/g, '\n\n').trim();

/** Problem sections from a saved "… Problems" page: [{ n, body, figs }]. */
function problemsFromHtml(html) {
  const doc = parseHtml(html, { comment: false });
  const content = doc.querySelector('.mw-parser-output') ?? doc.querySelector('#mw-content-text') ?? doc;
  const out = [];
  let cur = null;
  for (const el of content.childNodes) {
    const tag = el.rawTagName?.toLowerCase();
    if (tag === 'h2' || tag === 'h3') {
      const title = el.text.replace(/\[edit\]/gi, '').trim();
      const m = title.match(/^Problem\s+(\d+)$/i);
      cur = m ? { n: Number(m[1]), nodes: [] } : null;
      if (cur) out.push(cur);
      continue;
    }
    if (cur) cur.nodes.push(el);
  }
  return out.map(({ n, nodes }) => {
    const figs = [];
    const wrapper = parseHtml('<div></div>').firstChild;
    for (const x of nodes) {
      // Drop the "Solution" link paragraph.
      if (x.rawTagName && /^\s*Solutions?\s*$/i.test(x.text)) continue;
      wrapper.appendChild(x);
    }
    return { n, body: tidy(htmlToMarkdown(wrapper, figs)), figs };
  });
}

function answersFromHtml(html) {
  const doc = parseHtml(html);
  const content = doc.querySelector('.mw-parser-output') ?? doc;
  const ol = content.querySelector('ol');
  const items = ol ? ol.querySelectorAll('li').map((li) => li.text.trim()) : [];
  const letters = items.map((t) => t.match(/^\(?([A-E])\)?\b/)?.[1]).filter(Boolean);
  if (letters.length) return letters;
  // Fallback: "1. C" lines anywhere in the text.
  return [...content.text.matchAll(/^\s*\d+\s*[.)]\s*\(?([A-E])\b/gm)].map((m) => m[1]);
}

// ── Output ───────────────────────────────────────────────────────────────────

const problems = [];
const problemsByTest = {};
const issues = [];
const built = new Set();
let tests = 0;

/** Finish one problem body (placeholders → figure URLs) into a bank entry. */
function makeProblem(id, n, body, a, figUrl) {
  const split = splitChoices(body);
  if (!split || !a) {
    issues.push(`${id} #${n}: ${!split ? 'could not find choices (A)–(E)' : 'no answer in key'}`);
    return null;
  }
  const fig = (s) => s.replace(/\u0000FIG(\d+)\u0000/g, (_, k) => (figUrl[k] ? `\n\n![figure](${figUrl[k]})\n\n` : ''));
  const choiceHasFig = split.choices.some((c) => /\u0000FIG/.test(c));
  const q = fig(split.q).replace(/\n{3,}/g, '\n\n').trim();
  return {
    id: `${id}-${String(n).padStart(2, '0')}`,
    test: id,
    n,
    q: choiceHasFig ? `${q}\n\n${fig(split.choices.map((c, j) => `**(${'ABCDE'[j]})** ${c}`).join('\n\n'))}` : q,
    choices: choiceHasFig ? ['(A)', '(B)', '(C)', '(D)', '(E)'].map((x) => `\\text{${x}}`) : split.choices,
    a,
  };
}

function writeTest(id, title, contest, year, testProblems) {
  if (!testProblems.length) {
    issues.push(`${id}: no problems parsed`);
    return;
  }
  tests++;
  built.add(id);
  problems.push(...testProblems);
  problemsByTest[id] = testProblems.length;
  writeFileSync(join(outDir, `${id}.json`), JSON.stringify({ id, title, contest, year, problems: testProblems }));
}

// 1) Pages saved by hand.
if (existsSync(savedRoot)) {
  const pages = {};
  for (const file of readdirSync(savedRoot).filter((f) => /\.html?$/i.test(f))) {
    const html = readFileSync(join(savedRoot, file), 'utf8');
    const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? file;
    const info = parseTitle(title) ?? parseTitle(file);
    if (!info) {
      issues.push(`${file}: not an AMC Problems / Answer Key page (title "${title.trim()}")`);
      continue;
    }
    (pages[info.id] ??= { info })[info.kind] = { file, html };
  }
  for (const [id, { info, problems: pp, key }] of Object.entries(pages).sort()) {
    if (!pp) { issues.push(`${info.label}: answer key saved but not the Problems page`); continue; }
    if (!key) { issues.push(`${info.label}: Problems page saved but not the Answer Key page`); continue; }
    const answers = answersFromHtml(key.html);
    const sections = problemsFromHtml(pp.html);
    const testProblems = [];
    let figN = 0;
    for (const { n, body, figs } of sections) {
      const figUrl = {};
      figs.forEach((src, k) => {
        if (!src || /^https?:/i.test(src)) return; // not saved locally
        const path = join(savedRoot, decodeURIComponent(src.replace(/^\.\//, '')));
        if (!existsSync(path)) return;
        const name = `${id}-${String(++figN).padStart(2, '0')}${extname(path) || '.png'}`;
        copyFileSync(path, join(figDir, name));
        figUrl[k] = `/amc/fig/${name}`;
      });
      const p = makeProblem(id, n, body, answers[n - 1], figUrl);
      if (p) testProblems.push(p);
    }
    if (sections.length && answers.length !== 25) issues.push(`${info.label}: answer key has ${answers.length} answers`);
    writeTest(id, info.label, info.contest, info.year, testProblems);
  }
}

// 2) Pages downloaded by fetch-amc.mjs (skipped for tests already built from saved pages).
for (const id of existsSync(srcRoot) ? readdirSync(srcRoot).sort() : []) {
  const dir = join(srcRoot, id);
  if (built.has(id) || !existsSync(join(dir, 'manifest.json'))) continue;
  const manifest = JSON.parse(readFileSync(join(dir, 'manifest.json'), 'utf8'));
  const wiki = readFileSync(join(dir, 'problems.wiki'), 'utf8');
  const answerWiki = existsSync(join(dir, 'answers.wiki')) ? readFileSync(join(dir, 'answers.wiki'), 'utf8') : '';
  const answers = [...answerWiki.matchAll(/^\s*(?:#|\d+\s*[.)])\s*\(?\s*([A-E])\b/gm)].map((m) => m[1]);

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
    const body = wikiToMarkdown(
      sections[i + 1]
        .split('\n')
        .filter((l) => !/^\s*\[\[[^\]]*\|\s*Solution\s*\]\]\s*$/i.test(l) && !/^\s*Solution\s*$/i.test(l))
        .join('\n'),
    );
    const p = makeProblem(id, n, body, answers[n - 1], figUrl);
    if (p) testProblems.push(p);
  }
  writeTest(id, manifest.title, manifest.contest, manifest.year, testProblems);
}

console.log(`Built ${problems.length} problems from ${tests} tests → src/data/amc/bank/`);
const short = Object.entries(problemsByTest).filter(([, n]) => n < 25);
if (short.length) console.log(`Tests with fewer than 25 problems: ${short.map(([t, n]) => `${t} (${n})`).join(', ')}`);
if (issues.length) {
  console.log(`\n${issues.length} issue(s):`);
  for (const s of issues.slice(0, 200)) console.log(`  - ${s}`);
  if (issues.length > 200) console.log(`  … and ${issues.length - 200} more`);
}
