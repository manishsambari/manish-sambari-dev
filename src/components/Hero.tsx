import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import manishPhoto from "@/assets/manish-photo.jpg";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentColor, setCurrentColor] = useState(0);
  const colors = [
    'text-blue-400',
    'text-green-400', 
    'text-purple-400',
    'text-pink-400',
    'text-yellow-400',
    'text-red-400',
    'text-orange-400'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [colors.length]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Photo */}
        <motion.div 
          className="relative inline-block"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.div 
            className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-white/50 shadow-2xl relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            animate={{ 
              boxShadow: [
                "0 0 30px rgba(255,255,255,0.3)",
                "0 0 60px rgba(255,255,255,0.5)", 
                "0 0 30px rgba(255,255,255,0.3)"
              ]
            }}
            style={{
              animationDuration: "3s",
              animationIterationCount: "infinite"
            }}
          >
            <motion.img 
              src={manishPhoto} 
              alt="Manish Sambari" 
              className="w-full h-full object-cover"
              animate={{ 
                filter: [
                  "brightness(1) contrast(1)",
                  "brightness(1.1) contrast(1.1)",
                  "brightness(1) contrast(1)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Badge variant="secondary" className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 animate-float bg-gradient-to-r from-white to-gray-100 text-black border-2 border-white/20 shadow-lg">
              💼 Open to Opportunities
            </Badge>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div 
            className="text-2xl md:text-3xl font-medium mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="font-bold text-white">Hi there, I'm </span>
            <TypeAnimation
              sequence={[
                'Manish Sambari.',
                2000,
                'a Full-stack Developer.',
                2000,
                'a Problem Solver.',
                2000,
                'an AI enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              deletionSpeed={70}
              style={{ display: 'inline-block' }}
              className={`transition-colors duration-500 ${colors[currentColor]} font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent`}
            />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
          >
            <TypeAnimation
              sequence={[
                'Crafting Digital Solutions with Innovation',
                2000,
                'Building Modern Web Applications',
                2000,
                'Creating Seamless User Experiences',
                2000,
                'Developing Cutting-Edge Technologies',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Full-Stack Developer creating modern web applications 
            with cutting-edge technologies and seamless user experiences
          </motion.p>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {["React", "Node.js", "Python", "Next.js", "MongoDB", "TailwindCSS", "JavaScript"].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.15, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge 
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 border-2 cursor-pointer mint-glow"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 mint-glow transition-all duration-300 transform hover:shadow-2xl border-0"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 border-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-6 text-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 transition-all duration-300"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/ManishSResume.pdf?v=' + Date.now();
                link.download = 'ManishSambari_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {[
            { number: "15+", label: "Projects" },
            { number: "400+", label: "Bot Commands" },
            { number: "6", label: "Certifications" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + index * 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="text-3xl font-bold mint-gradient"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;