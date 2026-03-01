"use client";
import { useEffect, useState } from "react";
import { COUNTER_BASELINE, COUNTER_BASELINE_DATE, PER_SECOND_RATE } from "@/lib/data";

export default function Counter() {
  const [count, setCount] = useState(COUNTER_BASELINE);

  useEffect(() => {
    const now = new Date();
    const secondsElapsed = (now.getTime() - COUNTER_BASELINE_DATE.getTime()) / 1000;
    const initial = Math.floor(COUNTER_BASELINE + secondsElapsed * PER_SECOND_RATE);
    setCount(initial);

    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, Math.floor(1000 / PER_SECOND_RATE));

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-16 px-4 border-b border-slate-800">
      <p className="stat-label mb-3">US Jobs Lost to AI — 2025 YTD (Confirmed)</p>
      <div className="ticker-num text-6xl md:text-8xl font-bold text-sky-400 tabular-nums tracking-tight">
        {count.toLocaleString()}
      </div>
      <p className="mt-4 text-slate-400 text-sm max-w-xl mx-auto">
        Extrapolated from confirmed AI-cited layoff announcements at the 2025 annual run rate of ~270,000/yr.
        Counter resets to verified baseline monthly.
      </p>
      <div className="mt-6 flex justify-center gap-8 text-sm">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">158.2M</div>
          <div className="stat-label mt-1">Total US Employed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">4.1%</div>
          <div className="stat-label mt-1">Unemployment Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-rose-400">270K</div>
          <div className="stat-label mt-1">AI Layoffs Est. 2025</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-400">62.5%</div>
          <div className="stat-label mt-1">Labor Participation</div>
        </div>
      </div>
    </div>
  );
}
