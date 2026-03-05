"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/new_logo.png";
import Link from "next/link";
import SearchBar from "./search-bar";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Music2 } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show logo after scrolling past hero section (approx 400px)
      if (window.scrollY > 400) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-1 px-6 bg-background border-b border-border transition-all duration-300">
      <div className="flex items-center gap-4">
        <AnimatePresence mode="wait">
          {showLogo && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center h-8 w-16 relative"
            >
              <Image 
                src={logo} 
                alt="Logo" 
                fill
                className="object-contain dark:invert" 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6">
          <Link className="font-mono text-[13px] text-muted-foreground hover:text-foreground transition-colors" href="/">
            Home
          </Link>
          <SearchBar />
        </div>

        <div className="flex items-center gap-4 border-l border-border pl-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center group text-muted-foreground hover:text-foreground"
          >
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5 group-hover:scale-110 transition-all" />
          </a>
          <AnimatedThemeToggler className="w-8 h-8 text-muted-foreground hover:text-foreground transition-colors" duration={500} />
          <button className="w-5 h-5 flex items-center justify-center transition-all group text-muted-foreground hover:text-foreground">
            <Music2 className="w-5 h-5 group-hover:scale-110 transition-all" />
          </button>
        </div>
      </div>
    </nav>
  );
}
