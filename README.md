# Next.js Turbopack Monorepo

A modern development setup featuring Next.js with Turbopack bundler in a Turborepo monorepo structure.

## Features

- ⚡ **Turbopack**: Next.js's new Rust-based bundler for 10x faster development
- 📦 **Monorepo**: Turborepo for efficient workspace management and caching
- 🎨 **Shared UI**: Reusable component library with TypeScript
- 🔧 **Shared Config**: Consistent tooling across all packages
- 🚀 **Optimized Builds**: Parallel execution and intelligent caching

## Structure

```
├── apps/
│   └── web/              # Next.js application with Turbopack
├── packages/
│   ├── ui/               # Shared UI component library
│   └── config/           # Shared configurations (Tailwind, TypeScript)
└── turbo.json            # Turborepo configuration
```

## Getting Started

Install dependencies:
```bash
npm install
```

Start development server with Turbopack:
```bash
npm run dev
```

Build all packages:
```bash
npm run build
```

## Scripts

- `npm run dev` - Start development servers with Turbopack
- `npm run build` - Build all packages
- `npm run lint` - Lint all packages
- `npm run type-check` - Type check all packages
- `npm run clean` - Clean all build artifacts

## Package Details

### Apps
- **web**: Next.js application with Turbopack enabled

### Packages
- **@repo/ui**: Shared React component library with Tailwind CSS
- **@repo/config**: Shared configuration files for TypeScript and Tailwind

## Development

The monorepo uses workspaces to manage dependencies and Turborepo for task orchestration. All shared packages are automatically built and consumed by the applications.

Turbopack provides lightning-fast hot module replacement and bundling, making development incredibly responsive.