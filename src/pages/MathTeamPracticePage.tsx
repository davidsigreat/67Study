import { Link, useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getSubject } from '../data/subjects';
import { useAuth } from '../context/AuthContext';
import {
  CATEGORIES,
  EVENT_BY_ID,
  LEVELS,
  LEVEL_POINTS,
  OML_EVENTS,
  loadBank,
  type Category,
  type Level,
  type OmlProblem,
} from '../data/mathteam/events';
import { checkAnswer, type Verdict } from '../components/mathteam/answerCheck';
import { MathMarkdown, Tex } from '../components/mathteam/MathText';
import LatexInput, { type LatexInputHandle } from '../components/mathteam/LatexInput';
import { BankSwitch, BookmarkIcon, SearchIcon, shuffled, toggle } from '../components/mathteam/bankUi';

const SLUG = 'math-team';
const MEETS = [1, 2, 3, 4, 5, 6, 7];

// ── Per-user attempt history (localStorage) ─────────────────────────────────

interface Attempt { tries: number; solved: boolean; last: number }
type History = Record<string, Attempt>;

function historyKey(uid: string | undefined) {
  return `mathteam-history:${uid ?? 'guest'}`;
}
function readHistory(uid: string | undefined): History {
  try {
    return JSON.parse(localStorage.getItem(historyKey(uid)) ?? '{}') as History;
  } catch {
    return {};
  }
}

type Status = 'all' | 'new' | 'attempted' | 'incorrect' | 'correct' | 'saved';

const EVENT_ORDER: Record<string, number> = Object.fromEntries(OML_EVENTS.map((e, i) => [e.id, i]));
const LEVEL_ORDER: Record<Level, number> = { A: 0, B: 1, C: 2 };
const LEVEL_LABEL: Record<Level, string> = { A: 'Easy', B: 'Medium', C: 'Hard' };
const PAGE_SIZE = 24;

/** Year bands — shortcuts that select a range of exact years. */
const YEAR_BANDS: { label: string; years: number[] }[] = [
  { label: 'Recent', years: [2023, 2024, 2025, 2026] },
  { label: 'Mid', years: [2019, 2020, 2021, 2022] },
  { label: 'Earlier', years: [2015, 2016, 2017, 2018] },
  { label: 'Classic', years: [2011, 2012, 2013, 2014] },
];

/** Problem ids look like `m4e1-2025-01-B`; this gives the `2025-01` paper key. */
function paperKey(p: OmlProblem): string {
  const parts = p.id.split('-');
  return `${parts[1]}-${parts[2]}`;
}
function problemYear(p: OmlProblem): number {
  return Number(p.id.split('-')[1]);
}

/** Catalog order: event, then newest paper first, then A/B/C. */
function compareProblems(a: OmlProblem, b: OmlProblem): number {
  return (EVENT_ORDER[a.event] ?? 999) - (EVENT_ORDER[b.event] ?? 999)
    || paperKey(b).localeCompare(paperKey(a))
    || LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level];
}

/** Rough plain-text version of a problem for search + previews. */
function plainText(q: string): string {
  return q
    .replace(/\\(?:d|t)?frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)')
    .replace(/\\(?:text|mathrm|operatorname)\{([^{}]*)\}/g, '$1')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[${}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function savedKey(uid: string | undefined) {
  return `mathteam-saved:${uid ?? 'guest'}`;
}
function readSaved(uid: string | undefined): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(savedKey(uid)) ?? '[]') as string[]);
  } catch {
    return new Set();
  }
}

interface Result { verdict: Verdict | 'revealed'; answer: string }

export default function MathTeamPracticePage() {
  const meta = getSubject(SLUG)!;
  const { user } = useAuth();
  const uid = user?.uid;

  const [bank, setBank] = useState<OmlProblem[] | null>(null);
  const [history, setHistory] = useState<History>(() => readHistory(uid));
  const [saved, setSaved] = useState<Set<string>>(() => readSaved(uid));

  const [meets, setMeets] = useState<Set<number>>(new Set());
  const [cats, setCats] = useState<Set<Category>>(new Set());
  const [events, setEvents] = useState<Set<string>>(new Set());
  const [levels, setLevels] = useState<Set<Level>>(new Set());
  const [years, setYears] = useState<Set<number>>(new Set());
  const [status, setStatus] = useState<Status>('all');
  const [search, setSearch] = useState('');
  const [shown, setShown] = useState(PAGE_SIZE);
  const [searchParams, setSearchParams] = useSearchParams();

  // Session state
  const [queue, setQueue] = useState<OmlProblem[] | null>(null);
  /** True when the queue came from the bank grid — keep its order, no reshuffle. */
  const [ordered, setOrdered] = useState(false);
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [stats, setStats] = useState({ attempted: 0, correct: 0, points: 0, possible: 0, streak: 0 });
  const inputRef = useRef<LatexInputHandle>(null);
  const gridScroll = useRef(0);

  useEffect(() => { loadBank().then(setBank); }, []);
  useEffect(() => { setHistory(readHistory(uid)); setSaved(readSaved(uid)); }, [uid]);

  const saveAttempt = useCallback((id: string, solved: boolean) => {
    setHistory((h) => {
      const prev = h[id] ?? { tries: 0, solved: false, last: 0 };
      const next = { ...h, [id]: { tries: prev.tries + 1, solved: prev.solved || solved, last: Date.now() } };
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

  // ── Filtering (faceted: each facet's counts ignore that facet's own selection) ──
  const searchText = useMemo(() => {
    const m: Record<string, string> = {};
    bank?.forEach((p) => { m[p.id] = plainText(p.q); });
    return m;
  }, [bank]);

  const terms = useMemo(() => search.toLowerCase().split(/\s+/).filter(Boolean), [search]);

  type Facet = 'cat' | 'meet' | 'event' | 'level' | 'year' | 'status';
  const statusOf = useCallback((p: OmlProblem): Exclude<Status, 'all' | 'saved' | 'attempted'> => {
    const h = history[p.id];
    if (!h) return 'new';
    return h.solved ? 'correct' : 'incorrect';
  }, [history]);

  const matches = useCallback((p: OmlProblem, except?: Facet) => {
    const e = EVENT_BY_ID[p.event];
    if (!e) return false;
    if (except !== 'cat' && cats.size && !cats.has(e.category)) return false;
    if (except !== 'meet' && meets.size && !meets.has(e.meet)) return false;
    if (except !== 'event' && events.size && !events.has(e.id)) return false;
    if (except !== 'level' && levels.size && !levels.has(p.level)) return false;
    if (except !== 'year' && years.size && !years.has(problemYear(p))) return false;
    if (except !== 'status' && status !== 'all') {
      if (status === 'saved') { if (!saved.has(p.id)) return false; }
      else if (status === 'attempted') { if (!history[p.id]) return false; }
      else if (statusOf(p) !== status) return false;
    }
    if (terms.length) {
      const hay = `${p.id} ${p.date} ${e.topic} ${e.category} ${p.q} ${searchText[p.id] ?? ''}`.toLowerCase();
      if (!terms.every((t) => hay.includes(t))) return false;
    }
    return true;
  }, [cats, meets, events, levels, years, status, saved, history, statusOf, terms, searchText]);

  const filtered = useMemo(() => (bank ?? []).filter((p) => matches(p)).sort(compareProblems), [bank, matches]);

  const facetCounts = useMemo(() => {
    const c = {
      cat: {} as Record<string, number>, meet: {} as Record<number, number>, event: {} as Record<string, number>,
      level: {} as Record<string, number>, year: {} as Record<number, number>,
      status: { all: 0, new: 0, attempted: 0, incorrect: 0, correct: 0, saved: 0 } as Record<Status, number>,
      catAll: 0, meetAll: 0,
    };
    for (const p of bank ?? []) {
      const e = EVENT_BY_ID[p.event];
      if (!e) continue;
      if (matches(p, 'cat')) { c.cat[e.category] = (c.cat[e.category] ?? 0) + 1; c.catAll++; }
      if (matches(p, 'meet')) { c.meet[e.meet] = (c.meet[e.meet] ?? 0) + 1; c.meetAll++; }
      if (matches(p, 'event')) c.event[e.id] = (c.event[e.id] ?? 0) + 1;
      if (matches(p, 'level')) c.level[p.level] = (c.level[p.level] ?? 0) + 1;
      if (matches(p, 'year')) { const y = problemYear(p); c.year[y] = (c.year[y] ?? 0) + 1; }
      if (matches(p, 'status')) {
        c.status.all++;
        c.status[statusOf(p)]++;
        if (history[p.id]) c.status.attempted++;
        if (saved.has(p.id)) c.status.saved++;
      }
    }
    return c;
  }, [bank, matches, statusOf, history, saved]);

  /** Whole-bank progress per category (top cards). */
  const catProgress = useMemo(() => {
    const m: Record<string, { total: number; solved: number }> = {};
    for (const c of CATEGORIES) m[c] = { total: 0, solved: 0 };
    for (const p of bank ?? []) {
      const e = EVENT_BY_ID[p.event];
      if (!e) continue;
      m[e.category].total++;
      if (history[p.id]?.solved) m[e.category].solved++;
    }
    return m;
  }, [bank, history]);

  const totalToRetry = useMemo(
    () => (bank ?? []).filter((p) => history[p.id] && !history[p.id].solved).length,
    [bank, history],
  );

  // Events listed in the sidebar = those matching the chosen meets/subjects.
  const visibleEvents = useMemo(
    () => OML_EVENTS.filter((e) => (meets.size === 0 || meets.has(e.meet)) && (cats.size === 0 || cats.has(e.category))),
    [meets, cats],
  );
  const showEvents = meets.size > 0 || cats.size > 0;

  // Reset paging when the view changes.
  useEffect(() => { setShown(PAGE_SIZE); }, [cats, meets, events, levels, years, status, search]);

  const anyFilter = cats.size || meets.size || events.size || levels.size || years.size || status !== 'all' || search;
  const clearAll = () => {
    setCats(new Set()); setMeets(new Set()); setEvents(new Set()); setLevels(new Set()); setYears(new Set());
    setStatus('all'); setSearch('');
  };

  const viewSolved = filtered.filter((p) => history[p.id]?.solved).length;

  const openProblem = (list: OmlProblem[], p: OmlProblem) => {
    gridScroll.current = window.scrollY;
    setQueue(list);
    setOrdered(true);
    setIdx(Math.max(0, list.findIndex((x) => x.id === p.id)));
    setAnswer('');
    setResult(null);
    setStats({ attempted: 0, correct: 0, points: 0, possible: 0, streak: 0 });
    window.scrollTo(0, 0);
  };

  const backToList = () => {
    setQueue(null);
    setOrdered(false);
    requestAnimationFrame(() => window.scrollTo(0, gridScroll.current));
  };

  // Deep link: /math-team/practice?p=m4e1-2025-01-B opens that exact problem.
  const deepLinked = useRef(false);
  useEffect(() => {
    if (!bank || deepLinked.current) return;
    deepLinked.current = true;
    const id = searchParams.get('p');
    const p = id ? bank.find((x) => x.id === id) : undefined;
    if (p) {
      const list = bank.filter((x) => x.event === p.event).sort(compareProblems);
      openProblem(list, p);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bank]);

  const start = () => {
    gridScroll.current = window.scrollY;
    setQueue(shuffled(filtered));
    setOrdered(false);
    setIdx(0);
    setAnswer('');
    setResult(null);
    setStats({ attempted: 0, correct: 0, points: 0, possible: 0, streak: 0 });
    window.scrollTo(0, 0);
  };

  const current = queue && queue.length ? queue[idx % queue.length] : null;
  const lap = queue && queue.length ? Math.floor(idx / queue.length) + 1 : 1;

  // Keep ?p= in the URL in sync with the problem picked from the grid, so it can be bookmarked.
  const currentId = ordered && current ? current.id : null;
  useEffect(() => {
    if (!deepLinked.current) return;
    if ((searchParams.get('p') ?? null) === currentId) return;
    setSearchParams(currentId ? { p: currentId } : {}, { replace: true });
  }, [currentId, searchParams, setSearchParams]);

  const record = (correct: boolean, p: OmlProblem) => {
    setStats((s) => ({
      attempted: s.attempted + 1,
      correct: s.correct + (correct ? 1 : 0),
      points: s.points + (correct ? LEVEL_POINTS[p.level] : 0),
      possible: s.possible + LEVEL_POINTS[p.level],
      streak: correct ? s.streak + 1 : 0,
    }));
    saveAttempt(p.id, correct);
  };

  const submit = () => {
    if (!current || result) {
      if (result) next();
      return;
    }
    if (!answer.trim()) return;
    const verdict = checkAnswer(answer, current.a, current.alt);
    setResult({ verdict, answer });
    record(verdict !== 'wrong', current);
  };

  const reveal = () => {
    if (!current || result) return;
    setResult({ verdict: 'revealed', answer });
    record(false, current);
  };

  /** Self-grading override: flip the last result. */
  const override = (nowCorrect: boolean) => {
    if (!current || !result) return;
    const wasCorrect = result.verdict === 'exact' || result.verdict === 'equivalent';
    if (wasCorrect === nowCorrect) return;
    const pts = LEVEL_POINTS[current.level];
    setStats((s) => ({
      ...s,
      correct: s.correct + (nowCorrect ? 1 : -1),
      points: s.points + (nowCorrect ? pts : -pts),
      streak: nowCorrect ? s.streak + 1 : 0,
    }));
    setResult({ ...result, verdict: nowCorrect ? 'exact' : 'wrong' });
    setHistory((h) => {
      const prev = h[current.id] ?? { tries: 1, solved: false, last: Date.now() };
      const nextH = { ...h, [current.id]: { ...prev, solved: nowCorrect || (prev.solved && wasCorrect === false) } };
      localStorage.setItem(historyKey(uid), JSON.stringify(nextH));
      return nextH;
    });
  };

  const next = () => {
    if (!queue) return;
    const n = idx + 1;
    // Reshuffle at the end of each lap so the loop never repeats in the same order.
    if (n % queue.length === 0 && !ordered) setQueue(shuffled(queue));
    setIdx(n);
    setAnswer('');
    setResult(null);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  // Enter = next once a result is showing (the textarea is disabled then).
  useEffect(() => {
    if (!result) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const prev = () => {
    if (!queue || idx === 0) return;
    setIdx(idx - 1);
    setAnswer('');
    setResult(null);
  };

  const statusLine = (p: OmlProblem) => {
    const h = history[p.id];
    if (!h) return <span className="qb-status">not attempted</span>;
    const tries = `${h.tries} ${h.tries === 1 ? 'try' : 'tries'}`;
    return h.solved
      ? <span className="qb-status qb-status--correct">✓ solved · {tries}</span>
      : <span className="qb-status qb-status--incorrect">✗ missed · {tries}</span>;
  };

  const STATUS_TABS: [Status, string][] = [
    ['all', 'All'], ['new', 'Unattempted'], ['attempted', 'Attempted'],
    ['incorrect', 'Incorrect'], ['correct', 'Correct'], ['saved', 'Saved'],
  ];

  const sameSet = (a: Set<number>, b: number[]) => a.size === b.length && b.every((x) => a.has(x));

  return (
    <div className="wordlab-page mt-practice qb-page" data-color={meta.color}>
      <div className="wordlab-topnav">
        <Link to={`/${SLUG}`} className="hub-back">← {meta.name}</Link>
      </div>

      {!queue && (
        <header className="qb-header">
          <div>
            <p className="qb-tagline">every OML problem, in one place</p>
            <h1 className="qb-title">Question Bank</h1>
          </div>
          <div className="qb-header-right">
            <BankSwitch current="oml" />
            <button className="qb-shuffle" disabled={filtered.length === 0} onClick={start}>
              🔀 Shuffle practice <span>{filtered.length}</span>
            </button>
            <label className="qb-search">
              <SearchIcon />
              <input
                type="search"
                placeholder="Question ID, year, or text…"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
              />
            </label>
          </div>
        </header>
      )}

      {!bank && <p className="wordlab-count">Loading question bank…</p>}

      {bank && !queue && (
        <div className="qb-layout">
          {/* ── Sidebar filters ─────────────────────────────────────────── */}
          <aside className="qb-sidebar">
            <div className="qb-sidebar-head">
              <span>Filters</span>
              {anyFilter ? <button type="button" className="qb-clear" onClick={clearAll}>clear</button> : null}
            </div>

            <div className="qb-group">
              <h3 className="qb-group-label">Subject</h3>
              <button type="button" className={`qb-row${cats.size === 0 ? ' qb-row--active' : ''}`} onClick={() => { setCats(new Set()); setEvents(new Set()); }}>
                <span>All subjects</span><span className="qb-count">{facetCounts.catAll}</span>
              </button>
              {CATEGORIES.map((c) => (
                <button key={c} type="button" className={`qb-row${cats.has(c) ? ' qb-row--active' : ''}`} onClick={() => setCats((s) => toggle(s, c))}>
                  <span>{c}</span><span className="qb-count">{facetCounts.cat[c] ?? 0}</span>
                </button>
              ))}
            </div>

            <div className="qb-group">
              <h3 className="qb-group-label">Meet</h3>
              <div className="qb-chip-grid">
                <button type="button" className={`qb-chip qb-chip--wide${meets.size === 0 ? ' qb-chip--active' : ''}`} onClick={() => { setMeets(new Set()); setEvents(new Set()); }}>
                  All
                </button>
                {MEETS.map((m) => (
                  <button key={m} type="button" title={`${facetCounts.meet[m] ?? 0} problems`} className={`qb-chip${meets.has(m) ? ' qb-chip--active' : ''}`} onClick={() => setMeets((s) => toggle(s, m))}>
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="qb-group">
              <h3 className="qb-group-label">Event</h3>
              {!showEvents && <p className="qb-hint">Choose a subject or meet to filter by event.</p>}
              {showEvents && visibleEvents.map((e) => {
                const n = facetCounts.event[e.id] ?? 0;
                return (
                  <button
                    key={e.id}
                    type="button"
                    className={`qb-row qb-row--event${events.has(e.id) ? ' qb-row--active' : ''}${n === 0 ? ' qb-row--empty' : ''}`}
                    onClick={() => setEvents((s) => toggle(s, e.id))}
                  >
                    <span>
                      <span className="qb-row-meta">M{e.meet} · E{e.event}{e.years ? ` · ${e.years} yrs` : ''}</span>
                      {e.topic}
                    </span>
                    <span className="qb-count">{n || '—'}</span>
                  </button>
                );
              })}
            </div>

            <div className="qb-group">
              <h3 className="qb-group-label">Difficulty</h3>
              <div className="qb-chip-row">
                {LEVELS.map((l) => (
                  <button key={l} type="button" className={`qb-chip qb-chip--level-${l}${levels.has(l) ? ' qb-chip--active' : ''}`} onClick={() => setLevels((s) => toggle(s, l))}>
                    {l} <small>{LEVEL_POINTS[l]}pt</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="qb-group">
              <h3 className="qb-group-label">Year</h3>
              {YEAR_BANDS.map((b) => {
                const n = b.years.reduce((s, y) => s + (facetCounts.year[y] ?? 0), 0);
                const active = sameSet(years, b.years);
                return (
                  <button key={b.label} type="button" className={`qb-row${active ? ' qb-row--active' : ''}`} onClick={() => setYears(active ? new Set() : new Set(b.years))}>
                    <span>{b.label} <span className="qb-dim">{b.years[0]}–{String(b.years[b.years.length - 1]).slice(2)}</span></span>
                    <span className="qb-count">{n}</span>
                  </button>
                );
              })}
              <p className="qb-sublabel">Exact year</p>
              <div className="qb-chip-grid qb-chip-grid--years">
                {YEAR_BANDS.flatMap((b) => b.years).sort((a, b) => b - a).map((y) => (
                  <button key={y} type="button" title={`${facetCounts.year[y] ?? 0} problems`} className={`qb-chip${years.has(y) ? ' qb-chip--active' : ''}`} onClick={() => setYears((s) => toggle(s, y))}>
                    {`’${String(y).slice(2)}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="qb-sidebar-progress">
              <div className="qb-bar"><div className="qb-bar-fill" style={{ width: `${filtered.length ? (viewSolved / filtered.length) * 100 : 0}%` }} /></div>
              <span className="qb-bar-pct">{filtered.length ? Math.round((viewSolved / filtered.length) * 100) : 0}%</span>
              <p><strong>{viewSolved}</strong> of {filtered.length} solved in this view</p>
            </div>
          </aside>

          {/* ── Main column ─────────────────────────────────────────────── */}
          <section className="qb-main">
            <div className="qb-progress-cards">
              {CATEGORIES.map((c) => {
                const { total, solved } = catProgress[c];
                const pct = total ? Math.round((solved / total) * 100) : 0;
                return (
                  <button key={c} type="button" className={`qb-progress-card${cats.has(c) ? ' qb-progress-card--active' : ''}`} onClick={() => setCats((s) => toggle(s, c))}>
                    <div className="qb-progress-card-top">
                      <span className="qb-progress-name">{c}</span>
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
                <button type="button" className="qb-retry-tag" onClick={() => setStatus('incorrect')}>
                  {totalToRetry} to retry
                </button>
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
                const e = EVENT_BY_ID[p.event];
                const isSaved = saved.has(p.id);
                const st = history[p.id] ? (history[p.id].solved ? ' qb-card--correct' : ' qb-card--incorrect') : '';
                return (
                  <article key={p.id} className={`qb-card${st}`}>
                    <div className="qb-card-head">
                      <span className="qb-card-meta">
                        M{e.meet} · E{e.event} · {e.category} · <span className="qb-card-topic">{e.topic}</span>
                      </span>
                      <button type="button" className={`qb-save${isSaved ? ' qb-save--on' : ''}`} onClick={() => toggleSaved(p.id)} aria-pressed={isSaved}>
                        <BookmarkIcon filled={isSaved} /> {isSaved ? 'Saved' : 'Save'}
                      </button>
                    </div>
                    <button type="button" className="qb-card-body" onClick={() => openProblem(filtered, p)}>
                      <MathMarkdown>{p.q}</MathMarkdown>
                    </button>
                    <div className="qb-card-badges">
                      <span className={`qb-level qb-level--${p.level}`}>{p.level} · {LEVEL_LABEL[p.level]}</span>
                      <span className="qb-dim">{LEVEL_POINTS[p.level]} pts · {p.date}</span>
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
        const e = EVENT_BY_ID[current.event];
        const correct = result && (result.verdict === 'exact' || result.verdict === 'equivalent');
        return (
          <div className="mt-session">
            <div className="mt-session-bar">
              <button className="wordlab-btn wordlab-btn--muted" onClick={backToList}>← Question bank</button>
              {ordered
                ? <span className="mt-stat">{(idx % queue.length) + 1} of {queue.length} in list</span>
                : <span className="mt-stat">#{idx + 1}{lap > 1 ? ` · lap ${lap}` : ''} of {queue.length}</span>}
              <span className="mt-stat">{stats.correct}/{stats.attempted} correct</span>
              <span className="mt-stat">{stats.points}/{stats.possible} pts</span>
              <span className="mt-stat">🔥 {stats.streak}</span>
            </div>

            <div className="mt-problem-card">
              <div className="quiz-meta-badges mt-badges">
                <span className="wordlab-card-badge">Meet {e.meet} · Event {e.event}</span>
                <span className="wordlab-card-badge">{e.category} – {e.topic}</span>
                <span className="wordlab-card-badge">{current.date}</span>
                <span className="wordlab-card-badge wordlab-card-badge--level">Level {current.level} · {LEVEL_POINTS[current.level]} pts</span>
                <button type="button" className={`qb-save qb-save--inline${saved.has(current.id) ? ' qb-save--on' : ''}`} onClick={() => toggleSaved(current.id)} aria-pressed={saved.has(current.id)}>
                  <BookmarkIcon filled={saved.has(current.id)} /> {saved.has(current.id) ? 'Saved' : 'Save'}
                </button>
              </div>
              <MathMarkdown>{current.q}</MathMarkdown>
              {current.fig && <img className="mt-figure" src={current.fig} alt="Figure for this problem" />}
            </div>

            <LatexInput ref={inputRef} value={answer} onChange={setAnswer} onSubmit={submit} disabled={!!result} />

            {!result && (
              <div className="mt-actions">
                <button className="wordlab-btn wordlab-btn--accent" disabled={!answer.trim()} onClick={submit}>Check answer</button>
                <button className="wordlab-btn wordlab-btn--muted" onClick={reveal}>Show answer</button>
                {ordered && idx > 0 && <button className="wordlab-btn wordlab-btn--muted" onClick={prev}>← Previous</button>}
                <button className="wordlab-btn wordlab-btn--muted" onClick={next}>{ordered ? 'Next →' : 'Skip'}</button>
              </div>
            )}

            {result && (
              <div className={`mt-result ${correct ? 'mt-result--right' : 'mt-result--wrong'}`}>
                <div className="mt-result-title">
                  {result.verdict === 'exact' && '✓ Correct'}
                  {result.verdict === 'equivalent' && '✓ Correct value — check that it is in the simplest / requested form'}
                  {result.verdict === 'wrong' && '✗ Not quite'}
                  {result.verdict === 'revealed' && 'Answer'}
                </div>
                <div className="mt-result-row">
                  <span className="mt-result-label">Official answer</span>
                  <Tex display>{current.a}</Tex>
                </div>
                {current.alt && current.alt.length > 0 && (
                  <div className="mt-result-row">
                    <span className="mt-result-label">Also accepted</span>
                    <span>{current.alt.map((a, k) => <span key={k} className="mt-alt"><Tex>{a}</Tex></span>)}</span>
                  </div>
                )}
                {current.note && <p className="mt-result-note">{current.note}</p>}
                {result.answer.trim() && (
                  <div className="mt-result-row">
                    <span className="mt-result-label">Your answer</span>
                    <Tex display>{result.answer}</Tex>
                  </div>
                )}
                <div className="mt-actions">
                  <button className="wordlab-btn wordlab-btn--accent" onClick={next}>Next problem →</button>
                  {result.verdict !== 'revealed' && (correct
                    ? <button className="wordlab-btn wordlab-btn--muted" onClick={() => override(false)}>Actually I was wrong</button>
                    : <button className="wordlab-btn wordlab-btn--muted" onClick={() => override(true)}>I was right (mark correct)</button>)}
                </div>
              </div>
            )}
          </div>
        );
      })()}

      {queue && !current && (
        <div className="practice-filters">
          <p className="wordlab-count">No problems match. </p>
          <button className="wordlab-btn" onClick={backToList}>← Back to question bank</button>
        </div>
      )}
    </div>
  );
}
