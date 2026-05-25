import manishPhoto from "@/assets/manish-photo.jpg";
import { Download, ArrowRight, MapPin, Mail, Github } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/ManishSResume.pdf?v=" + Date.now();
    link.download = "ManishSambari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-6xl w-full mx-auto">
        {/* Terminal Window */}
        <div className="term-window">
          {/* Window Header */}
          <div className="term-window-header">
            <span className="term-dot bg-destructive/70" />
            <span className="term-dot bg-accent/70" />
            <span className="term-dot bg-primary/70" />
            <span className="ml-3 text-xs font-mono text-muted-foreground">
              manish@portfolio: ~/whoami
            </span>
            <span className="ml-auto text-xs font-mono text-muted-foreground hidden sm:inline">
              zsh — 120x40
            </span>
          </div>

          {/* Window Body */}
          <div className="p-6 md:p-10">
            <div className="grid md:grid-cols-[1fr_280px] gap-8 md:gap-12 items-start">
              {/* Left — Typed lines */}
              <div className="space-y-5">
                <div className="font-mono text-sm md:text-base text-muted-foreground">
                  <span className="text-primary">$</span> whoami
                </div>
                <h1 className="font-mono text-3xl md:text-5xl font-bold leading-tight text-foreground">
                  Manish Sambari
                </h1>

                <div className="font-mono text-sm md:text-base text-muted-foreground">
                  <span className="text-primary">$</span> cat role.txt
                </div>
                <div className="font-mono text-lg md:text-2xl text-accent">
                  <TypeAnimation
                    sequence={[
                      "> Full-Stack Developer",
                      1800,
                      "> MERN Stack Engineer",
                      1800,
                      "> AI Integration Specialist",
                      1800,
                      "> Problem Solver",
                      1800,
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={70}
                    repeat={Infinity}
                  />
                  <span className="cursor-blink" />
                </div>

                <div className="font-mono text-sm md:text-base text-muted-foreground">
                  <span className="text-primary">$</span> cat about.md
                </div>
                <p className="font-mono text-sm md:text-base text-foreground/80 leading-relaxed max-w-2xl">
                  Full-Stack Software Engineer building production-grade web
                  applications across the JavaScript / TypeScript ecosystem.
                  Specializes in React, Next.js, Node.js, and RESTful API design —
                  with a track record of reducing API latency, improving frontend
                  performance, and shipping scalable architectures.
                </p>

                {/* Meta line */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-xs font-mono text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    Thane, Maharashtra
                  </span>
                  <a
                    href="mailto:sambarimanish@gmail.com"
                    className="inline-flex items-center gap-1.5 hover:text-primary"
                  >
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    sambarimanish@gmail.com
                  </a>
                  <a
                    href="https://github.com/manishsambari"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-primary"
                  >
                    <Github className="w-3.5 h-3.5 text-primary" />
                    manishsambari
                  </a>
                </div>

                {/* Status pill */}
                <div className="pt-3">
                  <span className="status-pill">Open to Opportunities</span>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <button
                    onClick={() =>
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="btn-brutal btn-brutal-accent"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="btn-brutal"
                  >
                    Get In Touch
                  </button>
                  <button onClick={downloadResume} className="btn-brutal">
                    <Download className="w-4 h-4" />
                    Resume.pdf
                  </button>
                </div>
              </div>

              {/* Right — ASCII framed photo + tech stack */}
              <div className="space-y-4">
                <div className="border border-border bg-secondary/30 p-1">
                  <div className="border border-border">
                    <img
                      src={manishPhoto}
                      alt="Manish Sambari"
                      className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="px-2 py-1 font-mono text-[10px] text-muted-foreground flex justify-between border-t border-border mt-1">
                    <span>./profile.jpg</span>
                    <span className="text-primary">● live</span>
                  </div>
                </div>

                <div className="border border-border p-3 bg-card">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
                    // stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "Node", "Next.js", "MongoDB", "Python", "Tailwind", "TypeScript"].map(
                      (t) => (
                        <span key={t} className="term-chip">
                          {t}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom stats */}
            <div className="grid grid-cols-3 gap-px bg-border mt-10 border border-border">
              {[
                { number: "15+", label: "projects shipped" },
                { number: "400+", label: "bot commands" },
                { number: "3", label: "certifications" },
              ].map((s) => (
                <div key={s.label} className="bg-card px-4 py-5 text-center">
                  <div className="font-mono text-3xl md:text-4xl font-bold text-primary">
                    {s.number}
                  </div>
                  <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-8 font-mono text-xs text-muted-foreground">
          <span className="text-primary">▼</span> scroll for more <span className="text-primary">▼</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
