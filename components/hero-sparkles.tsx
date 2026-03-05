"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import logo from "@/public/new_logo.png";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function HeroSparkles() {
  const [particleColor, setParticleColor] = useState("#000000");
  
  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the motion
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  // Transform springs into translation values (max 12px move)
  const translateX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  // Transform for very subtle rotation based on movement (max 4 degrees)
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setParticleColor(isDark ? "#FFFFFF" : "#000000");

    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains("dark");
      setParticleColor(isDarkNow ? "#FFFFFF" : "#000000");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-[200px] h-[27vh] relative w-full flex flex-col items-center justify-center overflow-hidden bg-background border-b border-border transition-colors duration-500 cursor-default"
    >
      <div className="w-full absolute inset-0 h-full pointer-events-none">
        <SparklesCore
          id="tsparticleshero"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={200}
          className="w-full h-full"
          particleColor={particleColor}
        />
      </div>
      <motion.div 
        style={{ 
          x: translateX, 
          y: translateY,
          rotateX,
          rotateY,
          perspective: 1000
        }}
        className="relative z-20 pointer-events-none select-none flex flex-col items-center"
      >
        <Image 
          src={logo} 
          alt="Samarth Logo" 
          width={180} 
          height={180} 
          className="drop-shadow-2xl brightness-100 dark:invert transition-all duration-300"
        />
      </motion.div>
    </div>
  );
}
