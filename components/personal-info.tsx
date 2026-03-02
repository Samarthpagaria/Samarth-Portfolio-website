import Image from "next/image";
import profilePic from "@/public/image.png";
import { WordRotate } from "@/components/ui/word-rotate"

export default function PersonalInfo() {
  return (
    <div className="flex items-center border-b border-[#ededf0] bg-background">
      <div className="p-1  border-r border-[#ededf0]"><div className="shrink-0 relative">
        {/* Geometric Decorative Border */}
       
        <div className="absolute inset-[-3px] rounded-full border border-neutral-300" />
        
        <div className="relative w-40 h-40 p-2 rounded-full border border-neutral-200 overflow-hidden bg-white">
          <Image 
                      
            src={profilePic} 
            alt="Profile Picture" 
            fill 
            className="object-cover"
          />
        </div>
      </div></div>
      <div className="flex-1 flex flex-col self-stretch border-r border-[#ededf0]">
              <div className="px-2 flex-[2] border-b border-[#ededf0] flex flex-col justify-between py-1.5 "> 
                <div className="flex justify-end items-center w-full">
                  <span className="text-[10px] font-mono text-neutral-500 font-medium border border-[#ededf0] px-1.5 py-0.5 rounded-full bg-neutral-50">Age: 21</span>
                </div>
                <p className="font-mono text-neutral-300 font-medium text-sm ">Chasing sunsets and big ideas</p>
              </div>
              <div className="pl-2 flex-1 border-b border-[#ededf0] flex items-center"> <p className="font-sans text-zinc-900 text-3xl font-extrabold">Samarth Pagaira</p> </div>
              <div className="pl-2 flex-1"> <WordRotate words={["Full Stack Engineer", "Creating with code. Small details matter.","Solving complex problems with elegant code","Optimizing for performance and user experience."]} className="text-neutral-500 font-light text-sm font-mono" duration={3000} /> </div>
      </div>
    </div>
  );
}
