# Public Assets Directory

This directory contains all static assets for the Mosaic AI website.

## Directory Structure

```
public/
├── images/
│   ├── hero/              # Hero section images
│   ├── projects/          # Project showcase images
│   ├── team/              # Team member photos
│   ├── clients/           # Client logos
│   └── backgrounds/       # Background images
├── icons/
│   ├── social/            # Social media icons
│   ├── tech/              # Technology icons
│   └── services/          # Service category icons
├── documents/             # PDFs, brochures, etc.
├── favicon.ico
├── logo.svg
└── manifest.json          # PWA manifest
```

## Usage in Components

### Images
```tsx
import Image from 'next/image'

// For hero section
<Image 
  src="/images/hero/main-banner.jpg" 
  alt="AI Solutions" 
  width={1200} 
  height={600} 
/>

// For project images
<Image 
  src="/images/projects/ai-chatbot.png" 
  alt="AI Chatbot Project" 
  width={400} 
  height={300} 
/>
```

### Icons
```tsx
// As regular img tags
<img src="/icons/tech/python.svg" alt="Python" className="w-8 h-8" />

// Or as background images in CSS
background-image: url('/icons/social/linkedin.svg');
```

### Logo
```tsx
<Image 
  src="/logo.svg" 
  alt="Mosaic AI Logo" 
  width={120} 
  height={40} 
/>
```

## Image Optimization Tips

1. Use WebP format for better compression
2. Provide multiple sizes for responsive images
3. Use Next.js Image component for automatic optimization
4. Keep images under 1MB when possible
5. Use SVG for icons and simple graphics

## File Naming Convention

- Use kebab-case: `ai-chatbot-demo.jpg`
- Include descriptive names: `team-john-doe.jpg`
- Add size suffixes when needed: `logo-small.svg`, `logo-large.svg` 