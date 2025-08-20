"use client";

import { useEffect, useState } from "react";
import { SunIcon } from "./sun";
import { MoonIcon } from "./moon";

interface ThemeIconProps {
  size?: number;
}

export function ThemeIcon({ size = 16 }: ThemeIconProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      if (typeof document !== 'undefined') {
        const theme = document.documentElement.getAttribute('data-theme');
        setIsDark(theme === 'dark');
      }
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    if (typeof document !== 'undefined') {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      });
    }

    return () => observer.disconnect();
  }, []);

  return isDark ? <MoonIcon size={size} /> : <SunIcon size={size} />;
}
