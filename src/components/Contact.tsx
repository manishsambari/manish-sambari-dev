import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sambarimanish@gmail.com",
      href: "mailto:sambarimanish@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9764201151",
      href: "tel:+919764201151"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Thane, Maharashtra, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/manishsambari"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/manish-sambari"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://instagram.com/manish.sambari"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "X",
      href: "https://x.com/sambarimanish"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 100, rotateX: 90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 60 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            whileInView={{ letterSpacing: "normal", opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Let's discuss your next project and bring your ideas to life
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -150, rotateY: -90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 70 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotateY: 5 }}
          >
          <Card className="glass-card transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
              <p className="text-muted-foreground">
                Available for freelance projects, full-time opportunities, and collaborations.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/20 transition-colors">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a href={contact.href} className="font-medium hover:text-primary transition-colors">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social, index) => (
                    <Button key={index} variant="outline" size="sm" asChild>
                      <a href={social.href} className="flex items-center gap-2">
                        {social.icon}
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Status Badge */}
              <div className="border-t pt-6">
                <Badge variant="secondary" className="w-fit px-4 py-2 bg-gradient-to-r from-white/10 to-gray-100/10 text-white border border-white/20">
                  💼 Open to Opportunities
                </Badge>
              </div>
            </CardContent>
          </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 150, rotateY: 90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 70 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotateY: -5 }}
          >
          <Card className="glass-card transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Quick Actions</CardTitle>
              <p className="text-muted-foreground">
                Choose how you'd like to connect and collaborate.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                className="w-full justify-start gap-3 h-14 text-left bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700" 
                size="lg"
                onClick={() => window.open('https://wa.me/919764201151', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Send a Message</div>
                  <div className="text-sm opacity-80">Chat on WhatsApp</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 h-14 text-left border-2 hover:border-primary/50 hover:bg-primary/5" 
                size="lg"
                onClick={() => window.open('tel:+919764201151', '_self')}
              >
                <Phone className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Schedule a Call</div>
                  <div className="text-sm opacity-80">Direct call to discuss opportunities</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 h-14 text-left border-2 hover:border-primary/50 hover:bg-primary/5" 
                size="lg"
                onClick={() => window.open('https://github.com/manishsambari', '_blank')}
              >
                <Github className="w-5 h-5" />
                <div>
                  <div className="font-semibold">View My Code</div>
                  <div className="text-sm opacity-80">Explore my GitHub repositories</div>
                </div>
              </Button>


              {/* Specializations */}
              <div className="pt-6 border-t">
                <h4 className="font-semibold mb-3">Open to opportunities in:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Full-Stack Development", "Web Applications", "Discord Bots", "E-commerce", "Problem Solving"].map((spec) => (
                    <Badge key={spec} variant="outline" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;