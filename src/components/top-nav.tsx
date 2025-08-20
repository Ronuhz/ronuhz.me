"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeIcon } from "./icons/theme";

export default function TopNav() {
  const pathname = usePathname();
  const toggleTheme = () => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? '' : 'dark';
    if (next) {
      root.setAttribute('data-theme', next);
    } else {
      root.removeAttribute('data-theme');
    }
    try { localStorage.setItem('theme', next || 'light'); } catch {}
  };
  if (typeof document !== 'undefined') {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved === 'dark') document.documentElement.setAttribute('data-theme','dark');
  }

  const NavItem = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`brutal-button ${
          isActive ? "bg-[var(--accent)] text-white" : ""
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="brutal-section">
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <Link href="/" className="flex items-center">
          <h1 className="wordmark text-2xl sm:text-3xl md:text-5xl font-black tracking-wide">HUNOR</h1>
        </Link>
        <div className="hidden md:block text-xs uppercase tracking-widest brutal-chip">
          iOS Developer
        </div>
        <div className="grow" />
        <nav className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <NavItem href="/" label="About" />
          <NavItem href="/projects" label="Work" />
          <NavItem href="/affiliates" label="Affiliates" />
          <button onClick={toggleTheme} className="brutal-button text-xs sm:text-sm" aria-pressed="false" aria-label="Toggle theme">
            <span className="hidden sm:inline">Theme</span>
            <span className="sm:hidden">
              <ThemeIcon size={12} />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}


