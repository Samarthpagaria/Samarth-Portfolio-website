import Navbar from "@/components/navbar";
import HeroSparkles from "@/components/hero-sparkles";
import PersonalInfo from "@/components/personal-info";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSparkles />
      <PersonalInfo />
    </div>
  );
}
