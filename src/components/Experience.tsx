import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Shopify Developer",
      company: "Freelance",
      period: "2025",
      location: "Remote",
      type: "Contract",
      description: "Created and customized Shopify-based jewelry e-commerce website with secure payment gateways and optimized user experience.",
      skills: ["Shopify", "E-commerce", "Payment Integration", "UI/UX"]
    },
    {
      title: "Digital Asset Transaction Coordinator",
      company: "Freelance",
      period: "June 2024 – Dec 2024",
      location: "Remote",
      type: "Contract",
      description: "Facilitated peer-to-peer cryptocurrency transactions, ensuring secure exchanges with expertise in crypto valuation and real-time management.",
      skills: ["Cryptocurrency", "P2P Trading", "Risk Management", "Market Analysis"]
    },
    {
      title: "Discord Bot Developer",
      company: "Freelance",
      period: "2023 – 2024",
      location: "Remote",
      type: "Freelance",
      description: "Created custom Discord bots with API integration, automation, and moderation features to enhance server functionality for various communities.",
      skills: ["Node.js", "Discord.js", "API Integration", "Bot Development"]
    },
    {
      title: "Web Developer Intern",
      company: "Dejorix",
      period: "Jan 2025 – Jun 2025",
      location: "Mumbai, Maharashtra",
      type: "Internship",
      description: "Designing and developing responsive web applications using HTML, CSS, JavaScript, and React.js. Collaborating with design teams for user-friendly interfaces.",
      skills: ["React.js", "HTML/CSS", "JavaScript", "UI/UX Design"]
    },
    {
      title: "Python Developer Intern",
      company: "Pythonic Labs",
      period: "Apr 2024 – May 2024",
      location: "Mumbai, Maharashtra",
      type: "Internship",
      description: "Built Python and SQL-based solutions for data analytics including Vendor Performance Analysis, Banking EDA, and Ola Data Analytics projects.",
      skills: ["Python", "SQL", "Data Analytics", "Visualization"]
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building expertise through diverse projects and collaborations
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
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
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Education</span>
          </h3>
          
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl">B.E in Computer Engineering</CardTitle>
              <div className="text-muted-foreground">
                <p className="font-medium">Terna Engineering College, Navi Mumbai</p>
                <p className="text-sm">CGPA: 7.20 • Expected: May 2025</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>HSC:</strong> B. N. N. College, Bhiwandi (89.50%)</p>
                <p><strong>SSC:</strong> Vikas English Medium School, Bhiwandi (82.20%)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;