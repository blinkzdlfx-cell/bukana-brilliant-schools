# Deployment Plan — Bukana Brilliant Schools

## 1. Current status

The site is a Vite-built React single-page application (SPA). The owner is preparing to connect the repository to Cloudflare Pages and test the generated deployment. Do not assume that a live deployment has been verified.

Planned domain:
- `bukanabrilliantschools.com`

Do not assume DNS access, hosting configuration, environment variables, or deployment credentials are available.

## 2. Build settings

Use these settings for a standard Cloudflare Pages Git deployment:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root
- Install command: `npm ci` (when a package lockfile is present)

The stylesheet at `src/styles/index.css` must be imported by `src/main.jsx`. Vite then bundles the stylesheet and adds its generated CSS asset to the built HTML. If the stylesheet is not imported, Tailwind utilities and the project's global design tokens will not be included in the production page.

Do not assume a successful build proves the site works after deployment. Confirm that the deployed HTML, JavaScript, and CSS assets load successfully.

## 3. Single-page application routes

The app selects pages from `window.location.pathname`. The hosting platform must support SPA fallback to `index.html` for direct visits and refreshes on routes such as:

- `/about`
- `/academics`
- `/admissions`
- `/school-life`
- `/contact`

For Cloudflare Pages, verify its default SPA fallback behavior and ensure there is no top-level `404.html` unintentionally disabling that behavior. Do not add platform-specific routing files unless a deployment test demonstrates they are needed.

## 4. Blank-screen troubleshooting

If a deployed URL shows a blank page:

1. Open the browser developer tools and inspect **Console** for JavaScript errors.
2. Inspect **Network** and reload. Confirm the HTML, generated JavaScript bundle, and generated CSS bundle return successful responses; check for 404s, MIME-type errors, or blocked requests.
3. Confirm the built `dist/index.html` references the generated JS and CSS assets.
4. Run `npm ci`, `npm run build`, and `npm run test:smoke` against the current commit.
5. Verify the Cloudflare deployment is building the expected branch and latest commit, with `dist` as the output directory.
6. Test the Cloudflare-provided deployment URL before troubleshooting custom-domain DNS or SSL.
7. Test both the home page and a nested route directly.

Do not guess the root cause from a white screen alone. Record the actual console/network error and deployment build log before making further changes.

## 5. Node and npm

Owner-reported local environment:
- Node.js: `24.21.0`
- npm: `12.2.1`

Verify actual runtime output before dependency installation or deployment:

```bash
node --version
npm --version
```

Do not downgrade or globally replace Node/npm as part of routine deployment.

## 6. Environment variables

The initial informational website should not require secrets.

If an enquiry integration or external service is later approved:
- Document required variables.
- Keep private keys server-side.
- Never commit secrets.
- Never expose private keys through `VITE_*` variables.
- Provide a safe example environment file without real credentials.

## 7. Release checklist

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
- [ ] Cloudflare deployment URL loads correctly.
- [ ] Domain DNS points to the approved host.
- [ ] HTTPS works.
- [ ] Final production review is approved by the owner.

## 8. Deployment safety

Do not:
- Deploy to a production domain without approval.
- Change DNS records without approval.
- Commit credentials or secrets.
- Claim a deployment is live without verifying the public URL.
- Treat a successful local build as proof of production readiness.
