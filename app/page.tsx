import Navbar from "@/components/navbar";
import HeroSparkles from "@/components/hero-sparkles";
import PersonalInfo from "@/components/personal-info";
import SectionLabel from "@/components/section-label";
import SlantSection from "@/components/slant-section";
import GridInfo from "@/components/grid-info";
import SocialGrid from "@/components/social-grid";
import AboutSection from "@/components/about-section";
import GitHubActivity from "@/components/github-contributions";
// import LeetCodeStats from "@/components/leetcode-stats";
import Stack from "@/components/stack";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <Navbar />
      <HeroSparkles />
      <SectionLabel label="Personal Details" index="01" />
      <PersonalInfo />
      <SlantSection />
      <GridInfo />
      <SocialGrid />
      <SectionLabel label="About" index="02" />
      <AboutSection />
      <SectionLabel label="GitHub Activity" index="03" />
      <GitHubActivity />
      <SectionLabel label="Leetcode Submissions" index="04" />
      {/* <LeetCodeStats /> */}
      <SlantSection />
      <SectionLabel label="Stacks" index="05" />
      <Stack />
    </div>
  );
}
