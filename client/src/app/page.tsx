"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

const page = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <HeroSection />
      <ProjectsSection limit={6} />
      <Skills />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
