import { Trophy, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const Achievements = () => {
  const hackathons = [
    {
      name: "Electrowiz 2025",
      position: "Runner-up",
      sticker: "🥈 #2",
      bg: "pop-yellow",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      name: "RUBIX 2024",
      position: "Top 5 Finalist",
      sticker: "★ Top 5",
      bg: "pop-pink",
      icon: <Award className="w-6 h-6" />,
    },
    {
      name: "Devfolio Hackathon",
      position: "Active Participant",
      sticker: "✦ played",
      bg: "pop-blue",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="section-eyebrow pop-coral">★ Wins</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">
            Hackathons & wins
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {hackathons.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`bento p-6 ${h.bg} relative text-center`}
            >
              <span className="sticker pop-card absolute -top-3 -right-3 rotate-6 wobble-soft">
                {h.sticker}
              </span>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-card border-2 border-foreground rounded-full mb-4 float-slow">
                {h.icon}
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">{h.name}</h3>
              <span className="inline-flex items-center px-3 py-1 bg-card border-2 border-foreground rounded-full text-sm font-bold">
                {h.position}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
