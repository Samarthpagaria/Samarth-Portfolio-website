"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 sm:px-12 border-t border-neutral-100 bg-white">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-[12px] font-mono text-neutral-400">
          © {new Date().getFullYear()} • Built with Next.js, React & Tailwind CSS
        </p>
        <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-300">
          <span>Optimized for Performance</span>
          <span className="w-1 h-1 rounded-full bg-neutral-200" />
          <span>Designed for Precision</span>
        </div>
      </div>
    </footer>
  );
}
