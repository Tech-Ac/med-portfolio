# Admin Guide — SIMO CMS

## Access

- URL: `/admin/login`
- Demo: admin@simo.ma / admin123 (replace with real Supabase user in production)
- After login: `/admin/overview`

## Dashboard Overview

- **Overview**: Stats, recent projects, quick actions
- **Projects**: CRUD for portfolio projects, case studies
- **Services**: Edit services, pricing, features
- **Testimonials**: Manage client quotes
- **Journal**: Write and publish journal posts
- **Categories**: Manage taxonomies
- **Clients**: Client database
- **Media Library**: Supabase Storage browser, upload, drag-drop, alt text
- **SEO**: Edit meta titles, descriptions, OG images per page
- **Analytics**: Simple event tracking (connect Vercel Analytics for real data)
- **Settings**: Site name, tagline, social links, contact info
- **Inquiries**: View contact form submissions
- **Users**: Manage admin users and roles (admin/editor/viewer)

## Creating a Project

1. Go to Projects → + Add New
2. Fill:
   - Title, Slug (auto-generated via slugify), Client, Category, Year, Location
   - Cover URL (upload via Media Library, or paste Unsplash URL)
   - Description, Challenge, Solution, Outcome
   - Services (tags), Colors (name + hex), Typography (name + usage)
   - Gallery (multiple images)
   - Featured toggle, Status (Draft/Published/Archived)
   - SEO: meta title, description, OG image
3. Live preview on right
4. Save Draft or Publish

## Media Upload

- Go to Media Library
- Drag & drop or click Upload
- Files go to Supabase Storage bucket `media` (public)
- Copy URL and use in project cover or gallery
- Set alt text for accessibility

## SEO

- Every project, journal post, service has SEO fields
- Site-wide SEO in Settings → SEO
- Sitemap auto-generates from published projects + journal
- JSON-LD auto-generated per project

## Roles

- **admin**: full access
- **editor**: can create/edit but not delete users or settings
- **viewer**: read-only

Roles are in `profiles.role` table. Update via SQL or Supabase dashboard.

## Autosave & Draft

- Forms autosave to localStorage every 30s
- Draft status hides from public site
- Published appears immediately (ISR revalidates)

## Troubleshooting

- Can't login: check Supabase auth users, check profiles table
- Images not showing: check Storage bucket public = true, check remotePatterns in next.config.ts
- Changes not appearing: check status = published, clear Vercel cache, redeploy
