import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Shopify Developer",
      company: "Freelance",
      period: "2025",
      location: "Remote",
      type: "Contract",
      description: "Built and customized a Shopify jewelry e-commerce site for client.",
      skills: ["Shopify", "E-commerce", "Payment Integration", "UI/UX"],
    },
    {
      title: "Digital Asset Transaction Coordinator",
      company: "Freelance",
      period: "2024 – 2025",
      location: "Remote",
      type: "Contract",
      description:
        "Facilitated secure peer-to-peer cryptocurrency transactions and handled exchange rate checks.",
      skills: ["Cryptocurrency", "P2P Trading", "Risk Management", "Market Analysis"],
    },
    {
      title: "Discord Moderator & Bot Developer",
      company: "Freelance",
      period: "2023 – 2024",
      location: "Remote",
      type: "Freelance",
      description:
        "Managed large Discord communities and handled rule enforcement and conflict resolution. Built custom automation and moderation bots with API integration.",
      skills: ["Node.js", "Discord.js", "API Integration", "Community Management"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            <span className="text-primary">$</span> grep -i "freelance" experience.txt
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold">
            <span className="text-primary">##</span> Additional Experience
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-2">
            // freelance gigs &amp; side ventures
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-10 border-l border-border">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pb-8 last:pb-0">
              <div className="absolute -left-[27px] md:-left-[43px] top-1 w-4 h-4 border border-primary bg-background flex items-center justify-center">
                <span className="block w-1.5 h-1.5 bg-primary" />
              </div>

              <div className="term-card">
                <div className="border-b border-border bg-secondary/30 px-4 py-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-primary" />
                    [{exp.type}]
                  </span>
                  <span className="text-accent">{exp.period}</span>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-mono text-lg font-bold text-foreground">{exp.title}</h3>
                    <div className="font-mono text-sm text-primary mt-0.5">
                      @ {exp.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs font-mono text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                    {exp.skills.map((s) => (
                      <span key={s} className="term-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
