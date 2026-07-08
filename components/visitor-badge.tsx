"use client";

import { useEffect, useState } from "react";

function getOrdinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

const colorfulNumberStyle = {
  background: "linear-gradient(90deg, #e05c5c 0%, #e0a83c 35%, #5c8fe0 70%, #a05ce0 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontWeight: 700,
};

export default function VisitorBadge() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch(
      "https://page-views-api.ratneshc.com/api/v1/track?site=samarthpagaria.vercel.app&path=/",
      { keepalive: true }
    ).catch(() => {});

    fetch(
      "https://page-views-api.ratneshc.com/api/v1/views?site=samarthpagaria.vercel.app&path=/"
    )
      .then((r) => r.json())
      .then((d) => setViews(d.views ?? null))
      .catch(() => {});
  }, []);

  if (views === null) {
    return (
      <div className="flex items-center px-3 py-1.5 rounded-full border w-fit
        bg-white border-black/[0.08] shadow-[0_1px_4px_rgba(0,0,0,0.08)]
        dark:bg-[#1a1a1a] dark:border-white/[0.08] dark:shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
        <span className="text-[11px] font-mono text-black/30 dark:text-white/30 tracking-wide">
          counting...
        </span>
      </div>
    );
  }

  const ordinal = getOrdinal(views);

  return (
    <div className="flex items-center px-3 py-1.5 rounded-md border w-fit bg-white dark:bg-[#1a1a1a] border-neutral-400 dark:border-white/10">
      <span className="font-mono font-bold   text-neutral-400 dark:text-white">
        You&apos;re the <span className="text-black dark:text-white">{views.toLocaleString()}</span>
        <sup className=" font-bold text-neutral-600 dark:text-white">{ordinal}</sup> visitor
      </span>
    </div>
  );
}
