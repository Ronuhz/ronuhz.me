import type { Metadata } from 'next'
import AffiliateGrid from '@/components/affiliate-grid'

export const metadata: Metadata = {
  title: 'Affiliates',
  description:
    'Software tools, platforms, and services personally used and recommended by Hunor Zoltáni.',
  alternates: {
    canonical: '/affiliates'
  }
}

export default function Affiliates() {
  return (
    <main className="space-y-10">
      <section className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Affiliates</h1>
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          Developer tools, productivity apps, and resources I actively use and recommend.
        </p>
      </section>

      <section aria-labelledby="recommendations-heading" className="space-y-6">
        <div className="border-b border-[var(--border)] pb-2">
          <h2 id="recommendations-heading" className="text-xs uppercase tracking-wider text-[var(--muted)] font-medium">
            Recommendations
          </h2>
        </div>
        <AffiliateGrid />
      </section>
    </main>
  )
}