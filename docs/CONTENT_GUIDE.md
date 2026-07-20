# Updating Content Guide

## No Code Needed

All content is editable via Admin CMS (/admin) once Supabase is connected. No deployment needed for content changes.

## Projects

- **Add**: Admin → Projects → + Add New
- **Edit**: Click project row → Edit
- **Delete**: Edit → Delete (soft delete to archived, hard delete removes)
- **Featured**: Toggle featured to show on homepage
- **Order**: Homepage shows featured first, then by year desc. Change order_index in DB if needed.

## Services

- Admin → Services
- Edit title, subtitle, description, features list, price, duration
- Changes reflect on /services page immediately

## Journal

- Admin → Journal → + New Post
- Write in rich text (future: add TipTap or similar)
- Set category, read time, cover
- Draft/Publish
- Appears on /journal and homepage if featured logic added

## Testimonials

- Admin → Testimonials
- Add name, role, company, content, avatar, linked project, rating
- Featured testimonials show on homepage

## Site Settings

- Admin → Settings
- Edit site name, tagline, description, social links, contact email
- Stored in site_settings table as JSONB
- To use in code: fetch from Supabase in server component

## SEO

- Admin → SEO
- Edit default meta title, description, OG image
- Per-project SEO in project edit form
- Sitemap and robots auto-generate

## What Requires Code Change?

- Adding new page types (requires new file in app/(site)/)
- Changing design system (colors, fonts in app/globals.css and lib/fonts.ts)
- Adding new sections to homepage (edit app/(site)/page.tsx)

For those, edit code locally, test with `npm run dev`, commit, push, Vercel auto-deploys.

## Backup

- Supabase Dashboard → Database → Backups (daily auto)
- Export via SQL: `pg_dump` or Supabase CLI
