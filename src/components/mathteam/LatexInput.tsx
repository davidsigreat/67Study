import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Tex } from './MathText';

// Snippets inserted by the toolbar. "|" marks where the cursor lands afterwards.
const SNIPPETS: { label: string; tex: string; insert: string }[] = [
  { label: 'fraction', tex: '\\frac{a}{b}', insert: '\\frac{|}{}' },
  { label: 'square root', tex: '\\sqrt{x}', insert: '\\sqrt{|}' },
  { label: 'nth root', tex: '\\sqrt[n]{x}', insert: '\\sqrt[|]{}' },
  { label: 'power', tex: 'x^{n}', insert: '^{|}' },
  { label: 'subscript', tex: 'x_{n}', insert: '_{|}' },
  { label: 'plus-minus', tex: '\\pm', insert: '\\pm |' },
  { label: 'pi', tex: '\\pi', insert: '\\pi|' },
  { label: 'i', tex: 'i', insert: 'i|' },
  { label: 'degrees', tex: '^\\circ', insert: '^\\circ|' },
  { label: 'log base b', tex: '\\log_{b}', insert: '\\log_{|}' },
  { label: 'ln', tex: '\\ln', insert: '\\ln |' },
  { label: '≤', tex: '\\le', insert: '\\le |' },
  { label: '≥', tex: '\\ge', insert: '\\ge |' },
  { label: '≠', tex: '\\ne', insert: '\\ne |' },
  { label: 'infinity', tex: '\\infty', insert: '\\infty|' },
  { label: 'union', tex: '\\cup', insert: '\\cup |' },
  { label: 'theta', tex: '\\theta', insert: '\\theta|' },
  { label: 'cis', tex: '\\operatorname{cis}', insert: '\\operatorname{cis} |' },
  { label: 'set', tex: '\\{\\,\\}', insert: '\\{|\\}' },
  { label: 'abs', tex: '|x|', insert: '\\left||\\right|' },
];

export interface LatexInputHandle { focus: () => void }

interface Props {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

const LatexInput = forwardRef<LatexInputHandle, Props>(function LatexInput({ value, onChange, onSubmit, disabled }, ref) {
  const area = useRef<HTMLTextAreaElement>(null);
  useImperativeHandle(ref, () => ({ focus: () => area.current?.focus() }));

  const insert = (snippet: string) => {
    const el = area.current;
    if (!el) return;
    const start = el.selectionStart ?? value.length;
    const end = el.selectionEnd ?? value.length;
    const selected = value.slice(start, end);
    const cursorAt = snippet.indexOf('|');
    const text = snippet.replace('|', selected);
    const next = value.slice(0, start) + text + value.slice(end);
    onChange(next);
    const pos = start + (cursorAt >= 0 ? cursorAt + selected.length : text.length);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(pos, pos);
    });
  };

  return (
    <div className="mt-latex-input">
      <div className="mt-latex-toolbar" role="toolbar" aria-label="LaTeX shortcuts">
        {SNIPPETS.map((s) => (
          <button
            key={s.label}
            type="button"
            className="mt-latex-key"
            title={`${s.label}: ${s.insert.replace('|', '')}`}
            onClick={() => insert(s.insert)}
            disabled={disabled}
          >
            <Tex>{s.tex}</Tex>
          </button>
        ))}
      </div>
      <textarea
        ref={area}
        className="mt-latex-textarea"
        value={value}
        rows={2}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
        placeholder="LaTeX answer, e.g. \frac{3}{2} or 2\sqrt{5} (Enter to check)"
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSubmit();
          }
        }}
      />
      <div className="mt-latex-preview" aria-live="polite">
        <span className="mt-latex-preview-label">Preview</span>
        {value.trim() ? <Tex display>{value}</Tex> : <span className="mt-latex-preview-empty">your answer renders here</span>}
      </div>
    </div>
  );
});

export default LatexInput;
