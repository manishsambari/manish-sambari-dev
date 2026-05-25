import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Internships from "@/components/Internships";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FloatingElements from "@/components/FloatingElements";
import ScrollProgress from "@/components/ScrollProgress";
import Marquee from "@/components/Marquee";
import PullQuote from "@/components/PullQuote";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <FloatingElements />
      <Navigation />
      <main className="relative z-10">
        <Hero />

        <Marquee bg="pop-yellow" />

        <div id="projects"><Projects /></div>
        <div id="internships"><Internships /></div>
        <div id="experience"><Experience /></div>

        <PullQuote
          quote="Code is read more often than it is written — so I write it like a letter to my future self."
          attribution="— Manish, after his third refactor"
        />

        <Marquee
          bg="pop-pink"
          reverse
          items={[
            "LEARNING IN PUBLIC",
            "✦",
            "READING DOCS > WATCHING TUTORIALS",
            "✦",
            "TYPESCRIPT EVERYWHERE",
            "✦",
            "OBSESSED WITH UX",
            "✦",
            "ALWAYS SHIPPING",
            "✦",
          ]}
        />

        <div id="education"><Education /></div>
        <div id="skills"><Skills /></div>
        <div id="achievements"><Achievements /></div>
        <FAQ />
        <div id="contact"><Contact /></div>
      </main>

      <footer className="relative z-10 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="bento p-5 md:p-6 bg-card flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full pop-pink border-2 border-foreground flex items-center justify-center font-display font-bold">
                M
              </span>
              <p className="font-semibold text-sm">
                © 2025 Manish Sambari. Built with care.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="sticker pop-yellow">React</span>
              <span className="sticker pop-blue">Tailwind</span>
              <span className="sticker pop-green">Vite</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
