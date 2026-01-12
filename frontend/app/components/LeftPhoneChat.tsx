// app/components/LeftPhoneChat.tsx
"use client";
import React from "react";
import ChatWindow from "./ChatWindow";

export default function LeftPhoneChat({ apiUrl }: { apiUrl: string }) {
  return (
    <div className="w-full max-w-sm">
      <div className="mx-auto">
        {/* Phone frame */}
        <div className="relative bg-black/5 rounded-3xl p-4 shadow-xl" style={{ width: 360 }}>
          {/* Top speaker + camera */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 w-28 h-2 bg-black/10 rounded-full"></div>
          <div className="h-[640px] bg-gradient-to-b from-slate-50 to-white rounded-2xl overflow-hidden border border-slate-100">
            <div className="p-3 h-full flex flex-col">
              {/* header inside phone */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">MD</div>
                  <div>
                    <div className="text-sm font-medium">MedAssist Bot</div>
                    <div className="text-xs text-slate-400">Your doc-aware assistant</div>
                  </div>
                </div>
                <div className="text-xs text-slate-400">Online</div>
              </div>

              {/* Chat window client component */}
              <div className="flex-1 overflow-hidden">
                <ChatWindow apiUrl={apiUrl} compact />
              </div>

              {/* footer note */}
              <div className="mt-2 text-[11px] text-slate-400 text-center">
                Answers come from your uploaded medical documents and general medical knowledge. Not a substitute for professional care.
              </div>
            </div>
          </div>

          {/* phone bottom bezel */}
          <div className="mt-3 h-4 flex items-center justify-center">
            <div className="w-14 h-1 bg-black/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
