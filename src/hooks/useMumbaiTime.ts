import { useEffect, useState } from "react";

/**
 * Live Mumbai (Asia/Kolkata) time. Updates every 30s — second-level precision
 * isn't needed and a slower interval keeps the page idle-friendly.
 */
export const useMumbaiTime = () => {
  const format = () =>
    new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());

  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
};
