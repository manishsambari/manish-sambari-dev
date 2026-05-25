import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Work", href: "#internships" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Awards", href: "#achievements" },
    { label: "Contact", href: "#contact" },
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
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-3 bg-card border-[3px] border-foreground rounded-full px-4 py-2.5 shadow-brutal">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full pop-pink border-2 border-foreground flex items-center justify-center font-display font-bold text-foreground">
              M
            </span>
            <span className="font-display font-bold text-sm hidden sm:inline">manish.dev</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 text-sm font-semibold text-foreground/80 hover:text-foreground rounded-full hover:bg-muted transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Resume */}
          <button
            onClick={downloadResume}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold border-2 border-foreground rounded-full pop-yellow shadow-brutal-sm hover:-translate-y-0.5 hover:translate-x-0 transition-transform"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border-2 border-foreground rounded-full bg-card"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-card border-[3px] border-foreground rounded-2xl shadow-brutal p-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-semibold rounded-xl hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { downloadResume(); setIsOpen(false); }}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold border-2 border-foreground rounded-full pop-yellow"
            >
              <Download className="w-4 h-4" />
              Resume
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
