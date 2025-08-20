"use client";

import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target as Element); } });
    }, { threshold: 0.1 });
    const items = Array.from(document.querySelectorAll('.reveal-item')) as HTMLElement[];
    items.forEach((el, i) => {
      el.style.transitionDelay = `${i * 70}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}


