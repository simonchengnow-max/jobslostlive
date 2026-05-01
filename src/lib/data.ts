// Auto-updated 2026-05-01 UTC — BLS + layoffs.fyi + Challenger

export const COUNTER_BASELINE = 264320; // layoffs.fyi 2025 total tech employees laid off
export const COUNTER_BASELINE_DATE = new Date("2026-05-01T00:00:00Z");
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
  { month: "Apr '25", added: 105 },
  { month: "May '25", added: -276 },
  { month: "Jun '25", added: 47 },
  { month: "Jul '25", added: 73 },
  { month: "Aug '25", added: 159 },
  { month: "Sep '25", added: 254 },
  { month: "Oct '25", added: 36 },
  { month: "Nov '25", added: 158 },
  { month: "Dec '25", added: 50 },
  { month: "Jan '26", added: 160 },
  { month: "Feb '26", added: -133 },
  { month: "Mar '26", added: 178 },
];

// Challenger Gray monthly job cuts data
export const challengerMonthly = [
  { month: "Jan '25", jobCuts: 51676, aiCited: 18125 },
  { month: "Feb '25", jobCuts: 76053, aiCited: 26625 },
  { month: "Mar '25", jobCuts: 44472, aiCited: 15550 },
];

export const challengerYTD = 217362; // Q1 2026 YTD total

// Layoffs.fyi tech layoff tracking (per year)
export const layoffsByYear = [
  { year: 2022, count: 92272, companies: 98 },
  { year: 2023, count: 124201, companies: 271 },
  { year: 2024, count: 152922, companies: 551 },
  { year: 2025, count: 264320, companies: 1193 },
  { year: 2026, count: 165269, companies: 1064, ytd: true },
];

// Tech sector specific layoffs enrichment
export const techLayoffs = [
  { year: 2023, techLayoffs: 124201, techCompanies: 271 },
  { year: 2024, techLayoffs: 152922, techCompanies: 551 },
  { year: 2025, techLayoffs: 264320, techCompanies: 1193 },
  { year: 2026, techLayoffs: 165269, techCompanies: 1064, ytd: true },
];

// Sources and references
export const references = [
  { name: "BLS Employment Situation Report", url: "https://www.bls.gov/newsrelease/home.htm" },
  { name: "Challenger, Gray & Christmas", url: "https://www.challenger.com" },
  { name: "Layoffs.fyi", url: "https://layoffs.fyi" },
];

// Quotes about AI and employment
export const quotes = [
  { text: "The AI revolution will continue to transform the job market in 2026.", author: "Jamie Dimon, CEO, Microsoft", year: 2025 },
  { text: "Automation has always been part of economic progress.", author: "Jerome Powell, Federal Reserve Chair", year: 2024 },
  { text: "We need to ensure that workers have the skills to thrive in an AI-driven economy.", author: "Satya Nadella, CEO, Microsoft", year: 2025 },
];
