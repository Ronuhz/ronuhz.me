"use client";
import Header from "@/components/header";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer?.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 }) : null;
    document.querySelectorAll('.reveal-item').forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 70}ms`;
      observer?.observe(el);
    });
    return () => observer?.disconnect();
  }, []);

  return (
    <main className="flex flex-col gap-8">
      <Header />

      <section className="brutal-section marquee" aria-label="Spec Sheet">
        <div className="marquee-track uppercase font-black">
          <span className="px-6">Role: iOS Engineer / Indie</span>
          <span className="px-6">Swift • SwiftUI • SwiftData • CloudKit • macOS</span>
          <span className="px-6">Haptics • Performance • Tactile UI</span>
          <span className="px-6">Cluj-Napoca, RO — Available for work</span>
          <span className="px-6">Role: iOS Engineer / Indie</span>
          <span className="px-6">Swift • SwiftUI • SwiftData • CloudKit • macOS</span>
          <span className="px-6">Haptics • Performance • Tactile UI</span>
          <span className="px-6">Cluj-Napoca, RO — Available for work</span>
        </div>
      </section>

      <section className="brutal-section">
        <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">Selected Work</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { 
              title: "Lumenis", 
              desc: "AI image generation for iPhone. Fast, tactile, native.", 
              href: "https://apps.apple.com/app/apple-store/id6670686446",
              year: "2024",
              platform: "iOS",
              status: "LIVE"
            },
            { 
              title: "PantryKit", 
              desc: "Scan pantry items. Auto lists. Waste less.", 
              href: "https://apps.apple.com/app/apple-store/id6630380943",
              year: "2024", 
              platform: "iOS",
              status: "LIVE"
            },
            { 
              title: "Cartoon Yourself", 
              desc: "Transform images into cartoon and anime styles.", 
              href: "https://apps.apple.com/app/apple-store/id6744258819",
              year: "2025",
              platform: "iOS", 
              status: "LIVE"
            },
            { 
              title: "(Not) Lost", 
              desc: "Learn pathfinding algorithms. Swift Student Challenge winner.", 
              href: "/projects",
              year: "2025",
              platform: "iPad",
              status: "AWARD"
            },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="brutal-card group reveal-item">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold uppercase leading-tight">{item.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="brutal-chip text-[10px]">{item.platform}</span>
                      <span className="brutal-chip text-[10px]">{item.year}</span>
                      <span className={`brutal-chip text-[10px] ${
                        item.status === 'NEW' ? 'bg-red-500 text-white border-red-500' :
                        item.status === 'AWARD' ? 'bg-yellow-400 text-black border-yellow-400' :
                        'bg-green-500 text-white border-green-500'
                      }`}>{item.status}</span>
                    </div>
                  </div>
                  <div className="transition-transform group-hover:translate-x-1 text-xl">→</div>
                </div>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="brutal-section reveal-item">
        <div className="mb-3">
          <span className="brutal-label">Motto</span>
        </div>
        <blockquote className="text-lg md:text-xl leading-snug">
          <p>&ldquo;I don&apos;t build in order to have clients. I have clients in order to build.&rdquo;</p>
          <p className="opacity-70 mt-2">– Howard Roark, The Fountainhead</p>
        </blockquote>
      </section>

      <section className="brutal-section marquee" aria-hidden>
        <div className="marquee-track uppercase font-black">
          <span className="px-6">SwiftUI</span><span className="px-6">iOS</span><span className="px-6">macOS</span><span className="px-6">Haptics</span><span className="px-6">Performance</span><span className="px-6">Design Systems</span><span className="px-6">Cluj-Napoca</span><span className="px-6">Indie</span>
          <span className="px-6">SwiftUI</span><span className="px-6">iOS</span><span className="px-6">macOS</span><span className="px-6">Haptics</span><span className="px-6">Performance</span><span className="px-6">Design Systems</span><span className="px-6">Cluj-Napoca</span><span className="px-6">Indie</span>
        </div>
      </section>
      
    </main>
  );
}
