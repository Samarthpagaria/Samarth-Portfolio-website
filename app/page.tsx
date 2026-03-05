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
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <Navbar />
      <HeroSparkles />
      
      <div id="personal-details">
        <SectionLabel label="Personal Details" index="01" />
        <PersonalInfo />
        <SlantSection />
        <GridInfo />
        <SocialGrid />
      </div>

      <div id="about">
        <SectionLabel label="About" index="02" />
        <AboutSection />
      </div>

      <div id="github">
        <SectionLabel label="GitHub Activity" index="03" />
        <GitHubActivity />
      </div>

      <SlantSection />
      
      <div id="stacks">
        <SectionLabel label="Stacks" index="04" />
        <Stack />
      </div>

      <SlantSection />

      <div id="experience">
        <SectionLabel label="Experience" index="05" />
        <Experience />
      </div>

      <SlantSection />

      <div id="education">
        <SectionLabel label="Education" index="06" />
        <Education />
      </div>

      <SlantSection />

      <div id="projects">
        <SectionLabel label="Projects (02)" index="07" />
        <Projects />
      </div>

      <Footer />
    </div>
  );
}
