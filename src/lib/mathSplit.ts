// Finds $…$, $$…$$, \(…\) and \[…\] math inside plain text. Shared by the KaTeX
// text renderer (components/MathText.tsx) and the search index/snippets, so they
// always agree on where formulas start and end.
//
// Dollar amounts are left alone: like Pandoc, an opening `$` must be followed by
// a non-space and a closing `$` must follow a non-space and not be followed by a
// digit, so "$5 and $10" stays text while "$x^2$" becomes math. `\$` is a literal $.

/** `start`/`end` are offsets in the original string (end exclusive). */
export type MathPiece =
  | { kind: 'text'; value: string; start: number; end: number }
  | { kind: 'math'; value: string; display: boolean; start: number; end: number };

export function splitMath(text: string): MathPiece[] {
  const out: MathPiece[] = [];
  let buf = '';
  let bufStart = 0;
  const flush = (at: number) => {
    if (buf) out.push({ kind: 'text', value: buf, start: bufStart, end: at });
    buf = '';
  };
  const math = (value: string, display: boolean, start: number, end: number) => {
    flush(start);
    out.push({ kind: 'math', value, display, start, end });
    bufStart = end;
  };

  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (ch === '\\' && text[i + 1] === '$') { buf += '$'; i += 2; continue; }
    if (ch === '\\' && (text[i + 1] === '(' || text[i + 1] === '[')) {
      const close = text[i + 1] === '(' ? '\\)' : '\\]';
      const end = text.indexOf(close, i + 2);
      if (end > i + 2) { math(text.slice(i + 2, end), close === '\\]', i, end + 2); i = end + 2; continue; }
    }
    if (ch === '$' && text[i + 1] === '$') {
      const end = text.indexOf('$$', i + 2);
      if (end > i + 2) { math(text.slice(i + 2, end), true, i, end + 2); i = end + 2; continue; }
    }
    if (ch === '$' && text[i + 1] && !/\s/.test(text[i + 1])) {
      let j = i + 1;
      let end = -1;
      while (j < text.length) {
        if (text[j] === '\\') { j += 2; continue; }
        if (text[j] === '$') {
          if (!/\s/.test(text[j - 1]) && !/\d/.test(text[j + 1] ?? '')) end = j;
          break;
        }
        j++;
      }
      if (end > i + 1) { math(text.slice(i + 1, end), false, i, end + 1); i = end + 1; continue; }
    }
    buf += ch;
    i++;
  }
  flush(text.length);
  return out;
}

export function hasMath(text: string): boolean {
  return splitMath(text).some((p) => p.kind === 'math');
}
