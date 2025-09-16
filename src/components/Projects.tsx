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
      category: "Full-Stack",
      gradient: "from-emerald-500 to-teal-600",
      github: "https://github.com/moneyish69/FinSight",
      live: "https://finsight-eight.vercel.app"
    },
    {
      title: "BrowseAndBuy - Book Marketplace",
      description: "A web application that allows seniors to list their previous year books and materials for juniors to purchase. It also features real-time chatting to facilitate communication between buyers and sellers.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Express.js"],
      category: "Full-Stack",
      gradient: "from-orange-500 to-red-600",
      github: "https://github.com/moneyish69/BrowseAndBuy",
      live: "https://browsenbuy.vercel.app/"
    },
    {
      title: "Discord Bot Ecosystem",
      description: "Multipurpose Discord bot with 400+ commands for moderation, economy, and entertainment, featuring MongoDB and WebHook integration.",
      tech: ["Node.js", "Discord.js", "MongoDB", "WebHook", "Express.js"],
      category: "Backend",
      gradient: "from-indigo-500 to-blue-600",
      github: "https://github.com/moneyish69/DiscordBot"
    },
    {
      title: "Crowdfunding Marketplace",
      description: "Decentralized crowdfunding platform enabling users to create campaigns and raise funds through Ethereum smart contracts.",
      tech: ["React.js", "Solidity", "Hardhat", "Metamask"],
      category: "Web3",
      gradient: "from-blue-500 to-purple-600",
      github: "https://github.com/moneyish69/Crowdfunding"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            A collection of full-stack applications showcasing modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="w-fit animate-pulse">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="p-2 hover:scale-110 transition-transform"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    {project.live && (
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="p-2 hover:scale-110 transition-transform"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
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