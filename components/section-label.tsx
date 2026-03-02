"use client";
import { motion } from "motion/react";

export default function SectionLabel({ label, index }: { label: string; index?: string }) {
  return (
    <div className="border-b border-[#ededf0] bg-[#fcfcfd] flex items-center h-8 px-4 relative overflow-hidden group tracking-wider">
      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-zinc-900 z-20" />
      
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
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.6]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(228, 228, 231, 0) 40%, rgba(228, 228, 231, 0.8) 50%, rgba(228, 228, 231, 0) 60%, transparent 100%)",
        }}
      />
      
      <div className="flex items-center gap-3 relative z-20">
        {index && (
          <span className="text-[10px] font-mono text-zinc-400 font-bold tracking-tighter">
            [{index}]
          </span>
        )}
        <div className="relative inline-flex">
          <motion.span 
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-[11px] font-mono uppercase tracking-[0.2em] font-medium bg-clip-text text-transparent bg-size-[250%_100%] inline-block"
            style={{
              backgroundImage: "linear-gradient(90deg, #18181b 0%, #18181b 40%, #ffffff 50%, #18181b 60%, #18181b 100%)",
              WebkitBackgroundClip: "text",
            }}
          >
            {label}
          </motion.span>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-1 relative z-20">
        <div className="w-1 h-1 rounded-full bg-zinc-200" />
        <div className="w-1 h-1 rounded-full bg-zinc-200" />
        <div className="w-1 h-1 rounded-full bg-zinc-200" />
      </div>
    </div>
  );
}
