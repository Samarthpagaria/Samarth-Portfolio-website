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
  "Current Project",
  "Previous Project",
  "LinkedIn Profile",
  "Twitter Handle",
  "GitHub Repository",
  "Contact Info",
  "Work Experience",
  "Skill Set",
  "Recent Blog Posts",
  "Case Studies",
  "UI/UX Design Portfolio",
  "Frontend Development",
  "Backend Architecture",
  "Fullstack Projects",
  "Open Source",
  "Photography",
  "Travel Logs",
  "Gear List",
  "Recommendations",
  "Newsletter",
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

  if (!isOpen) return null;

  const filteredValues = DEFAULT_VALUES.filter((val) =>
    val.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/5 animate-in fade-in duration-300">
      <div 
        ref={modalRef}
        className="w-full max-w-lg bg-background border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col h-[400px]"
      >
        <div className="flex items-center px-4 py-3 border-b border-neutral-100 flex-none text-neutral-400">
          <Search className="w-4 h-4" />
          <input
            autoFocus
            type="text"
            placeholder="Search..."
            className="flex-1 ml-3 bg-transparent border-none outline-none text-sm placeholder:text-neutral-300 text-neutral-700 font-medium"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-1 overflow-y-auto flex-1 [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-neutral-200/80 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-track]:bg-transparent">
          <div className="space-y-0.5 pr-1.5">
            {filteredValues.length > 0 ? (
              filteredValues.map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-4 py-2.5 rounded-2xl hover:bg-neutral-50 transition-colors text-[13px] font-medium flex items-center justify-between group text-neutral-700"
                  onClick={() => {
                    console.log("Selected:", item);
                    onClose();
                  }}
                >
                  <span>{item}</span>
                  <span className="text-[9px] text-neutral-300 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase">SELECT</span>
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-neutral-400 text-xs font-medium italic">
                No results found for &ldquo;{query}&rdquo;
              </div>
            )}
          </div>
        </div>
        
        <div className="px-4 py-2.5 bg-neutral-50/50 border-t border-neutral-100 flex justify-between items-center flex-none">
            <div className="flex items-center gap-2">
                <Image src={logo} alt="Mini Logo" width={18} height={18} className="grayscale opacity-30" />
                <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-bold">Search results: {filteredValues.length}</span>
            </div>
            <button 
              onClick={onClose}
              className="flex items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer group"
            >
                <span className="text-[9px] uppercase tracking-widest font-bold">Exit</span>
                <span className="bg-neutral-100 border border-neutral-200 text-neutral-500 rounded-md px-1.5 py-0.5 text-[8px] font-black group-hover:bg-neutral-200">ESC</span>
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
