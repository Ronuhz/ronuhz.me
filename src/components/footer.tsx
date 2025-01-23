import { GitHubIcon } from "./icons/github";
import { MailIcon } from "./icons/mail";
import { TwitterIcon } from "./icons/twitter";

export default function Footer() {
  return (
    <footer className="flex opacity-50 mt-auto pt-24 pb-4">
      <p className="whitespace-nowrap font-sans text-gruvbox-fg">
        © {new Date().getFullYear()} Zoltáni Hunor
      </p>
      <div className="w-full" />
      <div className="flex items-center justify-center gap-4 text-sm text-gruvbox-fg">
        <a href="mailto:contact@ronuhz.me" className="hover:text-gruvbox-bright-blue transition-colors" target="_blank" rel="noopener noreferrer">
          <MailIcon />
        </a>
        <a href="https://twitter.com/ronuhz" className="hover:text-gruvbox-bright-blue transition-colors" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://github.com/ronuhz" className="hover:text-gruvbox-bright-blue transition-colors" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>
    </footer>
  )
}