import Link from 'next/link';
import Image from 'next/image';
import affiliateData from '@/data/affiliates.json';

export default function AffiliateGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {affiliateData.affiliates.map((affiliate) => (
        <Link
          key={affiliate.id}
          href={affiliate.link}
          target="_blank"
          className="brutal-card group"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0 border-4 border-black">
              <Image
                src={affiliate.icon}
                alt={`${affiliate.name} Icon`}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 space-y-1">
              <h2 className="font-bold uppercase">{affiliate.name}</h2>
              <p className="text-sm opacity-80">
                {affiliate.description}
              </p>
            </div>
            <div className="transition-transform group-hover:translate-x-1">
              →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 