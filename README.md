# Kathan Joshi portfolio

React and Vite portfolio for **https://kathan03.github.io/**.

## Local development

Use Node 22.12 or newer.

```sh
npm ci
npm run dev
```

## Production preview

```sh
npm run build:pages
npm run preview -- --host 127.0.0.1 --port 4189
```

The production website is the static contents of `dist/client`. No server, API key, environment variable, or database is required.

## GitHub Pages deployment

In this repository's **Settings > Pages > Build and deployment**, set **Source** to **GitHub Actions** once. Keep the repository name `Kathan03.github.io`; the public URL remains **https://kathan03.github.io/**.

The workflow in `.github/workflows/pages.yml` installs the locked dependencies, builds with `npm run build:pages`, and publishes only `dist/client` after a push to `main`. It can also be started from the Actions tab with **Run workflow**. Vite uses the root base `/`, matching this user-site URL.

Do not publish the raw source directory as a static branch site: `index.html` loads source modules during development, and the production build generates the browser-ready HTML and assets.

The optional Sites build hooks remain available through `npm run build` and `npm run test:sites`. They are not uploaded by the GitHub Pages workflow.

## Content and privacy

- Career and project content: `src/content.js`.
- Recommendation: `src/recommendation.js`.
- Public contact: `kathanjoshi03@gmail.com`.
- Dark is the default; a visitor's saved theme choice is remembered.
- Resume downloads and phone numbers are excluded from the website.
- Original portrait, approved illustrations, theme emblems, issuer logos, and fonts are bundled locally.

Private design drafts, local tool settings, and the previous website backup are outside this repository. Original tool logo attribution is retained in `docs/skill-logo-sources.json` and `docs/DEVICON-LICENSE.txt`.
