import { useEffect, useState, useCallback } from "react";

export type ThemeName = "cream" | "blush" | "sky";

const THEMES: ThemeName[] = ["cream", "blush", "sky"];
const STORAGE_KEY = "ms-theme";

const apply = (name: ThemeName) => {
  document.documentElement.setAttribute("data-theme", name);
};

const readInitial = (): ThemeName => {
  if (typeof window === "undefined") return "cream";
  const saved = window.localStorage.getItem(STORAGE_KEY) as ThemeName | null;
  return saved && THEMES.includes(saved) ? saved : "cream";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeName>(readInitial);

  useEffect(() => {
    apply(theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* swallow */
    }
  }, [theme]);

  const cycle = useCallback(() => {
    setTheme((prev) => THEMES[(THEMES.indexOf(prev) + 1) % THEMES.length]);
  }, []);

  return { theme, cycle, themes: THEMES };
};
