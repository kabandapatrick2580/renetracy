"use client";

import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

type Theme = "midnight" | "ivory";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("midnight");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    const nextTheme = storedTheme ?? "midnight";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "midnight" ? "ivory" : "midnight";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-black/20 text-sand transition hover:border-gold hover:text-ink"
    >
      {theme === "midnight" ? <HiSun size={18} /> : <HiMoon size={18} />}
    </button>
  );
}
