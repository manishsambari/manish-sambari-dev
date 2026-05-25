import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "projects", href: "#projects" },
    { label: "internships", href: "#internships" },
    { label: "experience", href: "#experience" },
    { label: "education", href: "#education" },
    { label: "skills", href: "#skills" },
    { label: "achievements", href: "#achievements" },
    { label: "contact", href: "#contact" },
  ];

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/ManishSResume.pdf?v=" + Date.now();
    link.download = "ManishSambari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 border border-border bg-destructive/70" />
              <span className="w-3 h-3 border border-border bg-accent/70" />
              <span className="w-3 h-3 border border-border bg-primary/70" />
            </div>
            <span className="text-sm font-mono text-muted-foreground hidden sm:inline">
              ~/manish-sambari
              <span className="text-primary">/dev</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-secondary/40 border border-transparent hover:border-border transition-colors"
              >
                ./{item.label}
              </a>
            ))}
            <button
              onClick={downloadResume}
              className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              resume.pdf
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-border text-foreground hover:border-primary hover:text-primary"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="py-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm font-mono text-muted-foreground hover:text-primary hover:bg-secondary/40"
                >
                  ./{item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  downloadResume();
                  setIsOpen(false);
                }}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-mono uppercase tracking-wider border border-primary text-primary"
              >
                <Download className="w-4 h-4" />
                resume.pdf
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
