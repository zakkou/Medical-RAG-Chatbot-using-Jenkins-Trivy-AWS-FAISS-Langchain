// app/page.tsx
import React from "react";
import LeftPhoneChat from "./components/LeftPhoneChat";
import MainContent from "./components/MainContent";

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left: phone chat (col span 4 on large screens) */}
      <div className="lg:col-span-4 flex justify-center">
        <LeftPhoneChat apiUrl={apiUrl} />
      </div>

      {/* Right: main content (col span 8) */}
      <div className="lg:col-span-8">
        <MainContent />
      </div>
    </div>
  );
}
