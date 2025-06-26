// src/App.tsx
import React from "react";
import { HeroSection } from "./components/hero-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { PartnersSection } from "./components/partners-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

function App() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
