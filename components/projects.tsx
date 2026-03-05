"use client";

import React, { useState } from "react";
import { Link, ChevronsUpDown, ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Strivo",
    period: "12.2025 – ∞",
    icon: "/strivo.png",
    link: "https://github.com/Samarthpagaria/Strivo",
    active: true,
    description: [
      "Developing Strivo, a full-stack social media platform that integrates long-form video uploads and tweet-style posts within a unified system.",
      "Designing and implementing scalable backend APIs to manage users, posts, media uploads, and interactions.",
      "Building a modern, responsive frontend using React with advanced state and data-fetching patterns.",
      "Implementing efficient client-server data synchronization using TanStack Query for optimized performance and caching.",
      "Structuring the project with modular architecture to support scalability and future feature expansion."
    ],
    tags: [
      "React.js", "TanStack Query", "Node.js", "Express.js", 
      "Cloudinary", "MongoDB", "Git & GitHub", "Multer", 
      "REST APIs", "JavaScript", "Tailwind CSS"
    ]
  },
  {
    title: "ClinicPro",
    period: "04.2025 – 06.2025",
    icon: "/clinicpro.png",
    link: "https://github.com/ocmono/ClinicPro",
    active: false,
    description: [
      "Contributed to the development of ClinicPro, a full-stack web application for medical practice management.",
      "Led frontend development, building responsive and user-friendly interfaces for healthcare workflows.",
      "Implemented features for patient record management, prescription handling, and appointment scheduling.",
      "Integrated an interactive calendar system for efficient appointment tracking and management.",
      "Collaborated closely with backend developers to ensure smooth API integration and reliable data flow.",
      "Focused on secure and scalable UI architecture suitable for handling sensitive healthcare data."
    ],
    tags: [
      "React.js", "JavaScript", "Tailwind CSS / CSS", 
      "REST API Integration", "Node.js", "Express.js", 
      "MongoDB", "Git & GitHub", "Postman"
    ]
  }
];

function ProjectItem({ project }: { project: typeof projects[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group flex flex-col border-b border-border last:border-0 hover:bg-muted/30 transition-all duration-300">
      <div className="flex items-stretch">
        {/* Icon Section */}
        <div className="w-[72px] flex items-center justify-center shrink-0 py-4">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-card border border-border flex items-center justify-center shadow-sm">
              <Code2 className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        {/* Dotted Vertical Separator */}
        <div className="w-px border-l border-dotted border-border" />

        {/* Content Section */}
        <div className="flex-1 flex items-center justify-between pl-6 pr-6 py-4">
          <div className="flex flex-col">
            <h3 className="text-[15px] font-semibold text-foreground font-sans tracking-tight">
              {project.title}
            </h3>
            <p className="text-[12px] text-muted-foreground font-mono mt-0.5">
              {project.period}
            </p>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-5 text-muted-foreground/50">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-colors"
            >
              <Link className="w-[18px] h-[18px] cursor-pointer" />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`hover:text-foreground transition-all ${isOpen ? 'text-foreground' : ''}`}
            >
              <ChevronsUpDown className="w-[18px] h-[18px] cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible Details */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="pl-[97px] pr-6 pb-6 flex flex-col gap-4">
            {project.description.length > 0 && (
              <ul className="space-y-2 font-mono text-[12px] text-muted-foreground/80 list-none">
                {project.description.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-muted-foreground/30">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
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
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="bg-background border-b border-border w-full mb-2 transition-colors duration-300">
      <div className="w-full">
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
