import { motion } from "framer-motion";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  bg?: string;
}

const PullQuote = ({
  quote = "I build things. Then I rebuild them better.",
  attribution = "— me, probably",
  bg = "bg-card",
}: Partial<PullQuoteProps>) => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className={`bento p-8 md:p-14 ${bg} relative`}
        >
          {/* Giant open quote */}
          <span
            aria-hidden="true"
            className="font-display absolute -top-8 md:-top-12 left-4 md:left-8 text-[120px] md:text-[180px] leading-none text-foreground select-none"
          >
            ”
          </span>

          {/* Tiny eyebrow */}
          <span className="section-eyebrow pop-yellow mb-5 md:mb-7 relative z-10">
            ✦ a thought
          </span>

          <blockquote className="relative z-10">
            <p className="font-display text-2xl md:text-5xl font-bold leading-tight md:leading-[1.05] tracking-tight">
              {quote}
            </p>
            <footer className="mt-6 md:mt-8 flex items-center gap-3">
              <span className="inline-block w-10 h-1 bg-foreground" />
              <cite className="not-italic text-sm md:text-base font-semibold text-foreground/70">
                {attribution}
              </cite>
            </footer>
          </blockquote>

          {/* Decorative sticker */}
          <span className="hidden md:inline-flex sticker pop-pink absolute -bottom-3 right-8 rotate-6 wobble-soft">
            pg. 03
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default PullQuote;
