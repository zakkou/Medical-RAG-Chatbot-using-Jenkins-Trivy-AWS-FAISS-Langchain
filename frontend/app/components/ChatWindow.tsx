// app/components/ChatWindow.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

export type Message = { role: "user" | "assistant"; content: string };

export default function ChatWindow({ apiUrl, compact = false }: { apiUrl: string; compact?: boolean }) {
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("chat_history") || "[]");
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    localStorage.setItem("chat_history", JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend(text: string) {
    setError(null);
    const userMsg: Message = { role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setLoading(true);

    try {
      const resp = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text }),
      });

      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.error || JSON.stringify(data));
      }

      const answer = (data.answer ?? data.result ?? "No answer returned").toString();
      setMessages((m) => [...m, { role: "assistant", content: answer }]);
    } catch (err: unknown) {
      console.error("Chat error:", err);
      setError(String(err));
      setMessages((m) => [...m, { role: "assistant", content: "Error: " + String(err) }]);
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessages([]);
    localStorage.removeItem("chat_history");
  }

  return (
    <div className={`flex flex-col h-full ${compact ? "text-sm" : ""}`}>
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {messages.length === 0 && (
          <div className="text-center text-slate-400 mt-12 px-4">
            <div className="font-semibold mb-1">Hi — I can help answer questions about your medical documents.</div>
            <div className="text-xs">Try: “Summarize the latest clinical guideline” or “What are the drug interactions for X?”</div>
          </div>
        )}

        <div className="space-y-3 px-1">
          {messages.map((m, i) => (
            <MessageBubble key={i} msg={m} />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* error */}
      {error && <div className="text-xs text-red-600 p-2">{error}</div>}

      {/* typing indicator */}
      <div className="p-2">
        <div className="flex items-center justify-between mb-1">
          <div className="text-[11px] text-slate-400">Local chat</div>
          <div className="text-[11px] text-slate-400">{loading ? "Thinking..." : "Ready"}</div>
        </div>

        <div className="bg-white rounded-lg shadow-inner">
          <ChatInput onSend={handleSend} loading={loading} />
        </div>

        <div className="mt-2 flex justify-between text-[11px] text-slate-400">
          <div>Model: {process.env.NEXT_PUBLIC_BACKEND_MODEL ?? "server"}</div>
          <div>
            <button onClick={clearChat} className="underline">Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}
