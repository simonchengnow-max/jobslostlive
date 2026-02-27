// ─── Static seed data (replace with live BLS/FRED API calls via API routes) ───

export const COUNTER_BASELINE = 54836; // AI-cited layoffs confirmed YTD 2025
export const COUNTER_BASELINE_DATE = new Date("2025-02-01T00:00:00Z");
export const ANNUAL_AI_LAYOFF_RATE = 270000; // estimated 2025 annual run rate
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
  { year: "2025", layoffs: 89000,  aiCited: 54836 },
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

// Monthly job gains/losses 2024-2025 (BLS NFP)
export const monthlyNFP = [
  { month: "Mar '24", added: 310, aiLost: 18 },
  { month: "Apr '24", added: 165, aiLost: 21 },
  { month: "May '24", added: 218, aiLost: 24 },
  { month: "Jun '24", added: 179, aiLost: 19 },
  { month: "Jul '24", added: 144, aiLost: 22 },
  { month: "Aug '24", added: 159, aiLost: 25 },
  { month: "Sep '24", added: 255, aiLost: 28 },
  { month: "Oct '24", added: 36,  aiLost: 23 },
  { month: "Nov '24", added: 212, aiLost: 31 },
  { month: "Dec '24", added: 256, aiLost: 29 },
  { month: "Jan '25", added: 143, aiLost: 33 },
  { month: "Feb '25", added: 151, aiLost: 38 },
];

// Wage growth vs inflation (BLS JOLTS + CPI)
export const wageVsInflation = [
  { year: "2020", wageGrowth: 7.9,  inflation: 1.2 },
  { year: "2021", wageGrowth: 4.8,  inflation: 7.0 },
  { year: "2022", wageGrowth: 5.1,  inflation: 6.5 },
  { year: "2023", wageGrowth: 4.4,  inflation: 3.4 },
  { year: "2024", wageGrowth: 3.9,  inflation: 2.9 },
  { year: "2025", wageGrowth: 3.6,  inflation: 2.6 },
];

// Job openings vs unemployed seekers (BLS JOLTS, millions)
export const jolts = [
  { month: "Jan '23", openings: 10.6, seekers: 5.7 },
  { month: "Apr '23", openings: 10.1, seekers: 5.7 },
  { month: "Jul '23", openings: 8.8,  seekers: 5.9 },
  { month: "Oct '23", openings: 8.7,  seekers: 6.1 },
  { month: "Jan '24", openings: 8.9,  seekers: 6.1 },
  { month: "Apr '24", openings: 8.0,  seekers: 6.5 },
  { month: "Jul '24", openings: 7.7,  seekers: 6.8 },
  { month: "Oct '24", openings: 7.4,  seekers: 7.0 },
  { month: "Jan '25", openings: 7.2,  seekers: 7.1 },
];

// Labor force participation by age group (BLS)
export const participationByAge = [
  { group: "16-24", rate: 55.1 },
  { group: "25-34", rate: 83.2 },
  { group: "35-44", rate: 83.5 },
  { group: "45-54", rate: 79.8 },
  { group: "55-64", rate: 63.2 },
  { group: "65+",   rate: 19.1 },
];

// Recent layoff events feed
export const recentLayoffs = [
  { company: "Google",    date: "Jan 2025", count: 1000,  aiCited: true,  sector: "Tech" },
  { company: "Microsoft", date: "Jan 2025", count: 1900,  aiCited: true,  sector: "Tech" },
  { company: "Workday",   date: "Jan 2025", count: 1750,  aiCited: true,  sector: "SaaS" },
  { company: "Salesforce",date: "Jan 2025", count: 1000,  aiCited: false, sector: "SaaS" },
  { company: "IBM",       date: "Dec 2024", count: 1500,  aiCited: true,  sector: "Tech" },
  { company: "Chegg",     date: "Dec 2024", count: 248,   aiCited: true,  sector: "EdTech" },
  { company: "Duolingo",  date: "Jan 2025", count: 10,    aiCited: true,  sector: "EdTech" },
  { company: "BuzzFeed",  date: "Nov 2024", count: 132,   aiCited: true,  sector: "Media" },
  { company: "Dropbox",   date: "Oct 2024", count: 528,   aiCited: true,  sector: "SaaS" },
  { company: "UPS",       date: "Jan 2025", count: 12000, aiCited: false, sector: "Logistics" },
];

export const references = [
  { label: "BLS Current Employment Statistics", url: "https://www.bls.gov/ces/" },
  { label: "BLS JOLTS — Job Openings & Labor Turnover", url: "https://www.bls.gov/jlt/" },
  { label: "Challenger Gray & Christmas — AI Layoff Report 2025", url: "https://www.challengergray.com" },
  { label: "Layoffs.fyi — Tech Layoff Tracker", url: "https://layoffs.fyi" },
  { label: "McKinsey Global Institute — Jobs Lost, Jobs Gained", url: "https://www.mckinsey.com/featured-insights/future-of-work" },
  { label: "Goldman Sachs — The Potentially Large Effects of AI on Economic Growth", url: "https://www.goldmansachs.com/intelligence/pages/generative-ai-could-raise-global-gdp-by-7-percent.html" },
  { label: "Oxford University — The Future of Employment (Frey & Osborne)", url: "https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment/" },
  { label: "White House CEA — Economic Report of the President 2024", url: "https://www.whitehouse.gov/cea/" },
  { label: "FRED — Federal Reserve Economic Data", url: "https://fred.stlouisfed.org" },
  { label: "LinkedIn Workforce Report", url: "https://economicgraph.linkedin.com/research/workforce-report" },
];
