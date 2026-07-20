# Image Upload Guide

## Where Images Come From

1. **Supabase Storage** (recommended for production)
   - Buckets: media, projects, journal, avatars
   - Public buckets, so URLs work with next/image
   - Upload via Admin → Media Library or Supabase Dashboard

2. **Unsplash** (for development / placeholders)
   - Already allowed in next.config.ts remotePatterns
   - Use high-res: `?q=80&w=2070` for hero, `?q=80&w=800` for cards

3. **Local /public**
   - Put in `public/images/`
   - Reference as `/images/your-file.jpg`
   - No optimization needed, Next.js handles via next/image

## How to Upload in Admin

- Go to /admin/media
- Drag & drop or click Upload
- Select bucket: media (general) or projects/journal for specific
- After upload, copy URL
- Paste URL into Project → Cover URL or Gallery

## Image Requirements

- **Cover**: 1600x1200 min, 4:3 or 16:10, <2MB, AVIF/WebP via next/image auto
- **Gallery**: 2000px wide min, 16:10, <3MB
- **Avatar**: 400x400, 1:1, <500KB
- **OG Image**: 1200x630, <1MB, jpg

## Optimization

- next/image automatically serves AVIF/WebP
- Sharp is installed for production optimization
- Use `priority` prop for above-the-fold images (hero, first project)
- Use `fill` + `sizes` for responsive

## Alt Text

Always set alt text in Media Library for accessibility:
- Good: "Atelier Noir restaurant interior with terracotta walls"
- Bad: "image1" or empty

## Troubleshooting

- Image not loading: check URL is public, check bucket is public, check next.config.ts remotePatterns
- Slow: compress before upload (use Squoosh.app), max 2000px wide
- CORS: Supabase Storage is CORS-enabled by default
