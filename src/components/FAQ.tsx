import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      q: "Are you open to freelance?",
      a: "Yes. I take on small-to-medium full-stack projects — React + Node, Next.js apps, AI-integrated dashboards. WhatsApp or email me with a quick brief and timeline.",
      tag: "✦ yes",
      bg: "pop-yellow",
    },
    {
      q: "What's your day rate?",
      a: "Depends on scope and stack. For typical full-stack work I charge a flat per-feature or per-sprint rate — happier shipping outcomes than tracking hours. Ask for a quote.",
      tag: "★ ask",
      bg: "pop-pink",
    },
    {
      q: "Are you looking for full-time roles?",
      a: "Open to it. I'm currently full-time interning at KVAR Technologies (Feb 2026 →). For grad-level engineering roles starting mid-2026 onwards, my inbox is open.",
      tag: "♥ yes",
      bg: "pop-blue",
    },
    {
      q: "What's your stack of choice?",
      a: "TypeScript everywhere. React or Next.js on the front. Node + Express or a thin Next.js API on the back. PostgreSQL when relations matter, MongoDB when they don't. Tailwind for UI, Vercel for shipping.",
      tag: "⌁ stack",
      bg: "pop-green",
    },
    {
      q: "How fast can you start?",
      a: "Freelance: within a week. Full-time: post my notice period — let's chat.",
      tag: "↯ fast",
      bg: "pop-purple",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <span className="section-eyebrow pop-purple">? Questions</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">
            Things people ask
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <div
                  className={`bento ${isOpen ? item.bg : "bg-card"} overflow-hidden`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 border-2 border-foreground rounded-full text-xs font-bold shrink-0 ${
                          isOpen ? "bg-card" : item.bg
                        }`}
                      >
                        {item.tag}
                      </span>
                      <h3 className="font-display text-lg md:text-xl font-bold">
                        {item.q}
                      </h3>
                    </div>
                    <span
                      className={`shrink-0 w-9 h-9 flex items-center justify-center border-2 border-foreground rounded-full transition-colors ${
                        isOpen ? "bg-card" : item.bg
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t-2 border-dashed border-foreground/30 pt-4">
                          <p className="text-foreground/85 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
