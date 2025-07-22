import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gruvbox: {
          bg: '#2E3440',
          fg: '#ECEFF4',
          red: '#BF616A',
          green: '#A3BE8C',
          yellow: '#EBCB8B',
          blue: '#81A1C1',
          purple: '#B48EAD',
          aqua: '#88C0D0',
          gray: '#4C566A',
          orange: '#D08770',
          // Bright variants
          'bright-red': '#D57780',
          'bright-green': '#B1D195',
          'bright-yellow': '#F0D399',
          'bright-blue': '#8BA9CF',
          'bright-purple': '#C7A4D2',
          'bright-aqua': '#9AD1E3',
          'bright-gray': '#606B7A',
          'bright-orange': '#DA9D71',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
