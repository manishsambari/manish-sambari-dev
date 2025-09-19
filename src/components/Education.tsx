import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "B.E in Computer Engineering",
      institution: "Terna Engineering College, Navi Mumbai",
      grade: "CGPA: 7.20",
      period: "Expected: May 2025",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "B. N. N. College, Bhiwandi",
      grade: "Percentage: 89.50%",
      period: "May 2021",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Vikas English Medium School, Bhiwandi",
      grade: "Percentage: 82.20%",
      period: "March 2019",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "TechnoHacks EduTech",
      link: "https://drive.google.com/file/d/131Q1F9nOtBv9HfpUTwkjO3YU726Kre-U/view",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Foundations",
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8C5314EEDCE53749057B5132C2B4F75F967C7B8BE3817A1EBC5E7CFFE50E33AB",
      gradient: "from-red-500 to-orange-600"
    },
    {
      name: "ElectoWiz Certification",
      issuer: "ElectoWiz",
      link: "https://drive.google.com/file/d/1_oWbVjWj5f1ipb_5A_mLX46J6Zo4Djuv/view",
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
            Education & <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic foundation and professional achievements
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Academic Background</span>
          </h3>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="glass-card hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <GraduationCap className="w-5 h-5 text-primary" />
                          </motion.div>
                          {edu.degree}
                        </CardTitle>
                        <div className="text-muted-foreground">
                          <p className="font-medium text-foreground">{edu.institution}</p>
                          <div className="flex flex-wrap gap-4 text-sm mt-1">
                            <span>{edu.grade}</span>
                            <span>•</span>
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div 
                      className={`h-2 rounded-full bg-gradient-to-r ${edu.gradient} opacity-60`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Professional Certifications</span>
          </h3>
          
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <Card className="glass-card hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <Award className="w-5 h-5 text-primary" />
                          </motion.div>
                          {cert.name}
                        </CardTitle>
                        <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10"
                          onClick={() => window.open(cert.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className={`h-2 rounded-full bg-gradient-to-r ${cert.gradient} opacity-60`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;