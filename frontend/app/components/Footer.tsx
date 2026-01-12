// app/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <div>© {new Date().getFullYear()} MedAssist — Built with care</div>
        <div className="mt-3 md:mt-0">
          <a className="mr-4 hover:text-slate-700" href="#">Privacy</a>
          <a className="hover:text-slate-700" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
