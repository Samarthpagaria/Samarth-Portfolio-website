"use client";

import React from "react";

import { stack } from "@/lib/stacks";

export default function Stack() {
  return (
    <section className="bg-background border-b border-border transition-colors duration-300">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-[repeat(15,1fr)] w-full border-l border-t border-border">
        {stack.map((tech) => (
          <div 
            key={tech.name} 
            className="aspect-square border-r border-b border-border flex flex-col items-center justify-center p-2 group hover:bg-muted/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Grid background pattern for extra cleanliness */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[10px_10px]" />
            
            {/* Icon Container */}
            <div 
              className="w-5 h-5 md:w-6 md:h-6 transition-all duration-500 relative z-10 opacity-100 group-hover:scale-110 flex items-center justify-center"
              style={{ color: tech.color }}
            >
              {typeof tech.icon === 'string' ? (
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain dark:grayscale dark:brightness-200 dark:group-hover:grayscale-0 transition-all" />
              ) : (
                <div className="text-xl md:text-2xl flex items-center justify-center w-full h-full icon-wrapper">
                  {tech.icon}
                </div>
              )}
            </div>
            
            {/* Label - minimal and revealed on hover */}
            <span className="absolute bottom-1.5 text-[8px] font-mono uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
              {tech.name}
            </span>

            {/* Subtle indicator dot */}
            <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-border group-hover:bg-foreground/20 transition-colors" />
          </div>
        ))}

        {/* Filler cells to maintain rows if needed */}
        {stack.length % 15 !== 0 && Array.from({ length: 15 - (stack.length % 15) }).map((_, i) => (
          <div key={`filler-${i}`} className="aspect-square border-r border-b border-border hidden xl:block" />
        ))}
      </div>
    </section>
  );
}
