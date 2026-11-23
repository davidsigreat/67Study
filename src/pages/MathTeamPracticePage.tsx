import { Link } from 'react-router-dom';
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

  // Session state
  const [queue, setQueue] = useState<OmlProblem[] | null>(null);
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

  const solvedCount = useMemo(() => Object.values(history).filter((h) => h.solved).length, [history]);

  const start = () => {
    setQueue(shuffled(filtered));
    setIdx(0);
    setAnswer('');
    setResult(null);
    setStats({ attempted: 0, correct: 0, points: 0, possible: 0, streak: 0 });
  };

  const current = queue && queue.length ? queue[idx % queue.length] : null;
  const lap = queue && queue.length ? Math.floor(idx / queue.length) + 1 : 1;

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
    if (n % queue.length === 0) setQueue(shuffled(queue));
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
          <button className="wordlab-btn wordlab-btn--accent" disabled={filtered.length === 0} onClick={start}>
            Start practice ({filtered.length})
          </button>
        </div>
      )}

      {queue && current && (() => {
        const e = EVENT_BY_ID[current.event];
        const correct = result && (result.verdict === 'exact' || result.verdict === 'equivalent');
        return (
          <div className="mt-session">
            <div className="mt-session-bar">
              <button className="wordlab-btn wordlab-btn--muted" onClick={() => setQueue(null)}>← Filters</button>
              <span className="mt-stat">#{idx + 1}{lap > 1 ? ` · lap ${lap}` : ''} of {queue.length}</span>
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
                <button className="wordlab-btn wordlab-btn--muted" onClick={next}>Skip</button>
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
          <button className="wordlab-btn" onClick={() => setQueue(null)}>← Back to filters</button>
        </div>
      )}
    </div>
  );
}
