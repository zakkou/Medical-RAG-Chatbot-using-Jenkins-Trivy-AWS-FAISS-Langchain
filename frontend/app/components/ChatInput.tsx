// app/components/ChatInput.tsx
"use client";
import React, { useState } from "react";

export default function ChatInput({ onSend, loading }: { onSend: (t: string) => void; loading: boolean }) {
  const [text, setText] = useState("");

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!text.trim() || loading) return;
    onSend(text.trim());
    setText("");
  }

  return (
    <form onSubmit={submit} className="p-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="Type your question (ex: 'What are the main risk factors in this document?')"
        className="w-full p-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            submit();
            e.preventDefault();
          }
        }}
      />
      <div className="mt-2 flex items-center justify-between">
        <div className="text-xs text-slate-400">Shift+Enter for newline</div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>
    </form>
  );
}
