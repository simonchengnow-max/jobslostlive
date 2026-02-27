"use client";

import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  ComposedChart, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ReferenceLine,
} from "recharts";

import {
  employmentHistory,
  aiLayoffsHistory,
  sectorRisk,
  monthlyNFP,
  wageVsInflation,
  jolts,
  participationByAge,
} from "@/lib/data";

const GRID  = "#1e293b";
const AXIS  = "#475569";
const TIP   = { contentStyle: { backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: 8, color: "#e2e8f0" } };

function ChartCard({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="chart-card flex flex-col gap-4">
      <div>
        <h2 className="text-base font-semibold text-white">{title}</h2>
        {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
      </div>
      <div className="w-full h-64">{children}</div>
    </div>
  );
}

// 1. Total employment vs unemployment over time
export function EmploymentTrendChart() {
  return (
    <ChartCard title="US Total Employment vs Unemployment" subtitle="Bureau of Labor Statistics — millions of workers">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={employmentHistory} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="empGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="uempGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="year" tick={{ fill: AXIS, fontSize: 11 }} />
          <YAxis tick={{ fill: AXIS, fontSize: 11 }} tickFormatter={v => `${(v/1000).toFixed(0)}M`} />
          <Tooltip {...TIP} formatter={(v: number) => [`${(v/1000).toFixed(1)}M`, ""]} />
          <Legend wrapperStyle={{ fontSize: 12, color: "#94a3b8" }} />
          <Area type="monotone" dataKey="employed" name="Employed" stroke="#0ea5e9" fill="url(#empGrad)" strokeWidth={2} dot={false} />
          <Area type="monotone" dataKey="unemployed" name="Unemployed" stroke="#f59e0b" fill="url(#uempGrad)" strokeWidth={2} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 2. AI-cited layoffs vs total layoffs over time
export function AILayoffsChart() {
  return (
    <ChartCard title="AI-Cited Layoffs vs Total Layoffs" subtitle="Challenger Gray & Christmas + Layoffs.fyi — annual figures">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={aiLayoffsHistory} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="year" tick={{ fill: AXIS, fontSize: 11 }} />
          <YAxis tick={{ fill: AXIS, fontSize: 11 }} tickFormatter={v => `${(v/1000).toFixed(0)}K`} />
          <Tooltip {...TIP} formatter={(v: number) => [`${v.toLocaleString()}`, ""]} />
          <Legend wrapperStyle={{ fontSize: 12, color: "#94a3b8" }} />
          <Bar dataKey="layoffs" name="Total Layoffs" fill="#334155" radius={[4,4,0,0]} />
          <Bar dataKey="aiCited" name="AI-Cited" fill="#f43f5e" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 3. Monthly job gains vs AI losses (NFP)
export function MonthlyNFPChart() {
  return (
    <ChartCard title="Monthly Jobs Added vs AI-Cited Losses" subtitle="BLS Non-Farm Payrolls — thousands of jobs">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={monthlyNFP} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="month" tick={{ fill: AXIS, fontSize: 10 }} />
          <YAxis tick={{ fill: AXIS, fontSize: 11 }} tickFormatter={v => `${v}K`} />
          <Tooltip {...TIP} formatter={(v: number) => [`${v}K`, ""]} />
          <Legend wrapperStyle={{ fontSize: 12, color: "#94a3b8" }} />
          <ReferenceLine y={0} stroke="#475569" />
          <Bar dataKey="added" name="Jobs Added" fill="#22c55e" radius={[4,4,0,0]} />
          <Bar dataKey="aiLost" name="AI-Cited Lost" fill="#f43f5e" radius={[4,4,0,0]} />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 4. Sector automation risk
export function SectorRiskChart() {
  return (
    <ChartCard title="Automation Risk by Sector" subtitle="% of jobs at high AI displacement risk — McKinsey / Oxford projections">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sectorRisk} layout="vertical" margin={{ top: 4, right: 32, left: 80, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} horizontal={false} />
          <XAxis type="number" tick={{ fill: AXIS, fontSize: 11 }} tickFormatter={v => `${v}%`} domain={[0, 50]} />
          <YAxis type="category" dataKey="sector" tick={{ fill: "#94a3b8", fontSize: 11 }} width={80} />
          <Tooltip {...TIP} formatter={(v: number) => [`${v}%`, "At Risk"]} />
          <Bar dataKey="atRisk" name="At Risk %" radius={[0,4,4,0]}
            fill="#f59e0b"
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 5. Wage growth vs inflation
export function WageInflationChart() {
  return (
    <ChartCard title="Wage Growth vs Inflation" subtitle="BLS Average Hourly Earnings vs CPI — annual % change">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={wageVsInflation} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="year" tick={{ fill: AXIS, fontSize: 11 }} />
          <YAxis tick={{ fill: AXIS, fontSize: 11 }} tickFormatter={v => `${v}%`} />
          <Tooltip {...TIP} formatter={(v: number) => [`${v}%`, ""]} />
          <Legend wrapperStyle={{ fontSize: 12, color: "#94a3b8" }} />
          <Line type="monotone" dataKey="wageGrowth" name="Wage Growth" stroke="#22c55e" strokeWidth={2} dot={{ r: 4, fill: "#22c55e" }} />
          <Line type="monotone" dataKey="inflation" name="Inflation (CPI)" stroke="#f43f5e" strokeWidth={2} dot={{ r: 4, fill: "#f43f5e" }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 6. Job openings vs seekers (JOLTS)
export function JOLTSChart() {
  return (
    <ChartCard title="Job Openings vs Unemployed Seekers" subtitle="BLS JOLTS — millions (gap closing signals tightening labor market)">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={jolts} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="openGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="seekGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="month" tick={{ fill: AXIS, fontSize: 10 }} />
          <YAxis tick={{ fill: AXIS, fontSize: 11 }} tickFormatter={v => `${v}M`} domain={[4, 12]} />
          <Tooltip {...TIP} formatter={(v: number) => [`${v}M`, ""]} />
          <Legend wrapperStyle={{ fontSize: 12, color: "#94a3b8" }} />
          <Area type="monotone" dataKey="openings" name="Job Openings" stroke="#0ea5e9" fill="url(#openGrad)" strokeWidth={2} dot={false} />
          <Area type="monotone" dataKey="seekers" name="Unemployed Seekers" stroke="#f59e0b" fill="url(#seekGrad)" strokeWidth={2} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 7. Labor force participation by age
export function ParticipationChart() {
  return (
    <ChartCard title="Labor Force Participation by Age Group" subtitle="BLS — % of population actively working or seeking work (2025)">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={participationByAge} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="group" tick={{ fill: AXIS, fontSize: 11 }} />
          <YAxis tick={{ fill: AXIS, fontSize: 11 }} tickFormatter={v => `${v}%`} domain={[0, 100]} />
          <Tooltip {...TIP} formatter={(v: number) => [`${v}%`, "Participation Rate"]} />
          <Bar dataKey="rate" name="Participation Rate" fill="#818cf8" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 8. AI displacement as % of total job pool over time
export function DisplacementRateChart() {
  const data = aiLayoffsHistory.map((d, i) => ({
    year: d.year,
    rate: +((d.aiCited / (employmentHistory[i]?.employed || 158000)) * 100).toFixed(3),
  }));

  return (
    <ChartCard title="AI Displacement as % of Total US Job Pool" subtitle="AI-cited layoffs divided by total employed — shows scale relative to workforce">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="dispGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey="year" tick={{ fill: AXIS, fontSize: 11 }} />
          <YAxis tick={{ fill: AXIS, fontSize: 11 }} tickFormatter={v => `${v}%`} />
          <Tooltip {...TIP} formatter={(v: number) => [`${v}%`, "Displacement Rate"]} />
          <Area type="monotone" dataKey="rate" name="Displacement %" stroke="#f43f5e" fill="url(#dispGrad)" strokeWidth={2} dot={{ r: 4, fill: "#f43f5e" }} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
