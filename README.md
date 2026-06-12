# JP Chicquen — Portfolio

Personal portfolio for Jack (JP) Chicquen, UX/UI designer and digital
marketing specialist. Live at **https://jpchicquen.com**, deployed
automatically from `main` by Cloudflare Pages (`www` and the older
`jpchicquen.pages.dev` 301 to the apex via `public/_redirects`).

Static Astro site. No backend, no tracking, no webfonts, no paid
dependencies.

---

## Stack

- **[Astro](https://astro.build) 4** — fully static output, 15 pages
- **Content collections** (Markdown + Zod schema) for the seven case studies
- **Scoped CSS** per component over a global token system (`src/styles/tokens.css`),
  with a dark default theme and an opt-in light theme
- **Type**: body copy on the system stack; headings use one self-hosted
  22 KB variable file of [Space Grotesk](https://github.com/floriankarsten/space-grotesk)
  (SIL OFL, license shipped at `/fonts/SpaceGrotesk-OFL.txt`). No CDN pings.
- **@astrojs/sitemap** (pinned 3.2.x for Astro 4) — the only integration
- A single small client script (ambient atmosphere, scroll reveals, pinned
  horizontal scroll) plus the nav and theme toggles; everything else is HTML/CSS

## Quick start

Node 18.17+ or 20.3+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # astro type-check (keep at 0 errors)
npm run build    # production build to ./dist
npm run preview  # serve the built output
```

## Project structure

```
.
├── astro.config.mjs            # site URL, sitemap, prefetch, compressHTML
├── public/
│   ├── _headers                # Cloudflare Pages security + caching headers
│   ├── favicon.svg
│   ├── fonts/                  # Space Grotesk latin woff2 + OFL license
│   ├── jp-chicquen-resume.pdf
│   ├── og-image.png            # 1200×630, captured from the live hero
│   └── robots.txt              # references /sitemap-index.xml
└── src/
    ├── assets/images/          # source images; Astro emits WebP variants
    ├── components/
    │   ├── Nav.astro           # sticky nav, accessible mobile menu
    │   ├── Footer.astro
    │   ├── ProjectCard.astro
    │   ├── Section.astro
    │   ├── CaseGallery.astro   # responsive screenshot gallery
    │   └── mockups/            # public-safe structural mockups
    │       ├── BoardPortalMock.astro      # QMS redaction fallback
    │       ├── StrategicPlanMock.astro    # QMS redaction fallback
    │       ├── PageStructureMock.astro    # generic page skeleton
    │       └── FlowDiagram.astro          # numbered principle/flow list
    ├── content/
    │   ├── config.ts           # Zod schema (hero/gallery use image())
    │   └── projects/           # one Markdown file per case study (7)
    ├── data/site.ts            # name, email, LinkedIn, resume, nav
    ├── lib/
    │   ├── projects.ts         # category labels/hrefs, status flags
    │   └── schema.ts           # JSON-LD builders (Person, WebSite, …)
    ├── layouts/Base.astro      # head/SEO/OG/JSON-LD slot, client script
    ├── pages/                  # /, /about, /contact, /404, /work/*
    └── styles/                 # tokens.css + global.css
```

## How content works

Each case study is one Markdown file in `src/content/projects/`. The
frontmatter is validated against `src/content/config.ts`; the page at
`src/pages/work/[slug].astro` renders everything automatically, including
hero image, gallery, live links, status tags, and confidentiality callouts.

Key frontmatter fields:

```yaml
title: "…"
subtitle: "…"
category: "qms" | "tasis" | "personal"
role: "…"
type: "…"
summary: "…"            # card text + meta description + JSON-LD
year: "2024–2025"
status: "Live" | "Concept" | "Coming soon" | "In progress" | …
tools: ["Figma"]
tags: ["UX/UI"]
featured: true           # appears in the /work featured grid
confidential: true       # renders the Redacted tag
order: 1                 # lower = earlier in lists
confidentialityNote: "…" # renders as a callout on the case page
links:                   # first link becomes the primary CTA + hero link
  - label: "View live page"
    href: "https://…"
hero:                    # optional; without it, a structural mock renders
  src: "../../assets/images/<dir>/01-….png"
  alt: "…"
gallery:                 # optional screenshots below the hero
  - src: "…"
    alt: "…"
    caption: "…"
    span: "full" | "half"
```

Images go in `src/assets/images/<project>/`; Astro generates WebP at
640–2400px widths with span-accurate `sizes`. Case heroes load eagerly with
`fetchpriority="high"`; gallery images lazy-load.

## Security headers

`public/_headers` ships a strict Content-Security-Policy plus nosniff,
frame-ancestors, referrer, permissions policies, HSTS, and immutable
caching for hashed `/_astro/*` assets.

The CSP allows exactly one inline script: the one-line `<head>` bootstrap
in `Base.astro` that sets the `js` class and applies any stored theme,
pinned by SHA-256 hash. **If that line ever changes, recompute the hash
from the exact bytes in the built HTML:**

```bash
python3 -c "
import re, hashlib, base64
s = re.findall(r'<script>(.*?)</script>', open('dist/index.html').read())[0]
print('sha256-' + base64.b64encode(hashlib.sha256(s.encode()).digest()).decode())"
```

and update `script-src` in `public/_headers`. Adding webfonts, external
images, or third-party scripts also requires a CSP update — that friction
is intentional.

## Accessibility

Built against WCAG 2.2 AA:

- Content is fully readable without JavaScript — the pre-reveal hidden
  state only applies under the `js` class set in `<head>`.
- One `h1` per page, semantic landmarks, skip link, logical heading order.
- Visible focus everywhere, including Windows forced-colors mode
  (transparent-outline technique).
- Mobile menu: `aria-expanded`/`aria-controls`, leaves the tab order when
  closed, Escape closes and restores focus.
- The project rail is a native horizontal scroller with snap points by
  default; the pinned scroll-linked mode layers on only with JS, a wide
  viewport, and motion allowed. While pinned, focusing a card jumps the
  page to the equivalent runway position, and native reveal scrolls
  (focus or find-in-page) are absorbed into the transform.
- All motion — reveals, ambience, pinned scroll, view transitions — is
  disabled under `prefers-reduced-motion`; small screens, reduced-motion
  users, and no-JS visitors all get the same native rail.
- External links carry `rel="noopener noreferrer"` and a screen-reader
  "(opens in new tab)" note.
- Dark by default; the header toggle switches to a warm-paper light theme
  (persisted, applied before first paint, `color-scheme` kept in sync,
  AA contrast maintained in both schemes).

## Performance

- Static HTML, no third-party requests of any kind; the only font download
  is one preloaded 22 KB same-origin file, headings only, with a
  metric-matched fallback so the swap doesn't shift layout.
- Ambient motion is compositor-only (transform + viewport-unit custom
  properties); both rAF loops park when idle and wake on input.
- Hover prefetch for internal links; cross-document view transitions where
  supported (CSS-only, reduced-motion safe).
- JSON-LD on home (WebSite + Person), about (ProfilePage), and every case
  study (CreativeWork + BreadcrumbList). Sitemap + canonical + OG/Twitter
  meta on every page.

## Confidentiality

QMS work involves private governance and admissions content. The published
case studies use only an approved, redacted screenshot plus structural
mockups built in-component — no real documents, names, or member data.
`BoardPortalMock` and `StrategicPlanMock` are kept as standby fallbacks for
any future state without an approved screenshot. Keep the confidentiality
callouts; they are part of the story the portfolio tells.

## Deploying

Push to `main`. Cloudflare Pages builds with `npm run build`, publishes
`dist/`, and the site is live in about 90 seconds. No environment
variables. Branch pushes create preview deployments, so don't push work
you don't want on a public preview URL.

## Custom domain

The canonical host is `jpchicquen.com`, attached to the Pages project as
a custom domain (with `www`). `public/_redirects` 301s `www` and the old
`jpchicquen.pages.dev` host to the apex, and everything URL-shaped
(canonicals, OG, JSON-LD, sitemap) derives from `site` in
`astro.config.mjs`. If the domain ever changes again, flip `site` and
the `Sitemap:` line in `public/robots.txt`, update `_redirects`, and
push.

## License

Personal portfolio code. Use the structural patterns freely as reference;
the case-study content and branding belong to Jack Chicquen.
