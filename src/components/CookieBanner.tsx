"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
      <p className="text-center sm:text-left">
        JobsLostLive uses cookies and simple analytics to understand site traffic and improve the experience.
        By continuing to use this site, you consent to our use of cookies.{" "}
        <a href="/privacy" className="text-blue-400 hover:underline">Learn more</a>
      </p>
      <button
        onClick={accept}
        className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2 rounded"
      >
        Got it
      </button>
    </div>
  );
}
