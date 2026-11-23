import { SUBJECTS, getUnit } from '../data/subjects';
import { extractHeadings, stripFrontmatter, type Heading } from './markdownUtils';
import { stripContestTags } from './contestTags';
import { splitMath } from './mathSplit';

export interface SearchDoc {
  subjectSlug: string;
  subjectName: string;
  color: string;
  unit: number;
  title: string;
  headings: Heading[];
  body: string;
}

// Eager glob: only ever imported from the lazy-loaded SearchPage chunk, never from the main bundle.
const markdownModules = import.meta.glob('../content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function stripProse(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/\[!\w+\]/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/[*_~]/g, '');
}

function stripMarkdown(markdown: string): string {
  const text = markdown.replace(/```[\s\S]*?```/g, ' ').replace(/`[^`]*`/g, ' ');
  // Formulas are kept verbatim (so snippets can render them with KaTeX); only prose is stripped.
  return splitMath(text)
    .map((p) => (p.kind === 'math' ? text.slice(p.start, p.end).replace(/\s+/g, ' ') : stripProse(text.slice(p.start, p.end))))
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildIndex(): SearchDoc[] {
  const docs: SearchDoc[] = [];
  for (const path in markdownModules) {
    const match = path.match(/\.\.\/content\/([^/]+)\/unit-(\d+)\.md$/);
    if (!match) continue;
    const [, slug, unitStr] = match;
    const unitNum = parseInt(unitStr, 10);
    const unitMeta = getUnit(slug, unitNum);
    const subjectMeta = SUBJECTS.find((s) => s.slug === slug);
    if (!unitMeta || !subjectMeta) continue;

    const raw = stripContestTags(stripFrontmatter(markdownModules[path]));
    docs.push({
      subjectSlug: slug,
      subjectName: subjectMeta.name,
      color: subjectMeta.color,
      unit: unitNum,
      title: unitMeta.title,
      headings: extractHeadings(raw),
      body: stripMarkdown(raw),
    });
  }
  return docs.sort((a, b) => a.subjectName.localeCompare(b.subjectName) || a.unit - b.unit);
}

export const SEARCH_INDEX: SearchDoc[] = buildIndex();
