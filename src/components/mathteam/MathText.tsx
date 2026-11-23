import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/** Markdown + $LaTeX$ — used for problem statements. */
export function MathMarkdown({ children }: { children: string }) {
  return (
    <div className="mt-problem-text">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
        {children}
      </ReactMarkdown>
    </div>
  );
}

/** Render a bare LaTeX string (no $ delimiters). Falls back to raw text on parse errors. */
export function Tex({ children, display = false }: { children: string; display?: boolean }) {
  const html = katex.renderToString(children, { throwOnError: false, displayMode: display, strict: false });
  return <span className="mt-tex" dangerouslySetInnerHTML={{ __html: html }} />;
}
