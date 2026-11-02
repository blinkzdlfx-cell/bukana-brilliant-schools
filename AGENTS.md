# Agent Instructions — Bukana Brilliant Schools

## 1. Project identity and operating mode

You are working on **Bukana Brilliant Schools**, an original, independently defined school website project.

Build the structure, architecture, components, content model, routes, and visual experience specifically for Bukana Brilliant Schools. Follow the requirements and decisions recorded in this repository's project documentation.

The project has its own source of truth in this repository:
- `docs/PROJECT.md` — project identity and goals.
- `docs/SITE_SPEC.md` — detailed experience and functional requirements.
- `docs/SCOPE.md` — included, deferred, and excluded features.
- `docs/DESIGN_SYSTEM.md` — visual rules and design tokens.
- `docs/CONTENT.md` — content model and factual-content rules.
- `docs/ARCHITECTURE.md` — technical structure.
- `docs/IMPLEMENTATION.md` — delivery phases and verification.
- `docs/DEPLOYMENT.md` — deployment assumptions and release checks.
- `docs/OWNER_CONTENT_CHECKLIST.md` — owner-supplied information and assets.

Read the relevant documents before planning or changing the application. If instructions conflict, follow this order:
1. Explicit, current instruction from the project owner.
2. This file (`AGENTS.md`).
3. The latest approved decision recorded in the project documentation.
4. Existing implementation, only where it does not contradict the above.

When a change affects scope, design, architecture, content, or deployment, update the relevant documentation in the same work batch.

## 2. Project purpose

Create a polished, trustworthy, modern, responsive website for a school serving Creche, Nursery, and Primary.

- School name: **Bukana Brilliant Schools**
- Tagline: **Be a star @ BBS**
- Planned domain: `bukanabrilliantschools.com`

Do not invent school facts. See `docs/CONTENT.md`.

## 3. Technical baseline

Use the established project stack unless the owner approves a change:
- React 19
- Vite (the exact installed version is governed by `package.json` and `package-lock.json`)
- JavaScript / JSX; do not introduce TypeScript without approval.
- Tailwind CSS 4 via `@tailwindcss/vite`
- Motion, imported from `motion/react`
- Lucide React
- `clsx`, `tailwind-merge`, `class-variance-authority`, and `tw-animate-css`

The owner reports Node.js `v24.21.0` and npm `12.2.1`; verify local versions before installing or changing dependencies. The package manifest and lockfile are the authoritative source for installed dependency versions. Keep them synchronized. Do not blindly upgrade packages or change the package manager.

Do not add Bootstrap or another competing styling framework. Do not add hosting-specific tooling until the hosting target requires it.

## 4. Design rules

Use Bukana Brilliant Schools' three-colour identity:
- Primary green: `#0D8215`
- Deep green: `#094F1B`
- Yellow accent: `#F2C94C`
- White: `#FFFFFF`
- Warm neutral: `#F4F5EF`
- Main text: `#172018`
- Deep charcoal: `#171B17`

Green leads. White supports readability but must not dominate the entire site. Yellow is a restrained accent. Follow `docs/DESIGN_SYSTEM.md`.

## 5. Product and content rules

The site serves parents and guardians researching the school, considering admission, or seeking official information.

Never invent testimonials, names, faces, results, rankings, fees, facilities, policies, opening hours, or contact details. Do not present stock imagery as a photo of the actual school. Keep unverified values clearly marked as pending or omit them. Centralize owner-dependent values.

## 6. Engineering standards

- Use reusable components with clear responsibilities.
- Use semantic HTML and accessible names.
- Use real links for navigation and buttons for actions.
- Support keyboard navigation and visible focus.
- Ensure mobile navigation opens, closes, closes on Escape, and closes after navigation.
- Respect `prefers-reduced-motion`.
- Provide appropriate image alt text and dimensions.
- Handle unknown routes with a useful 404 page.
- Ensure direct route visits and refreshes work on the selected host.
- Keep SEO metadata meaningful and page-specific.
- Do not add analytics, trackers, or third-party scripts without approval.

### Critical entry-point, rendering, and styling rules

- A production blank-screen regression was traced in the current source to `SiteFooter.jsx` calling `cn(...)` without importing `cn`. Because the footer renders on every route, this causes a JavaScript ReferenceError during React rendering and can leave the entire page white. Keep the `cn` import from `@/lib/utils.js`.
- Also keep explicit imports for every component used by a page: `AcademicsPage.jsx` uses `Button`, and `ContactPage.jsx` uses `TemporaryImage`. Missing imports can cause route-specific runtime failures.
- Tailwind CSS 4 must be loaded with `@import "tailwindcss";` in `src/styles/index.css`. Importing only `tw-animate-css` does not generate the project's Tailwind utility classes.
- Do not rely on a successful Vite bundle alone to detect undefined identifiers. Run lint, build, smoke checks, and inspect the actual rendered application whenever possible.

### Critical entry-point and styling rule

- `src/main.jsx` is the browser entry point. It must import both the React app and the global stylesheet: `import './styles/index.css';`.
- The global stylesheet is required for Tailwind CSS 4 generation, the brand tokens, base styles, and reduced-motion rules. Do not remove this import during refactors.
- After changing entry-point or CSS wiring, run a production build and the smoke test. Confirm the built `dist/index.html` references both generated JavaScript and CSS assets.
- A page that renders without the global stylesheet may lose its layout and styling. A completely blank page can also indicate a JavaScript runtime or asset-loading failure; do not claim the CSS import is the sole cause without checking browser Console and Network.

## 7. Forms and integrations

A visual form is not a functioning form. Never simulate successful submission. Show success only after a real service confirms receipt. Do not add a database, authentication, CMS, payment system, or student portal without explicit approval.

## 8. Workflow expectations

1. Read documentation and inspect the current repository.
2. Report existing state and propose a bounded plan.
3. Implement a coherent feature group at a time.
4. Run the production build and relevant tests after meaningful changes.
5. Inspect the rendered site at desktop and mobile sizes when browser tooling is available.
6. Check browser Console and Network when investigating blank screens.
7. Fix regressions before declaring a batch complete.
8. Update documentation and summarize changed files, checks, results, and known limitations.

Do not silently change approved design or scope. Do not claim tests passed when they were not run. Do not overwrite owner assets or deploy to production without approval.

## 9. Required verification

Before marking the project ready for review:
- `npm ci` completes using the committed lockfile.
- `npm run build` passes.
- `npm run test:smoke` passes.
- All routes load directly and refresh correctly on the selected host.
- Navigation works with mouse, touch, and keyboard.
- Mobile layouts have no horizontal overflow.
- Images load and have sensible fallbacks.
- Buttons and links have valid destinations.
- Forms do not claim success without a real submission service.
- Reduced-motion preferences are respected.
- SEO metadata is present.
- No obvious browser console or network errors remain.

If a check cannot be run, explicitly state that it remains unverified.

## 10. Deployment and blank-screen diagnosis

The current deployment target is being evaluated through Cloudflare Pages. Do not assume deployment success or modify DNS without owner approval.

For a Cloudflare Pages deployment:
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm ci` when a lockfile exists.
- Verify the exact branch and commit selected by Cloudflare.
- Test the Cloudflare-provided URL before attaching a custom domain.
- Test the home page and a nested route.

If the site is blank, do not immediately rewrite components or change hosting configuration. Inspect:
1. Cloudflare build/deployment logs.
2. Browser Console for runtime errors.
3. Network responses for `index.html`, JS bundles, and CSS bundles.
4. Whether the deployed HTML points to valid asset paths and the correct build output.
5. Whether the current source passes `npm run build` and `npm run test:smoke`.

Record the observed error and its evidence before making a follow-up fix. See `docs/DEPLOYMENT.md`.

## 11. Definition of done

A task is complete only when implementation matches approved requirements, relevant documentation is updated, the production build and required tests pass (or are explicitly marked pending), unrelated functionality remains untouched, and the final report states what changed and what remains unverified.

The goal is a coherent, high-quality Bukana Brilliant Schools website—not merely a page that compiles.
