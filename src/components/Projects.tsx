import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

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
      github: "https://github.com/moneyish69/Discord-Bot-Own"
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of full-stack applications showcasing modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8, 
                type: "spring", 
                bounce: 0.6 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <Card className="glass-card group hover:shadow-2xl transition-all duration-300 h-full">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <Badge variant="secondary" className="w-fit">
                        {project.category}
                      </Badge>
                    </motion.div>
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="p-2"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </motion.div>
                      {project.live && (
                        <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="p-2"
                            onClick={() => window.open(project.live, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                  <motion.div 
                    className={`h-2 rounded-full bg-gradient-to-r ${project.gradient} opacity-60`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    viewport={{ once: true }}
                  />
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + techIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge variant="outline" className="text-xs hover:bg-primary/10">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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