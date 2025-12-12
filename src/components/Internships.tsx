import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Internships = () => {
  const internships = [
    {
      title: "Full Stack Developer Intern",
      company: "NullClass",
      period: "June 2025 – November 2025",
      location: "Remote",
      description: "Built the MERN-stack backend for a course-selling platform, including APIs, authentication, and database schema design. Developed secure login/signup flows using JWT and handled role-based access control.",
      skills: ["MERN Stack", "JWT", "MongoDB", "APIs", "Authentication"],
      certificateLink: "#",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Frontend Developer Intern",
      company: "Dejorix",
      period: "January 2025 – March 2025",
      location: "Mumbai, Maharashtra",
      description: "Worked at a startup, building portfolio websites and client-facing frontend projects. Developed clean, responsive React.js interfaces with reusable components and smooth user interactions.",
      skills: ["React.js", "Frontend", "UI/UX", "Responsive Design"],
      certificateLink: "https://drive.google.com/file/d/1Mbk2yi2rA5J4VS4_TC1QiNbv7ENKmaLQ/view",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Python Developer Intern",
      company: "Pythonic Labs",
      period: "April 2024 – May 2024",
      location: "Mumbai, Maharashtra",
      description: "Developed Python- and SQL-based solutions for analytics, data visualization, and API integration. Built projects such as Vendor Performance Analysis, Banking EDA, and Ola Data Analytics.",
      skills: ["Python", "SQL", "Data Analytics", "Visualization"],
      certificateLink: "https://drive.google.com/file/d/1u5T6SH-V91cPwbBka782u1yr0P0AlIf_/view",
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
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Hands-on learning experiences that shaped my development journey
          </p>
        </motion.div>

        <div className="space-y-6">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
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
                        {internship.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{internship.company}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {internship.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {internship.location}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10"
                        onClick={() => window.open(internship.certificateLink, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Certificate
                      </Button>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className={`h-2 rounded-full bg-gradient-to-r ${internship.gradient} opacity-60`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    viewport={{ once: true }}
                  />
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {internship.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, skillIndex) => (
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

export default Internships;