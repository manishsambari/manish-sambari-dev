const FloatingElements = () => {
  const stickers = [
    { text: "✦ hello!",         pos: "top-24 left-6",          rot: "-rotate-6",  bg: "pop-yellow", anim: "wobble" },
    { text: "★ available",      pos: "top-44 right-8",         rot: "rotate-3",   bg: "pop-pink",   anim: "wobble-soft" },
    { text: "♥ coding",          pos: "top-[55%] left-4",       rot: "-rotate-3",  bg: "pop-blue",   anim: "wobble-soft" },
    { text: "✿ open to work",   pos: "top-[40%] right-4",      rot: "rotate-6",   bg: "pop-green",  anim: "wobble" },
    { text: "✿ ship + iterate", pos: "bottom-32 left-8",       rot: "-rotate-6",  bg: "pop-purple", anim: "wobble" },
    { text: "↯ react · node",    pos: "bottom-24 right-6",      rot: "rotate-3",   bg: "pop-orange", anim: "wobble-soft" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden lg:block">
      {stickers.map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.pos} ${s.rot} ${s.anim}`}
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          <span className={`sticker ${s.bg}`}>{s.text}</span>
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
