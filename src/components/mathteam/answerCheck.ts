// Answer checking for LaTeX answers.
//
// Strategy, in order:
//   1. Normalize both strings (spacing, \dfrac→\frac, \left/\right, "x =" prefixes, …) and compare.
//   2. Split comma/"or"-separated lists (and expand \pm) and compare as unordered multisets.
//   3. Evaluate each item as a complex-valued expression — numbers, \frac, \sqrt, \pi, i, ^, trig,
//      logs — substituting the same random values for any variables. Matching values ⇒ equivalent.
//
// Verdicts: 'exact' (same form), 'equivalent' (same value but a different form — OML graders may
// require simplest form, so the UI flags this), or 'wrong'.

export type Verdict = 'exact' | 'equivalent' | 'wrong';

// ── Normalization ────────────────────────────────────────────────────────────

export function normalize(raw: string): string {
  let s = raw.trim();
  s = s.replace(/^\$+|\$+$/g, '');
  s = s.replace(/\\(left|right|big|Big|bigg|Bigg)(?![a-zA-Z])/g, '');
  s = s.replace(/\\[dt]frac/g, '\\frac');
  s = s.replace(/\\(,|;|:|!|quad|qquad)|\\ /g, ' ');
  s = s.replace(/~/g, ' ');
  s = s.replace(/\\le(?![a-zA-Z])/g, '\\leq').replace(/\\ge(?![a-zA-Z])/g, '\\geq');
  s = s.replace(/≤/g, '\\leq').replace(/≥/g, '\\geq').replace(/≠/g, '\\neq').replace(/±/g, '\\pm');
  s = s.replace(/π/g, '\\pi').replace(/√/g, '\\sqrt').replace(/∞/g, '\\infty');
  s = s.replace(/−|–/g, '-');
  s = s.replace(/\\cdot|\\times|·|×/g, '*');
  // Degree marks become a \degree token (worth π/180); compareOne drops them when only one side has them.
  s = s.replace(/\^\s*\{?\s*\\circ\s*\}?|°|\\degree(?![a-zA-Z])/g, '\\degree ');
  s = s.replace(/\\\$/g, '');
  s = s.replace(/\\text\s*\{\s*(or|and)\s*\}/gi, ',');
  s = s.replace(/\\(text|mathrm|textrm|mathit|operatorname)\s*\{([^{}]*)\}/g, '$2');
  s = s.replace(/\s+(or|and)\s+/gi, ',');
  // r cis θ — "cis", "\operatorname{cis}", "\text{cis}" all become the \cis command.
  s = s.replace(/\\?cis(?![a-zA-Z])/g, '\\cis ');
  // Collapse whitespace, but keep one space where a command is followed by a letter (\pi x).
  s = s.replace(/(\\[a-zA-Z]+)\s+(?=[a-zA-Z])/g, '$1\u0001');
  s = s.replace(/\s+/g, '').replace(/\u0001/g, ' ');
  // Canonical braces: x^2 → x^{2}, \sqrt3 → \sqrt{3}, \frac12 → \frac{1}{2}
  s = s.replace(/\\frac(\w)(\w)/g, '\\frac{$1}{$2}');
  s = s.replace(/\\frac\{([^{}]*)\}(\w)/g, '\\frac{$1}{$2}');
  s = s.replace(/\\frac(\w)\{/g, '\\frac{$1}{');
  s = s.replace(/\\sqrt(\w)/g, '\\sqrt{$1}');
  s = s.replace(/([\^_])(\w)/g, '$1{$2}');
  s = s.replace(/\.$/, '').replace(/\\degree$/, '\\degree');
  // Leading "x=" / "f(x)=" style labels — but only when the rest is not itself an equation.
  const label = s.match(/^([a-zA-Z](\([a-zA-Z]\))?|[a-zA-Z]_\w)=(.*)$/);
  if (label && !/[=<>]|\\[lg]eq|\\neq/.test(label[3])) s = label[3];
  return s;
}

/** Split at commas / semicolons that are not nested inside (), [], {}. */
function splitTopLevel(s: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = '';
  for (const ch of s) {
    if ('([{'.includes(ch)) depth++;
    else if (')]}'.includes(ch)) depth--;
    if ((ch === ',' || ch === ';') && depth === 0) {
      out.push(cur);
      cur = '';
    } else cur += ch;
  }
  out.push(cur);
  return out.filter((p) => p.length > 0);
}

/** a\pm b → [a+b, a-b] (handles one or more \pm, \mp). */
function expandPm(s: string): string[] {
  const i = s.search(/\\(pm|mp)(?![a-zA-Z])/);
  if (i < 0) return [s];
  const isMp = s.slice(i, i + 3) === '\\mp';
  const head = s.slice(0, i);
  const tail = s.slice(i + 3);
  const clean = (x: string) => x.replace(/^\+/, '');
  return [
    ...expandPm(clean(head + (isMp ? '-' : '+') + tail)),
    ...expandPm(clean(head + (isMp ? '+' : '-') + tail)),
  ];
}

function items(norm: string): string[] {
  return splitTopLevel(norm).flatMap(expandPm);
}

// ── Complex arithmetic ───────────────────────────────────────────────────────

interface C { re: number; im: number }
const c = (re: number, im = 0): C => ({ re, im });
const add = (a: C, b: C): C => c(a.re + b.re, a.im + b.im);
const sub = (a: C, b: C): C => c(a.re - b.re, a.im - b.im);
const mul = (a: C, b: C): C => c(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
const div = (a: C, b: C): C => {
  const d = b.re * b.re + b.im * b.im;
  return c((a.re * b.re + a.im * b.im) / d, (a.im * b.re - a.re * b.im) / d);
};
const cabs = (a: C) => Math.hypot(a.re, a.im);
const cexp = (a: C): C => c(Math.exp(a.re) * Math.cos(a.im), Math.exp(a.re) * Math.sin(a.im));
const clog = (a: C): C => c(Math.log(cabs(a)), Math.atan2(a.im, a.re));
function cpow(a: C, b: C): C {
  if (b.im === 0 && Number.isInteger(b.re) && Math.abs(b.re) <= 64) {
    let r = c(1);
    for (let k = 0; k < Math.abs(b.re); k++) r = mul(r, a);
    return b.re < 0 ? div(c(1), r) : r;
  }
  if (a.im === 0 && b.im === 0) {
    // Real odd roots of negatives: (-8)^(1/3) = -2
    if (a.re < 0) {
      const inv = 1 / b.re;
      if (Number.isInteger(Math.round(inv)) && Math.abs(inv - Math.round(inv)) < 1e-12 && Math.round(inv) % 2 !== 0) {
        return c(-Math.pow(-a.re, b.re));
      }
    } else return c(Math.pow(a.re, b.re));
  }
  if (cabs(a) === 0) return c(0);
  return cexp(mul(b, clog(a)));
}
const csqrt = (a: C): C => (a.im === 0 && a.re >= 0 ? c(Math.sqrt(a.re)) : cpow(a, c(0.5)));
const real = (f: (x: number) => number) => (a: C): C => {
  if (Math.abs(a.im) > 1e-12) throw new Error('complex arg');
  return c(f(a.re));
};

const FUNCS: Record<string, (a: C) => C> = {
  sin: real(Math.sin),
  cos: real(Math.cos),
  tan: real(Math.tan),
  sec: real((x) => 1 / Math.cos(x)),
  csc: real((x) => 1 / Math.sin(x)),
  cot: real((x) => 1 / Math.tan(x)),
  arcsin: real(Math.asin),
  arccos: real(Math.acos),
  arctan: real(Math.atan),
  ln: clog,
  log: (a) => div(clog(a), c(Math.LN10)),
  exp: cexp,
  cis: (a: C) => {
    if (Math.abs(a.im) > 1e-12) throw new Error('complex arg');
    return c(Math.cos(a.re), Math.sin(a.re));
  },
};

const GREEK = new Set(['theta', 'alpha', 'beta', 'gamma', 'phi', 'varphi', 'omega', 'lambda', 'mu', 'rho', 'sigma', 'tau', 'vartheta']);

// ── Tokenizer + recursive-descent parser over normalized LaTeX ───────────────

type Tok = { t: 'num'; v: number } | { t: 'id'; v: string } | { t: 'cmd'; v: string } | { t: 'op'; v: string };

function tokenize(s: string): Tok[] {
  const toks: Tok[] = [];
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (ch === ' ') { i++; continue; }
    if (/[0-9.]/.test(ch)) {
      let j = i;
      while (j < s.length && /[0-9.]/.test(s[j])) j++;
      const v = Number(s.slice(i, j));
      if (Number.isNaN(v)) throw new Error('bad number');
      toks.push({ t: 'num', v });
      i = j;
    } else if (ch === '\\') {
      let j = i + 1;
      while (j < s.length && /[a-zA-Z]/.test(s[j])) j++;
      if (j === i + 1) throw new Error('bad command');
      const name = s.slice(i + 1, j);
      toks.push(GREEK.has(name) ? { t: 'id', v: name } : { t: 'cmd', v: name });
      i = j;
    } else if (/[a-zA-Z]/.test(ch)) {
      toks.push({ t: 'id', v: ch });
      i++;
    } else if ('+-*/^_(){}[]|!'.includes(ch)) {
      toks.push({ t: 'op', v: ch });
      i++;
    } else throw new Error(`unexpected ${ch}`);
  }
  return toks;
}

class Parser {
  private p = 0;
  constructor(private toks: Tok[], private vars: Record<string, C>) {}

  parse(): C {
    const v = this.expr();
    if (this.p !== this.toks.length) throw new Error('trailing input');
    return v;
  }

  private peek() { return this.toks[this.p]; }
  private isOp(v: string) { const t = this.peek(); return !!t && t.t === 'op' && t.v === v; }
  private expect(v: string) {
    if (!this.isOp(v)) throw new Error(`expected ${v}`);
    this.p++;
  }

  private expr(): C {
    let v = this.term();
    while (this.isOp('+') || this.isOp('-')) {
      const op = (this.toks[this.p++] as { v: string }).v;
      const r = this.term();
      v = op === '+' ? add(v, r) : sub(v, r);
    }
    return v;
  }

  private term(): C {
    let v = this.unary();
    for (;;) {
      if (this.isOp('*')) { this.p++; v = mul(v, this.unary()); }
      else if (this.isOp('/')) { this.p++; v = div(v, this.unary()); }
      else if (this.startsFactor()) v = mul(v, this.power()); // implicit multiplication
      else return v;
    }
  }

  private unary(): C {
    if (this.isOp('-')) { this.p++; return mul(c(-1), this.unary()); }
    if (this.isOp('+')) { this.p++; return this.unary(); }
    return this.power();
  }

  private startsFactor(): boolean {
    const t = this.peek();
    if (!t) return false;
    if (t.t === 'num' || t.t === 'id' || t.t === 'cmd') return true;
    return t.t === 'op' && (t.v === '(' || t.v === '[' || t.v === '{' || t.v === '|');
  }

  private power(): C {
    let base = this.postfix();
    if (this.isOp('^')) {
      this.p++;
      const exp = this.isOp('-') ? (this.p++, mul(c(-1), this.postfix())) : this.postfix();
      base = cpow(base, exp);
    }
    return base;
  }

  private postfix(): C {
    let v = this.atom();
    while (this.isOp('!')) {
      this.p++;
      if (v.im !== 0 || v.re < 0 || !Number.isInteger(v.re) || v.re > 170) throw new Error('bad factorial');
      let f = 1;
      for (let k = 2; k <= v.re; k++) f *= k;
      v = c(f);
    }
    return v;
  }

  private group(): C {
    this.expect('{');
    const v = this.expr();
    this.expect('}');
    return v;
  }

  private atom(): C {
    const t = this.toks[this.p++];
    if (!t) throw new Error('unexpected end');
    if (t.t === 'num') return c(t.v);
    if (t.t === 'id') {
      if (t.v === 'i') return c(0, 1);
      if (t.v === 'e' && !('e' in this.vars)) return c(Math.E);
      const v = this.vars[t.v];
      if (!v) throw new Error(`unknown var ${t.v}`);
      return v;
    }
    if (t.t === 'op') {
      if (t.v === '(' || t.v === '[') {
        const v = this.expr();
        this.expect(t.v === '(' ? ')' : ']');
        return v;
      }
      if (t.v === '{') { this.p--; return this.group(); }
      if (t.v === '|') {
        const v = this.expr();
        this.expect('|');
        return c(cabs(v));
      }
      throw new Error(`unexpected ${t.v}`);
    }
    // Commands
    switch (t.v) {
      case 'pi': return c(Math.PI);
      case 'degree': return c(Math.PI / 180);
      case 'infty': throw new Error('infinity');
      case 'frac': {
        const n = this.isOp('{') ? this.group() : this.atom();
        const d = this.isOp('{') ? this.group() : this.atom();
        return div(n, d);
      }
      case 'sqrt': {
        if (this.isOp('[')) {
          this.p++;
          const n = this.expr();
          this.expect(']');
          const r = this.isOp('{') ? this.group() : this.atom();
          return cpow(r, div(c(1), n));
        }
        return csqrt(this.isOp('{') ? this.group() : this.atom());
      }
      case 'log': {
        if (this.isOp('_')) {
          this.p++;
          const b = this.isOp('{') ? this.group() : this.atom();
          const a = this.fnArg();
          return div(clog(a), clog(b));
        }
        return FUNCS.log(this.fnArg());
      }
      case 'operatorname':
        throw new Error('operatorname');
      default: {
        const f = FUNCS[t.v];
        if (!f) throw new Error(`unknown command ${t.v}`);
        // sin^2 x
        if (this.isOp('^')) {
          this.p++;
          const e = this.isOp('{') ? this.group() : this.atom();
          return cpow(f(this.fnArg()), e);
        }
        return f(this.fnArg());
      }
    }
  }

  /** Function argument: a parenthesized group, braces, or a single power term (sin 2x → sin(2x)). */
  private fnArg(): C {
    if (this.isOp('(') || this.isOp('{')) return this.power();
    let v = this.power();
    const more = () => {
      const t = this.peek();
      return !!t && (t.t === 'num' || t.t === 'id' || (t.t === 'cmd' && (t.v === 'degree' || t.v === 'pi')));
    };
    while (more()) v = mul(v, this.power());
    return v;
  }
}

function variablesIn(s: string): string[] {
  const greek = (s.match(/\\[a-zA-Z]+/g) ?? []).map((g) => g.slice(1)).filter((g) => GREEK.has(g));
  const stripped = s.replace(/\\[a-zA-Z]+/g, ' ');
  const latin = (stripped.match(/[a-zA-Z]/g) ?? []).filter((v) => v !== 'i' && v !== 'e');
  return Array.from(new Set([...latin, ...greek]));
}

export function evaluate(norm: string, vars: Record<string, C> = {}): C | null {
  try {
    const v = new Parser(tokenize(norm), vars).parse();
    if (!Number.isFinite(v.re) || !Number.isFinite(v.im)) return null;
    return v;
  } catch {
    return null;
  }
}

function close(a: C, b: C): boolean {
  const scale = Math.max(1, cabs(a), cabs(b));
  return cabs(sub(a, b)) <= 1e-7 * scale;
}

// Fixed pseudo-random sample points so results are deterministic.
const SAMPLES = [0.7368, 1.4142, -0.5813, 2.2361, 0.3183];

function sameValue(a: string, b: string): boolean {
  // Relations (=, <, ≤ …) and set notation are compared textually only.
  if (/[=<>]|\\(leq|geq|neq|in|cup|cap|emptyset|varnothing)|\\\{/.test(a + b)) return false;
  const vars = Array.from(new Set([...variablesIn(a), ...variablesIn(b)]));
  if (vars.length > 4) return false;
  const rounds = vars.length === 0 ? 1 : 3;
  for (let r = 0; r < rounds; r++) {
    const env: Record<string, C> = {};
    vars.forEach((v, k) => { env[v] = c(SAMPLES[(r + k) % SAMPLES.length] + r * 0.37); });
    const va = evaluate(a, env);
    const vb = evaluate(b, env);
    if (!va || !vb || !close(va, vb)) return false;
  }
  return true;
}

const REL = /(\\leq|\\geq|\\neq|<|>|=)/;
const FLIP: Record<string, string> = { '<': '>', '>': '<', '\\leq': '\\geq', '\\geq': '\\leq', '=': '=', '\\neq': '\\neq' };

/** Inequality / equation chains: a<x\leq b. Compares operators exactly and sides by value. */
function sameRelation(a: string, b: string): Verdict | null {
  const pa = a.split(REL).map((t) => t.trim());
  const pb = b.split(REL).map((t) => t.trim());
  if (pa.length === 1 && pb.length === 1) return null;
  if (pa.length !== pb.length) return 'wrong';
  const flipped = pb.slice().reverse().map((t, k) => (k % 2 === 1 ? FLIP[t] : t));
  let best: Verdict = 'wrong';
  for (const cand of [pb, flipped]) {
    let v: Verdict = 'exact';
    for (let k = 0; k < pa.length && v !== 'wrong'; k++) {
      if (k % 2 === 1) { if (pa[k] !== cand[k]) v = 'wrong'; continue; }
      if (pa[k] === cand[k]) continue;
      v = sameValue(pa[k], cand[k]) ? 'equivalent' : 'wrong';
    }
    if (v === 'exact') return 'exact';
    if (v === 'equivalent') best = 'equivalent';
  }
  return best;
}

/** Tuple like (1,2) — compare element-wise if the bracket types match. */
function sameItem(a: string, b: string): Verdict {
  if (a === b) return 'exact';
  const rel = sameRelation(a, b);
  if (rel) return rel;
  const ta = a.match(/^([([])(.*)([)\]])$/);
  const tb = b.match(/^([([])(.*)([)\]])$/);
  if (ta && tb && ta[1] === tb[1] && ta[3] === tb[3]) {
    const pa = splitTopLevel(ta[2]);
    const pb = splitTopLevel(tb[2]);
    if (pa.length > 1 && pa.length === pb.length) {
      let verdict: Verdict = 'exact';
      for (let k = 0; k < pa.length; k++) {
        const v = sameItem(pa[k], pb[k]);
        if (v === 'wrong') return 'wrong';
        if (v === 'equivalent') verdict = 'equivalent';
      }
      return verdict;
    }
  }
  return sameValue(a, b) ? 'equivalent' : 'wrong';
}

function compareOne(user: string, official: string): Verdict {
  const u = normalize(user);
  const o = normalize(official);
  const v = compareNormalized(u, o);
  // "30°" vs "30": if only one side uses degree marks and the values don't match, retry without them.
  if (v === 'wrong' && u.includes('\\degree') !== o.includes('\\degree')) {
    const strip = (x: string) => x.replace(/\\degree ?/g, '');
    return compareNormalized(strip(u), strip(o));
  }
  return v;
}

function compareNormalized(u: string, o: string): Verdict {
  if (!u) return 'wrong';
  if (u === o || u.toLowerCase() === o.toLowerCase()) return 'exact';

  const ui = items(u);
  const oi = items(o);
  if (ui.length !== oi.length) return 'wrong';

  // Greedy unordered matching, preferring exact matches.
  const used = new Array(oi.length).fill(false);
  let verdict: Verdict = 'exact';
  for (const x of ui) {
    let idx = oi.findIndex((y, k) => !used[k] && x === y);
    if (idx < 0) {
      idx = oi.findIndex((y, k) => !used[k] && sameItem(x, y) !== 'wrong');
      if (idx >= 0) {
        const v = sameItem(x, oi[idx]);
        if (v === 'equivalent') verdict = 'equivalent';
      }
    }
    if (idx < 0) return 'wrong';
    used[idx] = true;
  }
  // Only a reordering of the official list still counts as exact.
  return verdict;
}

/** "113,400" / "113{,}400" → "113400" (digit groups only), so thousands separators can be retried. */
function dropThousands(s: string): string {
  return s.replace(/(\d)(?:\{,\}|,)(?=\d{3}(?!\d))/g, '$1');
}

export function checkAnswer(user: string, official: string, alternates: string[] = []): Verdict {
  let best: Verdict = 'wrong';
  const users = Array.from(new Set([user, dropThousands(user)]));
  for (const ans of [official, ...alternates]) {
    let v: Verdict = 'wrong';
    for (const u of users) {
      for (const o of new Set([ans, dropThousands(ans)])) {
        const r = compareOne(u, o);
        if (r === 'exact' || (r === 'equivalent' && v === 'wrong')) v = r;
      }
    }
    if (v === 'exact') return 'exact';
    if (v === 'equivalent') best = 'equivalent';
  }
  return best;
}
