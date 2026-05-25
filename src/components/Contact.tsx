import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Instagram, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "email",
      value: "sambarimanish@gmail.com",
      href: "mailto:sambarimanish@gmail.com",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "phone",
      value: "+91 9764201151",
      href: "tel:+919764201151",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "location",
      value: "Thane, Maharashtra, India",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, label: "GitHub", href: "https://github.com/manishsambari" },
    { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", href: "https://linkedin.com/in/manish-sambari" },
    { icon: <Instagram className="w-4 h-4" />, label: "Instagram", href: "https://instagram.com/manish.sambari" },
    { icon: <MessageCircle className="w-4 h-4" />, label: "X", href: "https://x.com/sambarimanish" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            <span className="text-primary">$</span> ping manish --reach-out
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold">
            <span className="text-primary">##</span> Let&apos;s Connect
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-2">
            // available for freelance, full-time, &amp; collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Contact info */}
          <div className="term-card">
            <div className="border-b border-border bg-secondary/30 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              ./contact.info
            </div>
            <div className="p-5 space-y-4">
              <div className="space-y-2">
                {contactInfo.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-3 px-3 py-2 border border-border bg-secondary/20"
                  >
                    <span className="text-primary">{c.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {c.label}
                      </div>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="font-mono text-sm text-foreground hover:text-primary break-all"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <div className="font-mono text-sm text-foreground">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                  // socials
                </div>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    >
                      {s.icon}
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <span className="status-pill">Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="term-card">
            <div className="border-b border-border bg-secondary/30 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              ./quick_actions.sh
            </div>
            <div className="p-5 space-y-3">
              <button
                onClick={() => window.open("https://wa.me/919764201151", "_blank")}
                className="w-full text-left flex items-center gap-3 px-4 py-3 border border-border bg-secondary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors group"
              >
                <Send className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                <div>
                  <div className="font-mono text-sm font-bold uppercase tracking-wider">
                    send a message
                  </div>
                  <div className="font-mono text-xs opacity-80">// chat on whatsapp</div>
                </div>
              </button>

              <button
                onClick={() => window.open("tel:+919764201151", "_self")}
                className="w-full text-left flex items-center gap-3 px-4 py-3 border border-border bg-secondary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors group"
              >
                <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                <div>
                  <div className="font-mono text-sm font-bold uppercase tracking-wider">
                    schedule a call
                  </div>
                  <div className="font-mono text-xs opacity-80">// discuss opportunities</div>
                </div>
              </button>

              <button
                onClick={() => window.open("https://github.com/manishsambari", "_blank")}
                className="w-full text-left flex items-center gap-3 px-4 py-3 border border-border bg-secondary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors group"
              >
                <Github className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                <div>
                  <div className="font-mono text-sm font-bold uppercase tracking-wider">
                    view my code
                  </div>
                  <div className="font-mono text-xs opacity-80">// explore github repos</div>
                </div>
              </button>

              <div className="pt-4 border-t border-border">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                  // open_to:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Full-Stack Development",
                    "Web Applications",
                    "Discord Bots",
                    "E-commerce",
                    "Problem Solving",
                  ].map((spec) => (
                    <span key={spec} className="term-chip">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
