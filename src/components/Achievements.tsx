import { Trophy, Award, Users } from "lucide-react";

const Achievements = () => {
  const hackathons = [
    {
      name: "Electrowiz 2025",
      position: "Runner-up",
      tag: "1ST_RUNNER",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      name: "RUBIX 2024",
      position: "Top 5 Finalist",
      tag: "TOP_5",
      icon: <Award className="w-5 h-5" />,
    },
    {
      name: "Devfolio Hackathon",
      position: "Participant",
      tag: "PARTICIPANT",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            <span className="text-primary">$</span> ls ./hackathons --sort=rank
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold">
            <span className="text-primary">##</span> Hackathons &amp; Achievements
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-2">
            // competitive programming &amp; innovation challenges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {hackathons.map((h, index) => (
            <div key={index} className="term-card">
              <div className="border-b border-border bg-secondary/30 px-4 py-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                <span className="text-muted-foreground">#{String(index + 1).padStart(2, "0")}</span>
                <span className="text-accent">[{h.tag}]</span>
              </div>
              <div className="p-5 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-primary text-primary bg-primary/10">
                  {h.icon}
                </div>
                <h3 className="font-mono text-lg font-bold text-foreground">{h.name}</h3>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  → <span className="text-primary">{h.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
