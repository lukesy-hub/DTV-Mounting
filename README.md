# DTV Mounting Website

**A cinematic, motion-driven marketing site for DTV Mounting, a professional TV mounting and home entertainment installation company serving Texas.**

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss&logoColor=white)

**Live:** https://dtv-coral.vercel.app/

---

## Contents

- [Overview](#overview)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Routes](#routes)
- [Page sections](#page-sections)
- [Design system](#design-system)
- [Motion and interaction](#motion-and-interaction)
- [Content and data](#content-and-data)
- [Quote wizard](#quote-wizard)
- [Adding real media](#adding-real-media)
- [Common tasks](#common-tasks)
- [Known issues](#known-issues)
- [Before launch checklist](#before-launch-checklist)
- [Deployment](#deployment)

---

## Overview

This is a frontend-only React single-page app. It follows one rule: **one global design system, a unique cinematic hero on every page.**

- One floating glass navbar and one global footer, shared by every route.
- One reusable `VideoHero` component that gives every page its own headline, copy, CTAs and background treatment.
- Shared type, color, radius and motion tokens in a single CSS file, with a dark theme (default) and a light theme.
- All business content (address, phones, claims, services, locations) lives in `src/data/`, not in components.

The site covers the ten DTV Mounting services, four Texas markets (Dallas, Houston, Austin, San Antonio), a 5-step quote wizard, a gallery, an FAQ and contact details.

There is no backend. The quote wizard and contact form do not send anything yet (see [Known issues](#known-issues)).

---

## Tech stack

| Layer | Tool | Used for |
| --- | --- | --- |
| Framework | React 18 + TypeScript | UI and type safety |
| Build | Vite 5 | Dev server (port 5173) and production build |
| Routing | React Router 6 | Client-side routes |
| Styling | Tailwind CSS 3 + CSS variables | Utility classes wired to design tokens |
| Animation | Framer Motion 11 | Reveals, hover, mobile menu, wizard, FAQ, gallery |
| Scroll animation | GSAP + ScrollTrigger | Pinned horizontal Process track, Installation Journey story |
| Smooth scroll | Lenis | Smooth scrolling, synced to GSAP's ticker |
| Utilities | clsx | Conditional class names |
| Fonts | Space Grotesk + Fraunces (Google Fonts) | UI text and serif display headlines |

---

## Getting started

**Requirements:** Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check with `tsc -b`, then build with Vite into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Runs `eslint .` (ESLint is not installed yet, see [Known issues](#known-issues)) |

> **Heads up:** a fresh clone will not build until the path alias is fixed. See [Known issues](#known-issues), item 1. It is a two-line fix.

---

## Project structure

```text
dtv-mounting/
├── index.html                  # Page title, meta tags, Google Fonts, theme color
├── package.json
├── vite.config.ts
├── tailwind.config.ts          # Tailwind colors/fonts mapped to CSS variables
├── tsconfig.json               # Includes the "@/*" -> "src/*" path alias
├── public/
│   └── media/                  # Drop posters, videos and gallery photos here
└── src/
    ├── main.tsx                # App entry, BrowserRouter
    ├── App.tsx                 # Routes, theme provider, smooth scroll, global UI
    ├── index.css               # Tailwind layers + base element styles
    ├── styles/
    │   └── tokens.css          # Design tokens, themes, glass/grain utilities
    ├── data/
    │   ├── business.ts         # Address, phones, claims, payments, socials, reviews
    │   ├── services.ts         # The ten services and their hero copy
    │   ├── locations.ts        # Four Texas markets and phone numbers
    │   └── heroContent.ts      # Hero copy and CTAs for each page
    ├── hooks/
    │   ├── useTheme.tsx        # Dark/light theme (saved in localStorage)
    │   ├── useReducedMotion.ts # Reads prefers-reduced-motion
    │   └── useMediaQuery.ts    # Media query hook, useIsDesktop, useIsTouch
    ├── lib/
    │   └── lenis.ts            # Lenis + GSAP ScrollTrigger setup
    ├── components/
    │   ├── Navbar/             # FloatingNavbar + animated mobile menu
    │   ├── Hero/               # VideoHero (used by every page)
    │   ├── Stats/              # TrustStats bento grid
    │   ├── Services/           # Services grid + ServiceCard
    │   ├── Story/              # InstallStory (pinned scroll story)
    │   ├── Gallery/            # Filterable gallery + lightbox
    │   ├── Process/            # Pinned horizontal "how it works" track
    │   ├── Reviews/            # Aggregate rating block
    │   ├── Locations/          # City cards with phone links
    │   ├── QuoteCTA/           # Closing call to action
    │   ├── Footer/             # GlobalFooter
    │   ├── Cursor/             # CustomCursor (desktop only)
    │   ├── ScrollProgress/     # Top progress bar
    │   └── ui/                 # Button (magnetic hover)
    └── pages/
        ├── Home.tsx
        ├── ServicesIndex.tsx
        ├── ServiceDetail.tsx
        ├── OurWork.tsx
        ├── LocationsPage.tsx
        ├── About.tsx
        ├── Faq.tsx
        ├── Contact.tsx
        └── Quote.tsx
```

---

## Routes

| Path | Page | Notes |
| --- | --- | --- |
| `/` | Home | Full landing page |
| `/services` | Services index | Hero + services grid + CTA |
| `/services/:slug` | Service detail | One template for all ten services, driven by `data/services.ts` |
| `/our-work` | Our Work | Gallery + reviews |
| `/locations` | Locations | Four Texas markets |
| `/about` | About | Experience claims, stats, reviews |
| `/faq` | FAQ | Animated accordion |
| `/contact` | Contact | Headquarters, phones by region, message form |
| `/quote` | Quote wizard | 5-step frontend-only form |

Unknown service slugs redirect to `/`. There is no dedicated 404 page. The page scrolls to top on every route change.

---

## Page sections

**Home** runs in this order:

1. Hero
2. Trust stats (bento grid)
3. Services grid
4. Installation Journey (pinned scroll story)
5. Gallery
6. How It Works (pinned horizontal track)
7. Reviews
8. Locations
9. Quote CTA

**Services (10 total):** Flat TV Mounting, Same Day TV Mounting, Hide TV Wire, Soundbar Installation, TV Dismounting, TV Shelf Mounting, Gaming Console Mounting, LED Strip Light Installation, Fireplace TV Mounting, TV Wall Installation.

**Markets:** Dallas (headquarters), Houston, Austin, San Antonio.

---

## Design system

Everything visual is driven by CSS variables in `src/styles/tokens.css`. Tailwind's config maps its color names (`blue`, `ink`, `silver`, `paper`, `muted`, `surface`, and so on) onto those variables, so a token change updates the whole site.

### Brand palette

| Token | Value | Role |
| --- | --- | --- |
| `--color-brand-blue` | `#2645e0` | Primary accent, CTAs |
| `--color-brand-blue-deep` | `#17307f` | Pressed and hover state |
| `--color-brand-blue-light` | `#7c93ff` | Highlights on dark |
| `--color-black` | `#05070b` | Base dark background |
| `--color-ink` | `#0c1018` | Raised dark surface |
| `--color-silver` | `#b7c0cc` | Metallic accent, hairlines |
| `--color-white` | `#f6f7f9` | Off-white editorial ground |

### Typography

- **Space Grotesk** for UI, body and structural headings.
- **Fraunces** (serif) for large display headlines only, via the `.font-display-serif` class.

### Themes

Dark is the default. The navbar toggle switches to light by setting `data-theme="light"` on `<html>`. The choice is saved in `localStorage` under `dtv-theme`.

### Surfaces and utilities

| Class | Effect |
| --- | --- |
| `.glass-surface` | Frosted glass panel (blur + saturation, hairline border, sheen edge) |
| `.reeded-glass` | Vertical ribbed-glass stripe pattern, used as decoration |
| `.grain` | Subtle film-grain overlay (SVG noise) |
| `.chromatic-edge` | Faint red/blue text-shadow fringe |
| `.container-edge` | Centered container, max 1440px, responsive side padding |
| `.eyebrow` | Small blue label above headings |

### Motion tokens

`--ease-premium`, `--ease-out-soft`, and three durations (`--dur-fast` 0.32s, `--dur-med` 0.6s, `--dur-slow` 1.1s).

---

## Motion and interaction

- **Smooth scrolling.** One Lenis instance (`src/lib/lenis.ts`) is driven by GSAP's ticker and feeds `ScrollTrigger.update`, so pinned sections follow the smoothed scroll position. It is skipped entirely when the user prefers reduced motion.
- **VideoHero.** Line-by-line masked headline reveal, parallax background (scale and vertical shift), content fade on scroll, and an animated scroll hint. Each page gets its own gradient angle and accent through `PAGE_TREATMENT`.
- **Installation Journey.** A sticky panel on the left changes label and copy as five scroll beats (TV, Mount, Wall, Wire Management, Finished Installation) pass the center of the screen.
- **Process track.** On desktop (1024px and up) the five steps pin in place and scroll horizontally with GSAP `scrub`. On smaller screens they stack vertically.
- **Floating navbar.** Glass pill that tightens and solidifies after 24px of scroll, with a full-screen circular-reveal mobile menu.
- **Custom cursor.** A small dot that grows into a labelled circle ("VIEW") over elements with `data-cursor`. Disabled on touch devices and for reduced motion.
- **Other.** Scroll progress bar, magnetic hover on buttons, filterable gallery with layout animation and lightbox, animated FAQ accordion.
- **Accessibility.** `prefers-reduced-motion` is respected globally in CSS and in the JS-driven animations. Icon buttons have `aria-label`s.

---

## Content and data

Edit content in `src/data/`, not in components.

| File | What to change |
| --- | --- |
| `business.ts` | Name, address, phone numbers, claims (15,000+ TVs, 20+ years, $49 starting, same-day, 10-year no-fall warranty, price match, 100% satisfaction, licensed and insured), payment methods, social links, review summary, logo URL |
| `services.ts` | The ten services: slug, title, short description, hero headline/support/CTA |
| `locations.ts` | Cities and phone numbers |
| `heroContent.ts` | Eyebrow, headline lines, support text, CTAs and poster path for each page |

Business claims are reused across the FAQ, About, Quote CTA and Stats sections, so updating `business.ts` updates them everywhere.

### Data flagged for verification

`FLAGGED_FOR_VERIFICATION` in `business.ts` lists source-content problems that were carried over as-is and should be confirmed with the client:

- **Service area claim:** two conflicting statements ("5 states served" and "5-Star Rated Over 3 States").
- **Possible misspellings:** "Ziker" and "Spring Brancj".

The code and site copy only claim Texas (four cities), so these do not currently render on any page.

---

## Quote wizard

`/quote` is a 5-step wizard with an animated progress bar and a summary before submit.

| Step | Collects |
| --- | --- |
| 1. What do you need? | One of the ten services |
| 2. Your setup | TV size, install location, wall type |
| 3. Add-ons | Optional: Hide TV Wire, Soundbar, LED Strip Lights, Gaming Console |
| 4. Your details | Name, email, phone, preferred timing |
| 5. Summary | Review, then submit |

Pricing is never invented. The summary shows "Quote Required" next to the "$49 starting" claim.

**It is a frontend preview.** Submitting only shows a confirmation message. To make it real, send the `form` state to an API, form service or CRM inside `Quote.tsx`.

---

## Adding real media

The site currently uses gradient placeholders instead of photos and video. Nothing is faked.

1. Put files in `public/media/`:
   - `<page>-poster.jpg` for each hero (home, services, work, locations, quote, about, faq, contact)
   - optional `<page>.mp4` or `.webm` hero video
   - gallery photos
2. **Hero video:** pass `videoSrc` (and `poster`) to `VideoHero`. Example: `<VideoHero {...heroContent.home} videoSrc="/media/home.mp4" />`. Posters only show when a `videoSrc` is set.
3. **Gallery:** replace the placeholder tiles in the `ITEMS` array in `Gallery.tsx` with real image sources. Categories, tall/wide layout and lightbox are already wired.

---

## Common tasks

**Add a service.** Add an entry to `services` in `src/data/services.ts`. The grid, footer, quote wizard and `/services/:slug` route pick it up automatically.

**Add a real customer review.** `Reviews.tsx` currently shows only the aggregate rating ("Excellent, based on 507 reviews"). It was left this way on purpose because no verified individual reviews were provided. Extend the component to accept a `reviews[]` array once you have real, attributable ones.

**Change brand colors.** Edit the palette variables at the top of `tokens.css`.

**Give a service its own hero look.** Add a key matching the service slug to `PAGE_TREATMENT` in `VideoHero.tsx` (angle + accent). For a fully custom page, copy `ServiceDetail.tsx`, point it at its own `heroContent` entry and add sections below the hero.

---

## Known issues

These were found by installing the project and running a build. Items 1 and 2 stop `npm run build` from passing on a fresh clone.

1. **`@/` import alias is not configured in Vite.** `tsconfig.json` defines `@/*` but `vite.config.ts` has no matching alias, so the build fails with `Rollup failed to resolve import "@/hooks/useTheme"`. Fix:

   ```ts
   // vite.config.ts
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import path from "node:path";

   export default defineConfig({
     plugins: [react()],
     resolve: { alias: { "@": path.resolve(__dirname, "src") } },
     server: { port: 5173 },
   });
   ```

   With this change `vite build` succeeds.

2. **Type-check error in `ui/Button.tsx`.** `tsc -b` reports `Unused '@ts-expect-error' directive` (line 41), which fails `npm run build`. Remove that comment, or fix the `ref` typing on the `motion.span`.

3. **`npm run lint` does nothing useful.** The script runs `eslint .` but ESLint and a config are not in the project.

4. **CSS `@import` order.** In `index.css`, `@import "./styles/tokens.css"` comes after the `@tailwind` directives, which triggers a build warning. Move the import to the top of the file.

5. **Forms don't send anything.** The Quote wizard and the Contact form are UI only.

6. **`/contact` is not linked** from the navbar or footer, so it is only reachable by URL.

7. **Service hero treatments.** Only `fireplace-tv-mounting` and `tv-wall-installation` have their own gradient in `PAGE_TREATMENT`. The other eight services fall back to the home treatment. (The `tv-mounting` key there matches no service slug.)

8. **Minor.** "Other Services" links on service pages use a plain `<a href>` (full page reload) instead of the router `Link`. Footer social links point to the generic `facebook.com`, `instagram.com`, `tiktok.com` and `youtube.com` homepages. The `src/{components/...}` directory in the source archive is an empty leftover from a shell brace-expansion typo and can be deleted.

---

## Before launch checklist

- [ ] Fix the alias and `Button.tsx` build errors (see above)
- [ ] Replace gradient placeholders with real photos/video
- [ ] Add real, attributable customer reviews (or keep the aggregate only)
- [ ] Confirm the service area claim and the two flagged spellings with the client
- [ ] Connect the Quote and Contact forms to a real endpoint or CRM
- [ ] Add the real social profile URLs
- [ ] Host the logo locally (it is currently hotlinked from `dtvmountingtx.com`)
- [ ] Add a 404 route and link `/contact` from the navbar or footer
- [ ] Add ESLint or remove the `lint` script

---

## Deployment

The app is a static SPA, and the live demo is hosted on Vercel.

```bash
npm run build      # outputs to dist/
```

Because routing is client-side, the host must serve `index.html` for every path or deep links like `/services/hide-tv-wire` will 404 on refresh. On Vercel, add a `vercel.json` rewrite:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

---

## Notes

- Business details come from the client's existing site, https://dtvmountingtx.com/.
- `package.json` sets `"private": true`. No license is included.
