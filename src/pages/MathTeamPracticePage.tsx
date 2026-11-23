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

function toggle<T>(set: Set<T>, v: T): Set<T> {
  const next = new Set(set);
  if (next.has(v)) next.delete(v);
  else next.add(v);
  return next;
}

function shuffled<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Mode = 'all' | 'unsolved' | 'missed';
type Tab = 'practice' | 'pick';

const EVENT_ORDER: Record<string, number> = Object.fromEntries(OML_EVENTS.map((e, i) => [e.id, i]));
const LEVEL_ORDER: Record<Level, number> = { A: 0, B: 1, C: 2 };

/** Problem ids look like `m4e1-2025-01-B`; this gives the `2025-01` paper key. */
function paperKey(p: OmlProblem): string {
  const parts = p.id.split('-');
  return `${parts[1]}-${parts[2]}`;
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

interface Result { verdict: Verdict | 'revealed'; answer: string }

export default function MathTeamPracticePage() {
  const meta = getSubject(SLUG)!;
  const { user } = useAuth();
  const uid = user?.uid;

  const [bank, setBank] = useState<OmlProblem[] | null>(null);
  const [history, setHistory] = useState<History>(() => readHistory(uid));

  const [meets, setMeets] = useState<Set<number>>(new Set());
  const [cats, setCats] = useState<Set<Category>>(new Set());
  const [events, setEvents] = useState<Set<string>>(new Set());
  const [levels, setLevels] = useState<Set<Level>>(new Set());
  const [mode, setMode] = useState<Mode>('all');
  const [tab, setTab] = useState<Tab>('practice');
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  // Session state
  const [queue, setQueue] = useState<OmlProblem[] | null>(null);
  /** True when the queue came from "Pick a problem" — keep its order, no reshuffle. */
  const [ordered, setOrdered] = useState(false);
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [stats, setStats] = useState({ attempted: 0, correct: 0, points: 0, possible: 0, streak: 0 });
  const inputRef = useRef<LatexInputHandle>(null);

  useEffect(() => { loadBank().then(setBank); }, []);
  useEffect(() => { setHistory(readHistory(uid)); }, [uid]);

  const saveAttempt = useCallback((id: string, solved: boolean) => {
    setHistory((h) => {
      const prev = h[id] ?? { tries: 0, solved: false, last: 0 };
      const next = { ...h, [id]: { tries: prev.tries + 1, solved: prev.solved || solved, last: Date.now() } };
      localStorage.setItem(historyKey(uid), JSON.stringify(next));
      return next;
    });
  }, [uid]);

  const countByEvent = useMemo(() => {
    const m: Record<string, number> = {};
    bank?.forEach((p) => { m[p.event] = (m[p.event] ?? 0) + 1; });
    return m;
  }, [bank]);

  // Event chips shown = events matching the selected meets/categories.
  const visibleEvents = useMemo(
    () => OML_EVENTS.filter((e) => (meets.size === 0 || meets.has(e.meet)) && (cats.size === 0 || cats.has(e.category))),
    [meets, cats],
  );

  const filtered = useMemo(() => {
    if (!bank) return [];
    return bank.filter((p) => {
      const e = EVENT_BY_ID[p.event];
      if (!e) return false;
      if (meets.size && !meets.has(e.meet)) return false;
      if (cats.size && !cats.has(e.category)) return false;
      if (events.size && !events.has(e.id)) return false;
      if (levels.size && !levels.has(p.level)) return false;
      const h = history[p.id];
      if (mode === 'unsolved' && h?.solved) return false;
      if (mode === 'missed' && !(h && !h.solved)) return false;
      return true;
    });
  }, [bank, meets, cats, events, levels, mode, history]);

  // ── Pick-a-problem browser ────────────────────────────────────────────────
  const sortedFiltered = useMemo(() => filtered.slice().sort(compareProblems), [filtered]);

  const searchText = useMemo(() => {
    const m: Record<string, string> = {};
    bank?.forEach((p) => { m[p.id] = plainText(p.q); });
    return m;
  }, [bank]);

  const searchMatches = useMemo(() => {
    const terms = search.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return null;
    return sortedFiltered.filter((p) => {
      const hay = `${p.id} ${p.date} ${p.q} ${searchText[p.id] ?? ''}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [search, sortedFiltered, searchText]);

  /** event id → paper key → { date, problems[A/B/C] } (already in catalog order). */
  const grouped = useMemo(() => {
    const out: { event: string; papers: { key: string; date: string; problems: OmlProblem[] }[] }[] = [];
    for (const p of sortedFiltered) {
      let g = out[out.length - 1];
      if (!g || g.event !== p.event) { g = { event: p.event, papers: [] }; out.push(g); }
      const key = paperKey(p);
      let paper = g.papers[g.papers.length - 1];
      if (!paper || paper.key !== key) { paper = { key, date: p.date, problems: [] }; g.papers.push(paper); }
      paper.problems.push(p);
    }
    return out;
  }, [sortedFiltered]);

  const openProblem = (list: OmlProblem[], p: OmlProblem) => {
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
  };

  // Deep link: /math-team/practice?p=m4e1-2025-01-B opens that exact problem.
  const deepLinked = useRef(false);
  useEffect(() => {
    if (!bank || deepLinked.current) return;
    deepLinked.current = true;
    const id = searchParams.get('p');
    const p = id ? bank.find((x) => x.id === id) : undefined;
    if (p) {
      setTab('pick');
      const list = bank.filter((x) => x.event === p.event).sort(compareProblems);
      openProblem(list, p);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bank]);

  const solvedCount = useMemo(() => Object.values(history).filter((h) => h.solved).length, [history]);

  const start = () => {
    setQueue(shuffled(filtered));
    setOrdered(false);
    setIdx(0);
    setAnswer('');
    setResult(null);
    setStats({ attempted: 0, correct: 0, points: 0, possible: 0, streak: 0 });
  };

  const current = queue && queue.length ? queue[idx % queue.length] : null;
  const lap = queue && queue.length ? Math.floor(idx / queue.length) + 1 : 1;

  // Keep ?p= in the URL in sync with the problem picked from the list, so it can be bookmarked.
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

  const statusClass = (p: OmlProblem) => {
    const h = history[p.id];
    if (!h) return '';
    return h.solved ? ' mt-pick-btn--solved' : ' mt-pick-btn--missed';
  };

  const selectionSummary = (
    <p className="wordlab-count">
      {filtered.length} problem{filtered.length === 1 ? '' : 's'} match
      {bank && <> · {bank.length} in the bank · {solvedCount} solved by you</>}
    </p>
  );

  return (
    <div className="wordlab-page mt-practice" data-color={meta.color}>
      <div className="wordlab-topnav">
        <Link to={`/${SLUG}`} className="hub-back">← {meta.name}</Link>
      </div>

      <div className="wordlab-header">
        <h1 className="hub-title">OML Practice</h1>
        <p className="wordlab-subtitle">
          Every problem from past Oʻahu Mathematics League meets, tagged by meet, event, and level
          (A = 2 pts, B = 3 pts, C = 5 pts). Pick filters — or none for everything — and keep going.
          Answers are typed in LaTeX; see the <Link to={`/${SLUG}/units/2`}>LaTeX guide</Link>.
        </p>
      </div>

      {!bank && <p className="wordlab-count">Loading question bank…</p>}

      {bank && !queue && (
        <div className="filter-chip-row mt-tabs">
          <button type="button" className={`filter-chip${tab === 'practice' ? ' filter-chip--active' : ''}`} onClick={() => setTab('practice')}>
            🔀 Shuffled practice
          </button>
          <button type="button" className={`filter-chip${tab === 'pick' ? ' filter-chip--active' : ''}`} onClick={() => setTab('pick')}>
            📋 Pick a problem
          </button>
        </div>
      )}

      {bank && !queue && (
        <div className="practice-filters">
          <div className="practice-filter-group">
            <h3 className="practice-filter-label">Meet <span className="practice-filter-hint">(optional — leave blank for all)</span></h3>
            <div className="filter-chip-row">
              {MEETS.map((m) => (
                <button key={m} type="button" className={`filter-chip${meets.has(m) ? ' filter-chip--active' : ''}`} onClick={() => setMeets((s) => toggle(s, m))}>
                  Meet {m}
                </button>
              ))}
            </div>
          </div>

          <div className="practice-filter-group">
            <h3 className="practice-filter-label">Subject <span className="practice-filter-hint">(optional)</span></h3>
            <div className="filter-chip-row">
              {CATEGORIES.map((c) => (
                <button key={c} type="button" className={`filter-chip${cats.has(c) ? ' filter-chip--active' : ''}`} onClick={() => setCats((s) => toggle(s, c))}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="practice-filter-group">
            <h3 className="practice-filter-label">
              Event <span className="practice-filter-hint">(optional — narrows to specific events)</span>
              {events.size > 0 && (
                <button type="button" className="mt-link-btn" onClick={() => setEvents(new Set())}>clear</button>
              )}
            </h3>
            <div className="filter-chip-grid mt-event-grid">
              {visibleEvents.map((e) => {
                const n = countByEvent[e.id] ?? 0;
                return (
                  <button
                    key={e.id}
                    type="button"
                    className={`filter-chip mt-event-chip${events.has(e.id) ? ' filter-chip--active' : ''}${n === 0 ? ' mt-event-chip--empty' : ''}`}
                    onClick={() => setEvents((s) => toggle(s, e.id))}
                  >
                    <span className="mt-event-chip-meta">M{e.meet} · E{e.event} · {e.category}{e.years ? ` · ${e.years} yrs` : ''}</span>
                    <span>{e.topic}</span>
                    <span className="mt-event-chip-count">{n ? `${n} problems` : 'coming soon'}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="practice-filter-group">
            <h3 className="practice-filter-label">Difficulty <span className="practice-filter-hint">(optional — pick any combination)</span></h3>
            <div className="filter-chip-row">
              {LEVELS.map((l) => (
                <button key={l} type="button" className={`filter-chip${levels.has(l) ? ' filter-chip--active' : ''}`} onClick={() => setLevels((s) => toggle(s, l))}>
                  {l} · {LEVEL_POINTS[l]} pts
                </button>
              ))}
            </div>
          </div>

          <div className="practice-filter-group">
            <h3 className="practice-filter-label">Show</h3>
            <div className="filter-chip-row">
              {([['all', 'All problems'], ['unsolved', 'Not solved yet'], ['missed', 'Ones I missed']] as const).map(([m, label]) => (
                <button key={m} type="button" className={`filter-chip${mode === m ? ' filter-chip--active' : ''}`} onClick={() => setMode(m)}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {selectionSummary}
          {tab === 'practice' && (
            <button className="wordlab-btn wordlab-btn--accent" disabled={filtered.length === 0} onClick={start}>
              Start practice ({filtered.length})
            </button>
          )}

          {tab === 'pick' && (
            <div className="mt-pick">
              <input
                className="wordlab-search mt-pick-search"
                type="search"
                placeholder="Search problem text, year, or ID (e.g. “log”, “2019”, “m4e1-2025-01-B”)"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
              />
              <p className="practice-filter-hint mt-pick-legend">
                Click a problem to open it. <span className="mt-pick-dot mt-pick-dot--solved" /> solved
                <span className="mt-pick-dot mt-pick-dot--missed" /> attempted, not solved
              </p>

              {searchMatches && (
                <div className="mt-pick-results">
                  {searchMatches.length === 0 && <p className="wordlab-count">No problems match “{search}”.</p>}
                  {searchMatches.slice(0, 150).map((p) => {
                    const e = EVENT_BY_ID[p.event];
                    const text = searchText[p.id] ?? '';
                    return (
                      <button key={p.id} type="button" className={`mt-pick-row${statusClass(p)}`} onClick={() => openProblem(searchMatches, p)}>
                        <span className="mt-event-chip-meta">M{e.meet} · E{e.event} · {e.topic} · {p.date} · Level {p.level}</span>
                        <span className="mt-pick-row-text">{text.length > 160 ? `${text.slice(0, 160)}…` : text}</span>
                      </button>
                    );
                  })}
                  {searchMatches.length > 150 && (
                    <p className="wordlab-count">Showing the first 150 of {searchMatches.length} — refine the search or filters.</p>
                  )}
                </div>
              )}

              {!searchMatches && grouped.map((g) => {
                const e = EVENT_BY_ID[g.event];
                const n = g.papers.reduce((s, x) => s + x.problems.length, 0);
                return (
                  <details key={g.event} className="mt-pick-event" open={grouped.length === 1}>
                    <summary>
                      <span className="mt-event-chip-meta">Meet {e.meet} · Event {e.event} · {e.category}</span>
                      <span className="mt-pick-event-topic">{e.topic}</span>
                      <span className="mt-event-chip-count">{n} problem{n === 1 ? '' : 's'}</span>
                    </summary>
                    <div className="mt-pick-papers">
                      {g.papers.map((paper) => (
                        <div key={paper.key} className="mt-pick-paper">
                          <span className="mt-pick-date">{paper.date}</span>
                          {paper.problems.map((p) => (
                            <button
                              key={p.id}
                              type="button"
                              className={`mt-pick-btn${statusClass(p)}`}
                              title={(searchText[p.id] ?? '').slice(0, 200)}
                              onClick={() => openProblem(sortedFiltered, p)}
                            >
                              {p.level}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
          )}
        </div>
      )}

      {queue && current && (() => {
        const e = EVENT_BY_ID[current.event];
        const correct = result && (result.verdict === 'exact' || result.verdict === 'equivalent');
        return (
          <div className="mt-session">
            <div className="mt-session-bar">
              <button className="wordlab-btn wordlab-btn--muted" onClick={backToList}>{ordered ? '← Problem list' : '← Filters'}</button>
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
          <button className="wordlab-btn" onClick={backToList}>← Back to filters</button>
        </div>
      )}
    </div>
  );
}
