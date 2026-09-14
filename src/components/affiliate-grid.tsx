import Image from 'next/image'
import affiliateData from '@/data/affiliates.json'

export default function AffiliateGrid() {
  return (
    <div className="divide-y divide-[var(--border)]">
      {affiliateData.affiliates.map((affiliate) => (
        <a
          key={affiliate.id}
          href={affiliate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 py-4 first:pt-0 last:pb-0 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-10 h-10 flex-shrink-0 border border-[var(--border)] bg-[var(--background)] overflow-hidden">
            <Image
              src={affiliate.icon}
              alt={`${affiliate.name} icon`}
              fill
              className={`object-contain p-1 ${
                affiliate.id === 'rudrank-academy' ? 'dark-invert' : ''
              }`}
            />
          </div>
          <div className="flex-1 space-y-1 min-w-0">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-medium text-sm group-hover:underline underline-offset-4">
                {affiliate.name} ↗
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              {affiliate.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}