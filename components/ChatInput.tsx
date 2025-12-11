import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Sparkles } from 'lucide-react';

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [text]);

  const handleSend = () => {
    if (text.trim() && !disabled) {
      onSend(text);
      setText('');
      if (textareaRef.current) textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-6">
      <div className="relative flex items-end gap-2 bg-white p-2 rounded-xl border border-slate-300 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
        
        <button
          className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors"
          title="Attach file (Not implemented in demo)"
          aria-label="Attach file"
          disabled={disabled}
        >
          <Paperclip size={20} aria-hidden="true" />
        </button>

        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask ICIScopilot about your research paper, methodology, or analysis..."
          aria-label="Chat input"
          className="flex-1 max-h-[120px] py-3 bg-transparent border-none focus:ring-0 resize-none text-slate-800 placeholder:text-slate-400 text-sm leading-relaxed"
          rows={1}
          disabled={disabled}
        />

        <button
          onClick={handleSend}
          disabled={!text.trim() || disabled}
          aria-label={disabled ? "Processing..." : "Send message"}
          className={`p-3 rounded-lg flex items-center justify-center transition-all
            ${text.trim() && !disabled
              ? 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700'
              : 'bg-slate-100 text-slate-300 cursor-not-allowed'
            }`}
        >
          {disabled ? (
             <Sparkles size={20} className="animate-pulse" aria-hidden="true" />
          ) : (
             <Send size={20} aria-hidden="true" />
          )}
        </button>
      </div>
      <div className="text-center mt-2">
        <p className="text-[10px] text-slate-400">
          ICIScopilot can make mistakes. Please verify all research decisions, citations, and empirical results.
        </p>
      </div>
    </div>
  );
};

export default ChatInput;