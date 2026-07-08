"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const QUOTES = [
  {
    text: "Excuses don't win championships.",
    author: "Harvey Specter",
  },
  {
    text: "Talent without working hard is nothing.",
    author: "Cristiano Ronaldo",
  },
];

export default function QuoteSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  const currentQuote = QUOTES[index % QUOTES.length] || QUOTES[0];

  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 border-t border-border bg-background transition-colors duration-300 min-h-[300px]">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="lucide lucide-quote mb-6 size-10 fill-current text-zinc-300 dark:text-zinc-600" 
        aria-hidden="true"
      >
        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
      </svg>
      
      <div className="relative w-full max-w-xl flex flex-col items-center justify-center min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            <p className="text-center font-sans italic font-medium text-[15px] sm:text-[17px] text-foreground/90 mb-6 leading-relaxed">
              "{currentQuote.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-border"></div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase font-bold text-center">
                {currentQuote.author}
              </span>
              <div className="h-px w-8 bg-border"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
