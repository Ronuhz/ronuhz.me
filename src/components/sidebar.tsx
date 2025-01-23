"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="absolute md:fixed top-12 md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col gap-4 left-4 md:left-8 w-32">
          <Link 
            href="/" 
            className={pathname === '/' ? 'text-gruvbox-bright-green transition-colors' : 'text-gruvbox-fg transition-colors'}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className={pathname === '/projects' ? 'text-gruvbox-bright-green transition-colors' : 'text-gruvbox-fg transition-colors'}
          >
            Projects
          </Link>
        </div>
    )
}