# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Build & Dev Commands

- `npm run dev` — start dev server (Next.js 16 with Turbopack)
- `npm run build` — production build
- `npm run lint` — ESLint
- No test runner is configured

## Architecture

**Next.js 16 App Router** marketing site for iTarang Technologies (EV battery lifecycle company). React 19, Tailwind CSS v4, TypeScript.

### Routing

All public pages live under the `(marketing)` route group, which wraps pages with Navbar + Footer + WhatsAppButton. Routes:

- `/` — homepage
- `/products` — battery product catalog
- `/products/e-rickshaw-lithium-battery` — e-rickshaw product detail page
- `/how-it-works`, `/about`, `/contact`, `/blog`
- `/for-investors`, `/for-partners`

`src/app/api/contact/` exists but has no route handler yet.

### Layout Hierarchy

`RootLayout` (fonts: DM Serif Display, Plus Jakarta Sans, JetBrains Mono) → `MarketingLayout` (Navbar/Footer/WhatsApp) → page content.

### Data Layer

All product/content data is static in `src/data/`. Key files:
- `products.ts` — `BatterySKU[]` with specs, pricing, compatibility
- `navigation.ts` — nav links
- `site.ts` — `siteConfig` (company info, contact details, social links)
- `team.ts`, `blog-posts.ts`, `cities.ts`, `competitors.ts`, `roadmap.ts`, etc.

### Component Organization

- `src/components/ui/` — reusable primitives (Button, Card, Input, shadcn-based components, animation components)
- `src/components/layout/` — Navbar, Footer, FloatingDock, MobileMenu
- `src/components/products/` — product page components (SpecTable, VariantSelector, EMICalculator, ERickshawProductView)
- `src/components/{section}/` — page-specific section components (home, about, investors, partners, etc.)
- `src/components/shared/` — cross-page components (WhatsAppButton)

### Styling

Tailwind v4 with `@theme inline` in `globals.css`. Brand color scale: `brand-50` through `brand-950` (deep blue from `#051b9a`). Accent colors: `accent-sky`, `accent-green`, `accent-yellow`, `accent-amber`, `accent-cyan`. Surface tones: `surface-warm`, `surface-cream`, `surface-mist`. shadcn CSS variables are mapped to the brand palette in `:root`.

### Utilities

- `src/lib/utils.ts` — `cn()` (clsx + twMerge), `formatCurrency()` (INR), `formatNumber()` (Indian locale)
- `src/lib/animations.ts` — reusable Framer Motion animation presets (`fadeUp`, `fadeIn`, `scaleIn`, `slideInLeft`, `slideInRight`, `staggerContainer`)
- `src/lib/metadata.ts` — `createMetadata()` helper for per-page SEO metadata

### Key Dependencies

- `framer-motion` / `motion` — animations throughout
- `recharts` — charts (investor/dashboard sections)
- `react-countup` + `react-intersection-observer` — animated stat counters
- Radix UI — accordion, dialog, navigation menu, separator, sheet
- `class-variance-authority` — component variant styling
