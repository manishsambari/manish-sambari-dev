import { Code, Database, Cloud, Wrench, Brain } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
      bg: "pop-yellow",
      span: "col-span-12 md:col-span-7",
    },
    {
      title: "Frameworks",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Node.js", "React.js", "Express.js", "Next.js", "TailwindCSS", "Three.js", "Gemini AI", "OpenAI"],
      bg: "pop-pink",
      span: "col-span-12 md:col-span-5",
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-5 h-5" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "Firebase", "AWS", "GCS", "Hardhat"],
      bg: "pop-blue",
      span: "col-span-12 md:col-span-5",
    },
    {
      title: "Tools & DevOps",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["Git/GitHub", "Vercel", "Render", "Postman", "Canva", "Figma", "Shopify", "WordPress", "Power BI", "Tableau", "Clerk", "Metamask"],
      bg: "pop-green",
      span: "col-span-12 md:col-span-7",
    },
    {
      title: "CS Fundamentals",
      icon: <Brain className="w-5 h-5" />,
      skills: ["OOP", "Data Structures", "Algorithms", "Operating Systems", "Networking", "DBMS"],
      bg: "pop-purple",
      span: "col-span-12",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="section-eyebrow pop-blue">⚡ Toolbelt</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">
            Skills & tools
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`bento p-5 md:p-6 ${cat.bg} ${cat.span}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-card border-2 border-foreground rounded-full">
                  {cat.icon}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="chip bg-card">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
