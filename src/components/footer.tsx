import { GitHubIcon } from "./icons/github";
import { MailIcon } from "./icons/mail";
import { XIcon } from "./icons/x";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="flex items-center gap-3">
        <p className="whitespace-nowrap">© {new Date().getFullYear()} Zoltáni Hunor</p>
        <div className="grow" />
        <div className="flex items-center justify-center gap-2 text-sm">
          <a href="mailto:contact@ronuhz.me" className="brutal-button" target="_blank" rel="noopener noreferrer">
            <MailIcon /> Mail
          </a>
          <a href="https://twitter.com/ronuhz" className="brutal-button" target="_blank" rel="noopener noreferrer" aria-label="X profile">
            <XIcon />
          </a>
          <a href="https://github.com/ronuhz" className="brutal-button" target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}