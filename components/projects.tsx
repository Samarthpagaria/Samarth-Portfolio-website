"use client";

import React, { useState } from "react";
import { Link, ChevronsUpDown, Code2, Github } from "lucide-react";

const projects = [
  {
    title: "Strivo",
    tagline: "Full-stack social media platform",
    icon: "/strivo.png",
    link: "https://strivo-app.vercel.app/",
    github: "https://github.com/Samarthpagaria/Strivo",
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
    tagline: "AI-powered mock interview platform",
    icon: "/prepvector.png",
    link: "https://prepvector.vercel.app/",
    github: "https://github.com/Samarthpagaria/PrepVector",
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
    tagline: "Schema-driven type-safe form builder",
    icon: "/formforge.png",
    link: "https://formforge-io.vercel.app/",
    github: "https://github.com/Samarthpagaria/FormForge",
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
  },
  {
    title: "MultiAgent AI Research",
    tagline: "Autonomous multi-agent research pipeline",
    icon: "/multiagent.png",
    link: "coming_soon",
    github: "https://github.com/Samarthpagaria/Multi-Research-Agent-Report-v1",
    active: false,
    description: [
      "Building a <strong class='text-foreground/90 font-semibold'>multi-agent AI research pipeline</strong> that autonomously searches, scrapes, synthesizes, and self-critiques detailed research reports.",
      "Designing a sequential <strong class='text-foreground/90 font-semibold'>4-agent architecture</strong> — <strong class='text-foreground/90 font-semibold'>Search Scout</strong>, <strong class='text-foreground/90 font-semibold'>Reader</strong>, <strong class='text-foreground/90 font-semibold'>Writer</strong>, and <strong class='text-foreground/90 font-semibold'>Critic</strong> — where each agent owns a distinct stage of the research workflow.",
      "Integrating the <strong class='text-foreground/90 font-semibold'>Tavily Search API</strong> to retrieve high-quality, relevant sources for each research query.",
      "Building a <strong class='text-foreground/90 font-semibold'>web scraping pipeline</strong> using <strong class='text-foreground/90 font-semibold'>Cheerio</strong> to clean and extract readable content from raw HTML.",
      "Implementing a <strong class='text-foreground/90 font-semibold'>LangChain-powered synthesis layer</strong> to compile scraped research into structured, cite-able <strong class='text-foreground/90 font-semibold'>markdown reports</strong>.",
      "Developing a <strong class='text-foreground/90 font-semibold'>self-critique scoring system</strong> where a dedicated <strong class='text-foreground/90 font-semibold'>Critic agent</strong> grades each report, highlighting strengths, improvements, and a final verdict.",
      "Adding security guardrails including <strong class='text-foreground/90 font-semibold'>prompt-injection detection</strong> and <strong class='text-foreground/90 font-semibold'>rate limiting</strong> to prevent API abuse.",
      "Designing a <strong class='text-foreground/90 font-semibold'>premium animated dark-mode interface</strong> with <strong class='text-foreground/90 font-semibold'>word-by-word streaming</strong> report rendering using <strong class='text-foreground/90 font-semibold'>Framer Motion</strong>."
    ],
    tags: [
      "React.js", "TypeScript", "Node.js", "Express.js",
      "LangChain", "Tavily API", "Cheerio", "Framer Motion",
      "Tailwind CSS", "REST APIs"
    ]
  },
  {
    title: "TwitterClone",
    tagline: "Full-stack microblogging platform",
    icon: "/twitterclone.png",
    link: "https://twitterclone-sam-io.vercel.app",
    github: "https://github.com/Samarthpagaria/Twitter-Clone",
    active: true,
    description: [
      "Building <strong class='text-foreground/90 font-semibold'>TwitterClone</strong>, a <strong class='text-foreground/90 font-semibold'>full-stack microblogging platform</strong> replicating core Twitter/X mechanics with real-time social feeds.",
      "Designing <strong class='text-foreground/90 font-semibold'>scalable backend APIs</strong> to manage users, tweets, likes, bookmarks, and <strong class='text-foreground/90 font-semibold'>follower/following relationships</strong>.",
      "Implementing two dynamic feed systems — a <strong class='text-foreground/90 font-semibold'>global discovery timeline</strong> and a <strong class='text-foreground/90 font-semibold'>personalized following feed</strong>.",
      "Building a <strong class='text-foreground/90 font-semibold'>media upload pipeline</strong> integrating <strong class='text-foreground/90 font-semibold'>Multer</strong> and <strong class='text-foreground/90 font-semibold'>Cloudinary</strong> for avatar and tweet media handling.",
      "Implementing <strong class='text-foreground/90 font-semibold'>optimistic UI updates</strong> for likes and bookmarks to deliver instant, snappy user interactions.",
      "Managing global client state with <strong class='text-foreground/90 font-semibold'>Redux Toolkit</strong> and <strong class='text-foreground/90 font-semibold'>redux-persist</strong> to ensure sessions and cached data survive page refreshes.",
      "Developing secure <strong class='text-foreground/90 font-semibold'>JWT-based authentication</strong> with <strong class='text-foreground/90 font-semibold'>HTTP-only cookies</strong> and protected route middleware."
    ],
    tags: [
      "React.js", "Redux Toolkit", "Node.js", "Express.js",
      "MongoDB", "Cloudinary", "JWT Authentication",
      "Tailwind CSS", "REST APIs"
    ]
  },
  {
    title: "Snake Game",
    tagline: "Vanilla JS DOM-based snake game",
    icon: "/snakegame.png",
    link: "https://snake-game-sam-io.vercel.app",
    github: "https://github.com/Samarthpagaria/Snake_Game",
    active: true,
    description: [
      "Building a classic <strong class='text-foreground/90 font-semibold'>Snake game</strong> entirely in <strong class='text-foreground/90 font-semibold'>vanilla JavaScript</strong>, with no canvas, game engine, or external dependencies.",
      "Designing a <strong class='text-foreground/90 font-semibold'>DOM-based rendering system</strong> using a <strong class='text-foreground/90 font-semibold'>coordinate-keyed hash map</strong> to cache grid cells and avoid repeated DOM queries during the render loop.",
      "Implementing precise <strong class='text-foreground/90 font-semibold'>collision detection logic</strong>, including <strong class='text-foreground/90 font-semibold'>tail-aware self-collision handling</strong> for accurate gameplay physics.",
      "Building a <strong class='text-foreground/90 font-semibold'>fail-safe food-spawning system</strong> to guarantee valid placement without risking infinite loops.",
      "Developing a <strong class='text-foreground/90 font-semibold'>persistent high-score system</strong> using browser <strong class='text-foreground/90 font-semibold'>localStorage</strong>.",
      "Styling a modern <strong class='text-foreground/90 font-semibold'>glassmorphism UI</strong> with custom CSS animations, gradients, and responsive <strong class='text-foreground/90 font-semibold'>Flexbox/Grid</strong> layouts."
    ],
    tags: [
      "JavaScript", "HTML5", "CSS3", "DOM Manipulation", "Browser LocalStorage"
    ]
  },
  {
    title: "Kanban Board",
    tagline: "Zero-dependency drag & drop task manager",
    icon: "/kanban.png",
    link: "https://kanban-board-sam-io.vercel.app",
    github: "https://github.com/Samarthpagaria/kanban-board",
    active: true,
    description: [
      "Building a lightweight, <strong class='text-foreground/90 font-semibold'>zero-dependency Kanban task management app</strong> using vanilla HTML, CSS, and JavaScript.",
      "Implementing native <strong class='text-foreground/90 font-semibold'>HTML5 Drag &amp; Drop</strong> functionality to move tasks across <strong class='text-foreground/90 font-semibold'>To Do</strong>, <strong class='text-foreground/90 font-semibold'>In Progress</strong>, and <strong class='text-foreground/90 font-semibold'>Done</strong> columns.",
      "Designing a <strong class='text-foreground/90 font-semibold'>DOM-as-source-of-truth architecture</strong>, where the DOM is updated first and application state is rebuilt by querying the live DOM.",
      "Building a <strong class='text-foreground/90 font-semibold'>synchronous persistence layer</strong> using <strong class='text-foreground/90 font-semibold'>localStorage</strong>, ensuring task data survives page refreshes without a backend.",
      "Implementing <strong class='text-foreground/90 font-semibold'>event delegation</strong> for efficient task deletion, avoiding per-element event listeners.",
      "Structuring the project with clean, <strong class='text-foreground/90 font-semibold'>semantic HTML</strong> and <strong class='text-foreground/90 font-semibold'>CSS variables</strong> for a maintainable, framework-free codebase."
    ],
    tags: [
      "JavaScript", "HTML5", "CSS3", "Drag & Drop API", "DOM Manipulation", "Browser LocalStorage"
    ]
  },
  {
    title: "Contact Manager API",
    tagline: "RESTful contacts API with per-user isolation",
    icon: "/contactapi.png",
    link: null,
    github: "https://github.com/Samarthpagaria/Contact-Manager-API",
    active: false,
    description: [
      "Building a <strong class='text-foreground/90 font-semibold'>RESTful backend API</strong> for managing personal contacts, with secure <strong class='text-foreground/90 font-semibold'>per-user data isolation</strong>.",
      "Designing <strong class='text-foreground/90 font-semibold'>JWT-based authentication</strong> with <strong class='text-foreground/90 font-semibold'>bcrypt password hashing</strong> for secure user registration and login.",
      "Implementing full <strong class='text-foreground/90 font-semibold'>CRUD operations</strong> for contacts, with <strong class='text-foreground/90 font-semibold'>ownership checks</strong> ensuring users can only modify their own data.",
      "Structuring the codebase with a clean separation of <strong class='text-foreground/90 font-semibold'>controllers</strong>, <strong class='text-foreground/90 font-semibold'>middleware</strong>, and <strong class='text-foreground/90 font-semibold'>models</strong> for maintainability.",
      "Developing <strong class='text-foreground/90 font-semibold'>centralized error handling middleware</strong> for consistent, structured JSON error responses across the API.",
      "Designing <strong class='text-foreground/90 font-semibold'>protected routes</strong> using custom <strong class='text-foreground/90 font-semibold'>JWT verification middleware</strong> to secure sensitive endpoints."
    ],
    tags: [
      "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Authentication", "Bcrypt", "REST APIs"
    ]
  },
  {
    title: "Restaurant API",
    tagline: "Role-based food ordering backend API",
    icon: "/restaurantapi.png",
    link: null,
    github: "https://github.com/Samarthpagaria/Resataurant_API",
    active: false,
    description: [
      "Building a <strong class='text-foreground/90 font-semibold'>RESTful backend API</strong> for a food ordering platform, handling restaurants, menus, categories, and orders.",
      "Designing <strong class='text-foreground/90 font-semibold'>role-based access control</strong> supporting <strong class='text-foreground/90 font-semibold'>client</strong>, <strong class='text-foreground/90 font-semibold'>admin</strong>, <strong class='text-foreground/90 font-semibold'>vendor</strong>, and <strong class='text-foreground/90 font-semibold'>driver</strong> user types.",
      "Implementing full <strong class='text-foreground/90 font-semibold'>CRUD operations</strong> for restaurants, food categories, and menu items.",
      "Building an <strong class='text-foreground/90 font-semibold'>order management system</strong> with <strong class='text-foreground/90 font-semibold'>cart-based order placement</strong> and admin-controlled status updates.",
      "Developing secure <strong class='text-foreground/90 font-semibold'>JWT-based authentication</strong> with <strong class='text-foreground/90 font-semibold'>bcrypt password hashing</strong> and protected route middleware.",
      "Structuring the codebase with a clean, <strong class='text-foreground/90 font-semibold'>modular separation</strong> of controllers, models, routes, and middleware."
    ],
    tags: [
      "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Authentication", "Bcrypt", "REST APIs"
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
          <div className="shrink-0 flex items-center gap-2">
            <h3 className="text-[15px] font-semibold text-foreground font-sans tracking-tight">
              {project.title}
            </h3>
            {project.active && (
              <span className="relative flex h-2 w-2 ml-1" title="Active Project">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            )}
          </div>

          <p className="flex-1 text-[11px] font-mono text-muted-foreground/40 text-left pl-8 truncate">
            {project.tagline}
          </p>

          {/* Action Icons */}
          <div className="flex items-center gap-5 text-muted-foreground/50 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Github className="w-[18px] h-[18px] cursor-pointer" />
            </a>
            {project.link === "coming_soon" ? (
              <div className="relative group/tooltip flex items-center justify-center">
                <button
                  className="hover:text-foreground transition-colors cursor-not-allowed opacity-50"
                  disabled
                >
                  <Link className="w-[18px] h-[18px]" />
                </button>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-foreground text-background text-[10px] font-mono px-2 py-1 rounded whitespace-nowrap pointer-events-none z-50">
                  Coming Soon
                </div>
              </div>
            ) : project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                <Link className="w-[18px] h-[18px] cursor-pointer" />
              </a>
            )}
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

export default function Projects({ limit }: { limit?: number }) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;
  
  return (
    <section className="bg-background border-b border-border w-full mb-2 transition-colors duration-300">
      <div className="w-full">
        <div className="flex flex-col">
          {displayProjects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
        {limit && limit < projects.length && (
          <div className="flex justify-center p-6 border-b border-border">
            <a
              href="/projects"
              className="bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black text-sm font-medium px-6 py-2.5 rounded-full transition-colors flex items-center gap-2"
            >
              Show all projects
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
