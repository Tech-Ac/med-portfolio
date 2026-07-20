# GitHub Deployment Guide

## Initial Setup

```bash
# In project root
git init
git add .
git commit -m "feat: initial commit — SIMO luxury portfolio v1.0.0"

# Create repo on github.com (do not init with README)
# Then:
git remote add origin https://github.com/YOUR_USERNAME/simo-portfolio.git
git branch -M main
git push -u origin main
```

## .gitignore

Already configured to ignore:
- .next, out, build, node_modules
- .env, .env.local
- .vercel, .supabase
- *.log, .DS_Store

**Never commit:**
- .env.local
- Supabase service keys
- Resend API keys

## Branching

- `main` → production (Vercel auto-deploys)
- `dev` → staging preview
- Feature branches: `feat/hero-video`, `fix/contact-form`

## Commit Messages

Use conventional commits:
- `feat: add case study gallery`
- `fix: contact form validation`
- `design: update terracotta palette`
- `perf: optimize hero video`

## Security

- Enable GitHub Secret Scanning
- Add env vars only in Vercel, not in code
- Review PRs for accidental key leaks

## GitHub Actions (Optional)

Add `.github/workflows/ci.yml` for type-check and lint on PRs.

## After Push

1. Go to Vercel → Import Git Repository
2. Select repo → Deploy (see VERCEL_DEPLOYMENT.md)
