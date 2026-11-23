import { useState, useRef, KeyboardEvent } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import MathText, { hasMath } from '../MathText';

interface Props {
  room: string;
}

export default function MessageInput({ room }: Props) {
  const { user } = useAuth();
  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  async function send() {
    const trimmed = text.trim();
    if (!trimmed || !user || sending) return;
    setSending(true);
    setText('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
    try {
      await addDoc(collection(db, 'rooms', room, 'messages'), {
        text: trimmed,
        uid: user.uid,
        displayName: user.displayName ?? 'Anonymous',
        photoURL: user.photoURL ?? '',
        timestamp: Timestamp.now(),
      });
    } finally {
      setSending(false);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function handleInput() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 96)}px`;
  }

  const showPreview = hasMath(text);

  return (
    <div className="message-input-wrap">
    {showPreview && (
      <div className="message-math-preview" aria-live="polite">
        <span className="message-math-preview-label">Preview</span>
        <MathText text={text} />
      </div>
    )}
    <div className="message-input-row">
      <textarea
        ref={textareaRef}
        className="message-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        placeholder="Message… (Enter to send, Shift+Enter for newline, $x^2$ for math)"
        rows={1}
        disabled={sending}
      />
      <button
        className="send-btn"
        onClick={send}
        disabled={!text.trim() || sending}
        aria-label="Send message"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
      </button>
    </div>
    </div>
  );
}
