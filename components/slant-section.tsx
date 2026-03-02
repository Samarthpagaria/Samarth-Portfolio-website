"use client";

export default function SlantSection() {
  return (
    <div className="border-b border-[#ededf0] bg-white h-8 relative overflow-hidden flex items-center">
      {/* Slant Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            120deg,
            #000,
            #000 1px,
            transparent 1px,
            transparent 10px
          )`
        }}
      />
    </div>
  );
}
