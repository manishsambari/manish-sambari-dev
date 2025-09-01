import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Photo */}
        <div className="relative inline-block">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 glow-effect">
            <img 
              src={profilePhoto} 
              alt="Manish Sambari" 
              className="w-full h-full object-cover"
            />
          </div>
          <Badge variant="secondary" className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 animate-float">
            ✨ Available for Work
          </Badge>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building the Future with{" "}
            <span className="gradient-text">Code</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer & AI Enthusiast crafting innovative solutions 
            for web3, fintech, and modern applications
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-3 animate-slide-up">
          {["React", "Node.js", "Python", "Next.js", "MongoDB", "Blockchain"].map((tech) => (
            <Badge key={tech} variant="outline" className="px-4 py-2 text-sm hover:bg-primary/10 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button size="lg" className="px-8 py-6 text-lg font-semibold glow-effect">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
            Get In Touch
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Bot Commands</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;