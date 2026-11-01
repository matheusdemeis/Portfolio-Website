# Matheus Demeis — Portfolio

React 18, TypeScript, Vite 4, Tailwind CSS, and React Router. The production build prerenders the homepage and three case studies to static HTML. No production Node server is required.

## Local setup

Use Node 22 LTS (`nvm use`; `.nvmrc` selects 22), or Node 24 LTS. Node 23 is not a supported tooling target.

```sh
npm ci
npm run dev
```

No environment variables or credentials are required by the portfolio. Connected project applications are external links.

## Build and checks

```sh
npm run typecheck
npm run typecheck:qa
npm run lint
npm run build
npm run preview
```

`build` generates `dist/index.html`, each existing case-study path's `index.html`, `404.html`, `robots.txt`, and `sitemap.xml`. An intermediate Vite server bundle runs **at build time only**, then is removed. React hydrates the static content in the browser. `src/data/seo.json` is the shared metadata source for generated documents and client navigation.

`preview` serves `dist` on `127.0.0.1:4173` using the checked-in routing table. It is a local QA helper. `vercel.json` proposes filesystem-aware static routing and true 404 fallback responses; no hosting settings have been changed remotely. Validate the actual Vercel behavior during an authorized deployment review. Other SPA hosts that return the homepage for every path cannot reliably deliver route-specific metadata or real HTTP 404 statuses.

`npm run typecheck:config` still exposes Vite 4's upstream `FSWatcher` declaration incompatibility with Node types. This is deliberately not hidden with `skipLibCheck`. See the Phase 4 report for the major-upgrade decision and development dependency advisories.

## Browser QA

```sh
npx playwright install chromium firefox webkit
npm test
# Or just Chromium:
npm run test:chromium
```

Build first. The tests start the local preview if needed. They cover all four public routes, invalid routes, six viewport widths, raw crawler-visible HTML, accessibility scans, image loading/failure, keyboard navigation, history, and text scaling. Network services are not dependencies of the tests. On macOS WebKit, keyboard-link checks use Option-Tab, matching Safari's default keyboard convention.

Screenshots are written to `docs/screenshots/phase-4/` in Chromium at 390px and 1440px. Disposable traces and runner output are in ignored `test-results/`. Set `CHROME_PATH` to an installed Chrome executable only when intentionally testing that browser instead of Playwright's pinned Chromium.

With preview running, collect three unthrottled local samples per page:

```sh
node scripts/measure-performance.mjs
```

These samples are not real-user Core Web Vitals. Phase 4 includes separately collected Lighthouse mobile lab results.

## Images and content

Original PNG screenshots remain in `public/images/projects/`. `npm run images` generates lossless WebP variants, the image manifest, small icons, and a text-only social card. Regenerate after changing originals, then build and inspect screenshot readability. `ProjectMedia` retains PNG fallback and accessible failure text. Captions and media provenance are documented in earlier phase reports.

Case-study routes are intentionally case-sensitive in the static routing configuration: `/projects/VibePlay`, `/projects/tandem`, `/projects/InsurFlow`. Preserve these URLs. New public routes must be added to React routing, metadata, hosting routing, and tests.

Reports: [Phase 1](docs/portfolio-phase-1-report.md), [Phase 2](docs/portfolio-phase-2-report.md), [Phase 3A](docs/portfolio-phase-3a-report.md), [Phase 3B](docs/portfolio-phase-3b-report.md), [Phase 4](docs/portfolio-phase-4-report.md).
