# Portfolio publication validation

Reviewed October 15, 2026, after the user approved the production preview and requested committing and pushing to GitHub.

## Identical website copies

- The publishing checkout and the Portfolio-website-v2 folder match across 94 application, public-asset, dependency, build-configuration, workflow, and README files.
- Both builds passed with Node 24.19.0 and Vite 6.4.2.
- All 69 files in each dist/client directory have matching SHA-256 hashes. The two folders produce byte-for-byte identical websites.
- All four existing hosting tests pass after preparing the optional Sites package. The Pages workflow uploads only dist/client.

## Original website backup

- The complete pre-v2 repository remains outside the publishing checkout in the adjacent Kathan03.github.io-before-v2-20261015-122639 folder.
- complete-repository preserves old code, untracked assets, staged and unstaged edits, and Git metadata. replaced-working-files provides a second original working-file copy.
- All 23 original working files match between the saved copies. All 204 files in old-website-complete.zip were verified against the complete snapshot using SHA-256 hashes.
- ZIP SHA-256: 0CDAE1A9A9048A124435C32108825E6DAD317001FA8ABBB79C2B812A1D2CB2CE.
- The original backup and ZIP are not part of this public repository or deployed website.

## Reviewed behavior

The existing production preview review confirmed the default Dark theme, original font and photo, Forward Deployed Engineering label, exact recommendation, corrected email links, Hall of Fame disclosure, selectable experience timeline and achievements, and phone layout. No career claims, project order, imagery, or recommendation wording changed during synchronization.

Evidence remains in qa/github-pages. The earlier screenshot production-desktop.png predates the positioning-label correction; hero-fde.png shows the final label. Browser checks and detailed artifact checks are retained there as historical snapshots of the reviewed build.

## Publication configuration

The existing Git repository, history, origin, and main branch are retained. The authenticated account and repository administration/push access were verified using the configured Git credential helper without printing or storing credentials. The Pages publishing source was changed from legacy branch publishing to GitHub Actions and verified as workflow. HTTPS remains enabled, and the public URL remains https://kathan03.github.io/.

The pinned workflow uses the verified official action revisions, Node 24, locked dependencies, npm run build:pages, and the static dist/client artifact. Push and deployment status can be checked in the repository's Actions history. No custom domain, URL migration, backend service, or API key is required.
