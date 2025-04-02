type Project = {
  name: string;
  description: string;
  github?: string;
  appStore?: string;
  techStack: string[];
  year: number;
  winner?: string;
}

export const projects: Project[] = [
  {
    name: "(Not) Lost - SSC25",
    description: "Learn about pathfinding algorithms in a fun way.",
    github: "https://github.com/Ronuhz/Swift-Student-Challenge-2025",
    techStack: ["Swift", "SwiftUI", "AVKit", "Observation"],
    year: 2025,
    winner: "Swift Student Challenge 2025"
  },
  {
    name: "Vivid",
    description: "An AI image generation app with prompt enhancer.",
    appStore: "https://apps.apple.com/app/apple-store/id6740097249",
    techStack: ["Swift", "SwiftUI", "SwiftData", "AIProxy", "Replicate", "Fal.ai", "OpenAI"],
    year: 2025
  },
  {
    name: "Lumenis",
    description: "An AI image generation app with customizable styles.",
    appStore: "https://apps.apple.com/app/apple-store/id6670686446",
    techStack: ["Swift", "SwiftUI", "SwiftData", "AIProxy", "Replicate"],
    year: 2024
  },
  {
    name: "PantryKit",
    description: "An iOS app for tracking and managing pantry inventory with AI.",
    appStore: "https://apps.apple.com/app/apple-store/id6630380943",
    techStack: ["Swift", "SwiftUI", "SwiftData", "AIProxy", "OpenAI"],
    year: 2024
  },
  {
    name: "Next Social",
    description: "X like social media site.",
    github: "https://github.com/Ronuhz/next-social",
    techStack: ["Next.js", "Typescript", "Tailwindcss", "NextAuth", "Prisma", "Planetscale"],
    year: 2023
  },
];