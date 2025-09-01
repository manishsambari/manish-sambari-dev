import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
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
          <p>&copy; 2025 Manish Sambari. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
