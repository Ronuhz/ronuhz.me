import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  return (
    <Link
      href="https://tryastro.app?aff=EXOEk"
      target="_blank"
      className="group relative overflow-hidden rounded-lg bg-gruvbox-bg1 transition-all hover:bg-gruvbox-bg2"
    >
      <div className="flex items-top justify-between pr-4 -ml-1 gap-4">
        <Image
          src="/AstroIcon.webp"
          alt="Astro Icon"
          width={64}
          height={64}
        />
        <div className="flex-1 space-y-2">
          <h2 className="font-medium text-gruvbox-bright-blue">Check out Astro</h2>
          <p className="text-sm text-gruvbox-fg3">
            Boost your App Store rankings and improve visibility
          </p>
        </div>
        <div className="text-gruvbox-bright-aqua transition-transform group-hover:translate-x-1">
          →
        </div>
      </div>
    </Link>
  );
}