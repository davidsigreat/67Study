// Contest tags for Competition Math toolbox sections.
//
// In a unit's markdown, put a tag line directly under a `##` heading:
//
//   ## Vieta's Formulas ⭐
//   <!-- contests: oml amc10 amc12 aime usajmo usamo -->
//
// The whole `##` section (including its `###` subsections) is then shown only
// when one of those contests is selected in the toolbox filter. Sections with
// no tag line are always shown. `all` is shorthand for every contest.

export const CONTESTS = [
  { id: 'mathcounts', label: 'MATHCOUNTS', short: 'MC' },
  { id: 'oml', label: 'OML', short: 'OML' },
  { id: 'amc8', label: 'AMC 8', short: 'AMC 8' },
  { id: 'amc10', label: 'AMC 10', short: 'AMC 10' },
  { id: 'amc12', label: 'AMC 12', short: 'AMC 12' },
  { id: 'aime', label: 'AIME', short: 'AIME' },
  { id: 'usajmo', label: 'USAJMO', short: 'JMO' },
  { id: 'usamo', label: 'USAMO', short: 'USAMO' },
] as const;

export type ContestId = (typeof CONTESTS)[number]['id'];
const ALL_IDS = CONTESTS.map((c) => c.id) as ContestId[];

const TAG_LINE = /^<!--\s*contests:\s*([^>]*?)\s*-->\s*$/;
const TAG_LINE_GLOBAL = /^<!--\s*contests:[^>]*-->[ \t]*\n?/gm;

/** Remove tag lines (for search indexing, or rendering with no filter). */
export function stripContestTags(markdown: string): string {
  return markdown.replace(TAG_LINE_GLOBAL, '');
}

export function hasContestTags(markdown: string): boolean {
  return /^<!--\s*contests:/m.test(markdown);
}

export interface ContestFilterResult {
  /** Markdown with tag lines removed and non-matching sections dropped. */
  markdown: string;
  /** `##` heading text → its contests (for badges). */
  tags: Record<string, ContestId[]>;
  total: number;
  hidden: number;
}

function parseTags(raw: string): ContestId[] {
  const words = raw.toLowerCase().split(/[\s,]+/).filter(Boolean);
  if (words.includes('all')) return ALL_IDS;
  return ALL_IDS.filter((id) => words.includes(id));
}

/** Split into `##` sections, read tags, and keep sections matching `selected` (empty = keep all). */
export function filterByContest(markdown: string, selected: ReadonlySet<ContestId>): ContestFilterResult {
  const lines = markdown.split('\n');
  const out: string[] = [];
  const tags: Record<string, ContestId[]> = {};
  let total = 0;
  let hidden = 0;

  let i = 0;
  let inFence = false;
  // Preamble (H1 + intro) is always kept.
  const sections: { heading: string; body: string[] }[] = [];
  const preamble: string[] = [];
  for (; i < lines.length; i++) {
    const line = lines[i];
    if (/^```/.test(line)) inFence = !inFence;
    if (!inFence && /^## /.test(line)) {
      sections.push({ heading: line, body: [] });
    } else if (sections.length) {
      sections[sections.length - 1].body.push(line);
    } else {
      preamble.push(line);
    }
  }
  out.push(...preamble);

  for (const s of sections) {
    const text = s.heading.replace(/^##\s+/, '').trim();
    const tagIdx = s.body.findIndex((l) => l.trim() !== '');
    const m = tagIdx >= 0 ? s.body[tagIdx].trim().match(TAG_LINE) : null;
    const body = m ? s.body.filter((_, k) => k !== tagIdx) : s.body;
    const sectionTags = m ? parseTags(m[1]) : null;
    if (sectionTags) {
      total++;
      tags[text] = sectionTags;
      if (selected.size && !sectionTags.some((t) => selected.has(t))) {
        hidden++;
        continue;
      }
    }
    out.push(s.heading, ...body);
  }

  return { markdown: out.join('\n'), tags, total, hidden };
}
