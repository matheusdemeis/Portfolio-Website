# Portfolio Refresh — Phase 3B report

Completed locally on 2026-10-31. Scope: Tandem and InsurFlow detail pages only. No deployment, commit, push, merge, production-setting changes, reference-application edits, or Phase 4 implementation.

## Initial audit

Reviewed the Phase 1, 2, and 3A reports, `ProjectDetail.tsx`, `VibePlayCaseStudy.tsx`, `vibeplayCaseStudy.ts`, project and featured-project data, image mappings, `ProjectMedia`, project interfaces, and existing CSS/assets.

VibePlay already had a dedicated editorial page, chapter navigation, restrained gold accents, authentic media, an accessible architecture list, and explicit implementation boundaries. Tandem and InsurFlow still used the generic detail renderer, including less useful brand metadata and long text sections. Tandem's seven-section story contained useful context but needed a clearer contribution narrative. InsurFlow's legacy description required careful qualification of AI, scope, and individual ownership.

The existing local upload and intake screenshots were suitable. Additional existing portfolio assets included Tandem's original three-phone mockup and InsurFlow's demo scenario selector. Logos were not used as product screenshots. Tandem's previously broken embedded demo was not reinstated.

## Checkpoint A — Tandem

Implemented and validated Tandem before implementing InsurFlow. Seven chapters cover the human problem, discovery, product journey, personal backend contribution, three engineering decisions, collaboration, and reflection. The upload screen sits beside the contribution/data-flow explanation. The original mockup provides the broader product context.

Build and main TypeScript checks passed. Browser checks passed at 320, 375, 390, 768, 1024, and 1440px; all three homepage project links worked. Automated accessibility scans passed at 390 and 1440px, and keyboard focus was visible. This checkpoint exposed an important narrative correction from source inspection: voice intake saves before returning to the overview. The final page explicitly describes this rather than promising confirmation before every save.

## Checkpoint B — InsurFlow

Implemented five chapters with a professional SaaS emphasis: business context, product workflow, individual role, architecture, and lessons. The structured financial domain and calculation/documentation boundary carry the technical narrative. The page omits the legacy unverified 16-week timeline and uses meaningful role, team, organization, and context metadata.

The current README describes a shift from advisor workflows to a Canadian consumer insurance experience. The page centers Matheus's supplied professional context while explicitly identifying the newer direction and the available demo screenshots. It does not attribute newer capabilities or every implemented feature to Matheus.

Build, main TypeScript, both pages' responsive/accessibility checks, and regression checks then passed as described below.

## Repository findings and evidence map

Reference repositories were read through the GitHub connector, without modifying them. Technical explanations refer to inspected snapshots, not a certification of live runtime behavior:

- Tandem: `0469028e937efd6bab7c81429fc25c17b18ec82e`.
- InsurFlow: `d5610bb538600670f5090b450cb5a04cf213d5ce`.

### Tandem

| Claim | Supporting evidence | Attribution / boundary |
| --- | --- | --- |
| BCIT capstone; 3 developers and 5 designers; approximately four months; mentor-supported discovery and iteration | User-supplied Phase 3B brief; existing portfolio context | Team experience supplied by Matheus; no invented participant counts, research quotes, or measured findings |
| Main contribution was backend PDF/voice processing into structured schedule data | User-supplied brief, supported by the implementation below | Personal responsibility comes from the brief; surrounding application implementation remains team work |
| PDF extraction, Groq JSON generation, default hours, time-range checks, week resolution | [parse-pdf route](https://github.com/matheusdemeis/Tandem/blob/0469028e937efd6bab7c81429fc25c17b18ec82e/src/app/api/schedule/parse-pdf/route.ts) | Uses pdf-parse, Groq Llama, and checks; not comprehensive schema validation. Also contains image OCR, which is outside the page's central narrative |
| Audio transcription, weekday normalization, presentation fallback | [transcribe-voice route](https://github.com/matheusdemeis/Tandem/blob/0469028e937efd6bab7c81429fc25c17b18ec82e/src/app/api/schedule/transcribe-voice/route.ts) | Groq Whisper transcription and Llama structure extraction. Hardcoded presentation fallback is disclosed as a prototype limitation |
| Separate persistence endpoint, per-day times, week context | [save route](https://github.com/matheusdemeis/Tandem/blob/0469028e937efd6bab7c81429fc25c17b18ec82e/src/app/api/schedule/save/route.ts) | Drizzle insert/update, required-field checks; no claim of comprehensive validation or security audit |
| Editable overview; voice saves first | [schedule overview](https://github.com/matheusdemeis/Tandem/blob/0469028e937efd6bab7c81429fc25c17b18ec82e/src/app/components/schedule/scheduleOverview.tsx), [voice input](https://github.com/matheusdemeis/Tandem/blob/0469028e937efd6bab7c81429fc25c17b18ec82e/src/app/components/schedule/voiceInput.tsx) | Explicitly avoids claiming every input is reviewed before persistence |
| Daily care planning and a nanny-sharing option | [nanny booking schedule](https://github.com/matheusdemeis/Tandem/blob/0469028e937efd6bab7c81429fc25c17b18ec82e/src/app/nanny/book/schedule/page.tsx) | UI implementation evidence, not successful matching, adoption, or real-time guarantees |
| Next.js, React, TypeScript, Tailwind, Drizzle/Postgres stack | [package manifest](https://github.com/matheusdemeis/Tandem/blob/0469028e937efd6bab7c81429fc25c17b18ec82e/package.json), persistence route | Stack summary; dependency presence alone does not prove a feature |
| English presentation to approximately 500 people | User-supplied brief | No invented audience response, companies, awards, or outcomes |

### InsurFlow

| Claim | Supporting evidence | Attribution / boundary |
| --- | --- | --- |
| Vero Ventures experience; five engineers; stack/architecture participation, full-stack features, reviews, iteration with senior developers | User brief and existing portfolio experience | Conservative personal contribution wording; code presence does not prove individual authorship |
| Advisor-focused foundation and newer Canadian consumer direction | [README](https://github.com/matheusdemeis/insurflow/blob/d5610bb538600670f5090b450cb5a04cf213d5ce/README.md), [product direction](https://github.com/matheusdemeis/insurflow/blob/d5610bb538600670f5090b450cb5a04cf213d5ce/docs/product-direction-alignment.md) | Separates experience context from current repository direction; provider boundary described as mock/planned integration |
| Client financial inputs, income replacement duration, existing coverage | [client schema](https://github.com/matheusdemeis/insurflow/blob/d5610bb538600670f5090b450cb5a04cf213d5ce/src/server/db/schemas/clients-schema.ts) | Team-level model evidence; no financial correctness or compliance certification |
| Related client/assets/debts/beneficiaries/business domain | README, repository schema tree, [ERD design](https://github.com/matheusdemeis/insurflow/blob/d5610bb538600670f5090b450cb5a04cf213d5ce/docs/V2_ERD_DESIGN.md) | ERD references an older monolithic schema path; current code uses modular `src/server/db/schemas/` files |
| Calculation route assembles inputs and returns result, trace, completeness/assumption information | [calculate route](https://github.com/matheusdemeis/insurflow/blob/d5610bb538600670f5090b450cb5a04cf213d5ce/src/app/api/clients/%5Bid%5D/calculate/route.ts) | Implementation observation, not benchmark, actuarial validation, or claim that Matheus authored it |
| Generated explanatory letter uses client data and calculated needs; input/configuration checks | [generate-letter route](https://github.com/matheusdemeis/insurflow/blob/d5610bb538600670f5090b450cb5a04cf213d5ce/src/app/api/clients/%5Bid%5D/generate-letter/route.ts) | Generated prose described as requiring review; no regulatory approval or production-availability guarantee |
| Next.js, React, TypeScript, Drizzle/PostgreSQL architecture | README, client schema, calculation and letter routes | Diagram is a deliberately limited client-analysis path; not an exhaustive system or security diagram |

Business-problem descriptions explain the product motivation, not findings from a newly conducted study. Reflections synthesize the supplied experience and observed engineering boundaries; no productivity, adoption, revenue, or customer outcome metrics were added.

## Files changed by Phase 3B

| File | Purpose |
| --- | --- |
| `src/components/CaseStudyParts.tsx` | Small shared topbar, metadata, chapter navigation, chapter, decision, external-link and closing components used by the two new pages |
| `src/components/TandemCaseStudy.tsx` | Seven-chapter collaborative capstone story |
| `src/data/tandemCaseStudy.ts` | Typed navigation, product journey, and source-grounded decisions |
| `src/components/InsurFlowCaseStudy.tsx` | Five-chapter professional SaaS story |
| `src/data/insurflowCaseStudy.ts` | Typed navigation, architecture steps, and engineering decisions |
| `src/pages/ProjectDetail.tsx` | Add dedicated branches for existing `tandem` and `InsurFlow` slugs; retain VibePlay and fallback behavior |
| `src/index.css` | Append only `.team-study`-scoped rules for metadata, intake flow, portrait media, and product layout |
| `public/images/projects/tandem-overview.png` | Local copy of original existing project mockup |
| `public/images/projects/insurflow-scenarios.png` | Local copy of existing demo scenario screenshot |
| `docs/screenshots/phase-3b/` | Four final browser screenshots |
| `docs/portfolio-phase-3b-report.md` | Audit, evidence, provenance, verification, and uncertainties |

`ProjectMedia` is reused unchanged, including its load-failure fallback. Existing VibePlay components/data, project data, image mappings, featured-project data, and all earlier reports remain unchanged. No new packages or animation libraries were installed. The generic legacy detail renderer/data remains available; removing unused historical fields is outside this phase.

During the pause, separate staged “Résumé” → “Resume” edits appeared in `Hero.tsx`, `Contact.tsx`, and `socialLinks.ts`. Those were preserved and are not Phase 3B changes. Existing staged state was not reset or updated by this work. All implementation writes were confined to the portfolio workspace; temporary QA scripts were placed in `/tmp`. No application repository was edited.

## Media provenance

All project media is authentic existing portfolio material. No AI imagery, fictional dashboard, or new simulated results were created.

| Asset | Provenance and interpretation |
| --- | --- |
| `tandem-overview.png` | Exact copy of existing [Tandem mockup](https://res.cloudinary.com/df4jmriki/image/upload/v1777143509/Tandem_Mock_lf9ywv.png), showing three phones. Labeled original project interface mockup and illustrative project content; not a new runtime capture |
| `tandem-upload.png` | Existing Phase 2 local capture from [upload asset](https://res.cloudinary.com/df4jmriki/image/upload/v1777143509/upload_s28qvq.png); reused unchanged |
| `insurflow-intake.png` | Existing Phase 2 local copy of [intake screenshot](https://res.cloudinary.com/df4jmriki/image/upload/v1777143508/insurflow3_uabjhh.png); demo scenario values, reused unchanged |
| `insurflow-scenarios.png` | Exact copy of existing [scenario screenshot](https://res.cloudinary.com/df4jmriki/image/upload/v1777143509/insurflow2_ppxgfw.png); sample personas/figures from the product demo, not customer records |

The retained source images include their original UI labels and numbers. Captions clarify their context. Portrait upload media keeps its proportions; other media uses contain sizing. Text descriptions explain the workflow independently of small text in desktop screenshots displayed on phones.

### Final browser screenshots

Captured from the local production preview in Chrome, viewport height 900px, full page, reduced motion enabled. All four were visually inspected.

| Page | Desktop | Mobile |
| --- | --- | --- |
| Tandem | [1440px screenshot](screenshots/phase-3b/tandem-1440.png) | [390px screenshot](screenshots/phase-3b/tandem-390.png) |
| InsurFlow | [1440px screenshot](screenshots/phase-3b/insurflow-1440.png) | [390px screenshot](screenshots/phase-3b/insurflow-390.png) |

## Verification executed

Used existing Playwright and axe tooling from the sibling VibePlay installation, without installing dependencies or writing to that repository. Tested the portfolio production build at `127.0.0.1:4173` with system Chrome.

| Check | Result |
| --- | --- |
| `npm run build` | Passed at both checkpoints and after final implementation |
| `./node_modules/.bin/tsc --noEmit` | Passed at both checkpoints and after final implementation |
| Repository test script | None configured; package scripts are dev/build/preview |
| `tsc --project tsconfig.node.json --noEmit` | Pre-existing failures: missing `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint/config`; Vite FSWatcher missing Node type `ref`/`unref`. Not changed in Phase 3B |
| `git diff HEAD --check` | Passed |
| Tandem and InsurFlow: 320, 375, 390, 768, 1024, 1440px | All passed: no document horizontal overflow, one main/one h1, working chapter targets, both authentic images decode, no iframe |
| Axe WCAG 2 A/AA and 2.1 AA scans scoped to each new case study | Zero violations at 390 and 1440px, including text contrast |
| Keyboard | First ten sequential Tab stops on each new page show solid visible focus outlines; chapter links also exercised by browser actions |
| Reduced motion | CSS scroll behavior is auto when reduced motion is requested and smooth in normal mode; existing route-level reduced-motion handling unchanged |
| Failed-media recovery | Both images on each new page deliberately blocked; all four show the existing readable fallback |
| Normal browser errors | No console errors or page errors during the new case-study matrix |
| Homepage project links | Clicked through to all three existing slugs successfully |
| Homepage and VibePlay regression | Media decode and no horizontal overflow at all six widths; VibePlay retains six chapters/four images |
| Redirect/not-found | `/projects` returns home; unknown project renders the not-found state |
| External links | Read-only GET checks followed redirects: Tandem sign-in, Tandem blog, InsurFlow site, both GitHub repositories, and pinned InsurFlow README all returned HTTP 200 |
| Preservation | Git diff confirms VibePlay source/data, previous reports, project/featured data and image mappings unchanged; an assertion confirms existing CSS is byte-for-byte the prefix of the final CSS |

The local preview initially could not start because automatic approval review hit a usage limit. After the user requested continuation, the retry was approved and all listed browser checks completed. That interruption did not leave a validation blocker.

Build warnings about outdated Browserslist data and Node experimental type stripping persist. Automated accessibility scans are scoped checks, not a full assistive-technology certification. No cross-browser/mobile-device testing, authenticated reference-app workflows, live AI requests, or financial model validation was performed. HTTP 200 confirms link reachability only. Visual preservation is supported by unchanged source/scoped CSS and browser checks; no pixel-diff baseline comparison was performed.

## Remaining factual uncertainties

- Tandem's displayed year remains **2025**, as requested; independently confirming the exact project year is still needed.
- Discovery, team size, duration, and presentation audience rely on Matheus's supplied account. No new research findings or outcomes were inferred.
- Tandem has extraction defaults, limited validation, and voice persistence before review. The page identifies these limits and frames stronger handling as future work.
- InsurFlow's exact employment/project dates and duration were not verified; no duration is displayed on its new page.
- InsurFlow feature-level individual authorship was not established. More specific personal claims would require contribution history or direct confirmation.
- The historical advisor-era interface was not available as a verified screenshot. Existing consumer-demo imagery is used with explicit context.
- Source inspection and demo screenshots do not establish production adoption, regulatory compliance, live carrier integration, security guarantees, or measured customer outcomes.

## Recommendations for the separately authorized Phase 4 audit

Review the existing tooling configuration/type dependency mismatch, dependency freshness and build warnings, route metadata/SEO and social previews, image delivery and bundle performance, cross-browser behavior, and a broader accessibility review. Confirm project dates and contribution attribution with Matheus. These are recommendations only; Phase 4 work was not started.
