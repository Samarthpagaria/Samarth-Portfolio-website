"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    company: "Ocmono Avenues pvt.ltd",
    period: "Jan 2025 - June 2025",
    type: "Internship",
    role: "Full stack engineer",
    tags: ["React.js", "Drupal", "Express", "Node.js", "PostgreSQL", "MongoDB"],
    active: true,
    description: [
      "Developed and deployed multiple websites for company and client projects.",
      "Implemented backend functionality using Drupal and built modern user interfaces using React.js.",
      "Delivered complete end-to-end web solutions tailored to different client requirements.",
      "Contributed to the ClinicPro project, assisting in development and improving the platform’s functionality and web presence.",
      "Collaborated with team members to ensure efficient project delivery and performance optimization."
    ]
  },
];

export default function Experience() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-background border-b border-border w-full font-sans transition-colors duration-300">
      <style jsx global>{`
        @keyframes custom-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        .animate-lively-pulse {
          animation: custom-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      <div className="w-full py-8 px-6 sm:px-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-card rounded-full flex items-center justify-center overflow-hidden shrink-0 border border-border">
                  <img src="/ocmono.png" alt={exp.company} className="w-full h-full object-contain dark:invert transition-all" />
                </div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-[17px] font-semibold tracking-tight text-foreground font-sans">{exp.company}</h3>
                  {exp.active && (
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.7)] animate-lively-pulse" />
                  )}
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 hover:bg-muted rounded-md transition-colors"
                aria-label="Toggle details"
              >
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="pl-8">

              <div className="text-[13px] font-medium text-foreground/80 mb-0.5 font-sans">{exp.role}</div>
               <div className="flex items-center gap-2 mb-3 text-[12px] text-muted-foreground font-medium font-sans">
                <span className="capitalize">{exp.type}</span>
                <span className="text-border">|</span>
                <span>{exp.period}</span>
              </div>

              <div 
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0 mb-0'}`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-2 font-mono text-[12px] text-muted-foreground/80 list-none pt-2">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-muted-foreground/30">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-0.5 text-[10.5px] font-medium text-muted-foreground bg-muted/30 border border-border rounded-[4px] hover:bg-muted/50 transition-colors font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

