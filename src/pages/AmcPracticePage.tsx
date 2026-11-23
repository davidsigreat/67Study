import { Link, useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getSubject } from '../data/subjects';
import { useAuth } from '../context/AuthContext';
import {
  AMC_CONTESTS,
  AMC_LETTERS,
  AMC_TEST_COUNT,
  loadAmcBank,
  solutionUrl,
  type AmcContest,
  type AmcItem,
  type AmcLetter,
} from '../data/amc/bank';
import { MathMarkdown, Tex } from '../components/mathteam/MathText';
import AmcImportList from '../components/mathteam/AmcImportList';
import { BankSwitch, BookmarkIcon, SearchIcon, readJson, shuffled, toggle } from '../components/mathteam/bankUi';

const SLUG = 'math-team';
const PAGE_SIZE = 24;

// ── Per-user history (localStorage) ─────────────────────────────────────────
interface Attempt { tries: number; solved: boolean; last: number; pick?: AmcLetter }
type History = Record<string, Attempt>;
const historyKey = (uid?: string) => `amc-history:${uid ?? 'guest'}`;
const savedKey = (uid?: string) => `amc-saved:${uid ?? 'guest'}`;

type Status = 'all' | 'new' | 'attempted' | 'incorrect' | 'correct' | 'saved';
type Facet = 'contest' | 'year' | 'sitting' | 'test' | 'band' | 'status';

const YEAR_BANDS: { label: string; from: number; to: number }[] = [
  { label: 'Recent', from: 2020, to: 2026 },
  { label: 'Mid', from: 2013, to: 2019 },
  { label: 'Earlier', from: 2006, to: 2012 },
  { label: 'Classic', from: 1999, to: 2005 },
];
const SITTINGS = [
  { id: 'A', label: 'A' },
  { id: 'B', label: 'B' },
  { id: 'Fall', label: 'Fall ’21' },
  { id: '', label: 'Single' },
];
/** Problem-number bands double as difficulty. */
const BANDS = [
  { id: 1, label: '1–5', from: 1, to: 5 },
  { id: 2, label: '6–10', from: 6, to: 10 },
  { id: 3, label: '11–15', from: 11, to: 15 },
  { id: 4, label: '16–20', from: 16, to: 20 },
  { id: 5, label: '21–25', from: 21, to: 25 },
];
const bandOf = (n: number) => Math.min(5, Math.ceil(n / 5));
const sittingGroup = (s: string) => (s.startsWith('Fall') ? 'Fall' : s);
const levelOf = (p: AmcItem): { cls: 'A' | 'B' | 'C'; label: string } =>
  p.n <= 10 ? { cls: 'A', label: 'Easier' } : p.n <= 20 ? { cls: 'B', label: 'Medium' } : { cls: 'C', label: 'Hardest' };
const CONTEST_LABEL: Record<AmcContest, string> = { amc8: 'AMC 8', amc10: 'AMC 10', amc12: 'AMC 12' };

/** Newest test first, then problem number. */
function compareItems(a: AmcItem, b: AmcItem): number {
  return b.year - a.year
    || AMC_CONTESTS.findIndex((c) => c.id === a.contest) - AMC_CONTESTS.findIndex((c) => c.id === b.contest)
    || a.test.localeCompare(b.test)
    || a.n - b.n;
}

function plainText(q: string): string {
  return q
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\\(?:d|t)?frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)')
    .replace(/\\(?:text|mathrm|operatorname)\{([^{}]*)\}/g, '$1')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[${}*]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export default function AmcPracticePage() {
  const meta = getSubject(SLUG)!;
  const { user } = useAuth();
  const uid = user?.uid;

  const [bank, setBank] = useState<AmcItem[] | null>(null);
  const [history, setHistory] = useState<History>(() => readJson(historyKey(uid), {}));
  const [saved, setSaved] = useState<Set<string>>(() => new Set(readJson<string[]>(savedKey(uid), [])));

  const [contests, setContests] = useState<Set<AmcContest>>(new Set());
  const [years, setYears] = useState<Set<number>>(new Set());
  const [sittings, setSittings] = useState<Set<string>>(new Set());
  const [tests, setTests] = useState<Set<string>>(new Set());
  const [bands, setBands] = useState<Set<number>>(new Set());
  const [status, setStatus] = useState<Status>('all');
  const [search, setSearch] = useState('');
  const [shown, setShown] = useState(PAGE_SIZE);
  const [searchParams, setSearchParams] = useSearchParams();

  // Session
  const [queue, setQueue] = useState<AmcItem[] | null>(null);
  const [ordered, setOrdered] = useState(false);
  const [idx, setIdx] = useState(0);
  const [pick, setPick] = useState<AmcLetter | 'skip' | null>(null);
  const [stats, setStats] = useState({ attempted: 0, correct: 0, score: 0, streak: 0 });
  const gridScroll = useRef(0);

  useEffect(() => { loadAmcBank().then(setBank); }, []);
  useEffect(() => {
    setHistory(readJson(historyKey(uid), {}));
    setSaved(new Set(readJson<string[]>(savedKey(uid), [])));
  }, [uid]);

  const saveAttempt = useCallback((id: string, letter: AmcLetter, correct: boolean) => {
    setHistory((h) => {
      const prev = h[id] ?? { tries: 0, solved: false, last: 0 };
      const next = { ...h, [id]: { tries: prev.tries + 1, solved: prev.solved || correct, last: Date.now(), pick: letter } };
      localStorage.setItem(historyKey(uid), JSON.stringify(next));
      return next;
    });
  }, [uid]);

  const toggleSaved = (id: string) => {
    setSaved((s) => {
      const next = toggle(s, id);
      localStorage.setItem(savedKey(uid), JSON.stringify([...next]));
      return next;
    });
  };

  // ── Filtering ─────────────────────────────────────────────────────────────
  const searchText = useMemo(() => {
    const m: Record<string, string> = {};
    bank?.forEach((p) => { m[p.id] = plainText(p.q); });
    return m;
  }, [bank]);
  const terms = useMemo(() => search.toLowerCase().split(/\s+/).filter(Boolean), [search]);

  const statusOf = useCallback((p: AmcItem): 'new' | 'correct' | 'incorrect' => {
    const h = history[p.id];
    if (!h) return 'new';
    return h.solved ? 'correct' : 'incorrect';
  }, [history]);

  const matches = useCallback((p: AmcItem, except?: Facet) => {
    if (except !== 'contest' && contests.size && !contests.has(p.contest)) return false;
    if (except !== 'year' && years.size && !years.has(p.year)) return false;
    if (except !== 'sitting' && sittings.size && !sittings.has(sittingGroup(p.sitting))) return false;
    if (except !== 'test' && tests.size && !tests.has(p.test)) return false;
    if (except !== 'band' && bands.size && !bands.has(bandOf(p.n))) return false;
    if (except !== 'status' && status !== 'all') {
      if (status === 'saved') { if (!saved.has(p.id)) return false; }
      else if (status === 'attempted') { if (!history[p.id]) return false; }
      else if (statusOf(p) !== status) return false;
    }
    if (terms.length) {
      const hay = `${p.id} ${p.title} #${p.n} ${p.q} ${searchText[p.id] ?? ''}`.toLowerCase();
      if (!terms.every((t) => hay.includes(t))) return false;
    }
    return true;
  }, [contests, years, sittings, tests, bands, status, saved, history, statusOf, terms, searchText]);

  const filtered = useMemo(() => (bank ?? []).filter((p) => matches(p)).sort(compareItems), [bank, matches]);

  const facetCounts = useMemo(() => {
    const c = {
      contest: {} as Record<string, number>, year: {} as Record<number, number>, sitting: {} as Record<string, number>,
      test: {} as Record<string, number>, band: {} as Record<number, number>,
      status: { all: 0, new: 0, attempted: 0, incorrect: 0, correct: 0, saved: 0 } as Record<Status, number>,
      contestAll: 0,
    };
    const inc = <K extends string | number>(o: Record<K, number>, k: K) => { o[k] = (o[k] ?? 0) + 1; };
    for (const p of bank ?? []) {
      if (matches(p, 'contest')) { inc(c.contest, p.contest); c.contestAll++; }
      if (matches(p, 'year')) inc(c.year, p.year);
      if (matches(p, 'sitting')) inc(c.sitting, sittingGroup(p.sitting));
      if (matches(p, 'test')) inc(c.test, p.test);
      if (matches(p, 'band')) inc(c.band, bandOf(p.n));
      if (matches(p, 'status')) {
        c.status.all++;
        c.status[statusOf(p)]++;
        if (history[p.id]) c.status.attempted++;
        if (saved.has(p.id)) c.status.saved++;
      }
    }
    return c;
  }, [bank, matches, statusOf, history, saved]);

  const contestProgress = useMemo(() => {
    const m = Object.fromEntries(AMC_CONTESTS.map((c) => [c.id, { total: 0, solved: 0 }])) as Record<AmcContest, { total: number; solved: number }>;
    for (const p of bank ?? []) {
      m[p.contest].total++;
      if (history[p.id]?.solved) m[p.contest].solved++;
    }
    return m;
  }, [bank, history]);

  const allYears = useMemo(() => [...new Set((bank ?? []).map((p) => p.year))].sort((a, b) => b - a), [bank]);

  /** Tests listed once a contest or year is chosen. */
  const visibleTests = useMemo(() => {
    if (!contests.size && !years.size) return [];
    const seen = new Map<string, AmcItem>();
    for (const p of bank ?? []) {
      if (contests.size && !contests.has(p.contest)) continue;
      if (years.size && !years.has(p.year)) continue;
      if (!seen.has(p.test)) seen.set(p.test, p);
    }
    return [...seen.values()].sort(compareItems);
  }, [bank, contests, years]);

  const totalToRetry = useMemo(() => (bank ?? []).filter((p) => history[p.id] && !history[p.id].solved).length, [bank, history]);
  const viewSolved = filtered.filter((p) => history[p.id]?.solved).length;

  useEffect(() => { setShown(PAGE_SIZE); }, [contests, years, sittings, tests, bands, status, search]);

  const anyFilter = contests.size || years.size || sittings.size || tests.size || bands.size || status !== 'all' || search;
  const clearAll = () => {
    setContests(new Set()); setYears(new Set()); setSittings(new Set()); setTests(new Set()); setBands(new Set());
    setStatus('all'); setSearch('');
  };

  // ── Session ───────────────────────────────────────────────────────────────
  const resetSession = () => {
    setPick(null);
    setStats({ attempted: 0, correct: 0, score: 0, streak: 0 });
  };
  const openProblem = (list: AmcItem[], p: AmcItem) => {
    gridScroll.current = window.scrollY;
    setQueue(list);
    setOrdered(true);
    setIdx(Math.max(0, list.findIndex((x) => x.id === p.id)));
    resetSession();
    window.scrollTo(0, 0);
  };
  const startShuffle = () => {
    gridScroll.current = window.scrollY;
    setQueue(shuffled(filtered));
    setOrdered(false);
    setIdx(0);
    resetSession();
    window.scrollTo(0, 0);
  };
  const backToList = () => {
    setQueue(null);
    setOrdered(false);
    requestAnimationFrame(() => window.scrollTo(0, gridScroll.current));
  };

  const deepLinked = useRef(false);
  useEffect(() => {
    if (!bank || deepLinked.current) return;
    deepLinked.current = true;
    const id = searchParams.get('p');
    const p = id ? bank.find((x) => x.id === id) : undefined;
    if (p) openProblem(bank.filter((x) => x.test === p.test).sort(compareItems), p);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bank]);

  const current = queue && queue.length ? queue[idx % queue.length] : null;
  const currentId = ordered && current ? current.id : null;
  useEffect(() => {
    if (!deepLinked.current) return;
    if ((searchParams.get('p') ?? null) === currentId) return;
    setSearchParams(currentId ? { p: currentId } : {}, { replace: true });
  }, [currentId, searchParams, setSearchParams]);

  const choose = (letter: AmcLetter) => {
    if (!current || pick) return;
    const correct = letter === current.a;
    setPick(letter);
    setStats((s) => ({
      attempted: s.attempted + 1,
      correct: s.correct + (correct ? 1 : 0),
      score: s.score + (correct ? 6 : 0),
      streak: correct ? s.streak + 1 : 0,
    }));
    saveAttempt(current.id, letter, correct);
  };
  const skip = () => {
    if (!current || pick) return;
    setPick('skip');
    setStats((s) => ({ ...s, attempted: s.attempted + 1, score: s.score + 1.5, streak: 0 }));
  };
  const next = () => {
    if (!queue) return;
    const n = idx + 1;
    if (n % queue.length === 0 && !ordered) setQueue(shuffled(queue));
    setIdx(n);
    setPick(null);
  };
  const prev = () => {
    if (!queue || idx === 0) return;
    setIdx(idx - 1);
    setPick(null);
  };

  // Keyboard: A–E or 1–5 to answer, Enter/→ for next, ← previous.
  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const k = e.key.toUpperCase();
      const letter = (AMC_LETTERS as string[]).includes(k) ? (k as AmcLetter) : /^[1-5]$/.test(k) ? AMC_LETTERS[Number(k) - 1] : null;
      if (letter && !pick) { e.preventDefault(); choose(letter); }
      else if ((e.key === 'Enter' || e.key === 'ArrowRight') && pick) { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft' && ordered) prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const statusLine = (p: AmcItem) => {
    const h = history[p.id];
    if (!h) return <span className="qb-status">not attempted</span>;
    const tries = `${h.tries} ${h.tries === 1 ? 'try' : 'tries'}`;
    return h.solved
      ? <span className="qb-status qb-status--correct">✓ solved · {tries}</span>
      : <span className="qb-status qb-status--incorrect">✗ missed · {tries}{h.pick ? ` · picked ${h.pick}` : ''}</span>;
  };

  const STATUS_TABS: [Status, string][] = [
    ['all', 'All'], ['new', 'Unattempted'], ['attempted', 'Attempted'],
    ['incorrect', 'Incorrect'], ['correct', 'Correct'], ['saved', 'Saved'],
  ];

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="wordlab-page mt-practice qb-page" data-color={meta.color}>
      <div className="wordlab-topnav">
        <Link to={`/${SLUG}`} className="hub-back">← {meta.name}</Link>
      </div>

      {!queue && (
        <header className="qb-header">
          <div>
            <p className="qb-tagline">25 questions, five choices, no calculator</p>
            <h1 className="qb-title">AMC Question Bank</h1>
          </div>
          <div className="qb-header-right">
            <BankSwitch current="amc" />
            <button className="qb-shuffle" disabled={filtered.length === 0} onClick={startShuffle}>
              🔀 Shuffle practice <span>{filtered.length}</span>
            </button>
            <label className="qb-search">
              <SearchIcon />
              <input type="search" placeholder="ID, year, test, or text…" value={search} onChange={(ev) => setSearch(ev.target.value)} />
            </label>
          </div>
        </header>
      )}

      {!queue && <AmcImportList open={AMC_TEST_COUNT === 0} />}
      {AMC_TEST_COUNT > 0 && !bank && <p className="wordlab-count">Loading question bank…</p>}

      {bank && !queue && AMC_TEST_COUNT > 0 && (
        <div className="qb-layout">
          <aside className="qb-sidebar">
            <div className="qb-sidebar-head">
              <span>Filters</span>
              {anyFilter ? <button type="button" className="qb-clear" onClick={clearAll}>clear</button> : null}
            </div>

            <div className="qb-group">
              <h3 className="qb-group-label">Contest</h3>
              <button type="button" className={`qb-row${contests.size === 0 ? ' qb-row--active' : ''}`} onClick={() => { setContests(new Set()); setTests(new Set()); }}>
                <span>All contests</span><span className="qb-count">{facetCounts.contestAll}</span>
              </button>
              {AMC_CONTESTS.map((c) => (
                <button key={c.id} type="button" className={`qb-row${contests.has(c.id) ? ' qb-row--active' : ''}`} onClick={() => setContests((s) => toggle(s, c.id))}>
                  <span>{c.label}</span><span className="qb-count">{facetCounts.contest[c.id] ?? 0}</span>
                </button>
              ))}
            </div>

            <div className="qb-group">
              <h3 className="qb-group-label">Problem number</h3>
              {BANDS.map((b) => (
                <button key={b.id} type="button" className={`qb-row${bands.has(b.id) ? ' qb-row--active' : ''}`} onClick={() => setBands((s) => toggle(s, b.id))}>
                  <span>#{b.label} <span className="qb-dim">{b.id <= 2 ? 'easier' : b.id <= 4 ? 'medium' : 'hardest'}</span></span>
                  <span className="qb-count">{facetCounts.band[b.id] ?? 0}</span>
                </button>
              ))}
            </div>

            <div className="qb-group">
              <h3 className="qb-group-label">Year</h3>
              {YEAR_BANDS.map((b) => {
                const ys = allYears.filter((y) => y >= b.from && y <= b.to);
                if (!ys.length) return null;
                const n = ys.reduce((s, y) => s + (facetCounts.year[y] ?? 0), 0);
                const active = years.size === ys.length && ys.every((y) => years.has(y));
                return (
                  <button key={b.label} type="button" className={`qb-row${active ? ' qb-row--active' : ''}`} onClick={() => { setYears(active ? new Set() : new Set(ys)); setTests(new Set()); }}>
                    <span>{b.label} <span className="qb-dim">{ys[ys.length - 1]}–{String(ys[0]).slice(2)}</span></span>
                    <span className="qb-count">{n}</span>
                  </button>
                );
              })}
              <p className="qb-sublabel">Exact year</p>
              <div className="qb-chip-grid">
                {allYears.map((y) => (
                  <button key={y} type="button" title={`${facetCounts.year[y] ?? 0} problems`} className={`qb-chip${years.has(y) ? ' qb-chip--active' : ''}`} onClick={() => { setYears((s) => toggle(s, y)); setTests(new Set()); }}>
                    {`’${String(y).slice(2)}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="qb-group">
              <h3 className="qb-group-label">Sitting</h3>
              <div className="qb-chip-grid">
                {SITTINGS.map((s) => (
                  <button key={s.id || 'single'} type="button" title={`${facetCounts.sitting[s.id] ?? 0} problems`} className={`qb-chip${sittings.has(s.id) ? ' qb-chip--active' : ''}`} onClick={() => setSittings((x) => toggle(x, s.id))}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="qb-group">
              <h3 className="qb-group-label">Test</h3>
              {visibleTests.length === 0 && <p className="qb-hint">Choose a contest or year to pick a whole test.</p>}
              {visibleTests.map((t) => (
                <button key={t.test} type="button" className={`qb-row${tests.has(t.test) ? ' qb-row--active' : ''}`} onClick={() => setTests((s) => toggle(s, t.test))}>
                  <span>{t.title}</span><span className="qb-count">{facetCounts.test[t.test] ?? 0}</span>
                </button>
              ))}
            </div>

            <div className="qb-sidebar-progress">
              <div className="qb-bar"><div className="qb-bar-fill" style={{ width: `${filtered.length ? (viewSolved / filtered.length) * 100 : 0}%` }} /></div>
              <span className="qb-bar-pct">{filtered.length ? Math.round((viewSolved / filtered.length) * 100) : 0}%</span>
              <p><strong>{viewSolved}</strong> of {filtered.length} solved in this view</p>
            </div>
          </aside>

          <section className="qb-main">
            <div className="qb-progress-cards">
              {AMC_CONTESTS.map((c) => {
                const { total, solved } = contestProgress[c.id];
                const pct = total ? Math.round((solved / total) * 100) : 0;
                return (
                  <button key={c.id} type="button" className={`qb-progress-card${contests.has(c.id) ? ' qb-progress-card--active' : ''}`} onClick={() => setContests((s) => toggle(s, c.id))}>
                    <div className="qb-progress-card-top">
                      <span className="qb-progress-name">{c.label}</span>
                      <span className="qb-progress-pct">{pct}%</span>
                    </div>
                    <span className="qb-progress-sub"><strong>{solved}</strong> of {total.toLocaleString()} solved</span>
                    <div className="qb-bar"><div className="qb-bar-fill" style={{ width: `${Math.max(pct, solved ? 2 : 0)}%` }} /></div>
                  </button>
                );
              })}
            </div>

            <div className="qb-status-row">
              <div className="qb-status-tabs">
                {STATUS_TABS.map(([s, label]) => (
                  <button key={s} type="button" className={`qb-tab${status === s ? ' qb-tab--active' : ''}`} onClick={() => setStatus(s)}>
                    {label} <span>{facetCounts.status[s]}</span>
                  </button>
                ))}
              </div>
              {totalToRetry > 0 && (
                <button type="button" className="qb-retry-tag" onClick={() => setStatus('incorrect')}>{totalToRetry} to retry</button>
              )}
            </div>

            {filtered.length === 0 && (
              <div className="qb-empty">
                <p>No problems match these filters{search ? <> and “{search}”</> : null}.</p>
                <button type="button" className="qb-clear" onClick={clearAll}>Clear filters</button>
              </div>
            )}

            <div className="qb-grid">
              {filtered.slice(0, shown).map((p) => {
                const isSaved = saved.has(p.id);
                const lv = levelOf(p);
                const st = history[p.id] ? (history[p.id].solved ? ' qb-card--correct' : ' qb-card--incorrect') : '';
                return (
                  <article key={p.id} className={`qb-card${st}`}>
                    <div className="qb-card-head">
                      <span className="qb-card-meta">{p.title} · <span className="qb-card-topic">Problem {p.n}</span></span>
                      <button type="button" className={`qb-save${isSaved ? ' qb-save--on' : ''}`} onClick={() => toggleSaved(p.id)} aria-pressed={isSaved}>
                        <BookmarkIcon filled={isSaved} /> {isSaved ? 'Saved' : 'Save'}
                      </button>
                    </div>
                    <button type="button" className="qb-card-body" onClick={() => openProblem(filtered, p)}>
                      <MathMarkdown>{p.q}</MathMarkdown>
                    </button>
                    <div className="qb-card-badges">
                      <span className={`qb-level qb-level--${lv.cls}`}>#{p.n} · {lv.label}</span>
                      <span className="qb-dim">{CONTEST_LABEL[p.contest]}{p.sitting ? ` ${p.sitting}` : ''} · {p.year}</span>
                      <span className="qb-card-id">{p.id}</span>
                    </div>
                    <div className="qb-card-foot">
                      {statusLine(p)}
                      <button type="button" className="qb-practice" onClick={() => openProblem(filtered, p)}>
                        {history[p.id] && !history[p.id].solved ? 'Retry' : 'Practice'} →
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            {filtered.length > shown && (
              <button type="button" className="qb-more" onClick={() => setShown((n) => n + PAGE_SIZE * 2)}>
                Show more · {filtered.length - shown} left
              </button>
            )}
          </section>
        </div>
      )}

      {queue && current && (() => {
        const lv = levelOf(current);
        const isSaved = saved.has(current.id);
        return (
          <div className="mt-session">
            <div className="mt-session-bar">
              <button className="wordlab-btn wordlab-btn--muted" onClick={backToList}>← Question bank</button>
              {ordered
                ? <span className="mt-stat">{(idx % queue.length) + 1} of {queue.length} in list</span>
                : <span className="mt-stat">#{idx + 1} of {queue.length}</span>}
              <span className="mt-stat">{stats.correct}/{stats.attempted} correct</span>
              <span className="mt-stat" title="AMC 10/12 scoring: 6 per correct, 1.5 per skip">{stats.score} pts</span>
              <span className="mt-stat">🔥 {stats.streak}</span>
            </div>

            <div className="mt-problem-card">
              <div className="quiz-meta-badges mt-badges">
                <span className="wordlab-card-badge">{current.title}</span>
                <span className="wordlab-card-badge wordlab-card-badge--level">Problem {current.n} · {lv.label}</span>
                <button type="button" className={`qb-save qb-save--inline${isSaved ? ' qb-save--on' : ''}`} onClick={() => toggleSaved(current.id)} aria-pressed={isSaved}>
                  <BookmarkIcon filled={isSaved} /> {isSaved ? 'Saved' : 'Save'}
                </button>
              </div>
              <MathMarkdown>{current.q}</MathMarkdown>
            </div>

            <div className="amc-choices" role="group" aria-label="Answer choices">
              {current.choices.map((c, i) => {
                const letter = AMC_LETTERS[i];
                let cls = 'amc-choice';
                if (pick) {
                  if (letter === current.a) cls += ' amc-choice--right';
                  else if (letter === pick) cls += ' amc-choice--wrong';
                  else cls += ' amc-choice--dim';
                }
                return (
                  <button key={letter} type="button" className={cls} disabled={!!pick} onClick={() => choose(letter)}>
                    <span className="amc-choice-letter">{letter}</span>
                    <span className="amc-choice-text"><Tex>{c}</Tex></span>
                  </button>
                );
              })}
            </div>

            {!pick && (
              <div className="mt-actions">
                <button className="wordlab-btn wordlab-btn--muted" onClick={skip}>Skip (+1.5)</button>
                {ordered && idx > 0 && <button className="wordlab-btn wordlab-btn--muted" onClick={prev}>← Previous</button>}
                <button className="wordlab-btn wordlab-btn--muted" onClick={next}>{ordered ? 'Next →' : 'Pass'}</button>
                <span className="amc-keys">Keys: A–E or 1–5</span>
              </div>
            )}

            {pick && (
              <div className={`mt-result ${pick === current.a ? 'mt-result--right' : 'mt-result--wrong'}`}>
                <div className="mt-result-title">
                  {pick === current.a ? '✓ Correct' : pick === 'skip' ? `Skipped — the answer is (${current.a})` : `✗ You picked (${pick}) — the answer is (${current.a})`}
                </div>
                <div className="mt-actions">
                  <button className="wordlab-btn wordlab-btn--accent" onClick={next}>Next problem →</button>
                  <a className="wordlab-btn wordlab-btn--muted" href={solutionUrl(current)} target="_blank" rel="noreferrer">Solutions on AoPS ↗</a>
                </div>
              </div>
            )}
          </div>
        );
      })()}
    </div>
  );
}
