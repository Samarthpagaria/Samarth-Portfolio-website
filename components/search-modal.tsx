"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/new_logo.png";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_VALUES = [
  { title: "Personal Details", category: "Section", id: "personal-details" },
  { title: "About Me", category: "Section", id: "about" },
  { title: "GitHub Activity", category: "Section", id: "github" },
  { title: "Tech Stacks", category: "Section", id: "stacks" },
  { title: "Work Experience", category: "Section", id: "experience" },
  { title: "Education", category: "Section", id: "education" },
  { title: "Projects & Work", category: "Section", id: "projects" },
  { title: "Strivo (Social Platform)", category: "Project", url: "https://github.com/Samarthpagaria/Strivo" },
  { title: "ClinicPro (Medical Management)", category: "Project", url: "https://github.com/ocmono/ClinicPro" },
  { title: "LinkedIn", category: "Social", url: "https://linkedin.com" },
  { title: "Twitter / X", category: "Social", url: "https://twitter.com" },
  { title: "GitHub Profile", category: "Social", url: "https://github.com" },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleSelect = (item: typeof DEFAULT_VALUES[0]) => {
    if (item.id) {
      const element = document.getElementById(item.id);
      if (element) {
        const offset = 80; // Account for sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else if (item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
    onClose();
  };

  if (!isOpen) return null;

  const filteredValues = DEFAULT_VALUES.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[15vh] bg-black/40 dark:bg-black/70 animate-in fade-in duration-300">
      <div 
        ref={modalRef}
        className="w-full max-w-lg bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300 flex flex-col h-[400px]"
      >
        <div className="flex items-center px-4 py-3 border-b border-border flex-none text-muted-foreground">
          <Search className="w-4 h-4 ml-1" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search..."
            className="flex-1 ml-3 bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground/30 text-foreground font-medium"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-muted transition-colors mr-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-1 overflow-y-auto flex-1 [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/30 [&::-webkit-scrollbar-track]:bg-transparent">
          <div className="space-y-0.5 pr-1.5">
            {filteredValues.length > 0 ? (
              filteredValues.map((item) => (
                <button
                  key={item.title}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors flex items-center justify-between group text-foreground/80 hover:text-foreground"
                  onClick={() => handleSelect(item)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] font-medium">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-muted border border-border text-muted-foreground font-mono uppercase tracking-wider group-hover:bg-background group-hover:text-foreground transition-colors">
                        {item.category}
                     </span>
                     <span className="text-[9px] text-muted-foreground font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase font-mono">SELECT</span>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-12 text-center text-muted-foreground text-xs font-medium italic font-mono">
                No commands matching &ldquo;{query}&rdquo;
              </div>
            )}
          </div>
        </div>
        
        <div className="px-5 py-3 bg-muted/20 border-t border-border flex justify-between items-center flex-none">
            <div className="flex items-center gap-3">
                <Image src={logo} alt="Mini Logo" width={16} height={16} className="grayscale opacity-40 dark:invert dark:opacity-60" />
                <span className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.15em] font-mono font-bold">Results: {filteredValues.length}</span>
            </div>
            <button 
              onClick={onClose}
              className="flex items-center gap-2 text-muted-foreground/40 hover:text-foreground transition-colors cursor-pointer group pr-1"
            >
                <span className="text-[9px] uppercase tracking-widest font-mono font-bold">Close</span>
                <span className="bg-muted border border-border text-muted-foreground rounded-md px-1.5 py-0.5 text-[8px] font-mono font-black group-hover:bg-border group-hover:text-foreground">ESC</span>
            </button>
        </div>
      </div>
      
      {/* Background click handler */}
      <div 
        className="fixed inset-0 -z-10" 
        onClick={onClose}
      />
    </div>
  );
}
