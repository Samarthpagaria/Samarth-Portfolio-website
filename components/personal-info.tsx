import Image from "next/image";
import profilePic from "@/public/image.png";
import { WordRotate } from "@/components/ui/word-rotate"

export default function PersonalInfo() {
  return (
    <div className="flex items-center border-b border-border bg-background transition-colors duration-300">
      <div className="p-1 border-r border-border">
        <div className="shrink-0 relative">
          <div className="absolute inset-[-3px] rounded-full border border-border" />
          
          <div className="relative w-40 h-40 p-2 rounded-full border border-border overflow-hidden bg-card transition-colors">
            <Image 
              src={profilePic} 
              alt="Profile Picture" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col self-stretch border-r border-border">
              <div className="px-2 flex-2 border-b border-border flex flex-col justify-between py-1.5 transition-colors"> 
                <div className="flex justify-end items-center w-full">
                  <span className="text-[10px] font-mono text-muted-foreground font-medium border border-border px-1.5 py-0.5 rounded-full bg-muted/30">Age: 21</span>
                </div>
                <p className="font-mono text-muted-foreground/60 font-medium text-sm">Chasing sunsets and big ideas</p>
              </div>
              <div className="pl-2 flex-1 border-b border-border flex items-center transition-colors">
                <p className="font-sans text-foreground text-3xl font-extrabold">Samarth Pagaria</p>
              </div>
              <div className="pl-2 flex-1 flex items-center">
                <WordRotate 
                  words={["Full Stack Engineer", "Creating with code. Small details matter.", "Solving complex problems with elegant code", "Optimizing for performance and user experience."]} 
                  className="text-muted-foreground font-light text-sm font-mono" 
                  duration={3000} 
                />
              </div>
      </div>
    </div>
  );
}
