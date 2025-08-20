import { GitHubIcon } from "./icons/github";
import { MailIcon } from "./icons/mail";
import { XIcon } from "./icons/x";

export default function Footer() {
  return (
    <footer className="mt-6 sm:mt-8 md:mt-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm whitespace-nowrap">© {new Date().getFullYear()} Zoltáni Hunor</p>
        <div className="grow" />
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm">
          <a href="mailto:contact@ronuhz.me" className="brutal-button" target="_blank" rel="noopener noreferrer">
            <MailIcon /> <span className="hidden sm:inline">Mail</span>
          </a>
          <a href="https://twitter.com/ronuhz" className="brutal-button" target="_blank" rel="noopener noreferrer" aria-label="X profile">
            <XIcon />
          </a>
          <a href="https://github.com/ronuhz" className="brutal-button" target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}