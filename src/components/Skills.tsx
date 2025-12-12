import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Node.js", "React.js", "Express.js", "Next.js", "TailwindCSS", "Gemini AI", "OpenAI"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Platforms & Tools",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Canva", "Figma", "Shopify", "WordPress", "Power BI", "Tableau", "Clerk", "Metamask"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "AWS", "GCS", "Git/GitHub", "Hardhat"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "CS Fundamentals",
      icon: <Database className="w-6 h-6" />,
      skills: ["OOPs", "Data Structures", "Algorithms", "Operating Systems", "Networking", "DBMS"],
      color: "from-purple-500 to-violet-500"
    }
  ];


  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I use to build modern web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateZ: index % 2 === 0 ? -45 : 45 }}
              whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
              transition={{ delay: index * 0.15, duration: 0.9, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, rotateZ: 2, y: -15 }}
            >
              <Card className="glass-card group hover:shadow-2xl transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <motion.div 
                      className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.icon}
                    </motion.div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="px-3 py-1 hover:bg-primary/10 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <Card className="glass-card mb-16 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Core Competencies</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-semibold text-primary">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">End-to-end web application development with modern frameworks</p>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-semibold text-primary">Modern Web Technologies</h4>
                  <p className="text-sm text-muted-foreground">Building responsive, performant applications with cutting-edge tools</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;