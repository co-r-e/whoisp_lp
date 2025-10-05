# WhoisP Landing Page

Static landing page for the WhoisP project built with Next.js App Router. The repository is pre-configured for static export, GitHub Pages deployment, and multilingual (English/Japanese) content.

## Prerequisites

- Node.js 20+
- npm 10+

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to develop. The site is statically generated, so avoid using server-only features.

## Production Build & Preview

```bash
npm run build
npm run preview
```

The build command produces a static `out/` directory. The preview command serves that folder locally via `serve` for a production-like check.

## GitHub Pages Deployment

1. Push this repository to GitHub and ensure the default branch is `main` (update the workflow branch filter if you use something else).
2. Enable GitHub Pages for the repository and select the "GitHub Actions" deployment source (Settings → Pages).
3. Every push to `main` triggers `.github/workflows/deploy.yml` which:
   - Installs dependencies with npm.
   - Builds the static site with `NEXT_PUBLIC_SITE_URL` inferred from the repository owner/name.
   - Uploads the `out/` directory as a Pages artifact and publishes it.
4. After the workflow finishes, the site is available at:
   - `https://<OWNER>.github.io` for a user/organization pages repo named `<OWNER>.github.io`.
   - `https://<OWNER>.github.io/<REPO>` for any other repository.

If you want to override the canonical origin, set the repository secret `NEXT_PUBLIC_SITE_URL` and the workflow will automatically pick it up.

## Google Search Console Registration

1. Wait until the site is live at the GitHub Pages URL.
2. Log in to https://search.google.com/search-console and choose **URL prefix** property type. Enter the exact Pages URL including the repository path (for example, `https://example.github.io/whoisp_lp2`).
3. Pick **HTML file** verification, download the `googleXXXXXXXXXXXX.html` file, and move it into the `public/` directory of this project.
4. Commit and push the file to `main`; the next deployment will publish it at `https://<OWNER>.github.io/<REPO>/googleXXXXXXXXXXXX.html`.
5. Click **Verify** in Search Console. After success, open the property and submit `https://<OWNER>.github.io/<REPO>/sitemap.xml` via **Sitemaps**.
6. Use **URL Inspection** to request indexing for the homepage (`/`) and the Japanese page (`/ja`). Repeat whenever major content updates occur.

## Built-in SEO Enhancements

- Canonical URLs, language alternates, Open Graph, and Twitter card metadata defined in `src/app/layout.tsx`.
- Structured data (`SoftwareApplication` and `FAQPage`) injected via JSON-LD.
- Auto-generated `sitemap.xml` and `robots.txt` exposed through Next.js metadata routes.
- Keyword metadata sourced from `src/content/landing.ts` and synchronized for both locales.
- GitHub Pages-aware `basePath`/`assetPrefix` handling in `next.config.ts`, including automatic detection for user-page repositories.

Keep content updates within `src/content/landing.ts` to ensure metadata, structured data, and copy stay aligned across locales.
