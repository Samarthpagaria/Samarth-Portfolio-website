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
              <strong className="text-foreground font-semibold">Full Stack Developer & AI Engineer</strong> specializing in scalable, user-centric applications and intelligent system architecture.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="shrink-0 text-muted-foreground/30 mt-0.5">•</span>
            <p>
              Skilled in <span className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">Next.js</span>, <span className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">TypeScript</span>, and the <span className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">MERN stack</span>; integrating Generative AI and LLMs to solve complex engineering challenges and deliver high-performance products.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="shrink-0 text-muted-foreground/30 mt-0.5">•</span>
            <p>
              Current <strong className="text-foreground">10.0 CGPA Candidate</strong> in Computer Engineering at Vidyalankar Institute of Technology, with a focus on high-performance architecture and seamless data synchronization.
            </p>
          </li>

          <li className="flex flex-col gap-0.5">
            <div className="flex items-start gap-3">
              <span className="shrink-0 text-muted-foreground/30 mt-0.5">•</span>
              <p>
                Creator of <span className="underline decoration-border underline-offset-4 font-semibold text-foreground">Strivo</span>: A unified social media platform for video and microblogging.
              </p>
            </div>
            <ul className="pl-8 space-y-1">
              <li className="flex items-start gap-3 text-muted-foreground/60 transition-colors">
                <span className="shrink-0 text-muted-foreground/20 mt-0.5">•</span>
                <p>Optimized system performance by <span className="text-foreground">40%</span> through advanced frontend patterns and scalable APIs.</p>
              </li>
            </ul>
          </li>

          <li className="flex flex-col gap-0.5">
            <div className="flex items-start gap-3">
              <span className="shrink-0 text-muted-foreground/30 mt-0.5">•</span>
              <p>
                Developer of <span className="underline decoration-border underline-offset-4 font-semibold text-foreground">ClinicPro</span>: A medical practice management system.
              </p>
            </div>
            <ul className="pl-8 space-y-1">
              <li className="flex items-start gap-3 text-muted-foreground/60 transition-colors">
                <span className="shrink-0 text-muted-foreground/20 mt-0.5">•</span>
                <p>Engineered secure, responsive interfaces for patient records and integrated appointment scheduling.</p>
              </li>
            </ul>
          </li>

          <li className="flex flex-col gap-0.5">
            <div className="flex items-start gap-3">
              <span className="shrink-0 text-muted-foreground/30 mt-0.5">•</span>
              <p>
                <strong className="text-foreground font-semibold">Full Stack Developer at Ocmono Avenues (2025):</strong>
              </p>
            </div>
            <ul className="pl-8 space-y-1">
              <li className="flex items-start gap-3 text-muted-foreground/60 transition-colors">
                <span className="shrink-0 text-muted-foreground/20 mt-0.5">•</span>
                <p>Launched <span className="text-foreground">7+ professional websites</span>, managing end-to-end delivery from Drupal backends to modern React frontends.</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
