import Navbar from "@/components/navbar";
import HeroSparkles from "@/components/hero-sparkles";
import PersonalInfo from "@/components/personal-info";
import SectionLabel from "@/components/section-label";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSparkles />
      <SectionLabel label="Personal Details" index="01" />
      <PersonalInfo />
    </div>
  );
}
