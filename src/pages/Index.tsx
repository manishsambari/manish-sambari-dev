import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Internships from "@/components/Internships";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      <Navigation />
      <main className="pt-16 relative z-10">
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
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Manish Sambari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
