<div align="center">

# DTV Mounting

### Professional installation. Premium presentation.

Premium TV mounting and home entertainment experiences for modern homes.

<p>
  <a href="https://dtvmountingtx.com/">Live Website</a>
  ·
  <a href="https://github.com/lukesy-hub/DTV-Mounting">GitHub Repository</a>
</p>

</div>

---

## About

DTV Mounting is a premium React frontend for a professional TV installation company. It transforms a traditional local-service website into a polished digital experience built around cinematic media, clear service discovery, local coverage, trust signals, and a structured quote journey.

## Highlights

- Local video-led homepage hero using `src/assets/main_hero.mp4`
- Individual service pages with service-specific imagery
- Individual location pages with local briefings and Google Maps embeds
- Compact Services and Locations navbar dropdowns
- Clean pathname URLs for service and location pages
- Responsive mobile navigation
- Project gallery with category filters and lightbox viewing
- Before-and-after comparison slider
- FAQ accordion
- Google review section
- Payment option cards
- Multi-step quote form with draft persistence
- GSAP and ScrollTrigger animations
- Reduced-motion support
- CRM-ready lead submission boundary

## Services

The current eight-service catalog is:

1. Flat TV Mounting
2. Same Day TV Mounting
3. Hide TV Wire
4. Soundbar Installation
5. TV Dismounting
6. TV Shelf Mounting
7. Gaming Console Mounting
8. LED Strip Light Installation

Service data is centralized in [`src/data/services.ts`](./src/data/services.ts), keeping homepage cards, dropdowns, routes, and detail pages synchronized.

## Locations

Dedicated location pages are available for:

- Austin
- Houston
- San Antonio
- Dallas
- Florida
- Atlanta

Location data is centralized in [`src/data/locations.ts`](./src/data/locations.ts).

## Routes

```text
/                                      Homepage
/services                              Services overview
/services/:service-slug                Individual service page
/locations                             Locations overview
/locations/:location-slug              Individual location page
/work                                  Project gallery
/about                                 About page
/faq                                  FAQ page
/contact                              Contact page
```

Examples:

```text
/services/soundbar-installation
/services/flat-tv-mounting
/locations/austin
/locations/dallas
```

Legacy hash links are still understood for compatibility, but new navigation uses clean pathname URLs.

## Technology

| Layer | Technology |
| --- | --- |
| UI | React 19 |
| Language | TypeScript |
| Build tool | Vite |
| Animation | GSAP and ScrollTrigger |
| Styling | Custom CSS |
| Linting | Oxlint |
| Lead integration | CRM-ready frontend service layer |

## Project structure

```text
src/
├── App.tsx                  # App shell, routing, homepage, navbar, footer, quote modal
├── App.css                  # Design system and responsive styling
├── index.css                # Global styles and typography
├── assets/
│   └── main_hero.mp4        # Homepage hero video
├── data/
│   ├── formSchema.ts        # Quote fields and initial form data
│   ├── locations.ts         # Location catalog
│   └── services.ts          # Service catalog
├── pages/
│   ├── ServiceDetail.tsx    # Shared service detail template
│   ├── LocationDetail.tsx   # Shared location detail template
│   ├── services/            # Service page entry files
│   └── locations/           # Location page entry files
└── services/
    └── leadService.ts       # CRM-ready submission boundary
```

## Local development

### Requirements

- Node.js 18+
- npm

### Install and run

```bash
npm install
npm run dev
```

The Vite development server normally runs at:

```text
http://localhost:5173
```

### Scripts

```bash
npm run dev       # Start the development server
npm run build     # Type-check and create a production build
npm run lint      # Run Oxlint
npm run preview   # Preview the production build
```

## Quote and CRM integration

The quote flow is a multi-step frontend wizard with validation, local draft persistence, loading states, error handling, and duplicate-submit protection.

The CRM backend is not included in this repository. Configure an API endpoint with:

```env
VITE_CRM_API_URL=https://your-crm.example.com
```

Leads are submitted to:

```text
${VITE_CRM_API_URL}/api/leads
```

Never commit credentials, API tokens, or private production URLs.

## Design direction

The visual system uses:

- deep navy and ice-blue surfaces
- editorial display typography
- large confident headings
- rounded floating navigation
- readable dark hero overlays
- service-specific imagery
- compact glass-style dropdowns
- restrained hover and scroll motion

The navbar dropdowns are designed to open outside the navigation pill without resizing or reflowing the navbar.

## Accessibility and motion

- Keyboard focus states are provided for interactive controls.
- Buttons and links use descriptive labels where needed.
- Dropdowns support click, hover, Escape, and outside-click behavior.
- Reduced-motion preferences are respected through `prefers-reduced-motion`.
- Quote form feedback is exposed through visible UI states.

## Production checklist

- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Test desktop and mobile navigation
- [ ] Test Services and Locations dropdowns
- [ ] Test all eight service routes
- [ ] Test all six location routes
- [ ] Test footer links and opening links in a new tab
- [ ] Test quote validation and submission states
- [ ] Configure SPA fallback rewrites for pathname routes
- [ ] Verify image and video licensing
- [ ] Configure and verify CRM integration

## Current status

| Area | Status |
| --- | --- |
| Premium frontend | Complete |
| Service pages | Complete |
| Location pages | Complete |
| Responsive layout | Implemented |
| Navbar dropdowns | Implemented |
| Quote UI | Implemented |
| CRM backend | Not included |
| Payment processing | Not included |
| Production deployment | Requires hosting configuration |

## Content policy

Business claims, locations, phone numbers, reviews, pricing, and service availability should remain accurate and verified. This frontend must not imply that a lead, appointment, or payment was completed without confirmation from the underlying service.

Third-party images and videos should be reviewed for production licensing and availability before launch.

## License

No open-source license has been selected. Until a license is added, all code, brand assets, copy, and business content remain the property of the project owner.

<div align="center">

### DTV Mounting

Better picture. Better room.

<a href="https://dtvmountingtx.com/">dtvmountingtx.com</a>

</div>
