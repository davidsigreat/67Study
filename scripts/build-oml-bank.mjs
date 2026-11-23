#!/usr/bin/env node
// Converts content-src/oml/<eventId>.txt → src/data/mathteam/bank/<eventId>.json
//
// Source format (one file per OML event):
//
//   @ Jan 2026                     ← test date as printed on the paper
//   A: Problem statement in Markdown with $LaTeX$.
//      Continuation lines are indented (or simply follow) until the next marker.
//   = \frac{3}{2}                  ← official answer, LaTeX without $
//   ~ 1.5 ;; \frac32               ← optional alternate accepted answers, separated by ;;
//   ! Accept either order.         ← optional grading note
//   & /oml/fig/m4e2-2025-01-C.png  ← optional figure
//   B: ...
//
// Lines starting with # are comments.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'content-src/oml');
const outDir = join(root, 'src/data/mathteam/bank');
mkdirSync(outDir, { recursive: true });

const MONTHS = { jan: '01', feb: '02', mar: '03', apr: '04', may: '05', sep: '09', sept: '09', oct: '10', nov: '11', dec: '12' };

let total = 0;
for (const file of readdirSync(srcDir).filter((f) => f.endsWith('.txt')).sort()) {
  const event = basename(file, '.txt');
  const lines = readFileSync(join(srcDir, file), 'utf8').split(/\r?\n/);
  const problems = [];
  let date = null;
  let cur = null;
  let field = null;
  const fail = (n, msg) => { throw new Error(`${file}:${n + 1}: ${msg}`); };

  const finish = (n) => {
    if (!cur) return;
    if (!cur.a) fail(n, `problem ${cur.id} has no answer (=)`);
    cur.q = cur.q.trim();
    problems.push(cur);
    cur = null;
  };

  lines.forEach((line, n) => {
    if (/^\s*#/.test(line)) return;
    let m;
    if ((m = line.match(/^@\s*(\w+)\.?\s+(\d{4})\s*$/))) {
      finish(n);
      const mm = MONTHS[m[1].toLowerCase()];
      if (!mm) fail(n, `unknown month ${m[1]}`);
      date = { label: `${m[1].slice(0, 3)} ${m[2]}`, key: `${m[2]}-${mm}` };
    } else if ((m = line.match(/^([ABC]):\s?(.*)$/))) {
      finish(n);
      if (!date) fail(n, 'problem before any @ date');
      cur = { id: `${event}-${date.key}-${m[1]}`, event, date: date.label, level: m[1], q: m[2], a: '' };
      field = 'q';
    } else if ((m = line.match(/^=\s?(.*)$/))) {
      if (!cur) fail(n, 'answer outside a problem');
      cur.a = m[1].trim();
      field = null;
    } else if ((m = line.match(/^~\s?(.*)$/))) {
      if (!cur) fail(n, 'alternate outside a problem');
      cur.alt = m[1].split(';;').map((s) => s.trim()).filter(Boolean);
    } else if ((m = line.match(/^!\s?(.*)$/))) {
      if (!cur) fail(n, 'note outside a problem');
      cur.note = m[1].trim();
    } else if ((m = line.match(/^&\s?(.*)$/))) {
      if (!cur) fail(n, 'figure outside a problem');
      cur.fig = m[1].trim();
    } else if (field === 'q' && cur) {
      cur.q += '\n' + line.replace(/^ {2,}/, '');
    } else if (line.trim()) {
      fail(n, `unexpected line: ${line}`);
    }
  });
  finish(lines.length);

  const ids = new Set();
  for (const p of problems) {
    if (ids.has(p.id)) throw new Error(`${file}: duplicate id ${p.id}`);
    ids.add(p.id);
  }
  writeFileSync(join(outDir, `${event}.json`), JSON.stringify(problems, null, 1) + '\n');
  console.log(`${event}: ${problems.length} problems`);
  total += problems.length;
}
console.log(`total: ${total}`);
