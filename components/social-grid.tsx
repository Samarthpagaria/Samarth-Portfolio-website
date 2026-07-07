"use client";

import { 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  ArrowUpRight,
  MessageSquare,
  Globe
} from "lucide-react";

import Image from "next/image";

const socialItems = [
  {
    name: "X",
    image: "/x.png",
    url: "https://x.com/SamarthPagaria",
    color: "bg-white",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Samarthpagaria",
    color: "bg-zinc-900",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/samarth-pagaria-81a93b281/",
    color: "bg-[#0077b5]",
  },
];

export default function SocialGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-1 border-b border-dotted border-border bg-background transition-colors duration-300">
      {socialItems.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 px-4 flex items-center justify-between bg-card border border-border border-dotted group hover:bg-muted/30 transition-all duration-300 rounded-sm"
        >
          <div className="flex items-center gap-3">
            {/* Social Icon/Image with background */}
            <div className={`w-8 h-8 rounded-lg ${social.color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
              {social.image ? (
                <div className="relative w-full h-full">
                  <Image 
                    src={social.image} 
                    alt={`${social.name} logo`}
                    fill
                    className={`object-cover ${social.name === 'X' ? 'dark:invert' : ''}`}
                  />
                </div>
              ) : social.icon ? (
                <social.icon size={16} className="text-white" />
              ) : null}
            </div>
            
            {/* Social Name */}
            <span className="font-mono font-semibold text-[13px] text-foreground tracking-tight">
              {social.name}
            </span>
          </div>

          {/* External Link Arrow */}
          <ArrowUpRight 
            size={14} 
            className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" 
          />
        </a>
      ))}
    </div>
  );
}
