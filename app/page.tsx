import NavigationBar from "@/components/layout/NavigationBar";
import CertificatesSection from "@/components/sections/CertificatesSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="w-full scroll-smooth">
      <div className="fixed top-0 left-0 w-full h-full bg-linear-to-tl from-sky-400 via-purple-300 to-indigo-500 opacity-30 mix-blend-overlay"></div>
      <NavigationBar />
      <HeroSection />
      <CertificatesSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}
