"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 sm:px-12 border-t border-border bg-background transition-colors duration-300">
      <div className="flex flex-col items-center justify-center gap-1.5 text-center">
        <p className="text-[11px] font-mono text-muted-foreground">
          © {new Date().getFullYear()} Samarth Pagaria • All Rights Reserved
        </p>
        <p className="text-[10px] font-mono text-muted-foreground/40">
           Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
