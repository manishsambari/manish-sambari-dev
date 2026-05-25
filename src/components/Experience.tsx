import { Calendar, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Shopify Developer",
      company: "Freelance",
      period: "2025",
      bg: "pop-mint",
      description: "Built and customized a Shopify jewelry e-commerce site for client.",
      skills: ["Shopify", "E-commerce", "Payments", "UI/UX"],
    },
    {
      title: "Digital Asset Coordinator",
      company: "Freelance",
      period: "2024 – 2025",
      bg: "pop-coral",
      description:
        "Facilitated secure peer-to-peer cryptocurrency transactions and handled exchange rate checks.",
      skills: ["Crypto", "P2P", "Risk Mgmt"],
    },
    {
      title: "Discord Mod & Bot Dev",
      company: "Freelance",
      period: "2023 – 2024",
      bg: "pop-purple",
      description:
        "Managed large Discord communities, handled rule enforcement, and built automation/moderation bots.",
      skills: ["Node.js", "Discord.js", "Community"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="section-eyebrow pop-orange">✿ Also</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">
            Freelance & side gigs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`bento p-5 md:p-6 ${exp.bg}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-card border-2 border-foreground rounded-full text-xs font-bold">
                  <Briefcase className="w-3 h-3" />
                  Freelance
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-card border-2 border-foreground rounded-full text-xs font-bold">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-1">
                {exp.title}
              </h3>
              <p className="font-semibold text-foreground/75 mb-3">@ {exp.company}</p>
              <p className="text-foreground/85 mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((s) => (
                  <span key={s} className="chip bg-card">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
