import Link from 'next/link'
import { projects } from '@/data/projects'
import DownloadIcon from '@/components/icons/download'

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2)

  return (
    <main className="space-y-14">
      {/* Intro */}
      <section aria-labelledby="intro-heading" className="space-y-4">
        <h1 id="intro-heading" className="text-xl sm:text-2xl font-semibold tracking-tight">
          Hunor Zoltáni
        </h1>
        <p className="text-base text-[var(--muted)] leading-relaxed">
          Independent iOS engineer and Computer Science student at Babeș-Bolyai University in Cluj-Napoca, Romania. Apple Swift Student Challenge 2025 Winner.
        </p>
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          I design and build native, tactile applications with Swift, SwiftUI, and modern machine learning APIs. Interested in human-computer interfaces, performance, and low-level systems.
        </p>
        <div className="pt-1">
          <a
            href="/Hunor_Zoltani_CV.pdf"
            download="Hunor_Zoltani_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--border-hover)] transition-colors"
          >
            <DownloadIcon size={14} />
            <span>download cv</span>
          </a>
        </div>
      </section>

      {/* Selected Work */}
      <section aria-labelledby="work-heading" className="space-y-6">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
          <h2 id="work-heading" className="text-xs uppercase tracking-wider text-[var(--muted)] font-medium">
            Selected Work
          </h2>
          <Link
            href="/projects"
            className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors underline underline-offset-4"
          >
            view all ({projects.length}) →
          </Link>
        </div>

        <div className="divide-y divide-[var(--border)]">
          {featuredProjects.map((project) => (
            <article key={project.name} className="py-4 first:pt-0 last:pb-0 space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-sm">
                    {project.appStore ? (
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-4"
                      >
                        {project.name} ↗
                      </a>
                    ) : project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-4"
                      >
                        {project.name} ↗
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  {project.winner && (
                    <span className="text-[11px] text-[var(--muted)] border border-[var(--border)] px-1.5 py-0.5">
                      SSC 2025 Winner
                    </span>
                  )}
                </div>
                <span className="text-xs text-[var(--muted)] tabular-nums">
                  {project.year}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--muted)] pt-1">
                <span>{project.techStack.join(' · ')}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <section aria-labelledby="background-heading" className="space-y-6">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
          <h2 id="background-heading" className="text-xs uppercase tracking-wider text-[var(--muted)] font-medium">
            Background
          </h2>
          <a
            href="/Hunor_Zoltani_CV.pdf"
            download="Hunor_Zoltani_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors underline underline-offset-4"
          >
            download cv ↓
          </a>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <p className="font-medium">Independent iOS Developer</p>
              <p className="text-xs text-[var(--muted)]">Self-Employed · Romania</p>
            </div>
            <p className="text-xs text-[var(--muted)] tabular-nums">2024 — Present</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <p className="font-medium">Babeș-Bolyai University</p>
              <p className="text-xs text-[var(--muted)]">B.Sc. in Computer Science · Cluj-Napoca</p>
            </div>
            <p className="text-xs text-[var(--muted)] tabular-nums">2025 — 2028</p>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section aria-labelledby="connect-heading" className="space-y-4">
        <div className="border-b border-[var(--border)] pb-2">
          <h2 id="connect-heading" className="text-xs uppercase tracking-wider text-[var(--muted)] font-medium">
            Connect
          </h2>
        </div>

        <p className="text-sm text-[var(--muted)] leading-relaxed">
          Open to interesting iOS roles, freelance work, and conversations about Swift or systems engineering.
        </p>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <li>
            <a
              href="mailto:ronuhz@gmail.com"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              ronuhz@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ronuhz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              github ↗
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/hunor-zoltani"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              linkedin ↗
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ronuhz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              x ↗
            </a>
          </li>
          <li>
            <a
              href="/Hunor_Zoltani_CV.pdf"
              download="Hunor_Zoltani_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              cv ↓
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
