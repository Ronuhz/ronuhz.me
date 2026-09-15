export type Project = {
  name: string
  description: string
  github?: string
  appStore?: string
  techStack: string[]
  year: number
  winner?: string
  featured?: boolean
  category?: 'ios' | 'systems' | 'web'
}

export const projects: Project[] = [
  {
    name: '(Not) Lost',
    description: 'Interactive pathfinding algorithm visualizer with DFS, Dijkstra, and A* on dynamic mazes with tactile audio feedback.',
    github: 'https://github.com/Ronuhz/Swift-Student-Challenge-2025',
    techStack: ['Swift', 'SwiftUI', 'AVKit', 'Observation'],
    year: 2025,
    winner: 'Apple Swift Student Challenge 2025',
    featured: true,
    category: 'ios'
  },
  {
    name: 'Huffman Archiver',
    description: 'Custom file and directory compressor and decompressor using Huffman coding in 32-bit x86 Assembly with Win32 APIs.',
    github: 'https://github.com/Ronuhz/nasm-huffman-archiver',
    techStack: ['x86 Assembly', 'NASM', 'Win32 API', 'C'],
    year: 2026,
    featured: true,
    category: 'systems'
  },
  {
    name: 'Lumenis',
    description: 'Tactile, native AI image generator built for iOS with fluid animations and fine-grained style controls.',
    appStore: 'https://apps.apple.com/app/apple-store/id6670686446',
    techStack: ['Swift', 'SwiftUI', 'SwiftData', 'AIProxy', 'Replicate'],
    year: 2024,
    featured: true,
    category: 'ios'
  },
  {
    name: 'Next Social',
    description: 'Minimalist social feed platform inspired by X with real-time updates and authentication.',
    github: 'https://github.com/Ronuhz/next-social',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    year: 2023,
    category: 'web'
  }
]

export default projects
