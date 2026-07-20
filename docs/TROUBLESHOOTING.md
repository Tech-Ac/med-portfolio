# Troubleshooting Guide

## Build Failures

### TypeScript errors
```bash
npm run type-check
```
- Fix explicit any: add type annotations
- Fix missing types: import from @/lib/data or define
- In Next.js 15, `params` is Promise: use `const { slug } = await params`

### ESLint errors
```bash
npm run lint
```
- Flat config: eslint.config.mjs uses next/core-web-vitals + next/typescript
- Fix warnings: no unused vars, no explicit any

### next/font errors
- Never use `next/font/google` inside client component without variable export pattern in lib/fonts.ts
- Always use `variable: '--font-xxx'` and add to html className in root layout

### Metadata in client component
- Never export `metadata` from file with "use client"
- Move metadata to parent server component or layout

## Runtime

### Supabase env missing
- Check .env.local exists and has NEXT_PUBLIC_SUPABASE_URL and ANON_KEY
- Restart dev server after changing env
- In Vercel, check env vars added to all environments

### Images not loading
- Check next.config.ts remotePatterns includes your image host (supabase.co, unsplash.com)
- Check Storage bucket is public
- Check URL is https, not http

### Auth not working
- Check middleware.ts matcher excludes _next/static etc.
- Check Supabase auth users exist
- Check profiles table has role
- Clear cookies and try again

### Contact form not sending email
- Check RESEND_API_KEY set
- Check CONTACT_TO_EMAIL set
- Check Resend dashboard for logs
- In dev, form still returns success even without Resend (mock)

### Hero video not playing
- Video must be muted, autoplay, loop, playsInline for autoplay to work
- Check video URL CORS (use pexels or supabase storage)
- Poster fallback is Unsplash image

## Performance

### Lighthouse low
- Check next/image used everywhere (not <img>)
- Check fonts self-hosted via next/font (no Google CDN import)
- Check no huge JS in client components (move to server where possible)

### Slow build
- Tailwind v4 Oxide is fast, but check no huge images in public
- Remove unused dependencies

## Vercel

### Build fails only on Vercel
- Check Node version: set to 20.x in Vercel settings
- Check env vars added
- Check logs for specific file

### 404 on /admin
- Middleware protects /admin, need to be logged in
- For demo, admin_auth cookie set in login page client component (replace with real Supabase session in prod)

## Still stuck?

- Check docs folder for specific guides
- Run `rm -rf .next node_modules && npm install && npm run build` locally
- Open issue with logs
