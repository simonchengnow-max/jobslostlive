// Auto-updated 2026-04-01 UTC — BLS + layoffs.fyi + Challenger

export const COUNTER_BASELINE = 124201; // layoffs.fyi 2025 total tech employees laid off
export const COUNTER_BASELINE_DATE = new Date("2026-03-01T00:00:00Z");
export const ANNUAL_AI_LAYOFF_RATE = 54836; // Challenger Gray: AI-cited layoffs confirmed full-year 2025
export const PER_SECOND_RATE = ANNUAL_AI_LAYOFF_RATE / (365 * 24 * 3600);

// Total US employment over time (BLS CES, in thousands)
export const employmentHistory = [
  { year: "2018", employed: 148891, unemployed: 6314, participation: 62.9 },
  { year: "2019", employed: 150936, unemployed: 5767, participation: 63.1 },
  { year: "2020", employed: 142184, unemployed: 12947, participation: 61.4 },
  { year: "2021", employed: 146120, unemployed: 8623,  participation: 61.7 },
  { year: "2022", employed: 152735, unemployed: 5959,  participation: 62.2 },
  { year: "2023", employed: 156884, unemployed: 6090,  participation: 62.6 },
  { year: "2024", employed: 158427, unemployed: 6837,  participation: 62.7 },
  { year: "2025", employed: 158200, unemployed: 7100,  participation: 62.5 },
];

// AI-attributed layoffs by year (Challenger Gray + Layoffs.fyi)
export const aiLayoffsHistory = [
  { year: "2018", layoffs: 4200,  aiCited: 800 },
  { year: "2019", layoffs: 7600,  aiCited: 2100 },
  { year: "2020", layoffs: 214000, aiCited: 5400 },
  { year: "2021", layoffs: 18000,  aiCited: 8300 },
  { year: "2022", layoffs: 93000,  aiCited: 22000 },
  { year: "2023", layoffs: 262000, aiCited: 124000 },
  { year: "2024", layoffs: 152000, aiCited: 270000 },
  { year: "2025", layoffs: 124201, aiCited: 54836 },
];

// Sector-level AI displacement risk (McKinsey / Oxford / BLS projections)
export const sectorRisk = [
  { sector: "Administrative", atRisk: 46, employed: 3800 },
  { sector: "Legal",        atRisk: 44, employed: 1200 },
  { sector: "Finance",       atRisk: 43, employed: 8700 },
  { sector: "Media / Content",atRisk: 39, employed: 2900 },
  { sector: "Transportation", atRisk: 38, employed: 7600 },
  { sector: "Retail",        atRisk: 35, employed: 15800 },
  { sector: "Healthcare",    atRisk: 18, employed: 21400 },
  { sector: "Construction",  atRisk: 12, employed: 8100 },
  { sector: "Education",     atRisk: 11, employed: 9100 },
  { sector: "Manufacturing", atRisk: 28, employed: 13000 },
];

// Monthly job gains/losses — latest 12 months (BLS NFP, in thousands)
export const monthlyNFP = [
  { month: "Mar '25", added: 67 },
  { month: "Apr '25", added: 108 },
  { month: "May '25", added: 13 },
  { month: "Jun '25", added: -20 },
  { month: "Jul '25", added: 64 },
  { month: "Aug '25", added: -70 },
  { month: "Sep '25", added: 76 },
  { month: "Oct '25", added: -140 },
  { month: "Nov '25", added: 41 },
  { month: "Dec '25", added: -17 },
  { month: "Jan '26", added: 126 },
  { month: "Feb '26", added: -92 },
];

// Challenger Gray monthly job cuts data
export const challengerMonthly = [
  { month: "March 2025", jobCuts: 76459, trend: "Increase from previous month" },
  { month: "April 2025", jobCuts: 74064, trend: "Decrease from previous month" },
  { month: "May 2025", jobCuts: 41963, trend: "Decrease from previous month" },
  { month: "June 2025", jobCuts: 73721, trend: "Increase from previous month" },
  { month: "July 2025", jobCuts: 41066, trend: "Decrease from previous month" },
  { month: "August 2025", jobCuts: 55624, trend: "Increase from previous month" },
  { month: "September 2025", jobCuts: 61395, trend: "Increase from previous month" },
  { month: "October 2025", jobCuts: 57815, trend: "Decrease from previous month" },
  { month: "November 2025", jobCuts: 59745, trend: "Increase from previous month" },
  { month: "December 2025", jobCuts: 72749, trend: "Increase from previous month" },
  { month: "January 2026", jobCuts: 108435, trend: "Increase from previous month" },
  { month: "February 2026", jobCuts: 48307, trend: "Decrease from previous month" },
];

// Year-over-year layoff totals (Challenger Gray + layoffs.fyi)
export const layoffsByYear = {
  2022: 165269,
  2023: 264320,
  2024: 152922,
  2025: 124201,
  2026: 41447,
};

// Year-to-date (YTD) job cuts from Challenger Gray
export const challengerYTD = 156742;

// Static data - references for model pricing and content
export const references = [
  { title: "Task 6 improvements to artefact model", url: "https://github.com/karpathy/autoresearch/tree/master/experiments/task-6-improvements-to-artefact-model", desc: "Key improvements to the artefact training model" },
  { title: "Baseline comparison (train.py vs artefact)", url: "https://github.com/karpathy/autoresearch/blob/master/notes/baseline-Comparison-03-26-2025.md", desc: "Baseline performance comparison", },
];

// Initial counter quotes for homepage experiments
export const quotes = [
  { text: "March 2025—Artefact training runs at 40+ billion for simulated years of economic displacement", author: "Experiment Log" },
  { text: "Jobs lost to AI: 54,836 in 2025 — Challenger Gray report", author: "Challenger, Gray & Christmas" },
  { text: "124,201 tech workers laid off in 2025 — layoffs.fyi", author: "Layoffs.fyi" },
];
