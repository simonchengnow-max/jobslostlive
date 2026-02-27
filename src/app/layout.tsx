import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobsLostLive — AI Displacement Tracker",
  description: "Real-time dashboard tracking AI-driven job displacement across the US labor market.",
  openGraph: {
    title: "JobsLostLive — AI Displacement Tracker",
    description: "Real-time dashboard tracking AI-driven job displacement across the US labor market.",
    url: "https://jobslostlive.com",
    siteName: "JobsLostLive",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
