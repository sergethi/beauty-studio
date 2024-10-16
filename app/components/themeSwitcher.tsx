"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="cursor-pointer">
      {theme == "dark" ? (
        <FaSun onClick={() => setTheme("light")} />
      ) : (
        <FaMoon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
