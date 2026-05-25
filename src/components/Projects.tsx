import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "CourseShip",
      tagline: "Full-Stack E-Learning Platform",
      description:
        "MERN-stack app with Stripe payments, Cloudinary media hosting, and JWT + Zod auth. Responsive UI, instructor dashboard, and full course publishing workflow.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Cloudinary"],
      category: "Full-Stack",
      sticker: "✦ shipped",
      bg: "pop-yellow",
      github: "https://github.com/manishsambari/CourseShip",
      live: "https://courseship.vercel.app",
    },
    {
      title: "FinSight",
      tagline: "AI Finance Platform",
      description:
        "Automated expense tracking with Gemini AI receipt scanning, smart categorization, and secure data handling via Prisma + Supabase.",
      tech: ["Next.js", "Tailwind", "Supabase", "Gemini AI", "Prisma"],
      category: "AI · Full-Stack",
      sticker: "★ AI",
      bg: "pop-pink",
      github: "https://github.com/manishsambari/FinSight",
      live: "https://finsight-eight.vercel.app",
    },
    {
      title: "BrowseAndBuy",
      tagline: "Student Book Marketplace",
      description:
        "Seniors list old textbooks, juniors buy them. Real-time chat via Socket.io for seamless buyer↔seller communication.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      category: "Full-Stack",
      sticker: "♥ social",
      bg: "pop-blue",
      github: "https://github.com/manishsambari/BrowseAndBuy",
      live: "https://browsenbuy.vercel.app/",
    },
    {
      title: "Discord Bot Ecosystem",
      tagline: "400+ Commands · Multi-Purpose Bot",
      description:
        "Multi-purpose Discord bot covering moderation, economy, utilities, and entertainment with MongoDB Atlas persistence and OpenAI integration.",
      tech: ["Node.js", "Discord.js", "MongoDB", "OpenAI", "WebHook"],
      category: "Backend",
      sticker: "⚡ 400+",
      bg: "pop-green",
      github: "https://github.com/manishsambari/Discord-Bot-Own",
    },
    {
      title: "Crowdfunding Marketplace",
      tagline: "Decentralized Fundraising on Ethereum",
      description:
        "Decentralized crowdfunding platform enabling users to create campaigns and raise funds through Ethereum smart contracts.",
      tech: ["React", "Solidity", "Hardhat", "Metamask"],
      category: "Web3",
      sticker: "✿ web3",
      bg: "pop-purple",
      github: "https://github.com/manishsambari/Crowdfunding",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="section-eyebrow pop-pink mb-3">✦ My Work</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">
              Projects I've built
            </h2>
          </div>
          <p className="text-foreground/70 max-w-sm">
            Full-stack apps, AI tools, and one bot ecosystem with 400+ commands.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {projects.map((p, i) => {
            // Vary sizes for bento feel: first card spans more
            const span =
              i === 0
                ? "col-span-12 md:col-span-7"
                : i === 1
                ? "col-span-12 md:col-span-5"
                : i === 2
                ? "col-span-12 md:col-span-5"
                : i === 3
                ? "col-span-12 md:col-span-7"
                : "col-span-12";
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
                className={`bento p-6 md:p-7 relative flex flex-col ${p.bg} ${span}`}
              >
                <span className="sticker bg-card absolute top-4 right-4 -rotate-3 wobble-soft">
                  {p.sticker}
                </span>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-card border-2 border-foreground rounded-full">
                    {p.category}
                  </span>
                  <span className="font-display text-xs font-bold text-foreground/60 tracking-widest">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold mb-1">
                  {p.title}
                </h3>
                <p className="font-semibold text-foreground/75 mb-4">{p.tagline}</p>
                <p className="text-foreground/85 mb-5 leading-relaxed">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="chip bg-card">{t}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="pill-btn"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="pill-btn pop-yellow"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
