# DTV Mounting — Premium Redesign (React + TypeScript)

A cinematic, motion-driven rebuild of the DTV Mounting site, built to the
brief: one global design system (floating navbar, global footer, shared
type/color tokens) with a unique cinematic hero per page.

## Stack

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** — utility layer, wired to the design tokens in `src/styles/tokens.css`
- **Framer Motion** — component transitions, the mobile menu, hover/reveal choreography
- **GSAP + ScrollTrigger** — the pinned horizontal Process track and the Installation Journey scroll-story
- **Lenis** — smooth scrolling, synced to GSAP's ticker so ScrollTrigger tracks it correctly
- Fonts: **Space Grotesk** (structural/UI) + **Fraunces** (display serif, used only on headlines — the neo‑classical/editorial voice)

## Run it

```bash
npm install
npm run dev
```

This sandbox has no network access, so dependencies were **not** installed
here — this is the full authored source. `npm install` will pull everything
listed in `package.json`.

## What's built

- **Design system**: `src/styles/tokens.css` — every color, radius, and
  motion easing as a CSS variable, plus a light theme override
  (`[data-theme="light"]`, toggled from the navbar). Liquid/reeded glass
  surfaces (`.glass-surface`, `.reeded-glass`), grain overlay, and a
  chromatic-edge utility live here too.
- **FloatingNavbar** (`src/components/Navbar`) — floating glass pill,
  transparent-to-solid on scroll, full-screen animated mobile menu, theme
  toggle. Shared by every route.
- **VideoHero** (`src/components/Hero/VideoHero.tsx`) — the one reusable
  hero component every page uses. It takes `videoSrc`/`poster` for real
  footage; until footage exists it falls back to a page-tinted cinematic
  gradient + grain (see `PAGE_TREATMENT` in that file) so each page still
  reads as visually distinct rather than an obvious placeholder. Content
  and choreography come from `src/data/heroContent.ts` and
  `src/data/services.ts`.
- **GlobalFooter** — one component, used everywhere, with the verified
  address/phones/socials.
- **Homepage** (`src/pages/Home.tsx`): hero → trust stats (bento grid) →
  services grid → the pinned GSAP "Installation Journey" scroll-story →
  gallery (filterable, lightbox) → pinned horizontal process track →
  reviews (aggregate only — see note below) → locations → quote CTA.
- **Service detail pages** (`/services/:slug`) — all ten services from the
  brief, each rendering the same VideoHero with its own headline/copy and a
  distinct gradient treatment, proving the "one system, unique hero per
  page" requirement without hand-building ten bespoke hero components.
- **Quote wizard** (`/quote`) — frontend-only, 5 condensed steps (what you
  need → setup details → add-ons → contact → summary), no backend, no
  invented pricing (shows "Quote Required" alongside the verified "$49
  starting" claim).
- **Services, Our Work, Locations, About, FAQ, Contact** pages — each with
  its own hero entry in `heroContent.ts` and real section content.
- Scroll progress bar, desktop-only custom cursor (auto-disabled on touch
  and `prefers-reduced-motion`), `prefers-reduced-motion` respected globally.

## What's intentionally left for you to drop in

- **Real video/photography**: `VideoHero` and `Gallery` are wired to accept
  real assets the moment they exist — drop files in `/public/media/` and
  pass `videoSrc`/update the gallery `ITEMS` array. Nothing here fabricates
  imagery.
- **Real customer reviews**: the brief supplied only the aggregate
  ("Excellent, Based on 507 reviews") with no verified individual review
  text or names, so `Reviews.tsx` shows only that aggregate. It's built to
  take a `reviews[]` array the moment real, attributable reviews are
  provided — no placeholder quotes were invented.
- **Flagged data** (`src/data/business.ts` → `FLAGGED_FOR_VERIFICATION`):
  two conflicting service-area claims and two possibly-misspelled proper
  nouns from the source site are carried over verbatim, not silently
  resolved — confirm with the client before launch.

## Extending to the remaining cinematic hero pages

Per-service pages already prove the pattern. To add a fully bespoke page
(e.g. a standalone Fireplace or TV Wall landing page beyond the shared
service-detail template), copy `src/pages/ServiceDetail.tsx`, point it at
the matching `heroContent` entry, and add whatever page-specific sections
you want below the hero — the navbar, footer, tokens, and motion system
require no changes.
