import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, label: "Email", value: "sambarimanish@gmail.com", href: "mailto:sambarimanish@gmail.com" },
    { icon: <Phone className="w-4 h-4" />, label: "Phone", value: "+91 9764201151", href: "tel:+919764201151" },
    { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Thane, Maharashtra, India", href: null },
  ];

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, label: "GitHub", href: "https://github.com/manishsambari" },
    { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", href: "https://linkedin.com/in/manishsambari" },
    { icon: <Instagram className="w-4 h-4" />, label: "Instagram", href: "https://instagram.com/manish.sambari" },
    { icon: <MessageCircle className="w-4 h-4" />, label: "X", href: "https://x.com/manish_exe" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <span className="section-eyebrow pop-pink">✿ Hello?</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">
            Let's build something.
          </h2>
          <p className="text-foreground/70 mt-3 max-w-md mx-auto">
            Available for freelance, full-time, &amp; collaborations.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {/* Big greeting tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bento bento-lg p-8 col-span-12 md:col-span-7 pop-yellow relative"
          >
            <span className="sticker pop-pink absolute -top-3 -left-3 -rotate-6 wobble">
              ✦ say hi!
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Got a project<br />or just want to chat?
            </h3>
            <p className="text-foreground/80 mb-6 max-w-md">
              I read every message. Whether it's a freelance gig, a full-time role, or you
              just want to talk about React — drop me a line.
            </p>
            <div className="space-y-2">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-center gap-3 px-4 py-2.5 bg-card border-2 border-foreground rounded-full">
                  <span className="text-foreground">{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} className="font-semibold text-sm hover:underline">
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-semibold text-sm">{c.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick actions stack */}
          <div className="col-span-12 md:col-span-5 grid grid-cols-1 gap-4 md:gap-5">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              onClick={() => window.open("https://wa.me/919764201151", "_blank")}
              className="bento p-5 pop-green text-left flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-card border-2 border-foreground rounded-full flex items-center justify-center shrink-0">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">WhatsApp</div>
                <div className="text-sm text-foreground/75">Quickest reply</div>
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              onClick={() => window.open("tel:+919764201151", "_self")}
              className="bento p-5 pop-blue text-left flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-card border-2 border-foreground rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">Schedule a call</div>
                <div className="text-sm text-foreground/75">Let's talk it through</div>
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              onClick={() => window.open("https://github.com/manishsambari", "_blank")}
              className="bento p-5 pop-purple text-left flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-card border-2 border-foreground rounded-full flex items-center justify-center shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">Browse code</div>
                <div className="text-sm text-foreground/75">See what I've shipped</div>
              </div>
            </motion.button>
          </div>

          {/* Socials row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bento p-5 col-span-12 bg-card"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="font-display font-bold text-lg">
                Find me on the internet →
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="pill-btn"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
