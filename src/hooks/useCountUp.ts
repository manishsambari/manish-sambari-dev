import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 → target when the returned ref enters the viewport.
 * Uses requestAnimationFrame; respects prefers-reduced-motion.
 */
export const useCountUp = (
  target: number,
  { duration = 1200, suffix = "" }: { duration?: number; suffix?: string } = {},
) => {
  const ref = useRef<HTMLElement | null>(null);
  const [display, setDisplay] = useState("0" + suffix);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(target + suffix);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - t, 3);
              const v = Math.round(eased * target);
              setDisplay(v + suffix);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [target, duration, suffix]);

  return { ref, display };
};
