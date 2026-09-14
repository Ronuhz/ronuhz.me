import type { Metadata } from 'next'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Native iOS applications, Swift Student Challenge winner project, systems software, and web projects by Hunor Zoltáni.',
  alternates: {
    canonical: '/projects'
  }
}

export default function Projects() {
  return (
    <main className="space-y-10">
      <section className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          A selection of published iOS applications, contest-winning software, and low-level experiments.
        </p>
      </section>

      <section aria-labelledby="all-projects-heading" className="space-y-6">
        <div className="border-b border-[var(--border)] pb-2">
          <h2 id="all-projects-heading" className="text-xs uppercase tracking-wider text-[var(--muted)] font-medium">
            All Projects ({projects.length})
          </h2>
        </div>

        <div className="divide-y divide-[var(--border)]">
          {projects.map((project) => (
            <article key={project.name} className="py-5 first:pt-0 last:pb-0 space-y-2.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <h3 className="font-medium text-base">
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
                      {project.winner}
                    </span>
                  )}
                </div>
                <span className="text-xs text-[var(--muted)] tabular-nums">
                  {project.year}
                </span>
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                <span className="text-[var(--muted)]">
                  {project.techStack.join(' · ')}
                </span>
                <div className="flex items-center gap-3">
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                    >
                      app store ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                    >
                      source ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}