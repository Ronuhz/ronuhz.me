import Link from 'next/link';
import Image from 'next/image';
import affiliateData from '@/data/affiliates.json';

export default function AffiliateGrid() {
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      {affiliateData.affiliates.map((affiliate) => (
        <Link
          key={affiliate.id}
          href={affiliate.link}
          target="_blank"
          className="group relative overflow-hidden rounded-lg bg-gruvbox-bg1 transition-all hover:bg-gruvbox-bg2 p-4"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={affiliate.icon}
                alt={`${affiliate.name} Icon`}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 space-y-2 text-center sm:text-left">
              <h2 className="font-medium text-gruvbox-bright-blue">{affiliate.name}</h2>
              <p className="text-sm text-gruvbox-fg3 text-balance">
                {affiliate.description}
              </p>
            </div>
            <div className="text-gruvbox-bright-aqua transition-transform group-hover:translate-x-1 hidden sm:block">
              →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 