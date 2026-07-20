# Beginner Terminal Commands — SIMO Portfolio

## Prerequisites

- Node.js 20+ installed: https://nodejs.org
- Git installed: https://git-scm.com
- VS Code or any editor

Check versions:
```bash
node -v
npm -v
git -v
```

## First Time Setup

```bash
# Clone (if from GitHub)
git clone https://github.com/your-username/simo-portfolio.git
cd simo-portfolio

# Install dependencies
npm install

# Copy env template
cp .env.example .env.local
# Then open .env.local in editor and fill keys

# Run dev server
npm run dev
# Open http://localhost:3000
```

## Daily Commands

```bash
npm run dev          # Start dev server (with Turbopack)
npm run build        # Production build test (must pass before deploy)
npm run start        # Start production build locally
npm run lint         # Check ESLint
npm run type-check   # Check TypeScript types
```

## Git Commands

```bash
git status           # See changed files
git add .            # Stage all
git commit -m "feat: add new project"  # Commit
git push             # Push to GitHub (auto-deploys to Vercel)
git pull             # Pull latest from GitHub
git log --oneline    # See history
```

## Supabase CLI (Optional)

```bash
npm install -g supabase
supabase login
supabase link --project-ref your-project-ref
supabase db push     # Push schema
```

## Vercel CLI (Optional)

```bash
npm install -g vercel
vercel login
vercel --prod        # Deploy from terminal
```

## Troubleshooting Commands

```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev

# Check for outdated packages
npm outdated

# Update Next.js to latest
npm install next@latest react@latest react-dom@latest

# Check which process is using port 3000
lsof -i :3000
kill -9 <PID>

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

## File Navigation

```bash
cd simo-portfolio      # Go into project
cd app/(site)          # Go into site pages
ls                     # List files (Mac/Linux)
dir                    # List files (Windows)
pwd                    # Current directory
```

## Help

- If `npm run dev` fails: check Node version >=20, check .env.local exists
- If port 3000 in use: `npm run dev -- -p 3001` to use 3001
- If build fails: run `npm run type-check` and fix errors
