# Implementation Plan — Bukana Brilliant Schools

## Operating principle

Build a new school website from a clean project foundation. Work in coherent phases, keep documentation current, and verify the rendered experience rather than treating a successful compile as completion.

## Phase 0 — Project readiness

- Confirm repository and default branch.
- Verify Node.js and npm versions in the working environment.
- Establish package manifest and lockfile with compatible versions.
- Create Vite + React foundation.
- Configure Tailwind CSS 4 and shadcn/ui.
- Establish global design tokens and typography.
- Add basic document metadata and favicon placeholder.
- Confirm the development server and production build.

Exit checks:
- Dependencies install without changing the owner's runtime.
- Development server starts.
- Production build succeeds.
- Global dark theme tokens are active.

## Phase 1 — Shared shell and navigation

- Build header and responsive mobile navigation.
- Build footer.
- Establish page container and reusable section heading.
- Establish button and card variants.
- Add route handling and 404 page.
- Add page-specific title and description handling.

Exit checks:
- Every planned route renders.
- Direct visits and refreshes work in the configured local preview.
- Mobile menu works with touch and keyboard.
- Escape closes the menu.
- No horizontal overflow.

## Phase 2 — Homepage

- Hero and primary/secondary CTAs.
- School introduction.
- Creche, Nursery, and Primary preview.
- Learning approach section, using approved copy only.
- School environment imagery.
- Admissions CTA.
- Location/contact preview.
- Footer integration.

Exit checks:
- First viewport communicates school identity and next step.
- The page is visually balanced on mobile and desktop.
- All copy and claims are verified or clearly pending.
- Images have appropriate fallbacks and alt text.

## Phase 3 — Supporting pages

- About.
- Academics.
- Admissions.
- School Life / Gallery.
- Contact / Find Us.
- Optional News & Events only if content is available.

Exit checks:
- Pages have distinct useful content, not duplicated filler.
- Each page has a clear heading and next action.
- All route links work.
- Owner-dependent facts are not fabricated.

## Phase 4 — Interaction and accessibility

- Motion and section reveals.
- Gallery interactions if included.
- Contact links.
- Form validation only if an actual submission path is configured.
- Keyboard, focus, contrast, and reduced-motion review.
- Image loading and layout stability.

Exit checks:
- No key content depends on animation.
- No fake form success state.
- Interactive controls have accessible names and feedback.

## Phase 5 — Content and visual polish

- Replace design placeholders with owner-approved assets.
- Review all school copy.
- Confirm address, phone, WhatsApp, email, and social links.
- Check image permissions.
- Review typography, spacing, contrast, and consistency.
- Check small-phone, tablet, laptop, and large-desktop layouts.

Exit checks:
- No unapproved placeholder content remains in production-facing pages.
- No broken images or dead CTAs.
- No obvious responsive defects.

## Phase 6 — Production readiness

- Configure final hosting provider and domain.
- Configure SPA fallback/rewrites if needed.
- Configure canonical URL, sitemap, and robots rules.
- Run build and smoke tests.
- Verify production routes and assets.
- Check SSL and DNS.
- Perform final owner review.

Do not deploy or change DNS without explicit owner approval.

## Required commands

Once the scripts exist:

```bash
npm install
npm run dev
npm run build
npm run test:smoke
```

Do not claim `test:smoke` exists or passes until the script has been implemented and run.

## Reporting format

At the end of each phase, report:
- What was implemented.
- Files/components added or changed.
- Commands executed.
- Build/test results.
- Browser checks completed.
- Known limitations.
- Owner input still required.
- Recommended next phase.
