# Architecture: Unified Project Structure

## Folder Layout
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Core UI elements (Button, Input, etc.)
│   ├── sections/       # Domain-specific page sections
│   └── layout/         # Header, Footer, Sidebar
├── assets/             # Images, icons, and static files
├── hooks/              # Custom React hooks
├── styles/             # Global styles and Tailwind configuration
├── types/              # TypeScript interfaces/types
└── utils/              # Helper functions
```

## Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Styles/Utils**: camelCase (e.g., `themeUtils.ts`)
- **Folders**: kebab-case (e.g., `header-navigation`)
