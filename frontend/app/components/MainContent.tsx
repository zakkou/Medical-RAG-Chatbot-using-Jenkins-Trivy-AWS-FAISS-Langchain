// app/components/MainContent.tsx
import React from "react";

function SmallCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="text-sm text-slate-600">{children}</div>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <section id="welcome" className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Welcome to MedAssist</h1>
            <p className="mt-2 text-sm max-w-xl">Ask questions about your uploaded medical documents — summaries, contraindications, dosing, and more. Use responsibly.</p>
          </div>

          <div className="mt-4 md:mt-0">
            <a href="#usecases" className="inline-block bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">Explore Use Cases</a>
          </div>
        </div>
      </section>

      {/* Advice & Quick actions */}
      <section id="advice" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SmallCard title="Quick Advice">
          <ul className="list-disc ml-4 space-y-1">
            <li>Always confirm critical decisions with a clinician.</li>
            <li>Check drug interactions manually for high-risk meds.</li>
            <li>Use the chat for summarization and literature extraction.</li>
          </ul>
        </SmallCard>

        <SmallCard title="Top Suggestions">
          <ol className="list-decimal ml-4 space-y-1">
            <li>“Summarize section X from the guideline.”</li>
            <li>“List contraindications for drug Y.”</li>
            <li>“Compare protocols A vs B in these docs.”</li>
          </ol>
        </SmallCard>

        <SmallCard title="Safety Notice">
          This tool provides information based on documents and models. It is not a replacement for professional medical judgment.
        </SmallCard>
      </section>

      {/* Use cases */}
      <section id="usecases">
        <h2 className="text-lg font-semibold mb-3">Use cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SmallCard title="Clinical Summaries">
            Extract concise clinical summaries from long documents: guidelines, patient reports, research papers.
          </SmallCard>
          <SmallCard title="Drug Safety Checks">
            Quickly list potential drug interactions or safety flags from a corpus of drug monographs.
          </SmallCard>
          <SmallCard title="Protocol Comparison">
            Compare treatment protocols side-by-side and surface differences and evidence levels.
          </SmallCard>
          <SmallCard title="Interview Prep">
            Generate interview-style questions from a candidates medical/clinical CV (for hiring).
          </SmallCard>
        </div>
      </section>

      {/* Diagnoses & triage samples */}
      <section id="diagnoses">
        <h2 className="text-lg font-semibold mb-3">Diagnoses & triage (examples)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SmallCard title="Symptom-based suggestions">
            The assistant can extract red flags and recommend urgent evaluation if protocols indicate.
          </SmallCard>
          <SmallCard title="Differential generation">
            Provide a prioritized differential diagnosis from findings described in a note.
          </SmallCard>
          <SmallCard title="Next-step recommendations">
            Suggest reasonable next-steps (labs, imaging) but always verify clinically.
          </SmallCard>
        </div>
      </section>

    </div>
  );
}
