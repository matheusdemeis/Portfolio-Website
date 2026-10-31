# Portfolio Phase 2 — Homepage and project showcase

Completed October 31, 2026. Local implementation only. No commit, push, merge, deployment, production setting change, or reference-repository modification was performed by this agent. Phase 3 and the full Phase 4 audit have not begun.

## A. Design audit

The Phase 1 content was stronger than its presentation. Projects appeared after About and Experience, with no images and nearly the same visual weight as résumé entries. Year sorting put InsurFlow before VibePlay and obscured the intended editorial order. The hero had no primary route into the work; professional links were its only actions. Long paragraphs, identical section treatments, and dense technology strings made scanning difficult.

The existing dark palette, gold `#CBB48A` accent, system typography, restrained dividers, data-driven project pages, and working route casing were worth preserving. `Hero` unnecessarily owned the entire homepage and introduced a nested main landmark inside `App`. `Section` used a paragraph as its title. The detail page also had a keyboard effect after an early return. These structural issues could be addressed within the requested scope.

Read the Phase 1 report and inspected all requested components, styles, project data, image references, and detail rendering. Phase 1 working changes were treated as the baseline, including the existing experience timeline text. The Phase 1 report, experience data, and complete project data remain byte-for-byte equal to the captured baseline.

## B. Changes implemented

| File | Purpose |
| --- | --- |
| `src/pages/Home.tsx` | Owns homepage composition: introduction → featured projects → experience/education → About → contact. Adds a compact navigation and keyboard skip link. Preserves `projects`, `experience`, and `about` anchors. |
| `src/components/Hero.tsx` | Introduction only. Larger name, separate role/location line, gold emphasis on the approved positioning, supporting copy, one primary “Explore My Work” action, and secondary résumé link. |
| `src/components/ProjectsCompact.tsx` | Evolves the existing renderer into screenshot-led cards, with explicit editorial ordering and accessible project-specific link names. |
| `src/data/featuredProjects.ts` | Homepage-only presentation metadata: intentional order, concise summaries, project types, selected technologies, alt text, and media captions. Detail narratives and dates remain in the original project data. |
| `src/components/ProjectMedia.tsx` | Shared image frame, caption, contained image scaling, reserved aspect ratio, and graceful failure text. Project links remain usable when images fail. |
| `src/lib/projectImages.ts` | Adds a separate showcase-image map; retains existing detail-page image references. |
| `public/images/projects/` | Three local copies of inspected authentic screenshots; provenance below. |
| `src/components/Experience.tsx` | Clearer date/role/company hierarchy, more readable spacing and metadata, responsive stacked rows, and h3 headings under the section h2. Facts and achievement text retained. |
| `src/components/About.tsx` | Extracts all three Phase 1 paragraphs unchanged into a readable two-column desktop composition with a brief editorial heading. |
| `src/components/Contact.tsx` | Professional-links area using GitHub, LinkedIn, and résumé only. No invented email or form. |
| `src/data/socialLinks.ts` | One shared definition of the existing professional destinations, used by the hero and contact area. |
| `src/components/Section.tsx` | Semantic h2 section headings, subtle numbering, consistent dividers, anchor offsets, and focusable section targets. |
| `src/index.css` | Homepage layouts, responsive cards, restrained hover/focus states, image framing, spacing, and reduced-motion overrides. No new fonts or dependencies. |
| `src/App.tsx` | Keeps one route-level main landmark; replaces the broad background gradient with a dark surface and respects reduced motion in the existing Framer Motion transitions. |
| `src/pages/ProjectDetail.tsx` | Moves the keyboard effect and safe image count before the missing-project return. Replaces the case-study demo iframe with an external application link. Detailed narratives, gallery, and metadata layout preserved. |
| `docs/screenshots/phase-2/` | Actual before/after desktop and mobile captures. |
| `docs/portfolio-phase-2-report.md` | This audit, rationale, evidence, limitations, and Phase 3 preparation. |

## C. Design decisions

**Hierarchy and order.** Featured Projects is immediately after the introduction. VibePlay has a full-width lead card; Tandem and InsurFlow share equal-width cards below it on desktop. On mobile all three form one ordered column. Explicit slug-based metadata controls VibePlay → Tandem → InsurFlow; dates are displayed independently and were not revised.

**Consistent cards.** Every card provides image, caption, project type, year, project name, three relevant technologies, a concise summary, internal detail action, existing live-site destination, and GitHub. The labels “Visit Site” avoid promising unrestricted authentication or a working interactive demo. VibePlay’s homepage description uses stable product language; its longer release-status qualification remains on the detail page, and its image is explicitly labeled as development work.

**Visual identity.** A nearly black blue surface, warm white text, muted secondary text, gold accents, thin dividers, and system fonts retain the original identity. Screenshots provide the main color. The larger hero name and asymmetric text grouping establish hierarchy without decorative effects. Cards change border color on hover/focus; images do not zoom or crop UI details. No reveal animation library or new dependency was added.

**Navigation and contact.** Four plain anchor links stay visible without a mobile menu. At the narrowest width the navigation wraps to its own row. The hero has only two actions; GitHub and LinkedIn are readily available in the final contact section. Existing section IDs remain valid. A separate skills section was deliberately omitted: card technologies and experience metadata already supply the evidence, so another section would repeat it and lengthen the page.

**Content preservation.** Hero positioning, supporting description, São Paulo location, About paragraphs, experience claims, project dates, existing URLs, and full case-study data remain. Homepage summaries are deliberate shorter adaptations in a separate presentation file. This creates a small maintenance obligation: future factual changes should review both summaries and detailed descriptions.

## D. Media and screenshots

### Project media provenance

| Local asset | Original source and inspection |
| --- | --- |
| `vibeplay-development.png` | Copied unchanged from `../vibe-playlist/docs/screenshots/landing-desktop.png` (1440×900). Existing VibePlay release documentation identifies this as a capture of its local production build, not a verified deployment. Inspected visually; shows the actual unauthenticated landing page. Caption: “Development preview · Local build.” No VibePlay files were changed and no fresh VibePlay build was claimed. |
| `tandem-upload.png` | Copied unchanged from the existing Cloudinary `upload_s28qvq.png` reference. Inspected the upload interface, including PDF and voice input. Chosen instead of the logo or the three-phone mockup to show the specific scheduling contribution. |
| `insurflow-intake.png` | Copied unchanged from existing Cloudinary `insurflow3_uabjhh.png`. Inspected all three supplied InsurFlow screens; selected the household-intake interface rather than its marketing landing page. No financial figures were added or reinterpreted as business results. |

Original Tandem source: https://res.cloudinary.com/df4jmriki/image/upload/v1777143509/upload_s28qvq.png

Original InsurFlow source: https://res.cloudinary.com/df4jmriki/image/upload/v1777143508/insurflow3_uabjhh.png

The three homepage image files total approximately 652 KiB. They are served locally, preserve original aspect ratios through `object-fit: contain`, and occupy reserved frames. Lower cards use lazy loading. No fictional screens, logo substitutions, image generation, or destructive cropping were used. Existing detail-page Cloudinary media remains external.

### Actual before/after captures

Captured in installed Chrome through Playwright from the local Vite production preview. Full-page captures used a 900px viewport height; image height is longer because the entire page is included.

| Viewport | Before | After |
| --- | --- | --- |
| 1440×900 | [Desktop before](screenshots/phase-2/before-1440.png) | [Desktop after](screenshots/phase-2/after-1440.png) |
| 390×900 | [Mobile before](screenshots/phase-2/before-390.png) | [Mobile after](screenshots/phase-2/after-390.png) |

After screenshots were visually inspected at desktop and mobile sizes. All three showcase images loaded successfully before capture. The original homepage had no project media. External resources were allowed in normal browser checks; no external-asset console errors were observed during detail-route visits. The separate intentional failure test blocked only the new local project images and verified fallback text and retained links.

## E. Verification

| Command or check executed | Outcome |
| --- | --- |
| `npm run build` | Passed for the before capture and final implementation: 2,095 modules in the final build; JS 347.56 kB / 111.59 kB gzip, CSS 20.72 kB / 5.32 kB gzip. Existing stale Browserslist and Node experimental type-stripping warnings remain. |
| `./node_modules/.bin/tsc --noEmit` | Passed after correcting an intermediate JSX quotation typo in the new About component. No outstanding application type errors. |
| `./node_modules/.bin/tsc --project tsconfig.node.json --noEmit` | Same pre-existing failures: missing ESLint modules and Vite FSWatcher incompatibility with Node types (`ref`/`unref`). No dependency/configuration changes made. Generated build-info file removed. |
| `git diff --check` | Passed. |
| Baseline `cmp` checks and Python text/URL comparison | Passed: Phase 1 report, full project data, experience data, all About paragraphs, and original professional destinations preserved. |
| `npm run preview -- --host 127.0.0.1 --port 4173 --strictPort` | Local production preview served successfully. |
| `node /tmp/portfolio-phase2-before.cjs` | Captured actual before screenshots at 390 and 1440px. |
| `node /tmp/portfolio-phase2-check.cjs` | Passed all six widths: 320, 375, 390, 768, 1024, 1440px. Verified project order, one main, all navigation anchors, hero action, successful image loading, three detail routes/return links, unknown route fallback, `/projects` redirect, no horizontal overflow, and reduced-motion scroll behavior. |
| Keyboard check in Chrome | Skip link works; gold focus outline visible on twelve following links. Normal-motion mode uses smooth scrolling; reduced-motion mode uses immediate scrolling. Framer Motion also explicitly disables entry/exit movement for reduced motion. |
| Intentional failed-image check | All three cards display their fallback message and retain detail links. Expected errors from intentionally aborted images are separate from normal console checks. |
| Normal browser console/page errors | None observed across the six-width route checks. |
| Bounded unauthenticated `curl -L` requests | Tandem demo root still returns 404; retained `www` sign-in destination returns 200. |

No lint or test commands exist in this portfolio’s package.json. No test framework was installed; browser automation used the already installed sibling Playwright package and system Chrome without modifying the reference repository.

### Tandem demo resolution

The 404 URL is no longer rendered as an iframe in the Tandem page. The preserved screenshot sections provide the static preview, and “Open Tandem” points to the unchanged external sign-in URL. The page says sign-in may be required. An HTTP 200 login response was not treated as evidence of embedding permission. Case-study section content, demo-caption/callout data, and project URLs remain in the original data; the old iframe and its live-demo presentation are no longer shown.

### Limits

These checks cover the new UI and targeted fixes, not the complete Phase 4 audit. No live Spotify login, application writes, résumé-content verification, production configuration, full accessibility audit, screen-reader assessment, field performance, or Safari/Firefox QA was performed. Screenshots show presentation and existing project captures; they do not certify current deployed functionality. Existing detail-page modal focus behavior and other previously documented technical issues remain outside this phase.

## F. Phase 3 preparation — recommendations only

Use a shared story sequence consistent with the new cards: product overview and role → problem/context → responsibilities → selected workflows with authentic media → architecture/decisions → challenges/tradeoffs → evidence and lessons. Keep project-specific details rather than forcing identical content lengths.

- **VibePlay:** distinguish local development from deployed behavior. Explain mood/catalog selection, authentication/session boundaries, safe saving/recovery, error cases, and lessons. Use current local screenshots with explicit provenance; show authenticated workflows only after authorized verification. Retain Spotify access limitations and avoid production-readiness claims until acceptance is documented.
- **Tandem:** preserve its seven existing sections and useful media. Strengthen the research/pivot/team story and the specific voice/PDF-to-structured-data contribution. Confirm the chronology and replace the current static upload capture with a better documented workflow sequence if available. Use an external demo or recording unless an embeddable route is explicitly verified.
- **InsurFlow:** develop the business problem and team responsibilities around financial needs analysis and documentation. Clarify which architecture and features Matheus personally contributed. Use approved screenshots and a focused data-flow explanation without confidential internals, invented clients, metrics, or ownership claims.

No case-study rewrite, new VibePlay case study, comprehensive InsurFlow case study, or SEO work was implemented.

## G. Outstanding questions

1. Confirm Tandem’s 2025 year and 16-week duration; screenshot calendar content is not reliable project-date evidence.
2. Confirm VibePlay’s actual duration: its existing timeline and year both read 2026.
3. Confirm which VibePlay revision is deployed and whether live acceptance has been completed before replacing the development-preview label.
4. Confirm specific Vero shipped features and the meaning of the existing “production-ready environment” claim; dates and wording were preserved.
5. Supply or identify any newer approved Tandem and InsurFlow workflow captures for Phase 3. The reused assets are authentic existing portfolio media, not newly verified live states.
6. Confirm whether a future Tandem demo should remain an external sign-in link or use a recorded walkthrough. The broken embed has already been removed safely.

Phase 2 is complete. Further work awaits explicit authorization for Phase 3.
