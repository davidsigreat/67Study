// Oʻahu Mathematics League (OML) meet/event catalog — source: https://www.oahumath.org/meets
// Each event test has three problems: A (2 pts), B (3 pts), C (5 pts).

export type Level = 'A' | 'B' | 'C';
export const LEVELS: Level[] = ['A', 'B', 'C'];
export const LEVEL_POINTS: Record<Level, number> = { A: 2, B: 3, C: 5 };

export type Category =
  | 'Algebra I'
  | 'Algebra II'
  | 'Geometry'
  | 'Trigonometry'
  | 'Analytic Geometry'
  | 'Calculus';

export const CATEGORIES: Category[] = [
  'Algebra I',
  'Algebra II',
  'Geometry',
  'Trigonometry',
  'Analytic Geometry',
  'Calculus',
];

export interface OmlEvent {
  /** e.g. "m4e1"; alternate-year Event 4s use the "alt" suffix ("m4e4alt"). */
  id: string;
  meet: number;
  event: number;
  category: Category;
  topic: string;
  /** Alternating events: 'even-odd' runs in seasons like 2026–27, 'odd-even' in 2027–28. */
  years?: 'even-odd' | 'odd-even';
}

export interface OmlProblem {
  /** `${eventId}-${yyyy}-${mm}-${level}`, e.g. "m4e1-2025-01-B" */
  id: string;
  event: string;
  /** Test date label as printed on the paper, e.g. "Jan 2025". */
  date: string;
  level: Level;
  /** Problem statement — Markdown with $inline$ / $$block$$ LaTeX. */
  q: string;
  /** Official answer in LaTeX (no surrounding $). */
  a: string;
  /** Other accepted answers in LaTeX. */
  alt?: string[];
  /** Grading note from the answer key, e.g. "accept either order". */
  note?: string;
  /** Optional figure path under /public, e.g. "/oml/fig/m4e2-2025-01-C.png". */
  fig?: string;
}

export const MEET_DATES_2026_27: Record<number, string> = {
  1: 'Sep 26, 2026 · ʻIolani',
  2: 'Oct 24, 2026 · Hawaiʻi Baptist',
  3: 'Nov 21, 2026 · Moanalua',
  4: 'Jan 16, 2027 · Mid-Pacific',
  5: 'Feb 13, 2027 · Roosevelt',
  6: 'Mar 6, 2027 · HPU-Aloha Tower',
  7: 'Apr 17, 2027 · Kalāheo',
};

export const OML_EVENTS: OmlEvent[] = [
  { id: 'm1e1', meet: 1, event: 1, category: 'Algebra II', topic: 'Quadratic Equations & Functions' },
  { id: 'm1e2', meet: 1, event: 2, category: 'Geometry', topic: 'Angles in a Plane' },
  { id: 'm1e3', meet: 1, event: 3, category: 'Algebra I', topic: 'Numbers' },
  { id: 'm1e4', meet: 1, event: 4, category: 'Trigonometry', topic: 'Identities' },
  { id: 'm1e5', meet: 1, event: 5, category: 'Algebra I', topic: 'Sets' },
  { id: 'm1e6', meet: 1, event: 6, category: 'Algebra II', topic: 'Fractional Expressions & Equations' },

  { id: 'm2e1', meet: 2, event: 1, category: 'Algebra II', topic: 'Ratios, Proportions, & Variations' },
  { id: 'm2e2', meet: 2, event: 2, category: 'Geometry', topic: 'Similar Triangles' },
  { id: 'm2e3', meet: 2, event: 3, category: 'Algebra I', topic: 'Linear Equations in One Variable' },
  { id: 'm2e4', meet: 2, event: 4, category: 'Trigonometry', topic: 'Equations & Graphs' },
  { id: 'm2e5', meet: 2, event: 5, category: 'Geometry', topic: 'Logic' },
  { id: 'm2e6', meet: 2, event: 6, category: 'Algebra II', topic: 'Absolute Values & Inequalities' },

  { id: 'm3e1', meet: 3, event: 1, category: 'Algebra II', topic: 'Exponents & Radicals' },
  { id: 'm3e2', meet: 3, event: 2, category: 'Geometry', topic: 'Right Triangles' },
  { id: 'm3e3', meet: 3, event: 3, category: 'Algebra I', topic: 'Age, Motion, & Number Problems' },
  { id: 'm3e4', meet: 3, event: 4, category: 'Trigonometry', topic: 'Inverse Functions including Triangles' },
  { id: 'm3e5', meet: 3, event: 5, category: 'Algebra I', topic: 'Operations with Polynomials' },
  { id: 'm3e6', meet: 3, event: 6, category: 'Algebra II', topic: 'Relations & Functions' },

  { id: 'm4e1', meet: 4, event: 1, category: 'Algebra II', topic: 'Exponents & Logarithms' },
  { id: 'm4e2', meet: 4, event: 2, category: 'Geometry', topic: 'Convex Polygons' },
  { id: 'm4e3', meet: 4, event: 3, category: 'Algebra I', topic: 'Factoring Expressions & Equations' },
  { id: 'm4e4', meet: 4, event: 4, category: 'Trigonometry', topic: 'Polar Coordinates & DeMoivre’s Theorem', years: 'even-odd' },
  { id: 'm4e4alt', meet: 4, event: 4, category: 'Calculus', topic: 'Limits & Derivatives', years: 'odd-even' },
  { id: 'm4e5', meet: 4, event: 5, category: 'Algebra I', topic: 'Linear Inequalities' },
  { id: 'm4e6', meet: 4, event: 6, category: 'Algebra II', topic: 'Complex Numbers' },

  { id: 'm5e1', meet: 5, event: 1, category: 'Algebra II', topic: 'Polynomial Equations' },
  { id: 'm5e2', meet: 5, event: 2, category: 'Geometry', topic: 'Circles with Arcs, Chords, Secants, & Tangents' },
  { id: 'm5e3', meet: 5, event: 3, category: 'Algebra I', topic: 'Systems of Linear Equations' },
  { id: 'm5e4', meet: 5, event: 4, category: 'Analytic Geometry', topic: 'Lines & Circles' },
  { id: 'm5e5', meet: 5, event: 5, category: 'Algebra I', topic: 'Equations with Decimals & Percents' },
  { id: 'm5e6', meet: 5, event: 6, category: 'Algebra II', topic: 'Matrices & Determinants' },

  { id: 'm6e1', meet: 6, event: 1, category: 'Algebra II', topic: 'Permutations & Combinations' },
  { id: 'm6e2', meet: 6, event: 2, category: 'Geometry', topic: 'Plane Coordinate Geometry' },
  { id: 'm6e3', meet: 6, event: 3, category: 'Algebra I', topic: 'Fractions & Mixed Expressions' },
  { id: 'm6e4', meet: 6, event: 4, category: 'Analytic Geometry', topic: 'Parabolas, Ellipses, & Hyperbolas' },
  { id: 'm6e5', meet: 6, event: 5, category: 'Geometry', topic: 'Arc Lengths & Circular Regions' },
  { id: 'm6e6', meet: 6, event: 6, category: 'Algebra II', topic: 'Arithmetic & Geometric Sequences & Series' },

  { id: 'm7e1', meet: 7, event: 1, category: 'Algebra II', topic: 'Probability' },
  { id: 'm7e2', meet: 7, event: 2, category: 'Geometry', topic: 'Surface Areas & Volumes of Solids' },
  { id: 'm7e3', meet: 7, event: 3, category: 'Algebra I', topic: 'Radical Operations' },
  { id: 'm7e4', meet: 7, event: 4, category: 'Calculus', topic: 'Integrals', years: 'even-odd' },
  { id: 'm7e4alt', meet: 7, event: 4, category: 'Analytic Geometry', topic: 'Vectors', years: 'odd-even' },
  { id: 'm7e5', meet: 7, event: 5, category: 'Algebra I', topic: 'Statistics' },
  { id: 'm7e6', meet: 7, event: 6, category: 'Algebra II', topic: 'Rational Functions' },
];

export const EVENT_BY_ID: Record<string, OmlEvent> = Object.fromEntries(OML_EVENTS.map((e) => [e.id, e]));

export function eventLabel(e: OmlEvent): string {
  return `Meet ${e.meet} · Event ${e.event}: ${e.category} – ${e.topic}`;
}

// Lazily load every bank file that exists. Missing events simply contribute no problems yet.
const BANK_FILES = import.meta.glob<{ default: OmlProblem[] }>('./bank/*.json');

export async function loadBank(): Promise<OmlProblem[]> {
  const sets = await Promise.all(Object.values(BANK_FILES).map((load) => load().then((m) => m.default)));
  return sets.flat();
}
