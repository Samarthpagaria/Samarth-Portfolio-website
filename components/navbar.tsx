import Image from "next/image";
import logo from "@/public/new_logo.png";
import Link from "next/link";
import SearchBar from "./search-bar";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Music2 } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-2 px-4 border border-[#ededf0]">
          <Image src={logo} alt="Logo" width={50} height={50} />
          <div className="flex items-center gap-4">
              {/* search */}
              <div>
                <Link className="font-mono text-neutral-500" href="/">Home</Link>
              </div>             
              <SearchBar />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="w-8 h-8 flex items-center justify-center group">
                   <FontAwesomeIcon icon={faGithub} className="w-5 h-5 group-hover:scale-110 transition-all" />
                </a>
              <div className="flex items-center gap-2 border-l  pl-4 ">
                <AnimatedThemeToggler className="w-8 h-8" duration={500} />
                
                <button className="w-4 h-4 flex items-center justify-center   transition-all group">
                   <Music2 className="w-5 h-5  group-hover:scale-110 transition-all" />
                </button>
              </div>
        
      </div>
    </nav>
  );
}
