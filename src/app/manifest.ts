import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hunor Zoltáni — iOS Engineer & Indie Developer',
    short_name: 'Hunor Zoltáni',
    description: 'Independent iOS engineer & Apple Swift Student Challenge 2025 Winner.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml'
      },
      {
        src: '/apple-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml'
      }
    ]
  }
}
