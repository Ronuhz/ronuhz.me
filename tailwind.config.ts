import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Arial',
          'sans-serif'
        ],
        mono: [
          'var(--font-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'monospace'
        ]
      },
      colors: {
        gruvbox: {
          bg: '#282828',
          fg: '#ebdbb2',
          red: '#cc241d',
          green: '#98971a',
          yellow: '#d79921',
          blue: '#458588',
          purple: '#b16286',
          aqua: '#689d6a',
          gray: '#928374',
          orange: '#d65d0e',
          // Bright variants
          'bright-red': '#fb4934',
          'bright-green': '#b8bb26',
          'bright-yellow': '#fabd2f',
          'bright-blue': '#83a598',
          'bright-purple': '#d3869b',
          'bright-aqua': '#8ec07c',
          'bright-gray': '#a89984',
          'bright-orange': '#fe8019',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
