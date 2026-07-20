# Med — Portfolio Website

**Brand Identity & Packaging Designer — Marrakech, Morocco**

A complete, production-ready portfolio website built with Next.js 15, React 19, Tailwind CSS v4, Supabase, and Framer Motion. Designed to feel like a high-end museum, luxury hotel, and Swiss editorial — inspired by modern Marrakech architecture, terracotta walls, limestone, and desert light.

## ✨ Features

### Design
- **Swiss + Editorial + Luxury** — Minimal, calm, expensive feeling
- **Marrakech-inspired** — Terracotta, limestone, sand, charcoal palette; shadows, courtyards, craftsmanship
- **Spectacular Hero** — Full-screen autoplay muted looping cinematic video
- **Apple-level polish** — Framer Motion luxury animations, parallax, text reveal, image reveal
- **Fully responsive** — Mobile, tablet, desktop, 4K

### Pages (13+)
Home, About, Services, Work, Case Study [slug], Journal, Journal [slug], Testimonials, Process, Contact, Privacy, Terms, 404, Sitemap.xml, Robots.txt

### Case Study Structure
Hero, Overview, Problem, Research, Strategy, Typography, Colors, Grid, Applications, Packaging, Photography, Final Result, Outcome, Credits, Gallery

### Admin CMS (13 dashboards)
Overview, Projects, Services, Testimonials, Journal, Categories, Clients, Media Library, SEO, Analytics, Settings, Inquiries, Users
- Login/Logout, Auth (Supabase), Protected routes, Role system, CRUD, Rich text, Image upload, Drag & drop, Search, Pagination, Filters, Autosave, Draft/Publish/Archive/Delete, SEO fields, Slug generation, Live preview

### Tech Stack
- **Next.js 15.4.1** (App Router, Server Components, Metadata API, Route Handlers, Server Actions)
- **React 19.1**
- **TypeScript 5.8** (strict, no implicit any)
- **Tailwind CSS 4.1** (CSS-first, Oxide engine)
- **Motion 12.16** (formerly Framer Motion)
- **Supabase** (Auth, Database, Storage, RLS)
- **Zod 4.0.5**, **React Hook Form 7.59**, **Resend 4.1.2**, **Sharp**, **Lucide React**, **shadcn/ui**

### Performance & Quality
- 100 Lighthouse target
- Self-hosted fonts via `next/font/google` (Cormorant Garamond + Inter + Instrument Serif)
- `next/image` with AVIF/WebP, lazy loading, code splitting, tree shaking
- Static where possible, dynamic only when needed
- WCAG AA, keyboard nav, ARIA, color contrast
- JSON-LD, OpenGraph, Twitter Cards, dynamic sitemap/robots, canonical URLs, editable SEO

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/your-username/simo-portfolio.git
cd simo-portfolio

# 2. Install (Node 20+)
npm install

# 3. Env
cp .env.example .env.local
# Fill in Supabase + Resend keys

# 4. Run
npm run dev
# Open http://localhost:3000
```

## 🔧 Environment Variables

See `.env.example`. Required:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` or `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` or `SUPABASE_SECRET_KEY`
- `RESEND_API_KEY` (optional, for contact form emails)
- `CONTACT_TO_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

Never commit `.env.local`.

## 📦 Supabase Setup

1. Create project at supabase.com
2. Run `supabase/schema.sql` in SQL Editor
3. Run `supabase/seed.sql` for sample data
4. Create Storage buckets: `media`, `avatars`, `projects`, `journal` (public)
5. Set up Auth (email/password)
6. Add env vars to Vercel

Full guide: `docs/SUPABASE_GUIDE.md`

## 🚢 Deploy to Vercel

1. Push to GitHub
2. Import to Vercel (Next.js preset auto-detected)
3. Add Environment Variables
4. Deploy

Full guide: `docs/VERCEL_DEPLOYMENT.md`

## 📁 Folder Structure

See `docs/FOLDER_STRUCTURE.md`

## 🛠️ Scripts

- `npm run dev` — Dev server with Turbopack
- `npm run build` — Production build
- `npm run start` — Start production
- `npm run lint` — ESLint flat config
- `npm run type-check` — TypeScript check

## 🔒 Security

- No secrets in code, only env vars
- RLS policies enabled
- No `.env.local` committed
- `middleware.ts` protects `/admin/*`

## 📝 License

Proprietary — Built for SIMO Studio. All rights reserved.

---

**Made in Marrakech — Swiss grids × Moroccan light**
