import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Internships from "@/components/Internships";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen relative scanlines">
      <FloatingElements />
      <Navigation />
      <main className="pt-14 relative z-10">
        <Hero />
        <div id="projects">
          <Projects />
        </div>
        <div id="internships">
          <Internships />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <footer className="border-t border-border py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="font-mono text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
            <div>
              <span className="text-primary">$</span> echo "© 2025 Manish Sambari. All rights reserved."
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-primary" />
              <span>built with react + tailwind</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
