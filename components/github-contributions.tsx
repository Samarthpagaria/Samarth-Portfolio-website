"use client";

import { GitHubCalendar } from 'react-github-calendar';

export default function GitHubActivity() {
  const githubUsername = "samarthpagaria";

  // Classic GitHub green theme colors
  const theme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className="w-full bg-white py-12 flex flex-col items-center font-sans border-b border-[#ededf0]">
      <div className="w-full max-w-4xl px-4">
        
        {/* Calendar Box */}
        <div className="flex flex-col">
          <div className="flex justify-center overflow-x-auto no-scrollbar py-4 border border-[#d0d7de] rounded-md bg-white p-4">
            <GitHubCalendar 
              username={githubUsername}
              theme={theme}
              colorScheme="light"
              fontSize={13}
              blockSize={11}
              blockMargin={4}
              showTotalCount={false}
              showColorLegend={false}
            />
          </div>

          {/* Footer Info Matching Image */}
          <div className="mt-4 flex items-center justify-between text-[13px] text-[#57606a]">
            <div>
              <span>3,621 contributions in 2025 on </span>
              <a 
                href={`https://github.com/${githubUsername}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline decoration-[#57606a] underline-offset-4 hover:text-[#0969da] hover:decoration-[#0969da] transition-all"
              >
                GitHub.
              </a>
            </div>
            
            <div className="flex items-center gap-[4px] font-sans">
              <span className="mr-1 text-[#57606a]">Less</span>
              {theme.light.map((color) => (
                <div 
                  key={color} 
                  className="w-[11px] h-[11px] rounded-[2px]" 
                  style={{ backgroundColor: color }} 
                />
              ))}
              <span className="ml-1 text-[#57606a]">More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}