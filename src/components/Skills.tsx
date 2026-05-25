import { Code, Database, Cloud, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      key: "languages",
      icon: <Code className="w-4 h-4" />,
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      key: "frameworks",
      icon: <Wrench className="w-4 h-4" />,
      skills: ["Node.js", "React.js", "Express.js", "Next.js", "TailwindCSS", "Gemini AI", "OpenAI"],
    },
    {
      title: "Platforms & Tools",
      key: "tools",
      icon: <Cloud className="w-4 h-4" />,
      skills: ["Canva", "Figma", "Shopify", "WordPress", "Power BI", "Tableau", "Clerk", "Metamask"],
    },
    {
      title: "Databases & Cloud",
      key: "databases",
      icon: <Database className="w-4 h-4" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "AWS", "GCS", "Git/GitHub", "Hardhat"],
    },
    {
      title: "CS Fundamentals",
      key: "cs_core",
      icon: <Brain className="w-4 h-4" />,
      skills: ["OOPs", "Data Structures", "Algorithms", "Operating Systems", "Networking", "DBMS"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            <span className="text-primary">$</span> cat ./skills/*.txt
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold">
            <span className="text-primary">##</span> Skills
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-2">
            // toolbelt for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((category) => (
            <div key={category.key} className="term-card">
              <div className="border-b border-border bg-secondary/30 px-4 py-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="text-primary">{category.icon}</span>
                <span>./{category.key}.txt</span>
              </div>
              <div className="p-5">
                <h3 className="font-mono text-base font-bold text-foreground mb-3">
                  <span className="text-primary">{">"}</span> {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((s) => (
                    <span key={s} className="term-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Core competencies card */}
          <div className="term-card md:col-span-2">
            <div className="border-b border-border bg-secondary/30 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              ./core_competencies.txt
            </div>
            <div className="p-5 grid md:grid-cols-2 gap-5">
              <div className="border border-border p-4 bg-secondary/20">
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                  → full-stack development
                </div>
                <p className="font-mono text-sm text-foreground/75">
                  End-to-end web application development with modern frameworks and the MERN stack.
                </p>
              </div>
              <div className="border border-border p-4 bg-secondary/20">
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                  → modern web technologies
                </div>
                <p className="font-mono text-sm text-foreground/75">
                  Building responsive, performant applications with cutting-edge tools and AI integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
