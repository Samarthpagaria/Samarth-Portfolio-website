"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import SearchModal from "./search-modal";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Global shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center group gap-2 py-1.5 px-3 rounded-2xl border border-border bg-card/50 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all text-muted-foreground text-sm font-medium focus:ring-2 focus:ring-border outline-none select-none active:scale-95 duration-300 cursor-pointer"
      >
        <Search className="w-4 h-4 text-foreground/70 group-hover:text-foreground transition-colors" />
        <div className="hidden lg:flex items-center gap-1">
          <span className="font-bold text-muted-foreground text-[9px] uppercase tracking-wider bg-muted border border-border px-1.5 py-0.5 rounded-md group-hover:bg-background group-hover:text-foreground transition-all duration-300">
              CTRL
          </span>
          <span className="font-bold text-muted-foreground text-[9px] uppercase tracking-wider bg-muted border border-border px-1.5 py-0.5 rounded-md group-hover:bg-background group-hover:text-foreground transition-all duration-300">
              K
          </span>
        </div>
      </button>

      {/* Modal triggered via SearchBar */}
      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
