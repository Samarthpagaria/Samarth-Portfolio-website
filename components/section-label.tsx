"use client";
import { motion } from "motion/react";
import NextLink from "next/link";
import { GeistPixelSquare } from "geist/font/pixel";

export default function SectionLabel({
  label,
  index,
  actionLabel,
  actionHref,
  external = false,
}: {
  label: string;
  index?: string;
  actionLabel?: string;
  actionHref?: string;
  external?: boolean;
}) {
  return (
    <div className="border-b border-border bg-background flex items-center h-8 px-4 relative overflow-hidden group tracking-wider transition-colors duration-300">
      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-foreground z-20" />
      
      {/* Subtle Background Shimmering Effect */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 3
        }}
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.4] dark:opacity-[0.1]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(228, 228, 231, 0) 40%, rgba(228, 228, 231, 0.8) 50%, rgba(228, 228, 231, 0) 60%, transparent 100%)",
        }}
      />
      
      <div className="flex items-center gap-3 relative z-20">
        {/* Index removed as per the reference image */}
        <div className="relative inline-flex">
          <motion.span 
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className={`${GeistPixelSquare.className} text-2xl tracking-wide bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 bg-clip-text text-transparent bg-[length:200%_auto] inline-block drop-shadow-sm`}
          >
            {label}
          </motion.span>
        </div>
      </div>

      <div className="ml-auto flex items-center relative z-20">
        {actionLabel && actionHref ? (
          external ? (
            <a
              href={actionHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-muted-foreground/50 hover:text-foreground transition-colors tracking-widest uppercase border border-border/50 hover:border-border rounded-[3px] px-2 py-0.5 hover:bg-muted/30"
            >
              {actionLabel}
            </a>
          ) : (
            <NextLink
              href={actionHref}
              className="text-[10px] font-mono text-muted-foreground/50 hover:text-foreground transition-colors tracking-widest uppercase border border-border/50 hover:border-border rounded-[3px] px-2 py-0.5 hover:bg-muted/30"
            >
              {actionLabel}
            </NextLink>
          )
        ) : (
          <>
            <div className="w-1 h-1 rounded-full bg-border" />
            <div className="w-1 h-1 rounded-full bg-border mx-1" />
            <div className="w-1 h-1 rounded-full bg-border" />
          </>
        )}
      </div>
    </div>
  );
}
