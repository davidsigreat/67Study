import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Fragment } from 'react';
import { splitMath } from '../lib/mathSplit';

export { splitMath, hasMath } from '../lib/mathSplit';

// Renders plain text (chat messages, quiz questions, search snippets) with
// KaTeX for the math inside it:
//   $…$  or  \(…\)    inline math
//   $$…$$ or  \[…\]   display math
//   \$                a literal dollar sign
//
// Dollar amounts are left alone: like Pandoc, an opening `$` must be followed by
// a non-space and a closing `$` must follow a non-space and not be followed by a
// digit, so "$5 and $10" stays text while "$x^2$" becomes math.

function renderMath(value: string, display: boolean): string | null {
  try {
    return katex.renderToString(value, { displayMode: display, throwOnError: true, strict: false });
  } catch {
    return null; // invalid LaTeX → show it as typed
  }
}

/** Text with inline/display KaTeX. `inline` renders display math inline too (for one-line snippets). */
export default function MathText({ text, inline = false }: { text: string; inline?: boolean }) {
  const pieces = splitMath(text);
  return (
    <>
      {pieces.map((p, k) => {
        if (p.kind === 'text') return <Fragment key={k}>{p.value}</Fragment>;
        const display = p.display && !inline;
        const html = renderMath(p.value, display);
        if (html === null) return <Fragment key={k}>{p.display ? `$$${p.value}$$` : `$${p.value}$`}</Fragment>;
        return <span key={k} className={display ? 'math-display' : 'math-inline'} dangerouslySetInnerHTML={{ __html: html }} />;
      })}
    </>
  );
}
