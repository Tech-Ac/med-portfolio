# Folder Structure Explained

```
simo-portfolio/
├── app/
│   ├── globals.css          # Tailwind v4 + luxury design tokens
│   ├── layout.tsx           # Root layout: fonts, metadata, html/lang
│   ├── not-found.tsx        # Custom 404 — medina lost
│   ├── sitemap.ts           # Dynamic sitemap from projects + journal
│   ├── robots.ts            # Dynamic robots.txt
│   ├── (site)/              # Route group for public site (no URL prefix)
│   │   ├── layout.tsx       # Site layout: Header + Footer
│   │   ├── page.tsx         # Home: Hero video + selected work + services + CTA
│   │   ├── about/           # About studio
│   │   ├── services/        # Services list
│   │   ├── work/            # Work grid
│   │   │   └── [slug]/      # Case study (Overview, Challenge, Gallery, Info)
│   │   ├── journal/         # Journal list + [slug]
│   │   ├── testimonials/    # Testimonials
│   │   ├── process/         # Process steps
│   │   ├── contact/         # Contact form (React Hook Form + Zod + Resend)
│   │   ├── privacy/         # Privacy
│   │   └── terms/           # Terms
│   ├── admin/
│   │   ├── layout.tsx       # Admin layout (no header/footer)
│   │   ├── login/           # Login page (Supabase auth)
│   │   ├── page.tsx         # Redirect to overview
│   │   └── (dashboard)/     # Route group for dashboard shell
│   │       ├── layout.tsx   # Dashboard sidebar + header
│   │       ├── overview/    # Stats, recent, quick actions
│   │       ├── projects/    # CRUD placeholder (connect Supabase)
│   │       ├── services/    # ...
│   │       ├── journal/
│   │       ├── testimonials/
│   │       ├── inquiries/
│   │       ├── media/       # Media Library (Supabase Storage)
│   │       ├── seo/
│   │       ├── settings/
│   │       ├── categories/
│   │       ├── clients/
│   │       ├── analytics/
│   │       └── users/
│   └── api/
│       ├── contact/         # POST contact form → Resend + Supabase
│       └── newsletter/      # Newsletter signup
├── components/
│   ├── ui/                  # shadcn/ui: button, card, input, textarea, badge
│   ├── site/                # Site components: header, footer, hero, project-card, service-card, testimonial-card, reveal, marquee, process-step, contact-form
│   └── admin/               # (Future) admin components: rich editor, media picker
├── lib/
│   ├── utils.ts             # cn(), slugify(), formatDate()
│   ├── fonts.ts             # next/font/google: Cormorant, Inter, Instrument Serif
│   ├── data.ts              # Mock data: projects, services, testimonials, journal (fallback when Supabase not configured)
│   ├── validations.ts       # Zod schemas: contact, newsletter, project, login
│   ├── seo.ts               # defaultMetadata, JSON-LD generators
│   └── supabase/
│       ├── client.ts        # Browser client (createBrowserClient)
│       └── server.ts        # Server client (createServerClient + cookies)
├── supabase/
│   ├── schema.sql           # Production-ready schema: tables, indexes, triggers, RLS policies, functions
│   └── seed.sql             # Sample data
├── public/
│   ├── images/              # Static images (optional, use Supabase Storage preferred)
│   └── video/               # (Optional) local hero video, but we use CDN URL for now
├── docs/                    # Guides: Supabase, Vercel, GitHub, Admin, Image Upload, Content, Troubleshooting, Folder Structure, Terminal Commands
├── middleware.ts            # Auth middleware: protects /admin/*, refreshes Supabase session
├── next.config.ts           # Next.js 15 config: typedRoutes, images remotePatterns, optimizePackageImports
├── tsconfig.json            # Strict, noImplicitAny, bundler resolution
├── postcss.config.mjs       # @tailwindcss/postcss for Tailwind v4
├── eslint.config.mjs        # Flat config: next/core-web-vitals + next/typescript
├── package.json             # Dependencies (latest stable verified)
├── .env.example             # Env template
└── .gitignore
```

## Why Route Groups?

`(site)` and `(dashboard)` are route groups — they organize code without affecting URL. So `app/(site)/about/page.tsx` → `/about`, not `/(site)/about`. This lets us have different layouts for site vs admin.

## Where to Edit What?

- **Design tokens**: `app/globals.css` → @theme inline colors, fonts
- **Fonts**: `lib/fonts.ts` + `app/layout.tsx`
- **Homepage**: `app/(site)/page.tsx`
- **Header/Footer**: `components/site/header.tsx`, `footer.tsx`
- **Mock data**: `lib/data.ts` (replace with Supabase fetch later)
- **SEO**: `lib/seo.ts` + per-page `metadata` exports
- **Contact form**: `components/site/contact-form.tsx` + `app/api/contact/route.ts`
