"use client";

import Counter from "@/components/Counter";
import {
  EmploymentTrendChart,
  AILayoffsChart,
  MonthlyNFPChart,
  SectorRiskChart,
  WageInflationChart,
  JOLTSChart,
  ParticipationChart,
  DisplacementRateChart,
} from "@/components/Charts";
import { references } from "@/lib/data";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">

      {/* ── Header ── */}
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div>
          <span className="text-lg font-bold tracking-tight text-white">JobsLost<span className="text-sky-400">Live</span></span>
          <span className="ml-3 text-xs text-slate-500 uppercase tracking-widest">US Labor Market Intelligence</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-400">Live Data</span>
        </div>
      </header>

      {/* ── Hero Counter ── */}
      <Counter />

      {/* ── Charts Grid ── */}
      <section className="px-4 md:px-8 py-10 max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6">
          US Labor Market — Full Picture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EmploymentTrendChart />
          <AILayoffsChart />
          <DisplacementRateChart />
          <MonthlyNFPChart />
          <SectorRiskChart />
          <WageInflationChart />
          <JOLTSChart />
          <ParticipationChart />
        </div>
      </section>


      {/* ── References ── */}
      <section className="px-4 md:px-8 py-8 max-w-7xl mx-auto border-t border-slate-800">
        <h2 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">
          Data Sources & References
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {references.map((ref, i) => (
            <a
              key={i}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-700 transition-colors group"
            >
              <span className="text-sky-600 group-hover:text-sky-400 mt-0.5 text-xs">&#8599;</span>
              <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">{ref.title}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-4 md:px-8 py-8 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-slate-600 font-semibold mb-3">Disclaimer</p>
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
            JobsLostLive aggregates publicly available layoff data. User stories reflect personal experiences and may not be verified.
            No legal, financial, or career advice is provided. Do not rely on this site as your sole source for decisions.
            Data is sourced from public reports and may be incomplete or delayed.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-600">
            <span>&copy; {new Date().getFullYear()} JobsLostLive.com. All rights reserved.</span>
            <a href="/terms" className="hover:text-slate-400 transition-colors">Terms of Use</a>
            <a href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="mailto:simon@realcapitolhill.com" className="hover:text-slate-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      <CookieBanner />

    </main>
  );
}
