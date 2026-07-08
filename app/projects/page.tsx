import Navbar from "@/components/navbar";
import SectionLabel from "@/components/section-label";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export const metadata = {
  title: "Projects | Samarth Pagaria",
  description: "All projects built by Samarth Pagaria — full-stack apps, AI platforms, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div id="projects">
        <SectionLabel label="Projects" index="01" />
        <Projects />
      </div>

      <Footer />
    </div>
  );
}
