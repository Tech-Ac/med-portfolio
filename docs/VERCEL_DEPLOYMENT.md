# Vercel Deployment Guide — SIMO Portfolio

## Prerequisites
- GitHub repo with this code
- Supabase project set up (see SUPABASE_GUIDE.md)
- Resend account (optional, for contact form)

## Steps

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: SIMO luxury portfolio"
git branch -M main
git remote add origin https://github.com/your-username/simo-portfolio.git
git push -u origin main
```

### 2. Import to Vercel
- Go to vercel.com → Add New Project → Import Git Repository
- Select your repo
- Framework Preset: **Next.js** (auto-detected)
- Build Command: `next build` (default)
- Output Directory: `.next` (default)
- Install Command: `npm install` (default)
- Node Version: 20.x or 22.x (Vercel auto)

### 3. Environment Variables
In Vercel → Project → Settings → Environment Variables, add:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_xxx (if you have new keys)
SUPABASE_SERVICE_ROLE_KEY=your-service-role
SUPABASE_SECRET_KEY=sb_secret_xxx (if new keys)
RESEND_API_KEY=re_xxx
CONTACT_TO_EMAIL=hello@simo.ma
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=SIMO — Brand Identity & Packaging
```

- Add for all environments: Production, Preview, Development
- Save

### 4. Deploy
- Click Deploy
- Wait ~2-3 min for build
- If build fails, check Logs → Check for missing env vars or TypeScript errors

### 5. Custom Domain
- Vercel → Project → Settings → Domains → Add your domain (e.g., simo.ma)
- Add DNS records as instructed
- Wait for SSL provisioning

### 6. Post-Deploy Checks
- [ ] Homepage loads with hero video
- [ ] /work shows projects
- [ ] /work/[slug] case study works
- [ ] /contact form sends (check Resend)
- [ ] /admin/login works (use Supabase user)
- [ ] /sitemap.xml and /robots.txt accessible
- [ ] Lighthouse 90+ (Vercel Analytics)

### Build Troubleshooting

- **Error: Supabase env missing** → Add env vars in Vercel, redeploy
- **Error: Type error** → Run `npm run type-check` locally, fix
- **Error: ESLint** → Run `npm run lint` locally, fix
- **Images not loading from Supabase** → Check next.config.ts remotePatterns includes `**.supabase.co`
- **Middleware error** → Ensure Node middleware is enabled (Next.js 15.5+ stable)

### Performance
- Enable Vercel Analytics and Speed Insights in dashboard
- Images are auto-optimized via `next/image` + Sharp
- Fonts are self-hosted via `next/font`
- Static pages are cached at edge

### Redeploy
Every push to `main` auto-deploys. Preview deploys for PRs.
