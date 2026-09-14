export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { href: 'mailto:ronuhz@gmail.com', label: 'mail' },
    { href: 'https://x.com/ronuhz', label: 'x / twitter' },
    { href: 'https://github.com/Ronuhz', label: 'github' },
    { href: 'https://linkedin.com/in/hunor-zoltani', label: 'linkedin' }
  ]

  return (
    <footer className="border-t border-[var(--border)] mt-16 pt-6 pb-12 text-xs text-[var(--muted)]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p>© {currentYear} Hunor Zoltáni</p>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {links.map(({ href, label }) => {
            const isMail = href.startsWith('mailto:')
            return (
              <a
                key={label}
                href={href}
                target={isMail ? undefined : '_blank'}
                rel={isMail ? undefined : 'noopener noreferrer'}
                className="hover:text-[var(--foreground)] transition-colors underline underline-offset-4 decoration-transparent hover:decoration-current"
              >
                {label}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}