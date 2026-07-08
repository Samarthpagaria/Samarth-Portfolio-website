"use client";

import React, { useState } from "react";
import { ExternalLink, ChevronsUpDown, Code2 } from "lucide-react";

const projects = [
  {
    title: "Strivo",
    icon: "/strivo.png",
    link: "https://strivo-app.vercel.app/",
    active: true,
    description: [
      "Developing <strong class='text-foreground/90 font-semibold'>Strivo</strong>, a <strong class='text-foreground/90 font-semibold'>full-stack social media platform</strong> that integrates <strong class='text-foreground/90 font-semibold'>long-form video uploads</strong> and <strong class='text-foreground/90 font-semibold'>tweet-style posts</strong> within a unified system.",
      "Designing and implementing <strong class='text-foreground/90 font-semibold'>scalable backend APIs</strong> to manage users, posts, media uploads, and interactions.",
      "Building a <strong class='text-foreground/90 font-semibold'>modern, responsive frontend</strong> using <strong class='text-foreground/90 font-semibold'>React</strong> with advanced state and data-fetching patterns.",
      "Implementing efficient <strong class='text-foreground/90 font-semibold'>client-server data synchronization</strong> using <strong class='text-foreground/90 font-semibold'>TanStack Query</strong> for optimized performance and caching.",
      "Structuring the project with <strong class='text-foreground/90 font-semibold'>modular architecture</strong> to support scalability and future feature expansion."
    ],
    tags: [
      "React.js", "TanStack Query", "Node.js", "Express.js",
      "Cloudinary", "MongoDB", "Git & GitHub", "Multer",
      "REST APIs", "JavaScript", "Tailwind CSS"
    ]
  },
  {
    title: "PrepVector",
    icon: "/prepvector.png",
    link: "https://prepvector.vercel.app/",
    active: true,
    description: [
      "Building <strong class='text-foreground/90 font-semibold'>PrepVector</strong>, a <strong class='text-foreground/90 font-semibold'>full-stack AI platform</strong> that unifies <strong class='text-foreground/90 font-semibold'>resume building</strong> with realistic, <strong class='text-foreground/90 font-semibold'>voice-driven mock interview simulation</strong>.",
      "Designing <strong class='text-foreground/90 font-semibold'>AI pipelines</strong> using <strong class='text-foreground/90 font-semibold'>LangChain</strong> to generate <strong class='text-foreground/90 font-semibold'>tailored interview questions</strong> and evaluate spoken answers in real time.",
      "Implementing a <strong class='text-foreground/90 font-semibold'>voice-driven interview simulator</strong> using native <strong class='text-foreground/90 font-semibold'>Web Speech APIs</strong> for <strong class='text-foreground/90 font-semibold'>text-to-speech</strong> and <strong class='text-foreground/90 font-semibold'>speech-to-text</strong> interaction.",
      "Developing <strong class='text-foreground/90 font-semibold'>structured AI output parsing</strong> with <strong class='text-foreground/90 font-semibold'>Zod</strong> to reliably generate <strong class='text-foreground/90 font-semibold'>scorecards</strong>, <strong class='text-foreground/90 font-semibold'>skill-gap analyses</strong>, and <strong class='text-foreground/90 font-semibold'>multi-day preparation roadmaps</strong>.",
      "Building an <strong class='text-foreground/90 font-semibold'>HTML-to-PDF resume generation pipeline</strong> using headless <strong class='text-foreground/90 font-semibold'>Puppeteer</strong> for pixel-perfect, <strong class='text-foreground/90 font-semibold'>ATS-friendly exports</strong>.",
      "Architecting a <strong class='text-foreground/90 font-semibold'>cross-domain authentication system</strong> to ensure reliable <strong class='text-foreground/90 font-semibold'>session handling</strong> across separately hosted frontend and backend services.",
      "Structuring the project with a <strong class='text-foreground/90 font-semibold'>scalable, modular backend</strong> and a <strong class='text-foreground/90 font-semibold'>feature-based frontend architecture</strong> for maintainability and growth."
    ],
    tags: [
      "React.js", "TanStack Query", "Node.js", "Express.js",
      "MongoDB", "LangChain", "Zustand", "Puppeteer",
      "TypeScript", "Tailwind CSS", "JWT Authentication", "REST APIs"
    ]
  },
  {
    title: "FormForge",
    icon: "/formforge.png",
    link: "https://formforge-io.vercel.app/",
    active: true,
    description: [
      "Building <strong class='text-foreground/90 font-semibold'>FormForge</strong>, a <strong class='text-foreground/90 font-semibold'>schema-driven form-building platform</strong> designed for full <strong class='text-foreground/90 font-semibold'>end-to-end type safety</strong> across the stack.",
      "Designing a <strong class='text-foreground/90 font-semibold'>type-safe API layer</strong> using <strong class='text-foreground/90 font-semibold'>tRPC</strong> to eliminate <strong class='text-foreground/90 font-semibold'>contract drift</strong> between client and server.",
      "Implementing <strong class='text-foreground/90 font-semibold'>dynamic form generation</strong> and validation using <strong class='text-foreground/90 font-semibold'>Zod schemas</strong>, enabling forms to be built and <strong class='text-foreground/90 font-semibold'>versioned like code</strong>.",
      "Structuring the project as a <strong class='text-foreground/90 font-semibold'>Turborepo monorepo</strong> with modular, reusable packages for UI, database, and validation logic.",
      "Integrating <strong class='text-foreground/90 font-semibold'>Drizzle ORM</strong> with <strong class='text-foreground/90 font-semibold'>Supabase</strong> for <strong class='text-foreground/90 font-semibold'>type-safe database schema management</strong> and authentication.",
      "Building <strong class='text-foreground/90 font-semibold'>GitHub-integrated schema versioning</strong> to track and manage <strong class='text-foreground/90 font-semibold'>form schema history</strong> directly through repositories.",
      "Developing a modern, responsive UI using <strong class='text-foreground/90 font-semibold'>shadcn/ui</strong> and <strong class='text-foreground/90 font-semibold'>Framer Motion</strong> for smooth, polished interactions."
    ],
    tags: [
      "Next.js", "TypeScript", "tRPC", "Drizzle ORM",
      "Supabase", "Zod", "Turborepo", "Tailwind CSS",
      "shadcn/ui", "Framer Motion"
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
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-5 text-muted-foreground/50">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-[18px] h-[18px] cursor-pointer" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`hover:text-foreground transition-all ${isOpen ? "text-foreground" : ""}`}
            >
              <ChevronsUpDown className="w-[18px] h-[18px] cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible Details */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="pl-[97px] pr-6 pb-6 flex flex-col gap-4">
            {project.description.length > 0 && (
              <ul className="space-y-2 font-mono text-[12px] text-muted-foreground/80 list-none">
                {project.description.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-muted-foreground/30 shrink-0">•</span>
                    <span dangerouslySetInnerHTML={{ __html: bullet }} />
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
