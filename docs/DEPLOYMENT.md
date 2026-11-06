# Deployment Plan — Bukana Brilliant Schools

## 1. Current status

The site is a Vite-built React single-page application (SPA) deployed to **Cloudflare Workers** using `wrangler`. The owner is preparing to connect the repository and test the generated deployment. Do not assume that a live deployment has been verified.

Planned domain:
- `bukanabrilliantschools.com`

Do not assume DNS access, hosting configuration, environment variables, or deployment credentials are available.

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
- `/career`

The `wrangler.toml` `[assets]` directory points to `dist`, and `env.ASSETS.fetch` serves built assets with the SPA fallback in `src/worker.js`.

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

### Confirmed source defect fixed in the runtime-rendering patch

The shared footer rendered on every route but referenced `cn(...)` without importing the utility. This can throw a JavaScript `ReferenceError` while React renders the footer and leave the entire page white. The footer must import `cn` from `@/lib/utils.js`.

The same patch adds missing imports for `Button` in `src/pages/AcademicsPage.jsx` and `TemporaryImage` in `src/pages/ContactPage.jsx`, preventing errors when those routes render. It also adds the required Tailwind CSS 4 import to `src/styles/index.css`.

These source defects explain a credible blank-screen failure path, but the deployed browser must still be retested to confirm the issue is resolved.

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
- [ ] HTTPS works.
- [ ] Final production review is approved by the owner.

## 9. Deployment safety

Do not:
- Deploy to a production domain without approval.
- Change DNS records without approval.
- Commit credentials or secrets.
- Claim a deployment is live without verifying the public URL.
- Treat a successful local build as proof of production readiness.
