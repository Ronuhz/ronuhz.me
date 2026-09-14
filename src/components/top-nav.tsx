'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TopNav() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const computeTheme = (): 'light' | 'dark' => {
      try {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark' || saved === 'light') return saved
      } catch {}
      const attr = document.documentElement.getAttribute('data-theme')
      if (attr === 'dark' || attr === 'light') return attr
      return mediaQuery.matches ? 'dark' : 'light'
    }

    setTheme(computeTheme())

    const handleMediaChange = (e: MediaQueryListEvent) => {
      try {
        if (!localStorage.getItem('theme')) {
          setTheme(e.matches ? 'dark' : 'light')
        }
      } catch {}
    }

    mediaQuery.addEventListener('change', handleMediaChange)
    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    try {
      localStorage.setItem('theme', nextTheme)
    } catch {}
  }

  const navLinks = [
    { href: '/', label: 'about' },
    { href: '/projects', label: 'projects' },
    { href: '/affiliates', label: 'affiliates' }
  ]

  return (
    <header className="border-b border-[var(--border)] pb-5 mb-10">
      <nav className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4 sm:gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors ${
                  isActive
                    ? 'font-medium underline underline-offset-4'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
        <button
          onClick={toggleTheme}
          type="button"
          className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
          aria-label="Toggle color theme"
        >
          {mounted ? (theme === 'dark' ? 'light' : 'dark') : 'theme'}
        </button>
      </nav>
    </header>
  )
}
