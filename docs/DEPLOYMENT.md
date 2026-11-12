# Deployment Plan — Bukana Brilliant Schools

## 1. Current status

The site is a Vite-built React single-page application (SPA) deployed to **Cloudflare Workers** using `wrangler` (`wrangler.toml`, `src/worker.js`).

Primary public URL:
- `https://bukanabrilliantschools.com`

The `www` hostname also responds at `https://www.bukanabrilliantschools.com` and publishes the apex hostname as its canonical URL.

**Public check — 2026-11-12:** direct retrieval from the apex host returned page content and route-specific title, description, canonical URL, Open Graph URL, and robots metadata for all nine published routes: `/`, `/about`, `/academics`, `/early-years`, `/primary`, `/admissions`, `/school-life`, `/gallery`, and `/contact`. A deliberately unknown path returned the not-found page metadata with `noindex, nofollow`. The `www` homepage returned the same school content and advertised the apex hostname as its canonical URL. `robots.txt` and the nine-entry `sitemap.xml` were also retrieved. These are direct content checks, not interactive browser tests or proof of the exact Cloudflare commit currently serving traffic. Desktop/mobile rendering, menu and gallery interactions, contact-form validation and `mailto:` behavior in a live browser, browser Console errors, Network failures, and image response status remain unverified because the interactive browser audit could not start.

## 2. Build settings

Use these settings for a Cloudflare Workers deployment:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root
- Install command: `npm ci` (when a package lockfile is present)
- Wrangler config: `wrangler.toml`
- Worker entry: `src/worker.js`

The stylesheet at `src/styles/index.css` must be imported by `src/main.jsx`. Vite then bundles the stylesheet and adds its generated CSS asset to the built HTML. If the stylesheet is not imported, Tailwind utilities and the project's global design tokens will not be included in the production page.

Do not assume a successful build proves the site works after deployment. Confirm that the deployed HTML, JavaScript, and CSS assets load successfully.

## 3. Single-page application routes

The app selects pages from `window.location.pathname`. The Worker (`src/worker.js`) serves static assets from `dist/` and falls back to `/index.html` for any 404, so direct visits and refreshes work on routes such as:

- `/about`
- `/academics`
- `/early-years`
- `/primary`
- `/admissions`
- `/school-life`
- `/gallery`
- `/contact`

The `wrangler.toml` `[assets]` directory points to `dist`, and `env.ASSETS.fetch` serves built assets with the SPA fallback in `src/worker.js`. The removed `/career` route is not part of the public navigation or sitemap; the application handles unknown routes with its not-found page.

## 4. Deploy command

Deploy to Cloudflare Workers:

```bash
npm run build
npx wrangler deploy
```

`wrangler` is installed on-demand by `npx` at deploy time; it is not a committed project dependency.

Custom domain (`bukanabrilliantschools.com`) is configured separately via the Cloudflare dashboard or:

```bash
npx wrangler custom-domain add bukanabrilliantschools.com
```

Do not add wildcard/path route patterns for custom domains to `wrangler.toml` — they are rejected by wrangler.

## 5. Blank-screen troubleshooting

### Confirmed homepage blank-screen defect fixed

`src/pages/HomePage.jsx` rendered the `ContactInvitation` section on the homepage using the Lucide `Mail` and `MessageCircle` components, but neither icon was imported from `lucide-react`. React therefore encountered a `ReferenceError` while rendering the homepage, which could leave the entire screen blank even though Vite successfully built the bundle. Both icons are now explicitly imported.

The smoke test now checks that both icons remain imported, so this specific runtime regression is caught before release. Other route-level safeguards remain in place: `SiteFooter.jsx` imports `cn`, `AcademicsPage.jsx` imports `Button`, `ContactPage.jsx` imports `TemporaryImage`, and `src/styles/index.css` includes the required Tailwind CSS 4 import.

The source fix is committed to `main`. A production browser retest is still required to confirm the live deployment is serving the updated commit.

If a deployed URL shows a blank page:

1. Open the browser developer tools and inspect **Console** for JavaScript errors.
2. Inspect **Network** and reload. Confirm the HTML, generated JavaScript bundle, and generated CSS bundle return successful responses; check for 404s, MIME-type errors, or blocked requests.
3. Confirm the built `dist/index.html` references the generated JS and CSS assets.
4. Run `npm ci`, `npm run build`, and `npm run test:smoke` against the current commit.
5. Verify the Worker is deployed from the expected branch and latest commit.
6. Test both the home page and a nested route directly.
7. Check the Cloudflare Workers deployment logs for `wrangler deploy` errors (e.g., `Error parsing file` indicates an invalid `wrangler.toml` or missing `src/worker.js`).

Do not guess the root cause from a white screen alone. Record the actual console/network error and deployment build log before making further changes.

## 6. Node and npm

Owner-reported local environment:
- Node.js: `24.21.0`
- npm: `12.2.1`

Verify actual runtime output before dependency installation or deployment:

```bash
node --version
npm --version
```

Do not downgrade or globally replace Node/npm as part of routine deployment.

## 7. Environment variables

The initial informational website should not require secrets.

If an enquiry integration or external service is later approved:
- Document required variables.
- Keep private keys server-side.
- Never commit secrets.
- Never expose private keys through `VITE_*` variables.
- Provide a safe example environment file without real credentials.

## 8. Release checklist

- [ ] Owner has approved all public copy.
- [ ] Address and map destination are verified.
- [ ] Phone, WhatsApp, and email are verified.
- [ ] School imagery is owner-approved and usage permissions are confirmed.
- [ ] Student images have appropriate approval and consent.
- [ ] Admissions details and fees are verified if published.
- [ ] No placeholder or fabricated content remains.
- [ ] `npm run build` passes.
- [ ] `npm run test:smoke` passes.
- [ ] Direct route access and refresh work.
- [ ] Mobile and desktop browser checks pass.
- [ ] No critical console or network errors.
- [ ] `wrangler deploy` completes without errors.
- [ ] Domain DNS points to the approved host.
- [x] HTTPS responds on the apex and `www` public hostnames (direct content retrieval checked 2026-11-12).
- [ ] Final production review is approved by the owner.

## 9. Deployment safety

Do not:
- Deploy to a production domain without approval.
- Change DNS records without approval.
- Commit credentials or secrets.
- Claim a deployment is live without verifying the public URL.
- Treat a successful local build as proof of production readiness.
