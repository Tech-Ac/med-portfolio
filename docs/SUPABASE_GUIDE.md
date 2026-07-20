# Supabase Setup Guide — SIMO Portfolio

## 1. Create Project
- Go to supabase.com → New Project
- Name: simo-portfolio
- Region: closest to Marrakech (EU West or EU Central)
- Wait for provisioning (~2 min)

## 2. Run Schema
- Open SQL Editor in Supabase Dashboard
- Copy entire `supabase/schema.sql`
- Paste and Run
- Check Tables created in Table Editor

## 3. Run Seed
- In SQL Editor, run `supabase/seed.sql`
- This creates sample categories, clients, projects, services, testimonials, journal posts

## 4. Storage Buckets
- Go to Storage → New Bucket
- Create 4 buckets (all Public):
  - `media` — general media library
  - `avatars` — user avatars
  - `projects` — project covers and galleries
  - `journal` — journal covers

- For each bucket: set public = true, file size limit 10MB, allowed MIME: image/*, video/*

- Storage RLS: Go to Storage → Policies → Add policies:
  - Allow public read: `FOR SELECT USING (true)`
  - Allow authenticated write: `FOR ALL USING (auth.role() = 'authenticated')`

## 5. Authentication
- Go to Authentication → Providers → Email → Enable
- Disable email confirmations for dev, enable for prod
- Go to Users → Add user: admin@simo.ma / your password
- After first login, update `profiles` table role to `admin`:
  ```sql
  update profiles set role = 'admin' where email = 'admin@simo.ma';
  ```

## 6. Environment Variables
- Go to Project Settings → API
- Copy:
  - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
  - anon public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY` (or publishable key `sb_publishable_xxx` if you enabled new keys)
  - service_role secret → `SUPABASE_SERVICE_ROLE_KEY` (or `SUPABASE_SECRET_KEY`)

- Add to `.env.local` and Vercel env vars

## 7. Test Connection
- In your app, try login at /admin/login with your Supabase user
- Check Table Editor — you should see data

## 8. New Keys Migration (Important 2026)
Supabase is migrating from JWT anon/service_role to `sb_publishable_xxx` and `sb_secret_xxx`.
- Use `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` and `SUPABASE_SECRET_KEY` if available
- The code supports both (fallback to anon key)
- Update env vars when Supabase dashboard shows new keys

## Troubleshooting
- If RLS blocks reads: check policies in Table Editor → RLS
- If images don't load: check Storage bucket is public and remotePatterns in next.config.ts includes `**.supabase.co`
- If auth fails: check middleware.ts and that cookies are enabled
