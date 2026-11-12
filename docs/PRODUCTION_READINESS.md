# Production Readiness Register — Bukana Brilliant Schools

This register separates engineering tasks from owner-supplied information. Update it as checks are performed; never mark a check complete without evidence.

## Implemented

- Expanded the Home page into a longer, structured journey with clear admissions and contact actions.
- Expanded About, Academics, Admissions, School Life, and Contact pages into multiple sections with useful parent-focused content.
- Replaced non-working homepage CTA buttons with real route links.
- Added the supplied WhatsApp number **07019779736** as a direct WhatsApp contact link.
- Removed the footer's internal "address pending confirmation" notice from public presentation.
- Added route-specific page titles, descriptions, canonical URLs, Open Graph metadata, and a no-index rule for the not-found route.
- Added `public/robots.txt` and `public/sitemap.xml`.
- Added ESLint flat configuration and GitHub Actions checks for dependency installation, lint, build, and smoke tests.
- Fixed portable ESM path resolution in `vite.config.js`.
- Documented owner inputs in `docs/OWNER_CONTENT_CHECKLIST.md`.

## Owner input still required

See `docs/OWNER_CONTENT_CHECKLIST.md`. Main blockers:
1. Approved logo and authentic school photographs.
2. Verification of address and map pin.
3. Confirmation of WhatsApp number, phone, email, opening hours, and social links.
4. Approved school description, mission/vision/values, and leadership information if wanted.
5. Creche/Nursery/Primary age ranges, class structure, curriculum, and school-day details.
6. Official admissions process, required documents, current availability, and decision about public fee display.
7. Approval of all final wording and photographs.

## Engineering release checklist

- [x] GitHub Actions pull-request workflow: dependency installation, lint, production build, and smoke test passed.
- [x] Run `npm ci` using the committed lockfile in CI.
- [x] Run `npm run lint` in CI.
- [x] Run `npm run build` in CI.
- [x] Run `npm run test:smoke` in CI.
- [x] Retrieve all nine published routes directly and confirm route-specific metadata plus the not-found metadata for an unknown path on the apex hostname (2026-11-12).
- [ ] Verify every public route after a browser refresh and test in-page navigation.
- [ ] Check small mobile, tablet, and desktop widths for overflow and layout issues.
- [ ] Check browser Console and Network for runtime errors, missing assets, and failed requests.
- [ ] Verify all buttons and links have real, correct destinations in the live site.
- [ ] Confirm the direct WhatsApp link opens the intended account on mobile and desktop.
- [ ] Replace design-only image placeholders with approved real photos or remove the relevant image areas.
- [x] Retrieve route-specific titles, descriptions, canonical URLs, Open Graph URLs, `robots.txt`, and the nine-entry sitemap from the public domain (2026-11-12).
- [ ] Verify the favicon file response and visual appearance, and inspect metadata and assets in a browser.
- [ ] Confirm the hosting platform deployed the intended commit and publishes `dist`.
- [ ] Verify HTTPS, custom domain, and direct route refresh on production.
- [ ] Obtain owner approval before final launch.

## Deployment notes

Source changes have been merged to `main` in PR #2. CI passed for dependency installation, lint, production build, and smoke test. A passing build does not prove the live deployment is correct. Confirm the latest production deployment completed, then test the deployed URL and custom domain. Do not change DNS or hosting settings without explicit approval.

## Current verification status

**Code-level CI checks: passed on 2026-11-12 at commit `a9adc9863989436f3499364562eb4d5307bf12f6`.** Public direct-content retrieval confirmed all nine published routes on the apex hostname, a not-found response with `noindex, nofollow` metadata for an unknown path, and an apex canonical URL from the `www` homepage. The live `robots.txt` and nine-entry sitemap were retrieved. Source review confirms the contact form has labelled fields, client-side validation, and prepares a `mailto:` message; it does not send or store enquiries. These checks do not verify browser rendering, viewport behavior, menu/gallery interactions, live form behavior, Console or Network errors, image HTTP responses, or the exact commit deployed to Cloudflare. The interactive browser audit could not start because the browser-testing wallet balance is negative. Responsive browser inspection, owner approval of school imagery and copy, confirmation of owner-dependent facts, and final sign-off remain outstanding. Do not represent the website as fully production-ready until these checks are complete.
