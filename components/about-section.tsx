"use client";

export default function AboutSection() {
  return (
    <div className="border-b border-border bg-background p-4 py-3 font-mono text-muted-foreground text-[13px] leading-[1.6] transition-colors duration-300">
      <div className="space-y-1.5">
        {/* Main List */}
        <ul className="space-y-1.5">
          <li className="flex items-start gap-3">
            <span className="shrink-0 text-muted-foreground/30 mt-0.5">•</span>
            <p>
              <strong className="text-foreground font-semibold">Full-Stack Developer & AI Engineer</strong> specializing in scalable, user-centric applications and intelligent, agentic system architecture.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="shrink-0 text-muted-foreground/30 mt-0.5">•</span>
            <p>
              Skilled in <span className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">Next.js</span>, <span className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">TypeScript</span>, and the <span className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">MERN stack</span>; integrating <span className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">LangChain</span>, <span className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">LangGraph</span>, and LLMs to build context-aware, production-ready applications.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="shrink-0 text-muted-foreground/30 mt-0.5">•</span>
            <p>
              Pursuing <strong className="text-foreground">B.Tech in Computer Engineering</strong> at Vidyalankar Institute of Technology, with <strong className="text-foreground">2+ years</strong> of hands-on development experience and a growing specialization in AI Engineering — currently deepening expertise in agentic AI systems.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="shrink-0 text-muted-foreground/30 mt-0.5">•</span>
            <p>
              Creator of <span className="underline decoration-border underline-offset-4 font-semibold text-foreground">Strivo</span>: A unified social media platform combining video and microblogging.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="shrink-0 text-muted-foreground/30 mt-0.5">•</span>
            <p>
              Developer of <span className="underline decoration-border underline-offset-4 font-semibold text-foreground">FormForge</span>: A type-safe, schema-driven form-building platform with <span className="text-foreground">GitHub-integrated versioning</span>, built on a <span className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">Next.js</span>, <span className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">tRPC</span>, and <span className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">Turborepo</span> monorepo architecture.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="shrink-0 text-muted-foreground/30 mt-0.5">•</span>
            <p>
              Creator of <span className="underline decoration-border underline-offset-4 font-semibold text-foreground">PrepVector</span>: An AI-powered platform combining an <span className="text-foreground">ATS-optimized resume builder</span> with voice-driven, <span className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">LangChain</span>-powered mock interview simulations.
            </p>
          </li>

                
        </ul>
      </div>
    </div>
  );
}
