# Production Readiness Register — Bukana Brilliant Schools

This register separates engineering tasks from owner-supplied information. Update it as checks are performed; never mark a check complete without evidence.

## Implemented in this change set

- Expanded the Home page into a longer, structured journey with clear admissions and contact actions.
- Expanded About, Academics, Admissions, School Life, and Contact pages into multiple sections with useful parent-focused information.
- Replaced non-working homepage CTA buttons with real route links.
- Added the supplied WhatsApp number **07019779736** as a direct WhatsApp contact link.
- Removed the footer's internal "address pending confirmation" notice from public presentation.
- Added route-specific page titles, descriptions, canonical URLs, Open Graph metadata, and a no-index rule for the not-found route.
- Added `public/robots.txt` and `public/sitemap.xml`.
- Added an ESLint flat config and a GitHub Actions workflow for lint, build, and smoke checks.
- Kept school-specific claims such as exact class ages, curriculum, facilities, fees, and admission rules unasserted until confirmed.
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

- [ ] GitHub Actions quality-check workflow passes on the pull request.
- [ ] Run `npm ci` using the committed lockfile.
- [ ] Run `npm run lint`; resolve all relevant errors and review warnings.
- [ ] Run `npm run build`.
- [ ] Run `npm run test:smoke`.
- [ ] Verify every public route directly and after refresh: `/`, `/about`, `/academics`, `/admissions`, `/school-life`, `/gallery`, `/contact`, and an unknown route.
- [ ] Check small mobile, tablet, and desktop widths for overflow and layout issues.
- [ ] Check browser Console and Network for runtime errors, missing assets, and failed requests.
- [ ] Verify all buttons and links have real, correct destinations.
- [ ] Confirm the direct WhatsApp link opens the intended account on mobile and desktop.
- [ ] Replace design-only image placeholders with approved real photos or remove the relevant image areas.
- [ ] Verify page metadata, canonical URLs, Open Graph metadata, favicon, robots rules, and sitemap on the deployed domain.
- [ ] Confirm the selected hosting platform builds the intended branch with `npm run build` and publishes `dist`.
- [ ] Verify HTTPS, custom domain, direct route refresh, and the final deployed commit.
- [ ] Obtain written owner approval before final launch.

## Deployment notes

The source code being merged does not itself prove the deployed website is fully production-ready. Confirm the latest production deployment completed, then test the deployed URL and custom domain. Do not change DNS or hosting settings without explicit approval.

## Current verification status

Source changes are in a feature branch and a GitHub Actions workflow has been added. Build, lint, smoke tests, responsive browser inspection, and live deployment verification have **not yet been confirmed as passing** in this environment. A network restriction prevented cloning the repository to run the commands locally. Do not represent the site as fully production-ready until the workflow passes and the remaining browser, deployment, and owner-approval checks are complete.
