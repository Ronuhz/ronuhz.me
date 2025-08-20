# AGENTS.md

## Commands
- `bun dev` - Start dev server
- `bun build` - Build for production
- `bun lint` - Run ESLint
- `bun start` - Start production server

## Style Guidelines
- **Imports**: Use `@/` alias for src/ imports
- **Types**: Strict TypeScript enabled
- **Styling**: Tailwind CSS with gruvbox colors
- **Components**: Default exports, PascalCase
- **Files**: kebab-case for files, camelCase for functions
- **Error Handling**: Use ESLint rules from next/core-web-vitals + next/typescript
- **Formatting**: No semicolons, single quotes, 2-space indent
- **Structure**: App Router with (main) and (legal) route groups