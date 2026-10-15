# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Approved portfolio direction (October 12, 2026)
- User chose option 3, requested a more exact Anthropic theme, and authorized a complete rebuild of the former Atlas project.
- Visual source: docs/selected-design.png. Use warm #FAF9F5 paper, #141413 ink, terracotta accents, bold neutral sans headings, serif narrative text, quiet rules, and the editorial three-column hero.
- Exact photo from the old portfolio assets/img.png is copied without editing to public/assets/portrait.png. Do not generate or substitute a portrait.
- Case Studies is a separate showcase for CaseMate, Pulse, and RightStaff. Projects retains Pulse plus the seven original gallery projects, exactly eight.
- All career facts come from the latest KATHAN_JOSHI_MASTER_RESUME.tex. Preserve approximate figures, quoted costs, projections, knowledge labels, and under-review manuscript status.
- Architecture illustrations are conceptual overviews, not actual product screenshots.
- Prior Atlas folder is preserved at Portfolio-website-v2-archive-20261012. No feature retention is required.

## Latest visual correction (October 13, 2026)
- User rejected the earlier bold sans-serif three-column design. It is superseded.
- Primary source is https://anthropic.skilljar.com/: Anthropic Display regular serif headings, Anthropic Text body, Anthropic Sans navigation, #FAF9F5 paper, #222 ink, centered 952px main content, white 16px rounded cards, no shadows.
- Use docs/academy-direction.png as composition guidance. Measured Academy styles and verified resume content override mock inaccuracies. Pulse is not labeled ORBCOMM.
- Hero uses Kathan Joshi as a regular serif title and an ink compass. Retain the exact portrait. Navigation is quiet text.
- Case studies are three course-like expandable cards, each with an ink illustration. Project gallery retains exactly eight items with new themed artwork. Native disclosures expose experience and Knowledge groups.
- Original user-generated book cover is reused unchanged for research. New drawings are illustrative metaphors, not product screenshots or claims of Anthropic affiliation.
- Six font files from the referenced public Academy font source are bundled locally in public/fonts. Do not replace them with generic primary fonts.

## Accepted base and requested refinements (October 13, 2026)
- User loves the current Academy theme. Preserve fonts, layout, portrait, and all illustration files.
- Public showcase name is Hall of Fame everywhere. No public Resume links, resumeUrl, or downloadable resume PDF. Private copies stay outside this website.
- Field kit is exactly 15 visual skills with real unchanged brand logos for tools and standard Phosphor symbols for general capabilities. Role research is in docs/fde-research-a.md and docs/fde-research-b.md. Agno is user-confirmed familiarity, not a claim of a shipped project. Agent architecture remains labeled Knowledge.
- Project order: Pulse, ResumeSense, Churn, KATNet, Forex, Fake News, BERT, Chest Doctor.
- Every paper has an explicit status. The cytokine paper is Published; only the NEDS manuscript is Under review. Scholar is a separate profile-level link above the paper groups.
- Navigation uses quiet outline icons with labels on hover/focus and visible mobile-menu labels.
- Paper remains the default theme; Fire, Water, Grass are alternate warm/light palettes with elemental icons. Preserve artwork and brand colors; persist preference locally. No Pokemon character artwork requested.
- Experience uses an interactive chronological timeline, current role selected initially, with accessible arrow-key/Home/End controls and all verified role details.

## Further approved-theme polish
- Keep the accepted Academy fonts, hero, Hall of Fame, 15-skill shortlist, project order, publication statuses, and private resume policy.
- Theme controls now use curved raster elemental emblems inspired by the supplied chart. Paper remains default; Dark joins Fire, Water, and Grass. Do not revert to the angular outline theme marks.
- Field kit, Education, Credentials, and Research share a 230px desktop illustrated-banner component. Source art remains wide with text-safe space on the left. Mobile puts the title above the complete banner image.
- Certifications use the original issuer-logo approach: Salesforce, AWS, and the exact original DeepLearning.AI image. Do not invent credential scans.
- About follows the user-supplied bio and explicit positivity/gratitude request. Use the original img.png photo in a gentle liquid CSS mask, with a static reduced-motion fallback. Do not copy the private HR screenshot or its signature.
- Add restrained rust, blue, and sage text accents. Experience numeric highlights must preserve the original text and metric qualifiers exactly. Dark equivalents must remain legible. Official logos keep their colors and proportions, with light backing where needed.

## Section rhythm and compact experience (October 14, 2026)
- Hall of Fame, More projects, and Experience now share the illustrated SectionBanner used by Field kit, Education, Credentials, and Research. Keep uniform banner dimensions, typography, left text-safe space, and mobile title placement.
- Experience opens with the current role selected and achievements collapsed. Keep company, official role, dates/location, and the original summary visible. View achievements with a plus opens all verified bullets; Hide achievements with a minus closes them.
- Switching to a different role collapses its achievements. Timeline company cards expose View role and Selected states, connected milestone points, subtle hover feedback, and keyboard navigation. On phones, the timeline itself scrolls horizontally with a visible instruction; the page must not overflow. Keep the selected item in view when the viewport changes.
- Preserve career data, metric qualifiers, original portrait, all previously approved art, five palettes, and the resume privacy policy.

## Theme name correction (October 14, 2026)
- The default theme's public name is Sun. Keep its existing sun emblem, palette, internal paper ID, and stored preference compatibility. Historical QA captures referring to Paper remain historical.


## Recommendation and hero interaction (October 14, 2026)
- Working together is a single text-only recommendation after Experience. Preserve Chris Getsfred's supplied words exactly, including the quoted ownership statement. No author image, avatar, or photo.
- Attribution distinguishes current Co-Founder at Manawaroa, LLC from former Senior Director of Enterprise AI at ORBCOMM. Chris managed Kathan directly. Recommendation date is September 23, 2026; link to the provided LinkedIn profile without presenting it as a direct recommendation permalink.
- The first two complete paragraphs are visible, with Read full recommendation plus exposing the remaining three. All five paragraphs remain present and accessible through the native disclosure.
- Cursor-responsive ink specks are confined to the original hero compass. Keep the accepted hero layout, original art, text, and controls fixed. Use subtle theme-matched colors, no automatic idle animation, bounded repulsion, and a gentle return to rest.
- The field is static on widths up to 800px, coarse/touch pointers, and prefers-reduced-motion. Use local canvas drawing with no external animation dependency or additional images.

## Recommendation banner and placement correction (October 14, 2026)
- Working together is now directly below About me and above Contact. This supersedes the earlier placement after Experience.
- Give the recommendation the same SectionBanner used elsewhere: 230px desktop height, left title, complete panoramic image below the title on phones. Its rose-paper handshake is a generic editorial collaboration illustration, not a portrait of Chris or any identifiable person.
- Keep all recommendation wording, current/former attribution, date, LinkedIn profile link, and the native plus/minus disclosure unchanged. Author attribution remains text-only, with no photo or avatar.


## Default theme and public contact correction (October 14, 2026)
- Dark is now the default, superseding earlier Paper/Sun default instructions. Apply Dark in the initial HTML and when no valid saved preference exists or browser storage is unavailable. Continue honoring a visitor's explicitly saved choice among all five themes.
- Public contact email is kathanjoshi03@gmail.com. Use the shared profile.email value for the visible address and every email link. This explicit user correction overrides the former resume-derived address for this website only.

## GitHub Pages migration (October 15, 2026)
- This checkout is the GitHub repository for https://kathan03.github.io/. It supersedes the previous plain HTML/CSS/JS implementation. The original complete checkout, including staged edits and Git metadata, is backed up outside this repository.
- npm run build:pages emits the static website in dist/client. The GitHub Pages workflow uploads only that directory. Preserve the root Vite base / and existing repository name to retain the URL.
- The GitHub repository Pages source must be GitHub Actions for this workflow. Local previews are production builds served at 127.0.0.1:4189.
- Keep local tool settings, private design drafts, resume PDFs, and backups out of Git. Existing privacy, approved imagery, exact recommendation, default Dark theme, and corrected contact email remain in effect.

## Hero positioning label (October 15, 2026)
- The label above Kathan's name is Forward Deployed Engineering. This signals the target discipline; retain the existing introduction and actual ORBCOMM title in the role line.


## Synchronized website copies (October 15, 2026)
- The approved application, assets, dependencies, Vite configuration, and Pages workflow are synchronized with the companion portfolio folder. Preserve identical website outputs in both folders. Keep the original pre-v2 backup outside either public website; do not copy old resume files or local settings into the new public build.
