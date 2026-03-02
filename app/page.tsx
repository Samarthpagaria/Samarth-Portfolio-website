import Navbar from "@/components/navbar";
import HeroSparkles from "@/components/hero-sparkles";
import PersonalInfo from "@/components/personal-info";
import SectionLabel from "@/components/section-label";
import SlantSection from "@/components/slant-section";
import GridInfo from "@/components/grid-info";
import SocialGrid from "@/components/social-grid";
import AboutSection from "@/components/about-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSparkles />
      <SectionLabel label="Personal Details" index="01" />
      <PersonalInfo />
      <SlantSection />
      <GridInfo />
      <SocialGrid />
      <SectionLabel label="About" index="02" />
      <AboutSection />
    </div>
  );
}
