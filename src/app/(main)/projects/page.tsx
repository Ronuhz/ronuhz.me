"use client";
import { projects } from "@/data/projects";
import { ExternalLinkIcon } from "@/components/icons/external-link";
import { TrophyIcon } from "@/components/icons/trophy";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-item').forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 70}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return (
    <main className="flex flex-col gap-8">
      <section className="brutal-section">
        <h2 className="text-xl md:text-2xl font-bold uppercase mb-2">Projects</h2>
        <p className="opacity-80">A collection of personal and professional work.</p>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.name} className="brutal-card reveal-item group h-full">
            <div className="flex flex-col h-full">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold uppercase leading-tight">{project.name}</h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="brutal-chip text-[10px]">{project.year}</span>
                    {project.winner && (
                      <span className="brutal-chip text-[10px] bg-yellow-400 text-black border-yellow-400 inline-flex items-center gap-1">
                        <TrophyIcon size={10} /> WINNER
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-between mt-3">
                <div className="space-y-3">
                  <p className="text-sm opacity-80 leading-relaxed min-h-[2.5rem]">{project.description}</p>
                  
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="brutal-chip text-[9px] opacity-70">{tech}</span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="brutal-chip text-[9px] opacity-70">+{project.techStack.length - 4}</span>
                    )}
                  </div>
                </div>

                {(project.appStore || project.github) && (
                  <div className="flex gap-3 pt-3 mt-3 border-t-2 border-current">
                    {project.appStore && (
                      <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="brutal-button text-xs bg-blue-500 text-white border-blue-500 hover:bg-blue-600">
                        App Store <ExternalLinkIcon size={12} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="brutal-button text-xs bg-gray-800 text-white border-gray-800 hover:bg-gray-900">
                        GitHub <ExternalLinkIcon size={12} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}