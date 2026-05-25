interface MarqueeProps {
  bg?: string;
  reverse?: boolean;
  items?: string[];
}

const Marquee = ({
  bg = "pop-yellow",
  reverse = false,
  items = [
    "AVAILABLE FOR WORK",
    "★",
    "FULL-STACK ENGINEER",
    "★",
    "REACT · NEXT.JS · NODE",
    "★",
    "BASED IN MUMBAI",
    "★",
    "SHIP · ITERATE · REPEAT",
    "★",
    "OPEN TO COLLAB",
    "★",
  ],
}: MarqueeProps) => {
  // Duplicate so the loop is seamless
  const loop = [...items, ...items];

  return (
    <div
      className={`overflow-hidden border-y-[3px] border-foreground ${bg} relative`}
      role="presentation"
      aria-hidden="true"
    >
      <div
        className={`flex whitespace-nowrap py-4 marquee-track ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: "32s" }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight px-6 flex items-center gap-6"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
