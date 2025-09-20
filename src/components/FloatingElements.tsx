import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Server, Cpu } from 'lucide-react';

const FloatingElements = () => {
  const floatingIcons = [
    { icon: Code, x: '15%', y: '20%', delay: 0, size: 40 },
    { icon: Database, x: '85%', y: '25%', delay: 0.5, size: 36 },
    { icon: Globe, x: '20%', y: '70%', delay: 1, size: 44 },
    { icon: Smartphone, x: '80%', y: '70%', delay: 1.5, size: 32 },
    { icon: Server, x: '90%', y: '45%', delay: 2, size: 38 },
    { icon: Cpu, x: '25%', y: '50%', delay: 2.5, size: 34 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Modern floating icons with glass effect */}
      {floatingIcons.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: element.x,
              top: element.y,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0.2, 0.4],
              scale: [0.8, 1.1, 1, 1.05],
              y: [-15, 15, -10, 10],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 12,
              delay: element.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon 
                size={element.size} 
                className="text-primary/40"
              />
            </div>
          </motion.div>
        );
      })}
      
      {/* Subtle gradient orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: 120 + i * 40,
            height: 120 + i * 40,
            left: `${10 + i * 25}%`,
            top: `${20 + i * 15}%`,
            background: `radial-gradient(circle, hsl(${142 + i * 20} 71% 45% / 0.05) 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Clean geometric elements */}
      <motion.div
        className="absolute top-32 right-24 w-16 h-16 border border-primary/30 rounded-xl bg-white/20 backdrop-blur-sm"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-16 w-12 h-12 bg-accent/20 rounded-full backdrop-blur-sm"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingElements;