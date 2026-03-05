"use client";

export default function SlantSection() {
  return (
    <div className="border-b border-border bg-background h-8 relative overflow-hidden flex items-center transition-colors duration-300">
      {/* Slant Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.1] dark:opacity-[0.2]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            120deg,
            currentColor,
            currentColor 1px,
            transparent 1px,
            transparent 10px
          )`
        }}
      />
    </div>
  );
}
