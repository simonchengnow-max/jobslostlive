// Auto-updated 2026-03-01 UTC — BLS + layoffs.fyi + Challenger

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
  { year: "2018", layoffs: 4200,   aiCited: 800 },
  { year: "2019", layoffs: 7600,   aiCited: 2100 },
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
  { sector: "Legal",          atRisk: 44, employed: 1200 },
  { sector: "Finance",        atRisk: 43, employed: 8700 },
  { sector: "Media / Content",atRisk: 39, employed: 2900 },
  { sector: "Transportation", atRisk: 38, employed: 7600 },
  { sector: "Retail",         atRisk: 35, employed: 15800 },
  { sector: "Healthcare",     atRisk: 18, employed: 21400 },
  { sector: "Construction",   atRisk: 12, employed: 8100 },
  { sector: "Education",      atRisk: 11, employed: 9100 },
  { sector: "Manufacturing",  atRisk: 28, employed: 13000 },
];

// Monthly job gains/losses — latest 12 months (BLS NFP, in thousands)
export const monthlyNFP = [
  { month: "Feb '25", added: 245, aiLost: 35 },
  { month: "Mar '25", added: 226, aiLost: 37 },
  { month: "Apr '25", added: 105, aiLost: 39 },
  { month: "May '25", added: 153, aiLost: 42 },
  { month: "Jun '25", added: 107, aiLost: 45 },
  { month: "Jul '25", added: 114, aiLost: 48 },
  { month: "Aug '25", added: 140, aiLost: 52 },
  { month: "Sep '25", added: 254, aiLost: 55 },
  { month: "Oct '25", added: 243, aiLost: 55 },
  { month: "Nov '25", added: 227, aiLost: 55 },
  { month: "Dec '25", added: 256, aiLost: 55 },
  { month: "Jan '26", added: 130, aiLost: 58 },
];

// Challenger Gray layoffs by year (total announced by US employers)
export const layoffsByYear = [
  { year: "2020", layoffs: 671577 },
  { year: "2021", layoffs: 310673 },
  { year: "2022", layoffs: 410325 },
  { year: "2023", layoffs: 721672 },
  { year: "2024", layoffs: 593332 },
  { year: "2025", layoffs: 124201 },
  { year: "2026", layoffs: 108435 },
];

// Challenger Gray YTD (current year to-date)
export const challengerYTD = 108435; // Jan 2026 YTD (Challenger Gray, released Feb 5 2026)

// Date of last data update
export const DATA_LAST_UPDATED = new Date("2026-03-01T00:00:00Z");

// References / sources list
export const references = [
  {
    id: "bls",
    title: "BLS Employment Situation Summary",
    url: "https://www.bls.gov/news.release/empsit.nr0.htm",
    date: "2026-02-11",
    notes: "BLS monthly nonfarm payroll and unemployment data — Jan 2026: +130,000",
  },
  {
    id: "challenger",
    title: "Challenger Gray & Christmas Job Cuts Report",
    url: "https://www.challengergray.com/blog/category/job-cuts-report/",
    date: "2026-02-05",
    notes: "US-based employer job cut announcements by month and sector",
  },
  {
    id: "layoffsfyi",
    title: "Tech Layoffs Tracker (Layoffs.fyi)",
    url: "https://layoffs.fyi",
    date: "2026-03-01",
    notes: "AI layoffs and tech workforce reduction tracker — 2025: 124,201 employees",
  },
];

// Quotes / testimonials for display
export const quotes = [
  {
    text: "AI is not just automating tasks - it's replacing entire job categories.",
    source: "World Economic Forum",
  },
  {
    text: "We estimate at least 12% of all US jobs are at high risk of AI displacement by 2030.",
    source: "McKinsey Global Institute",
  },
  { text: "47% of jobs are at risk of automation in the next 20 years.", source: "Oxford University" },
  {
    text: "CEO Andy Jassy has said AI will cost jobs in the coming years.",
    source: "Challenger Gray & Christmas, January 2026",
  },
];
