"use client";

import { useEffect, useRef } from "react";

export default function ProgressBar() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      el.style.transform = `scaleX(${Math.max(0, Math.min(1, scrolled))})`;
    };
    onScroll();
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-2 w-full z-40" aria-hidden>
      <div ref={ref} className="h-full w-full origin-left bg-[var(--accent)]" style={{ transform: 'scaleX(0)' }} />
    </div>
  );
}


