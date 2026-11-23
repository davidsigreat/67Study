#!/usr/bin/env node
// Downloads past AMC 8 / 10 / 12 tests from the Art of Problem Solving wiki
// into content-src/amc/<testId>/ so `npm run amc:build` can turn them into
// the practice bank.
//
// Run this on your own computer (AoPS blocks cloud servers):
//
//   node scripts/fetch-amc.mjs                 # everything (≈150 tests, 15–30 min)
//   node scripts/fetch-amc.mjs --only amc10    # just one contest (amc8, amc10, amc12)
//   node scripts/fetch-amc.mjs --from 2015     # only tests from 2015 on
//   node scripts/fetch-amc.mjs --force         # re-download tests already saved
//
// It is resumable: tests already on disk are skipped, so you can stop it with
// Ctrl+C and run it again later. It waits between requests to be polite.
//
// For each test it saves:
//   (uses the wiki's MediaWiki API: api.php?action=parse)
//   problems.wiki   raw wikitext of "<Year> AMC 10A Problems" (text + LaTeX)
//   problems.html   rendered page (used only to find diagram images)
//   answers.wiki    raw wikitext of "<Year> AMC 10A Answer Key"
//   img/NN.png      diagrams ([asy] pictures and uploaded images), in page order
//   manifest.json   { title, images: [{ file, src, alt }] }
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outRoot = join(root, 'content-src/amc');
const API = 'https://artofproblemsolving.com/wiki/api.php';
const PAGE_DELAY_MS = 1500;
const IMG_DELAY_MS = 300;
// Honest identification, as the MediaWiki API etiquette asks.
const HEADERS = { 'User-Agent': '67Study-AMC-importer/1.0 (personal study app; one request every ~1.5 s)' };

// ── CLI ──────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const argVal = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const only = argVal('--only')?.split(',').map((s) => s.trim().toLowerCase());
const fromYear = Number(argVal('--from') ?? 0);
const force = args.includes('--force');
const thisYear = new Date().getFullYear();

// ── Test list ────────────────────────────────────────────────────────────────
/** @returns {{ id: string, title: string, contest: string, year: number }[]} */
function allTests() {
  const tests = [];
  const add = (contest, year, suffix, label) =>
    tests.push({
      id: `${year}-${contest}${suffix.toLowerCase().replace(/\s+/g, '')}`,
      title: `${year} ${label}`,
      contest,
      year,
    });

  // AMC 8: 1999 → now (no contest in 2021).
  for (let y = 1999; y <= thisYear; y++) if (y !== 2021) add('amc8', y, '', 'AMC 8');

  for (const [contest, label] of [['amc10', 'AMC 10'], ['amc12', 'AMC 12']]) {
    add(contest, 2000, '', label);
    add(contest, 2001, '', label);
    for (let y = 2002; y <= thisYear; y++) {
      add(contest, y, 'a', `${label}A`);
      add(contest, y, 'b', `${label}B`);
      if (y === 2021) {
        tests.push({ id: `2021-${contest}fa`, title: `2021 Fall ${label}A`, contest, year: 2021 });
        tests.push({ id: `2021-${contest}fb`, title: `2021 Fall ${label}B`, contest, year: 2021 });
      }
    }
  }
  return tests
    .filter((t) => !only || only.includes(t.contest))
    .filter((t) => t.year >= fromYear);
}

// ── HTTP helpers ─────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, { binary = false } = {}) {
  for (let attempt = 0; attempt < 5; attempt++) {
    let res;
    try {
      res = await fetch(url, { headers: HEADERS, redirect: 'follow' });
    } catch (e) {
      console.warn(`   network error (${e.message}), retrying…`);
      await sleep(5000 * (attempt + 1));
      continue;
    }
    if (res.status === 404) return null;
    if (res.status === 429 || res.status >= 500) {
      const wait = Number(res.headers.get('retry-after')) * 1000 || 10000 * (attempt + 1);
      console.warn(`   HTTP ${res.status}, waiting ${Math.round(wait / 1000)}s…`);
      await sleep(wait);
      continue;
    }
    if (res.status === 403) {
      console.error(`\nAoPS refused the request (HTTP 403): ${url}\nIt blocks automated downloads, so this script can't fetch from it. Nothing more was downloaded.`);
      process.exit(1);
    }
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return binary ? Buffer.from(await res.arrayBuffer()) : await res.text();
  }
  throw new Error(`Gave up on ${url}`);
}

/**
 * MediaWiki API: one call returns the page's wikitext and rendered HTML,
 * following redirects. Returns null if the page doesn't exist.
 */
async function getPage(title, { html = false } = {}) {
  const params = new URLSearchParams({
    action: 'parse',
    page: title,
    prop: html ? 'wikitext|text' : 'wikitext',
    redirects: '1',
    format: 'json',
    formatversion: '2',
    maxlag: '5',
  });
  const body = await get(`${API}?${params}`);
  if (!body) return null;
  let json;
  try {
    json = JSON.parse(body);
  } catch {
    console.error(`\nUnexpected (non-JSON) reply for "${title}". AoPS may be blocking the API. First 200 chars:\n${body.slice(0, 200)}`);
    process.exit(1);
  }
  if (json.error) {
    if (json.error.code === 'missingtitle') return null;
    if (json.error.code === 'maxlag') {
      console.warn('   wiki is busy (maxlag), waiting 30s…');
      await sleep(30000);
      return getPage(title, { html });
    }
    throw new Error(`API error for "${title}": ${json.error.code} ${json.error.info ?? ''}`);
  }
  return { wikitext: json.parse?.wikitext ?? '', html: json.parse?.text ?? '' };
}

/** Diagram images in rendered HTML, in page order: [asy] pictures + uploaded files. */
function findImages(html) {
  const out = [];
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = m[0];
    const src = tag.match(/\bsrc="([^"]+)"/i)?.[1];
    const alt = tag.match(/\balt="([^"]*)"/i)?.[1] ?? '';
    if (!src) continue;
    const isAsy = alt.trim().startsWith('[asy]');
    const isUpload = /wiki-images\.artofproblemsolving\.com/.test(src);
    if (!isAsy && !isUpload) continue; // skip ordinary math images
    out.push({ src: src.startsWith('//') ? `https:${src}` : src, alt: isAsy ? '[asy]' : alt });
  }
  return out;
}

// ── Main ─────────────────────────────────────────────────────────────────────
const tests = allTests();
console.log(`Fetching ${tests.length} tests into content-src/amc/ …\n`);
let saved = 0, skipped = 0, missing = 0;

for (const [i, t] of tests.entries()) {
  const dir = join(outRoot, t.id);
  const tag = `[${i + 1}/${tests.length}] ${t.title}`;
  if (!force && existsSync(join(dir, 'manifest.json'))) {
    skipped++;
    continue;
  }

  const page = await getPage(`${t.title} Problems`, { html: true });
  const problems = page?.wikitext;
  if (!problems) {
    console.log(`${tag}: not on the wiki, skipped`);
    missing++;
    await sleep(PAGE_DELAY_MS);
    continue;
  }
  await sleep(PAGE_DELAY_MS);
  const answers = (await getPage(`${t.title} Answer Key`))?.wikitext;
  await sleep(PAGE_DELAY_MS);
  const html = page.html;

  mkdirSync(join(dir, 'img'), { recursive: true });
  writeFileSync(join(dir, 'problems.wiki'), problems);
  writeFileSync(join(dir, 'answers.wiki'), answers ?? '');
  writeFileSync(join(dir, 'problems.html'), html);

  const images = [];
  for (const [k, img] of findImages(html).entries()) {
    const ext = (img.src.match(/\.(png|jpe?g|gif|svg)(?:\?|$)/i)?.[1] ?? 'png').toLowerCase();
    const file = `img/${String(k + 1).padStart(2, '0')}.${ext}`;
    const data = await get(img.src, { binary: true });
    if (data) writeFileSync(join(dir, file), data);
    images.push({ file: data ? file : null, src: img.src, alt: img.alt });
    await sleep(IMG_DELAY_MS);
  }

  writeFileSync(join(dir, 'manifest.json'), JSON.stringify({ title: t.title, contest: t.contest, year: t.year, images }, null, 2));
  console.log(`${tag}: saved (${images.length} image${images.length === 1 ? '' : 's'}${answers ? '' : ', NO answer key'})`);
  saved++;
}

console.log(`\nDone. ${saved} saved, ${skipped} already on disk, ${missing} not on the wiki.`);
if (saved || skipped) console.log('Next: commit content-src/amc and push (or run `npm run amc:build` to preview locally).');
