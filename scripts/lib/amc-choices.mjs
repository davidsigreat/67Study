// Splits an AMC problem (Markdown with $…$ math) into the statement and its
// five answer choices. Shared by build-amc-bank.mjs and import-amc-trivial.mjs.

// ── Answer choices ───────────────────────────────────────────────────────────

// Choice markers, in the forms the AoPS wiki uses:
//   \textbf{(A) }  \mathrm{(A) \ }  (A)  (\mathrm {A})  (\textbf{A})  \textbf{A}
const MARK = /\(\s*\\(?:mathrm|textbf|text|mathbf|textrm|bf|rm)\s*\{?\s*([A-E])\s*\}?\s*\)|(?:\\(?:textbf|mathrm|text|mathbf|textrm|bf|rm)\s*\{\s*)?\(\s*([A-Ea-e])\s*\)(?:\s*\\?\s*\})?|\\(?:textbf|mathbf)\s*\{\s*([A-E])\s*\}/g;
const letterOf = (m) => (m[1] ?? m[2] ?? m[3]).toUpperCase();

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
export function splitChoices(body) {
  // Find the last "(A)" that is followed by (B)…(E).
  const marks = [...body.matchAll(MARK)];
  let start = -1;
  for (let i = marks.length - 1; i >= 0; i--) {
    if (letterOf(marks[i]) !== 'A') continue;
    const letters = marks.slice(i).map(letterOf).join('');
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
  const ms = [...flat.matchAll(MARK)];
  // Keep the first A..E sequence in order.
  const seq = [];
  for (const m of ms) if (letterOf(m) === 'ABCDE'[seq.length]) seq.push(m);
  if (seq.length !== 5) return null;

  const choices = seq.map((m, i) => {
    const from = m.index + m[0].length;
    const to = i < 4 ? seq[i + 1].index : flat.length;
    return cleanChoice(flat.slice(from, to), hadMath);
  });
  if (choices.some((c) => !c && !/\u0000FIG/.test(c))) return null;
  return { q: body.slice(0, cut).trim(), choices };
}
