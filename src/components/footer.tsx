import { GitHubIcon } from "./icons/github";
import { MailIcon } from "./icons/mail";
import { XIcon } from "./icons/x";

export default function Footer() {
  return (
    <footer className="flex opacity-50 mt-auto pt-12 pb-4 border-t border-gruvbox-fg/20">
      <p className="whitespace-nowrap font-sans text-gruvbox-fg">
        © {new Date().getFullYear()} Zoltáni Hunor
      </p>
      <div className="w-full" />
      <div className="flex items-center justify-center gap-6 text-sm text-gruvbox-fg">
        <a href="mailto:contact@ronuhz.me" className="hover:text-gruvbox-bright-blue transition-colors" target="_blank" rel="noopener noreferrer">
          <MailIcon />
        </a>
        <a href="https://twitter.com/ronuhz" className="hover:text-gruvbox-bright-blue transition-colors" target="_blank" rel="noopener noreferrer">
          <XIcon />
        </a>
        <a href="https://github.com/ronuhz" className="hover:text-gruvbox-bright-blue transition-colors" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>
    </footer>
  )
}