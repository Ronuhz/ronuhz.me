import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  return (
    <Link
      href="https://tryastro.app?aff=EXOEk"
      target="_blank"
      className="group relative overflow-hidden rounded-lg bg-gruvbox-bg1 transition-all hover:bg-gruvbox-bg2 sm:-ml-1 sm:pr-1"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src="/AstroIcon.webp"
            alt="Astro Icon"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1 space-y-2 text-center sm:text-left">
          <h2 className="font-medium text-gruvbox-bright-blue">Check out Astro</h2>
          <p className="text-sm text-gruvbox-fg3 text-balance">
            Boost your App Store rankings and improve visibility
          </p>
        </div>
        <div className="text-gruvbox-bright-aqua transition-transform group-hover:translate-x-1 hidden sm:block">
          →
        </div>
      </div>
    </Link>
  );
}