# Kilo Code Handoff — Bukana Brilliant Schools

## Assignment

Build the Bukana Brilliant Schools public website as a new, original project in this repository.

This repository was intentionally created empty and has now received its product and technical documentation. Treat it as a fresh project. Do not approach it as a rebuild, migration, port, restoration, or continuation of any other website. Do not import another project's components, page structure, business logic, assets, naming, or assumptions.

## Mandatory reading

Before writing application code, read:
1. `AGENTS.md`
2. `docs/PROJECT.md`
3. `docs/SITE_SPEC.md`
4. `docs/SCOPE.md`
5. `docs/DESIGN_SYSTEM.md`
6. `docs/CONTENT.md`
7. `docs/ARCHITECTURE.md`
8. `docs/IMPLEMENTATION.md`
9. `docs/DEPLOYMENT.md`
10. `docs/OWNER_CONTENT_CHECKLIST.md`

These files define the product and are the source of truth. If an implementation choice is not defined, choose the simplest maintainable option that fits the documentation and record the decision.

## Environment and dependencies

The owner reports:
- Node.js `v24.21.0`
- npm `12.2.1`

At the beginning, run:
```bash
node --version
npm --version
```

Do not change the owner's Node.js or npm installation. Check compatibility before selecting or installing package versions.

Use the documented stack:
- React 19
- Vite 7
- JavaScript / JSX
- Tailwind CSS 4
- shadcn/ui selectively
- Motion
- Lucide React
- clsx
- tailwind-merge
- class-variance-authority
- tw-animate-css

Do not introduce Bootstrap or an unnecessary competing framework. Keep the package manifest and lockfile consistent.

## Design direction

Implement the dark monochrome design system exactly as documented:
- `#070707` page foundation.
- `#f5f5f5` primary text and key light surfaces.
- `#111111` cards and dark surfaces.
- Muted greys for secondary content.
- Subtle white borders.
- No predominantly white page template.
- No unrelated accent colour without owner approval.

Make the site feel like a welcoming, credible, contemporary school. Use appropriate school imagery and clear educational storytelling. Do not make the website look like a generic corporate template.

## Product requirements

Build the agreed pages:
- Home
- About
- Academics (Creche, Nursery, Primary)
- Admissions
- School Life / Gallery
- Contact / Find Us
- Branded 404

Include News & Events only if there is real approved content to populate and maintain it.

Follow the page-level requirements in `docs/SITE_SPEC.md`. The homepage must communicate the school identity and the three education levels clearly, and make the admissions path easy to find.

## Content and asset restrictions

Do not fabricate:
- School history, founding year, mission, vision, values, or leadership.
- Curriculum, teaching methods, age ranges, class structure, or school policies.
- Fees, admission requirements, opening dates, or availability.
- Facilities, awards, accreditation, results, rankings, or testimonials.
- Phone numbers, WhatsApp, email, opening hours, or social media accounts.
- News, events, or announcements.

The known address is listed in `docs/CONTENT.md` and must be reconfirmed by the owner before production.

Use temporary design imagery only when clearly treated as temporary. Do not imply stock images depict the actual school. Do not publish identifiable student photographs without documented approval and appropriate parent/guardian consent.

Keep owner-dependent content centralized in data modules so it can be replaced easily.

## Implementation sequence

Work in these bounded stages:

### Stage 1 — Foundation
- Inspect the empty/current repository.
- Create the Vite + React app.
- Configure Tailwind CSS 4 and shadcn/ui.
- Establish global design tokens and base styles.
- Configure aliases and project structure.
- Add metadata, favicon placeholder, and essential public files.
- Confirm dev server and production build.

### Stage 2 — Shared experience
- Create shared header, desktop navigation, mobile navigation, footer, page shell, buttons, cards, and reusable section headings.
- Add route handling and 404 behavior.
- Add page-specific metadata.
- Ensure direct routes and refresh behavior work in local preview.

### Stage 3 — Main pages
- Build Home.
- Build About.
- Build Academics.
- Build Admissions.
- Build School Life / Gallery.
- Build Contact / Find Us.
- Add News only if content is available.

### Stage 4 — Polish and verification
- Add restrained Motion interactions.
- Respect reduced-motion preferences.
- Verify keyboard navigation and visible focus.
- Verify mobile navigation including Escape behavior.
- Check layouts at small phone, common phone, tablet, laptop, and desktop widths.
- Check links, images, metadata, and route refresh.
- Add and run a smoke test.
- Fix build, console, responsive, and interaction defects.

## Important behavior

- Do not create a fake admissions form that reports successful submission.
- Do not add a backend, database, CMS, admin dashboard, authentication, parent portal, student portal, payments, or school management features.
- Do not add third-party analytics or tracking.
- Do not deploy or change DNS.
- Do not add unrelated features.
- Do not rewrite the documentation to fit an implementation shortcut.
- Update relevant documentation when a real approved decision changes.

## Completion report

When implementation is ready for review, report:
1. What was built.
2. Main files and routes added.
3. Dependencies added and why.
4. Commands run.
5. Build and smoke-test results.
6. Responsive and accessibility checks completed.
7. Any unresolved defects.
8. Owner information/assets still required.

Do not claim completion for checks that were not run. Do not deploy to production.
