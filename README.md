# JP Chicquen — Portfolio

Static portfolio website for Jack (JP) Chicquen, replacing the existing Framer portfolio with a custom, fast, free-to-host Astro build.

> **What was built**
> A complete, multi-page Astro portfolio with a real design system, content collections for projects, redacted/public-safe mockups, an accessible navigation, and seven full or near-full case studies (QMS Board Portal, QMS Admissions, QMS Calendar, QMS Selected Production, TASIS Homepage, TASIS Library, TASIS Viewbooks, Learning Support App Concept).
>
> Zero paid dependencies. No tracking. No backend.

---

## Stack

- **[Astro](https://astro.build)** v4 — static site generator
- **TypeScript** for the few files where it helps
- **Content collections** (Markdown + Zod schema) for case studies
- **Scoped CSS** in `.astro` components + a global token system
- **System fonts** — no webfont download, no Google Fonts ping
- **No JS framework** beyond Astro's small islands runtime

Everything is open-source, free, and standard-tooling. No paid CMS, no paid component library, no paid icons, no paid analytics.

---

## Quick start

You'll need **Node.js 18.17+ or 20.3+** ([nodejs.org](https://nodejs.org)).

```bash
# Install dependencies
npm install

# Start the local dev server (http://localhost:4321)
npm run dev

# Type-check with Astro
npm run check

# Build for production (writes to ./dist)
npm run build

# Preview the production build locally
npm run preview
```

If you prefer `pnpm` or `yarn`, replace `npm` with your preferred manager — the scripts are standard.

---

## Project structure

```
.
├── astro.config.mjs        # Astro config
├── package.json
├── tsconfig.json
├── public/                  # Static files served at site root
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── components/          # Reusable UI components
    │   ├── Nav.astro
    │   ├── Footer.astro
    │   ├── ProjectCard.astro
    │   ├── Section.astro
    │   └── mockups/         # Redacted, public-safe visuals
    │       ├── BoardPortalMock.astro
    │       ├── CalendarMock.astro
    │       ├── FlowDiagram.astro
    │       └── PageStructureMock.astro
    ├── content/
    │   ├── config.ts        # Zod schema for projects
    │   └── projects/        # One Markdown file per case study
    │       ├── qms-board-portal.md
    │       ├── qms-admissions.md
    │       ├── qms-calendar.md
    │       ├── qms-selected-production.md
    │       ├── tasis-homepage.md
    │       ├── tasis-library.md
    │       ├── tasis-viewbooks.md
    │       └── learning-support-app.md
    ├── data/
    │   └── site.ts          # Name, email, LinkedIn, nav
    ├── layouts/
    │   └── Base.astro       # SEO, OG, skip link, nav, footer
    ├── pages/
    │   ├── index.astro      # Home
    │   ├── about.astro
    │   ├── contact.astro
    │   ├── 404.astro
    │   └── work/
    │       ├── index.astro      # Work overview
    │       ├── qms.astro        # QMS category
    │       ├── tasis.astro      # TASIS category
    │       ├── personal.astro   # Personal projects category
    │       └── [slug].astro     # Dynamic case-study page
    └── styles/
        ├── tokens.css       # Design tokens (colors, type, spacing, motion)
        └── global.css       # Reset + base styles + utilities
```

---

## How content works

Every case study is a Markdown file under `src/content/projects/`. The frontmatter is type-checked against the schema in `src/content/config.ts`, and the page at `src/pages/work/[slug].astro` renders any project automatically.

To add a new case study:

1. Create `src/content/projects/your-slug.md`.
2. Fill in frontmatter:

   ```yaml
   ---
   title: "..."
   subtitle: "..."
   category: "qms" | "tasis" | "personal"
   role: "..."
   type: "..."
   summary: "..."
   year: "2025"
   status: "Live" | "Ongoing" | "Concept" | ...
   tools: ["Figma", "WordPress"]
   tags: ["UX/UI", "Implementation"]
   featured: true            # show on home + featured grids
   confidential: false       # render the "Redacted" tag
   order: 5                  # lower = earlier in lists
   confidentialityNote: ""   # optional, renders as a callout
   ---
   ```

3. Write the body in plain Markdown — `##`, lists, **strong**, links all work.
4. The slug (your filename, minus `.md`) becomes the URL: `/work/your-slug`.

---

## What to replace before going public

The site is honest about being a portfolio scaffold — it does not fabricate metrics, screenshots, or quotes. A few intentional placeholders are worth knowing about:

| File / field | What it is | Action |
| --- | --- | --- |
| `src/data/site.ts` → `linkedin` | Placeholder LinkedIn URL | Replace with your real profile URL |
| `src/data/site.ts` → `resume` | Commented out | Uncomment and add `/resume.pdf` to `public/` if you want a resume link |
| `astro.config.mjs` → `site` | `https://jpchicquen.com` | Replace with the final domain you deploy to |
| TASIS case study bodies | Honest concept-stage copy with "placeholder" notes | Replace with real screenshots/outcomes if you have them |
| `qms-board-portal.md` mockup | Redacted, public-safe SVG-based mockup | Swap in a redacted screenshot if you have one — keep it redacted |
| `public/favicon.svg` | Simple JP wordmark | Replace if you design a logo |
| `public/og-image.png` | _(not yet added)_ | Optionally add an Open Graph image at this path |

Nothing is hardcoded to fake metrics. The "Confidentiality note" callout on QMS case studies is intentional — keep it.

---

## Deploying for free

The site is fully static, so any free static host works. Recommended order:

### 1. Cloudflare Pages (recommended)

1. Push this folder to a GitHub repo.
2. In Cloudflare → Pages → **Create a project** → connect the repo.
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `20`
4. Deploy. Cloudflare gives you `*.pages.dev` for free; connect a custom domain later from the Pages dashboard.

### 2. Netlify (free tier)

1. Push to GitHub.
2. Netlify → **Add new site** → **Import from Git**.
3. Build command: `npm run build`, publish directory: `dist`.

### 3. Vercel (free tier)

1. Push to GitHub.
2. Vercel → **Add New Project** → import the repo.
3. Vercel auto-detects Astro. Accept defaults.

No environment variables are required for the site to function.

---

## Accessibility notes

The site was designed with WCAG 2.2 AA in mind. Specifically:

- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Logical heading hierarchy on every page.
- Skip-link to `#main` for keyboard users.
- Visible `:focus-visible` ring on every interactive element.
- Mobile navigation is keyboard- and screen-reader-accessible with `aria-expanded`, `aria-controls`, and `aria-label`.
- Calendar mockup never uses colour alone — each category dot is labelled.
- Reduced-motion users see all animations disabled via `prefers-reduced-motion`.
- Dark mode supported via `prefers-color-scheme` with the same accessibility floor.
- Touch targets sized for mobile (44px+ where it matters).
- No hover-only critical information.
- Link text makes sense out of context.

Before going live, manually test:

- Tab through every page with a keyboard only.
- Resize the window down to ~360px width.
- Try the site with `prefers-reduced-motion` enabled.
- Run an automated audit (e.g. axe DevTools, Lighthouse).

---

## Performance notes

- Astro statically renders every page.
- The only client-side JavaScript is the small mobile nav toggle + scroll-shadow listener in `Nav.astro`. Everything else is pure HTML/CSS.
- No webfont download — system fonts only.
- No third-party tracking, analytics, or chat widgets.
- Images are SVG mockups — no large raster files.

If you later add raster screenshots, drop them in `src/assets/` and use Astro's built-in `<Image />` from `astro:assets` for automatic optimization.

---

## Security & privacy notes

- No backend, no database, no API keys, no environment variables.
- No third-party scripts.
- The contact "form" is intentionally absent — the contact page is honest about being a static site and points to email/LinkedIn instead.
- The QMS Board Portal case study uses **only** redacted, structural mockups created in-component. No real governance documents, names, or board content is included.
- All QMS case studies include a confidentiality note where appropriate.
- `.gitignore` excludes `node_modules`, build output, and any `.env` files.

---

## Editing checklist after first read

1. Replace LinkedIn URL in `src/data/site.ts`.
2. Replace `site` URL in `astro.config.mjs` with your real domain.
3. Add an OG image at `public/og-image.png` (1200×630 recommended) and reference it in `Base.astro` if desired.
4. Review and tighten any case-study copy as your career and projects evolve.
5. Add real screenshots only where they are public-safe (TASIS projects, parts of QMS work the school agrees can be shown).
6. Run `npm run build` once locally before deploying to catch any typos in frontmatter.

---

## License

Personal portfolio code. Feel free to use the structural patterns and component approaches as a reference for your own work, but the case-study content and branding belong to Jack Chicquen.
