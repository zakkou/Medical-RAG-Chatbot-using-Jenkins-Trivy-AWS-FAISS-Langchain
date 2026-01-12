// app/components/MessageBubble.tsx
"use client";
import React from "react";
import { Copy } from "lucide-react";

export default function MessageBubble({ msg }: { msg: { role: "user" | "assistant"; content: string } }) {
  const isUser = msg.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} px-2`}>
      <div
        className={`relative max-w-[78%] break-words p-3 rounded-2xl shadow-sm ${
          isUser ? "bg-blue-600 text-white rounded-br-lg" : "bg-white text-slate-800 rounded-bl-lg"
        }`}
        style={{ whiteSpace: "pre-wrap" }}
      >
        <div className="flex gap-2 items-start">
          <div className="flex-1">{msg.content}</div>
          <button
            aria-label="Copy message"
            className="p-1 opacity-60 hover:opacity-100"
            onClick={() => navigator.clipboard?.writeText(msg.content)}
          >
            <Copy size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
