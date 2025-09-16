import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Node.js", "React.js", "Express.js", "Next.js", "TailwindCSS"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI & Analytics",
      icon: <Database className="w-6 h-6" />,
      skills: ["Gemini AI", "OpenAI", "Power BI", "Tableau", "MS Excel"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Platforms & Tools",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Figma", "Canva", "Shopify", "WordPress", "Clerk", "Metamask"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "AWS", "GCS", "Git/GitHub", "Hardhat"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const certifications = [
    "Electrowiz 2025 Runnerup (Hackathon)",
    "Full Stack Python Developer (Kamal classes, Thane)",
    "Oracle Cloud Infrastructure 2025 Certified Foundations Associate"
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-up">
            Technologies and tools I use to build modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 py-1 hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Competencies */}
        <Card className="glass-card mb-16 hover:scale-105 transition-all duration-300 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Core Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="space-y-2 hover:scale-105 transition-transform">
                <h4 className="font-semibold text-primary">Full-Stack Development</h4>
                <p className="text-sm text-muted-foreground">End-to-end web application development with modern frameworks</p>
              </div>
              <div className="space-y-2 hover:scale-105 transition-transform">
                <h4 className="font-semibold text-primary">Modern Web Technologies</h4>
                <p className="text-sm text-muted-foreground">Building responsive, performant applications with cutting-edge tools</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Certifications & Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;