import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FinSight - AI Finance Platform",
      description: "Full-stack AI-powered finance platform for automated expense tracking and financial insights with Gemini AI integration for receipt scanning.",
      tech: ["Next.js", "Tailwind", "Supabase", "Gemini AI", "Shadcn UI"],
      category: "AI & Finance",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Crowdfunding Marketplace",
      description: "Decentralized crowdfunding platform enabling users to create campaigns and raise funds through Ethereum smart contracts.",
      tech: ["React.js", "Solidity", "Hardhat", "Metamask"],
      category: "Blockchain",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Discord Bot Ecosystem",
      description: "Multipurpose Discord bot with 400+ commands for moderation, economy, and entertainment, featuring MongoDB and AI integration.",
      tech: ["Node.js", "Discord.js", "MongoDB", "WebHook", "OpenAI"],
      category: "Backend",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "Shopify E-commerce Store",
      description: "Custom jewelry e-commerce website with secure payment gateways and optimized shopping experience.",
      tech: ["Shopify", "JavaScript", "CSS"],
      category: "E-commerce",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI, blockchain, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card group">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="w-fit">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="p-2">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className={`h-2 rounded-full bg-gradient-to-r ${project.gradient} opacity-60`} />
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;