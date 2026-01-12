// app/components/Header.tsx
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
            MD
          </div>
          <div>
            <div className="text-lg font-semibold">MedAssist</div>
            <div className="text-xs text-slate-500 -mt-0.5">Document-aware medical assistant</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <Link href="#welcome" className="hover:text-slate-900">Welcome</Link>
          <Link href="#advice" className="hover:text-slate-900">Advice</Link>
          <Link href="#usecases" className="hover:text-slate-900">Use cases</Link>
          <Link href="#diagnoses" className="hover:text-slate-900">Diagnoses</Link>
          <Link href="#contact" className="py-2 px-4 bg-blue-600 text-white rounded-lg shadow-sm hover:brightness-95">Get started</Link>
        </nav>
      </div>
    </header>
  );
}
