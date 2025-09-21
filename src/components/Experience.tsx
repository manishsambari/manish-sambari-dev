import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Shopify Developer",
      company: "Freelance",
      period: "2025",
      location: "Remote",
      type: "Contract",
      description: "Created and customized Shopify-based jewelry e-commerce website with secure payment gateways and optimized user experience.",
      skills: ["Shopify", "E-commerce", "Payment Integration", "UI/UX"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Digital Asset Transaction Coordinator",
      company: "Freelance",
      period: "June 2024 – Dec 2024",
      location: "Remote",
      type: "Contract",
      description: "Facilitated peer-to-peer cryptocurrency transactions, ensuring secure exchanges with expertise in crypto valuation and real-time management.",
      skills: ["Cryptocurrency", "P2P Trading", "Risk Management", "Market Analysis"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Discord Bot Developer",
      company: "Freelance",
      period: "2023 – 2024",
      location: "Remote",
      type: "Freelance",
      description: "Created custom Discord bots with API integration, automation, and moderation features to enhance server functionality for various communities.",
      skills: ["Node.js", "Discord.js", "API Integration", "Bot Development"],
      gradient: "from-blue-500 to-purple-600"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Freelance":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Contract":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, rotateX: -90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building expertise through diverse projects and collaborations
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: index % 2 === 0 ? -180 : 180, scale: 0.5 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{ delay: index * 0.3, duration: 1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 5, y: -10 }}
            >
              <Card className="glass-card group hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Briefcase className="w-5 h-5 text-primary" />
                        </motion.div>
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{exp.company}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <Badge className={getTypeColor(exp.type)}>
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <motion.div 
                    className={`h-2 rounded-full bg-gradient-to-r ${exp.gradient} opacity-60`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    viewport={{ once: true }}
                  />
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="outline" className="text-xs hover:bg-primary/10">
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
      </div>
    </section>
  );
};

export default Experience;