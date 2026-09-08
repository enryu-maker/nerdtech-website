# NerdTech — Home Page (Redesign)

Next.js 14 (App Router) + TypeScript + Tailwind implementation of the new
"Architectural Innovation" design (dark, glassmorphism, electric-blue accent,
Space Grotesk / Inter / JetBrains Mono).

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000 — this build has been verified to compile and
produce a static page with zero TypeScript/build errors (fonts require
network access to Google Fonts at build time, which your machine will have).

## What's in here

```
app/
  layout.tsx      → root layout, loads Space Grotesk / Inter / JetBrains Mono via next/font
  globals.css      → Tailwind layers + base reset
  page.tsx          → Home page (hero, founder quote, facts, news, work, clients,
                      testimonials, global presence, tech support, CTA)
components/
  Navbar.tsx        → sticky glass navbar w/ mobile menu (client component)
  Footer.tsx         → site footer
  Marquee.tsx        → the scrolling "EXPERIENCE ✦ UI/UX ✦ ..." ticker
tailwind.config.ts   → all design tokens from DESIGN.md (colors, type scale,
                       spacing, radii, animation keyframes)
```

## Notes / next steps

- **Images:** All photography/screenshots are placeholder blocks
  (`bg-surface-container-low`) right now — swap in real project photos,
  the founder headshot, and news thumbnails via `next/image`.
- **Client logos:** the old site pulled ~30 client logos from
  `nerdtech.pythonanywhere.com/media/client_images/...` — that domain is
  already whitelisted in `next.config.mjs` under `images.remotePatterns` so
  you can drop them back in with `next/image` whenever you're ready (I left
  the "Our Clients" logo strip out of this pass to keep the first page
  review focused — happy to add it back in with real logos next).
- **Icons:** Uses Material Symbols Outlined (same as the original site) via
  a `<link>` tag in `layout.tsx`. If you'd rather use `lucide-react` for
  consistency with typical Next.js projects, say the word and I'll swap it.
- **Routing:** Navbar/Footer links point to `/work`, `/expertise`, `/team`,
  `/products`, `/blog`, `/careers`, `/contact` — these pages don't exist yet,
  we'll build them one by one same as the plan.
- This component set (`Navbar`, `Footer`) is meant to be reused across every
  other page as we build them out, so there's no duplicated header/footer
  code per page.
