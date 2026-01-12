// app/layout.tsx
import "./globals.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Medical RAG Chatbot",
  description: "Medical assistant powered by your documents",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-50 to-white min-h-screen antialiased text-slate-900">
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
