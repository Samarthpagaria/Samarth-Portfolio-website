"use client";

import React, { useState } from "react";
import { ChevronDown, GraduationCap } from "lucide-react";

interface EducationItem {
  school: string;
  period: string;
  tags: string[];
}

const education = [
  {
    school: "Vidyalankar Institute of Technology",
    period: "08.2025 - 08.2028",
    info: "10 CGPA",
    tags: [
      "C++", "Java", "Python", "Data Structures", "Algorithms", 
      "Databases", "Systems Design", "Distributed Systems", 
      "Software Engineering", "Self-learning", "Teamwork", "Presentation",
      "TypeScript", "Next.js", "Tailwind CSS", "shadcn/registry",
      "Node.js", "Express", "MongoDB", "PostgreSQL", "React.js", "Vite",
      "Git", "GitHub", "Framer Motion", "TanStack Query", "Magic UI", 
      "Aceternity UI", "Antigravity", "LangChain", "LanGraph", "Postman"
    ],
  },
  {
    school: "Government Polytechnic Bandra",
    period: "07.2023 - 07.2025",
    info: "92%",
    tags: [
      "HTML", "Java", "JavaScript", "Operating Systems", "Networking", 
      "Computer Engineering", "CSS", "MySQL"
    ],
  }
];

export default function Education() {
  return (
    <section className="bg-white border-b border-neutral-200 w-full font-mono">
      <div className="w-full py-8 px-6 sm:px-12">
        <div className="space-y-8 relative">
          {/* Vertical line connecting education items */}
          <div className="absolute left-[11px] top-6 bottom-6 w-px bg-neutral-100 hidden sm:block" />
          
          {education.map((edu, index) => (
            <div key={index} className="relative flex gap-4 group">
              {/* Icon */}
              <div className="relative z-10 hidden sm:flex w-6 h-6 rounded-full bg-white border border-neutral-200 shadow-sm items-center justify-center shrink-0 mt-1">
                <GraduationCap className="w-3 h-3 text-neutral-400" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <h3 className="text-[15px] font-semibold text-neutral-900 font-sans leading-none">
                    {edu.school}
                  </h3>
                  <span className="text-[12px] font-medium text-neutral-500 font-sans">
                    ({edu.info})
                  </span>
                </div>
                
                <div className="text-[12px] text-neutral-400 mb-3 font-sans">{edu.period}</div>
                
                <div className="flex flex-wrap gap-1.5">
                  {edu.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 text-[10.5px] font-medium text-[#737373] bg-[#f5f5f5]/50 border border-[#e5e5e5] rounded-[4px] whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
