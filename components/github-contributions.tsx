"use client";

import { GitHubCalendar } from 'react-github-calendar';
import { useState, useEffect } from "react";

export default function GitHubActivity() {
  const githubUsername = "samarthpagaria";
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const [totalContributions, setTotalContributions] = useState<number | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateTheme = () => {
      setThemeMode(document.documentElement.classList.contains("dark") ? "dark" : "light");
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=${currentYear}`)
      .then((res) => res.json())
      .then((data) => {
        const total = data?.total?.[currentYear];
        if (typeof total === "number") setTotalContributions(total);
      })
      .catch(() => {/* silently fail */});
  }, [githubUsername, currentYear]);

  const themeColors = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className="w-full bg-background py-1 transition-colors duration-300 flex flex-col items-center font-sans border-b border-border">
      <div className="w-full max-w-4xl px-4 py-8">
        <div className="flex flex-col">
          <div className="flex justify-center overflow-x-auto no-scrollbar py-4 border border-border rounded-md bg-card p-4 transition-colors">
            <GitHubCalendar 
              username={githubUsername}
              theme={themeColors}
              colorScheme={themeMode}
              fontSize={13}
              blockSize={11}
              blockMargin={4}
              showTotalCount={false}
              showColorLegend={false}
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-[13px] text-muted-foreground">
            <div>
              {totalContributions !== null ? (
                <span>
                  <span className="text-foreground font-semibold">{totalContributions.toLocaleString()}</span>
                  {" contributions in "}
                  <span className="text-foreground font-semibold">{currentYear}</span>
                  {" on "}
                </span>
              ) : (
                <span>Contributions in {currentYear} on </span>
              )}
              <a 
                href={`https://github.com/${githubUsername}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground transition-all"
              >
                GitHub.
              </a>
            </div>
            
            <div className="flex items-center gap-[4px] font-sans">
              <span className="mr-1">Less</span>
              {themeColors[themeMode].map((color) => (
                <div 
                  key={color} 
                  className="w-[11px] h-[11px] rounded-[2px]" 
                  style={{ backgroundColor: color }} 
                />
              ))}
              <span className="ml-1">More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}