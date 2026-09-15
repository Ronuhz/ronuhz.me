import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ronuhz.me'),
  title: {
    default: 'Hunor Zoltáni — iOS Engineer & Indie Developer',
    template: '%s — Hunor Zoltáni'
  },
  description:
    'Hunor Zoltáni is an independent iOS engineer and Computer Science student from Cluj-Napoca, Romania. Apple Swift Student Challenge 2025 Winner. Creator of Lumenis.',
  applicationName: 'Hunor Zoltáni',
  authors: [{ name: 'Hunor Zoltáni', url: 'https://ronuhz.me' }],
  generator: 'Next.js',
  keywords: [
    'Hunor Zoltáni',
    'Hunor Zoltani',
    'Zoltáni Hunor',
    'ronuhz',
    'iOS Engineer',
    'iOS Developer',
    'Swift Developer',
    'SwiftUI',
    'SwiftData',
    'Apple Swift Student Challenge 2025 Winner',
    'Lumenis',
    '(Not) Lost',
    'Cluj-Napoca Developer',
    'Babeș-Bolyai University',
    'Indie Hacker'
  ],
  creator: 'Hunor Zoltáni',
  publisher: 'Hunor Zoltáni',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'profile',
    firstName: 'Hunor',
    lastName: 'Zoltáni',
    username: 'ronuhz',
    locale: 'en_US',
    url: 'https://ronuhz.me',
    title: 'Hunor Zoltáni — iOS Engineer & Indie Developer',
    description:
      'Independent iOS engineer and Apple Swift Student Challenge 2025 Winner. Building tactile, native apps with Swift & SwiftUI.',
    siteName: 'Hunor Zoltáni',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Hunor Zoltáni — iOS Engineer & Indie Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hunor Zoltáni — iOS Engineer & Indie Developer',
    description:
      'Independent iOS engineer and Apple Swift Student Challenge 2025 Winner. Building tactile, native apps with Swift & SwiftUI.',
    creator: '@ronuhz',
    site: '@ronuhz',
    images: ['/opengraph-image']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [{ url: '/apple-icon.svg' }]
  },
  manifest: '/manifest.webmanifest'
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://ronuhz.me/#person',
  name: 'Hunor Zoltáni',
  alternateName: ['ronuhz', 'Zoltáni Hunor'],
  jobTitle: 'Independent iOS Engineer',
  description:
    'Independent iOS engineer and Computer Science student. Apple Swift Student Challenge 2025 Winner.',
  url: 'https://ronuhz.me',
  email: 'mailto:ronuhz@gmail.com',
  sameAs: [
    'https://github.com/Ronuhz',
    'https://x.com/ronuhz',
    'https://twitter.com/ronuhz',
    'https://linkedin.com/in/hunor-zoltani',
    'https://apps.apple.com/developer/hunor-zoltani/id1765089301'
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Babeș-Bolyai University',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cluj-Napoca',
      addressCountry: 'RO'
    }
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cluj-Napoca',
    addressCountry: 'RO'
  },
  award: 'Winner, Apple Swift Student Challenge 2025',
  knowsAbout: [
    'iOS Development',
    'Swift',
    'SwiftUI',
    'SwiftData',
    'Observation Framework',
    'x86 Assembly',
    'AI Integration in Mobile Apps'
  ]
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://ronuhz.me/#website',
  name: 'Hunor Zoltáni',
  url: 'https://ronuhz.me',
  author: {
    '@id': 'https://ronuhz.me/#person'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme');
                  if (saved === 'dark' || saved === 'light') {
                    document.documentElement.setAttribute('data-theme', saved);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${mono.variable} font-mono antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]`}>
        {children}
      </body>
    </html>
  )
}
