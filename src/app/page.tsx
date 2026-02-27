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
import { references, recentLayoffs } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">

      {/* -- Header -- */}
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

      {/* -- Hero Counter -- */}
      <Counter />

      {/* -- Charts Grid -- */}
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

      {/* -- Recent Layoff Events Feed -- */}
      <section className="px-4 md:px-8 py-8 max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">
          Recent Confirmed Layoff Events
        </h2>
        <div className="chart-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b border-slate-800">
                <th className="pb-3 pr-6 font-medium">Company</th>
                <th className="pb-3 pr-6 font-medium">Sector</th>
                <th className="pb-3 pr-6 font-medium">Date</th>
                <th className="pb-3 pr-6 font-medium text-right">Jobs Cut</th>
                <th className="pb-3 font-medium text-center">AI Cited</th>
              </tr>
            </thead>
            <tbody>
              {recentLayoffs.map((row, i) => (
                <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 pr-6 font-medium text-white">{row.company}</td>
                  <td className="py-3 pr-6 text-slate-400">{row.sector}</td>
                  <td className="py-3 pr-6 text-slate-400">{row.date}</td>
                  <td className="py-3 pr-6 text-right font-mono text-amber-400">{row.count.toLocaleString()}</td>
                  <td className="py-3 text-center">
                    {row.aiCited
                      ? <span className="inline-block px-2 py-0.5 rounded-full bg-rose-900/50 text-rose-400 text-xs font-medium">Yes</span>
                      : <span className="inline-block px-2 py-0.5 rounded-full bg-slate-800 text-slate-500 text-xs font-medium">No</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* -- References -- */}
      <section className="px-4 md:px-8 py-8 max-w-7xl mx-auto border-t border-slate-800">
        <h2 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">
          Data Sources &amp; References
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
              <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">{ref.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* -- Legal Disclaimer -- */}
      <footer className="px-4 md:px-8 py-8 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-slate-600 font-semibold mb-3">Disclaimer</p>
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
            Data presented on this site is sourced exclusively from publicly available government, academic, and industry
            reports including the US Bureau of Labor Statistics, Challenger Gray &amp; Christmas, the Federal Reserve Economic
            Database (FRED), and independent research institutions. Job displacement figures represent announced layoffs in
            which AI or automation was cited as a contributing factor by the employer or as reported in verified news
            sources &mdash; they do not represent a comprehensive or definitive count of all AI-related workforce changes.
            The animated counter is a mathematical extrapolation based on the known 2025 annual run-rate and is not a
            real-time measurement. This site does not make predictions, projections, or recommendations regarding future
            employment outcomes. All data is provided for informational and educational purposes only.
            JobsLostLive.com is an independent informational resource and is not affiliated with, endorsed by, or sponsored
            by any government agency, employer, political organization, or research institution. While we strive for
            accuracy, figures may lag real-world conditions and should not be used as the sole basis for any financial,
            legal, or career decision. &copy; {new Date().getFullYear()} JobsLostLive.com &mdash; All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
