import manishPhoto from "@/assets/manish-photo.jpg";
import { Download, ArrowRight, Mail, Github, MapPin, Sparkles, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useMumbaiTime } from "@/hooks/useMumbaiTime";
import { useCountUp } from "@/hooks/useCountUp";

const Hero = () => {
  const mumbaiTime = useMumbaiTime();
  const proj = useCountUp(15, { suffix: "+" });
  const bot = useCountUp(400, { suffix: "+", duration: 1400 });
  const cert = useCountUp(5, { suffix: "+", duration: 900 });

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/ManishSResume.pdf?v=" + Date.now();
    link.download = "ManishSambari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-28 pb-12">
      <div className="max-w-6xl w-full mx-auto">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="sticker pop-green">
            <Sparkles className="w-3.5 h-3.5" />
            Open to opportunities · Mumbai, IN
          </span>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {/* Big intro tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bento bento-lg col-span-12 md:col-span-8 p-6 md:p-10 pop-yellow relative overflow-hidden"
          >
            <span className="sticker pop-pink absolute top-4 right-4 -rotate-6 wobble-soft">
              ✦ hello!
            </span>

            <p className="font-semibold text-foreground/70 mb-3">Hi there, I'm</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-4">
              Manish<br />Sambari.
            </h1>
            <div className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6">
              <TypeAnimation
                sequence={[
                  "Full-Stack Engineer",
                  1600,
                  "React + Node specialist",
                  1600,
                  "AI integrations enjoyer",
                  1600,
                  "Always shipping",
                  1600,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={70}
                repeat={Infinity}
              />
            </div>
            <p className="text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed">
              Full-Stack Software Engineer building production-grade web apps across the
              JavaScript &amp; TypeScript ecosystem — React, Next.js, Node, and clean APIs.
            </p>
          </motion.div>

          {/* Photo tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bento col-span-12 md:col-span-4 p-4 pop-pink relative"
          >
            <span className="sticker pop-yellow absolute -top-3 -left-3 rotate-[-8deg] wobble">
              ★ that's me
            </span>
            <div className="border-[3px] border-foreground rounded-xl overflow-hidden">
              <img
                src={manishPhoto}
                alt="Manish Sambari"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Stat tiles — count up on viewport enter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bento col-span-4 md:col-span-3 p-5 pop-blue text-center"
          >
            <div
              ref={proj.ref as React.RefObject<HTMLDivElement>}
              className="font-display text-4xl md:text-5xl font-bold tabular-nums"
            >
              {proj.display}
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider mt-1">
              Projects
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bento col-span-4 md:col-span-3 p-5 pop-purple text-center"
          >
            <div
              ref={bot.ref as React.RefObject<HTMLDivElement>}
              className="font-display text-4xl md:text-5xl font-bold tabular-nums"
            >
              {bot.display}
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider mt-1">
              Bot Commands
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bento col-span-4 md:col-span-3 p-5 pop-mint text-center"
          >
            <div
              ref={cert.ref as React.RefObject<HTMLDivElement>}
              className="font-display text-4xl md:text-5xl font-bold tabular-nums"
            >
              {cert.display}
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider mt-1">
              Certifications
            </div>
          </motion.div>

          {/* CTA tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bento col-span-12 md:col-span-3 p-5 bg-card flex flex-col gap-3 justify-center"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="pill-btn pop-yellow w-full justify-center"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={downloadResume} className="pill-btn w-full justify-center">
              <Download className="w-4 h-4" />
              Resume
            </button>
          </motion.div>

          {/* Tech stack tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bento col-span-12 md:col-span-7 p-5 bg-card"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-display font-bold text-sm uppercase tracking-wider">
                ⚡ stack i love
              </p>
              <span className="sticker pop-coral">currently</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { t: "React",      c: "pop-blue" },
                { t: "Next.js",    c: "bg-card" },
                { t: "TypeScript", c: "pop-blue" },
                { t: "Node.js",    c: "pop-green" },
                { t: "PostgreSQL", c: "pop-purple" },
                { t: "MongoDB",    c: "pop-green" },
                { t: "Tailwind",   c: "pop-mint" },
                { t: "Three.js",   c: "pop-yellow" },
                { t: "Python",     c: "pop-orange" },
              ].map(({ t, c }) => (
                <span key={t} className={`chip ${c}`}>{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Now tile — live-feeling status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bento col-span-12 md:col-span-5 p-5 pop-coral relative"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-display font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60 animate-ping" />
                  <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-foreground" />
                </span>
                Right now
              </p>
              <span className="text-xs font-bold text-foreground/60">/now</span>
            </div>
            <ul className="space-y-1.5 text-sm">
              <li className="flex gap-2"><span className="font-bold">⌁</span> Building production tools @ KVAR Technologies</li>
              <li className="flex gap-2"><span className="font-bold">⌁</span> Deep-diving Next.js 15 + Server Components</li>
              <li className="flex gap-2"><span className="font-bold">⌁</span> Picking up Go for the next side project</li>
              <li className="flex gap-2"><span className="font-bold">⌁</span> Reading <em>The Pragmatic Programmer</em></li>
            </ul>
            <div className="flex flex-wrap gap-2 pt-3 mt-3 border-t-2 border-dashed border-foreground/30">
              <a
                href="mailto:sambarimanish@gmail.com"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 border-2 border-foreground rounded-full bg-card text-xs font-bold hover:-translate-y-0.5 transition-transform"
              >
                <Mail className="w-3 h-3" />
                Email
              </a>
              <a
                href="https://github.com/manishsambari"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 border-2 border-foreground rounded-full bg-card text-xs font-bold hover:-translate-y-0.5 transition-transform"
              >
                <Github className="w-3 h-3" />
                GitHub
              </a>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 border-2 border-foreground rounded-full bg-card text-xs font-bold tabular-nums"
                title="Live Mumbai time"
              >
                <Clock className="w-3 h-3" />
                Mumbai · {mumbaiTime}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
