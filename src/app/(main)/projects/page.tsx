import { projects } from "@/data/projects";
import { ExternalLinkIcon } from "@/components/icons/external-link";
import { TrophyIcon } from "@/components/icons/trophy";
import Header from "@/components/header";

export default function Projects() {
  return (
    <main className="flex flex-col gap-6 mb:pt-0">
      <Header />
      
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-xl font-bold text-gruvbox-fg">Projects</h2>
        <p className="text-gruvbox-fg3">
          A collection of my personal and professional projects. Check out what I&apos;ve been building!
        </p>
      </div>
      
      {projects.map((project) => (
        <div key={project.name} className="flex flex-col gap-4 pb-8 border-b border-gruvbox-fg/10 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-gruvbox-fg">
              {project.name}
            </h2>
            <div className="flex gap-2">
            {project.winner && (
                <div 
                  className="text-gruvbox-bright-yellow hover:text-gruvbox-yellow text-sm transition-colors flex items-center gap-1"
                  title={project.winner}
                >
                  <TrophyIcon size={14} />
                  <span>Winner</span>
                </div>
              )}
            {project.appStore && (
                <a 
                  href={project.appStore}
                  className="text-gruvbox-bright-blue hover:text-gruvbox-blue text-sm transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                  <ExternalLinkIcon size={14} />
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github}
                  className="text-gruvbox-bright-green hover:text-gruvbox-green text-sm transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ExternalLinkIcon size={14} />
                </a>
              )}
            </div>
            <span className="text-sm text-gruvbox-fg/60">{project.year}</span>
          </div>

          <p className="text-gruvbox-fg/80">
            {project.description}
          </p>

          <div className="flex gap-4 items-center">
            <div className="flex gap-2 flex-wrap">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs px-2 py-1 rounded-full bg-gruvbox-fg/10 text-gruvbox-fg/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}