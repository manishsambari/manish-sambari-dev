import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FinSight",
      tagline: "AI Finance Platform For Automated Expense Tracking",
      description:
        "Full-stack AI-powered finance platform for automated expense tracking and real-time insights. Integrated Gemini AI for receipt scanning with accurate data extraction and smart categorization. Designed a modern, responsive UI using Shadcn, with secure data handling implemented through Prisma and Supabase.",
      tech: ["Next.js", "TailwindCSS", "Supabase", "Gemini AI", "Shadcn UI", "Prisma"],
      category: "Full-Stack",
      github: "https://github.com/manishsambari/FinSight",
      live: "https://finsight-eight.vercel.app",
    },
    {
      title: "BrowseAndBuy",
      tagline: "Student Marketplace for Books & Study Materials",
      description:
        "A platform where seniors can list old textbooks and materials for juniors to buy. Real-time chat using Socket.io enables seamless communication between buyers and sellers, with a simple and intuitive user flow.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      category: "Full-Stack",
      github: "https://github.com/manishsambari/BrowseAndBuy",
      live: "https://browsenbuy.vercel.app/",
    },
    {
      title: "Discord Bot Ecosystem",
      tagline: "Multi-Purpose Automation & Moderation System",
      description:
        "Multi-purpose Discord bot with 400+ commands covering moderation, economy, utilities, and entertainment. Integrated MongoDB Atlas for persistent data storage and personalized server configurations. Improved an existing open-source project by enhancing performance, scalability, and user engagement.",
      tech: ["Node.js", "Discord.js", "MongoDB", "WebHook", "Giphy", "OpenAI"],
      category: "Backend",
      github: "https://github.com/manishsambari/Discord-Bot-Own",
    },
    {
      title: "Crowdfunding Marketplace",
      tagline: "Decentralized Fundraising on Ethereum",
      description:
        "Decentralized crowdfunding platform enabling users to create campaigns and raise funds through Ethereum smart contracts.",
      tech: ["React.js", "Solidity", "Hardhat", "Metamask"],
      category: "Web3",
      github: "https://github.com/manishsambari/Crowdfunding",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            <span className="text-primary">$</span> ls ./projects
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold">
            <span className="text-primary">##</span> Projects
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-2 max-w-2xl">
            // a collection of full-stack applications showcasing modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="term-card flex flex-col">
              {/* Card terminal header */}
              <div className="border-b border-border bg-secondary/30 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <FolderGit2 className="w-3.5 h-3.5 text-primary" />
                  <span>./{project.title.toLowerCase().replace(/\s+/g, "-")}</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  [{project.category}]
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col gap-4">
                <div>
                  <h3 className="font-mono text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-primary mt-1">
                    → {project.tagline}
                  </p>
                </div>

                <p className="font-mono text-sm text-foreground/75 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="term-chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto pt-2 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    source
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
