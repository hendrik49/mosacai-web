# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development with Turbopack (ultra-fast bundler)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Code linting
npm run lint
```

## Project Architecture

### Technology Stack
- **Next.js 15.3.4** with App Router and Turbopack
- **React 19.0.0** (cutting-edge concurrent features)
- **TypeScript** with strict configuration
- **Tailwind CSS v4** (latest) with custom theme system
- **Framer Motion 12.19.2** for animations

### Core Architecture Patterns

**Component Organization:**
- `src/app/components/` - Page-level components (Hero, Header, Footer, etc.)
- `src/app/components/ui/` - Reusable UI library with advanced visual effects
- **Enhanced Components** - Components prefixed with "Enhanced" for advanced functionality
- **Client Components** - Interactive components using `'use client'` directive

**File Structure:**
```
src/
├── app/
│   ├── components/
│   │   ├── ui/           # Custom UI component library
│   │   └── [Components]  # Page-specific components
│   ├── [routes]/         # Next.js App Router pages
│   ├── layout.tsx        # Root layout with Header/Footer
│   └── globals.css       # Theme system and animations
└── lib/
    └── utils.ts          # cn() utility for className merging
```

### Custom Design System

**CSS Variables Architecture:**
- `--color-primary-*` - Purple gradient palette (50-900)
- `--color-dark-*` - Dark theme colors (100-500)
- `--background-image-gradient-*` - Pre-defined gradients
- `--animate-*` - Custom animation definitions

**Key Utility Classes:**
- `card-glass` - Glass morphism effects
- `text-gradient` - Brand gradient text
- Custom animations: float, fade-in, slide-up

### Advanced UI Components

The `/ui` folder contains sophisticated components:
- **3D Card Effects** - Interactive 3D transformations
- **Floating Dock** - macOS-style navigation
- **Typewriter Effect** - Animated text rendering
- **Moving Borders** - Animated button borders
- **Background Beams** - Particle/beam animations
- **Sticky Scroll Reveal** - Scroll-triggered animations
- **Infinite Moving Cards** - Continuous carousel effects
- **Spotlight** - Interactive spotlight effects

### Development Guidelines

**TypeScript Configuration:**
- Strict mode enabled
- Path aliases: `@/*` maps to `./src/*`
- ES2017 target with Next.js integration

**Styling Approach:**
- Tailwind-first with custom CSS variables
- Glass morphism and gradient design language
- Mobile-first responsive design
- Custom animation keyframes in globals.css

**Component Patterns:**
- Functional components with TypeScript interfaces
- Framer Motion for complex animations
- clsx + tailwind-merge via `cn()` utility
- Client components for interactivity

### Content & Localization
- HTML lang set to "zh-CN" (Chinese Simplified)
- Bilingual-ready architecture
- Inter font family with Latin subset

### Performance Considerations
- Turbopack for ultra-fast development
- Next.js automatic optimizations (code splitting, image optimization)
- Concurrent React features enabled
- CSS custom properties for efficient theming

### Project Context
This is a professional marketing website for an AI company, featuring a sophisticated custom UI component library with advanced visual effects. The architecture emphasizes cutting-edge technologies and modern design patterns suitable for a high-end AI company presentation.