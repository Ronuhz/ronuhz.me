"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserIcon, CodeBracketSquareIcon, BookmarkIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="z-10 fixed bottom-0 left-0 w-full md:w-auto md:top-1/2 md:-translate-y-1/2 md:left-8 md:bottom-auto bg-gruvbox-bg/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
            <nav className="flex flex-row md:flex-col justify-around md:justify-start items-center md:items-start gap-1 md:gap-8 py-4 md:py-0 px-2 md:px-0">
                <NavItem 
                    href="/" 
                    label="About" 
                    isActive={pathname === '/'} 
                    icon={<UserIcon className="w-5 h-5" />}
                />
                <NavItem 
                    href="/projects" 
                    label="Projects" 
                    isActive={pathname === '/projects'} 
                    icon={<CodeBracketSquareIcon className="w-5 h-5" />}
                />
                <NavItem 
                    href="/affiliates" 
                    label="Affiliates" 
                    isActive={pathname === '/affiliates'} 
                    icon={<BookmarkIcon className="w-5 h-5" />}
                />
            </nav>
        </div>
    )
}

interface NavItemProps {
    href: string
    label: string
    isActive: boolean
    icon: React.ReactNode
}

function NavItem({ href, label, isActive, icon }: NavItemProps) {
    return (
        <Link 
            href={href} 
            className={`flex flex-col md:flex-row items-center gap-2 md:gap-3 px-3 py-2 rounded-md transition-all duration-200 
                ${isActive 
                    ? 'text-gruvbox-bright-green md:bg-gruvbox-bg/30 md:translate-x-1' 
                    : 'text-gruvbox-fg hover:text-gruvbox-bright-green hover:md:bg-gruvbox-bg/10'}`}
        >
            <span className="md:opacity-80">{icon}</span>
            <span className="text-xs md:text-base">{label}</span>
            {isActive && (
                <div className="h-1 w-1 rounded-full bg-gruvbox-bright-green md:hidden absolute -bottom-1"></div>
            )}
        </Link>
    )
}