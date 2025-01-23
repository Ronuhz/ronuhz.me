type Project = {
  name: string;
  description: string;
  github?: string;
  appStore?: string;
  techStack: string[];
  year: number;
}

export const projects: Project[] = [
  {
    name: "Spooky",
    description: "An AI image generation app with prompt enhancer.",
    appStore: "https://apps.apple.com/app/apple-store/id6740097249",
    techStack: ["Swift", "SwiftUI", "SwiftData", "AIProxy", "Replicate", "OpenAI"],
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
];