import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const Achievements = () => {
  const hackathons = [
    {
      name: "Electrowiz 2025",
      position: "Runner-up",
      icon: <Trophy className="w-5 h-5" />,
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      name: "Devfolio Hackathon",
      position: "Participant",
      icon: <Users className="w-5 h-5" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "RUBIX 2024",
      position: "Top 5 Finalist",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hackathons & <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Competitive programming and innovation challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {hackathons.map((hackathon, index) => (
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
              <Card className="glass-card group hover:shadow-2xl transition-all duration-300 h-full text-center">
                <CardHeader className="space-y-4">
                  <motion.div
                    className={`mx-auto p-3 rounded-full bg-gradient-to-r ${hackathon.gradient} text-white w-fit`}
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
                    {hackathon.icon}
                  </motion.div>
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {hackathon.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium"
                  >
                    {hackathon.position}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;