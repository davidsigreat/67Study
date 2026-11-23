import { useState } from 'react';
import { AMC_CONTESTS, AMC_TEST_IDS, allAmcTests, wikiUrl, type AmcContest } from '../../data/amc/bank';

/** Checklist of AMC tests to save from the AoPS wiki (see content-src/amc-saved/README.md). */
export default function AmcImportList({ open = false }: { open?: boolean }) {
  const [contest, setContest] = useState<AmcContest>('amc12');
  const tests = allAmcTests(contest, contest === 'amc8' ? 0 : 2002);
  const done = tests.filter((t) => AMC_TEST_IDS.has(t.id)).length;

  return (
    <details className="amc-import" open={open}>
      <summary>
        <span className="amc-import-title">Add tests</span>
        <span className="qb-dim">{AMC_TEST_IDS.size} imported · save pages from the AoPS wiki</span>
      </summary>
      <ol className="amc-import-steps">
        <li>Open a test's <strong>Problems</strong> page → <kbd>Ctrl</kbd>+<kbd>S</kbd> → <em>Webpage, Complete</em>.</li>
        <li>Open its <strong>Answer key</strong> → <kbd>Ctrl</kbd>+<kbd>S</kbd>.</li>
        <li>Save both into <code>content-src\amc-saved\</code> with the default names, then commit and push.</li>
      </ol>
      <div className="qb-status-tabs amc-import-tabs">
        {AMC_CONTESTS.map((c) => (
          <button key={c.id} type="button" className={`qb-tab${contest === c.id ? ' qb-tab--active' : ''}`} onClick={() => setContest(c.id)}>
            {c.label}
          </button>
        ))}
        <span className="qb-dim amc-import-count">{done} of {tests.length} imported</span>
      </div>
      <ul className="amc-import-list">
        {tests.map((t) => {
          const have = AMC_TEST_IDS.has(t.id);
          return (
            <li key={t.id} className={have ? 'amc-import-item amc-import-item--done' : 'amc-import-item'}>
              <span className="amc-import-name">{have ? '✓ ' : ''}{t.title}</span>
              <a href={wikiUrl(`${t.title} Problems`)} target="_blank" rel="noreferrer">Problems ↗</a>
              <a href={wikiUrl(`${t.title} Answer Key`)} target="_blank" rel="noreferrer">Answer key ↗</a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
