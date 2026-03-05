"use client";

import React, { useState, useEffect } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Globe, 
  User, 
  Zap, 
  GraduationCap
} from "lucide-react";

export default function GridInfo() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      }).format(now));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const infoItems = [
    {
      icon: Briefcase,
      label: "Role",
      value: "Full-Stack Engineer",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.Tech @Vidyalankar Institute of Technology",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, Maharashtra",
    },
    {
      icon: Clock,
      label: "Local Time (IST)",
      value: `${time || "00:00:00"} // (UTC +5:30)`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India 🇮🇳",
    },
    {
      icon: Phone,
      label: "Contact",
      value: "+91 8591881708",
    },
    {
      icon: Mail,
      label: "Email",
      value: "pagariasamarth@gmail.com",
    },
    {
      icon: Globe,
      label: "Digital Home",
      value: "yourname.dev",
      link: "https://yourname.dev",
    },
    {
      icon: User,
      label: "Pronouns",
      value: "he/him",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-dotted border-border bg-background transition-colors duration-300">
      {infoItems.map((item, index) => (
        <div 
          key={index} 
          className={`
            p-3 py-2.5 flex items-center gap-3 border-border border-dotted
            ${index % 2 === 0 ? "md:border-r" : ""}
            ${index < infoItems.length  ? "border-b md:border-b-0" : ""}
             ${index % 2 == 0 ? "md:border-b" : "md:border-b"}
            group hover:bg-muted/30 transition-colors duration-300
          `}
        >
          {/* Icon Box with layered background effect */}
          <div className="relative shrink-0">
            {/* Outer "outline" layer */}
            <div className="absolute inset-[-2px] border border-border/50 rounded-md group-hover:scale-105 transition-transform duration-500" />
            
            {/* Main box */}
            <div className="relative w-7 h-7 bg-card border border-border flex items-center justify-center rounded-md shadow-[1.5px_1.5px_0px_var(--border)] group-hover:shadow-[0.5px_0.5px_0px_var(--border)] group-hover:translate-x-px group-hover:translate-y-px transition-all duration-300">
              <item.icon size={12} className="text-foreground stroke-[1.5px]" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-[0.15em] font-mono text-muted-foreground mb-0">
              {item.label}
            </span>
            <span className="text-[11px] font-mono font-semibold text-foreground tracking-tight leading-tight">
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
