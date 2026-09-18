# drpalacio.com

Personal website for **Dr. Andrés Palacio**, internist and endocrinologist in Medellín. Static site, Spanish and English, no database, no forms. Every call to action goes to WhatsApp.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 App Router with `output: 'export'` (plain HTML in `out/`) |
| Styling | CSS Modules + tokens in `src/app/globals.css` |
| Fonts | Instrument Serif + Instrument Sans, self-hosted from `src/fonts/` (OFL) |
| Lint | ts-standard |
| Tests | Playwright against the built site (desktop + mobile) |
| Hosting | Cloudflare Workers static assets (`wrangler.jsonc`), DNS for `drpalacio.com` moved from GoDaddy to Cloudflare |

No Tailwind, no UI kit, no i18n library: the site is eight static pages and the only client JavaScript is the mobile menu and the floating WhatsApp button.

## Getting started

```bash
corepack enable
pnpm install
pnpm start:dev        # http://localhost:3000
```

Node 22.14+ and pnpm 11 (`packageManager` in `package.json`).

## Scripts

| Script | What it does |
|---|---|
| `pnpm start:dev` | Dev server |
| `pnpm build` | Static export to `out/` |
| `pnpm preview` | Serves `out/` on :3000 with clean URLs |
| `pnpm lint` / `pnpm typecheck` | ts-standard / `tsc --noEmit` |
| `pnpm e2e` | Builds, serves and runs `e2e/` (first run: `pnpm exec playwright install chromium`) |
| `pnpm verify` | lint + typecheck + build. Run before pushing |
| `pnpm images` | Regenerates `public/images/` from `assets/source/` (AVIF, WebP, JPG) |
| `pnpm og` | Renders `public/og.jpg` (social preview) from `scripts/og-template.html` |

## Routes

| Spanish | English |
|---|---|
| `/` | `/en` |
| `/investigacion` | `/en/research` |
| `/preguntas-frecuentes` | `/en/faq` |
| `/privacidad` | `/en/privacy` |

Each language has its own root layout (`src/app/(es)` and `src/app/(en)`), so `<html lang>` is right in the exported HTML. The ES/EN switch is a link to the same page in the other language, never a client-side toggle: both versions get indexed and `hreflang` points each to the other.

## Editing content

- **All copy lives in `src/content/es.ts` and `src/content/en.ts`.** Both implement the `Dictionary` type, so a key missing in one language fails the typecheck.
- Phone, email, address, social handles and the medical license: `src/content/site.ts` (`CONTACT`).
- Publications: `src/content/publications.ts`. Add a `doi` only when it is verified; the page shows "Ver publicación" only for entries that have one.
- Section anchors per language: `SECTION_IDS` in `src/content/site.ts`.

Health claims, credentials and publications must match the doctor's CV (June 2026). Do not add clinical copy he has not approved.

## Design source

`docs/design-source/` holds the Claude Design export the site was built from (`Landing Dr Palacio.dc.html`, `Investigacion.dc.html`, `Preguntas Frecuentes.dc.html`, `Design System v2 Moderno.dc.html`). Open them for reference; they are not part of the build.

Differences from the design, on purpose:

- Layout breakpoints are CSS media queries (700 / 900 / 1040 px) instead of the design's JS resize listener.
- Language comes from the URL, not from `navigator.language`.
- On phones the hero and contact CTAs are full width.
- Footer links to the privacy notice; `/privacidad` is new.

## Deploy: Cloudflare Workers (static assets)

The site deploys as a Worker that only serves the files in `out/`; there is no server code. `wrangler.jsonc` points Wrangler at that folder. Without that file, `wrangler deploy` detects Next.js and tries to convert the project to OpenNext, which fails.

One-time setup:

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create application → Import a repository** → pick the repo.
3. Build settings:
   - Build command: `pnpm build`
   - Deploy command: `npx wrangler deploy`
   - Environment variable (build): `PNPM_VERSION = 11.1.1` (the build image defaults to pnpm 10, which does not read `pnpm-workspace.yaml`'s `allowBuilds`). Node comes from `.node-version`.
4. Deploy. The site is live at `dr-andres-palacio.<account>.workers.dev`; check it there first.
5. **Settings → Domains & Routes → Add → Custom domain** → `drpalacio.com`, then `www.drpalacio.com`. A custom domain needs the domain to be a Cloudflare zone, so its nameservers must move from GoDaddy to Cloudflare (the domain stays registered at GoDaddy). Before switching nameservers, confirm Cloudflare imported every existing DNS record, especially MX and TXT: `andres@drpalacio.com` stops receiving mail if they are missing.
6. Redirect `www` to the apex with a Cloudflare redirect rule, so there is one canonical host.

After that every push to `main` deploys.

`html_handling: drop-trailing-slash` serves `en.html` at `/en` and redirects `/en/` and `/investigacion.html` to the clean URL. Unknown paths get `404.html` with a 404 status. Security and cache headers are in `public/_headers`, which Workers static assets honours.

## After launch

- Google Search Console: verify the domain and submit `https://drpalacio.com/sitemap.xml`.
- Google Business Profile for the office at Intermédica, with the same name, address and phone as the site.
- Analytics is not installed. If it is added, update the privacy notice first (`privacy` in both dictionaries).
