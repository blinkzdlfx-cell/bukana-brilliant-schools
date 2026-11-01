# Agent Instructions — Bukana Brilliant Schools

## 1. Project identity and operating mode

You are working on **Bukana Brilliant Schools**, an original, independently defined school website project.

Build the structure, architecture, components, content model, routes, and visual experience specifically for Bukana Brilliant Schools. Follow the requirements and decisions recorded in this repository's project documentation.

The project has its own source of truth in this repository:
- `PROJECT.md` — project identity and goals (see `docs/PROJECT.md`)
- `docs/SITE_SPEC.md` — detailed experience and functional requirements
- `docs/SCOPE.md` — included, deferred, and excluded features
- `docs/DESIGN_SYSTEM.md` — visual rules and design tokens
- `docs/CONTENT.md` — content model and factual-content rules
- `docs/ARCHITECTURE.md` — proposed technical structure
- `docs/IMPLEMENTATION.md` — delivery phases and verification
- `docs/DEPLOYMENT.md` — deployment assumptions and release checks
- `docs/OWNER_CONTENT_CHECKLIST.md` — owner-supplied information and assets

Read the relevant documents before planning or changing the application. If instructions conflict, follow this order:
1. Explicit, current instruction from the project owner.
2. This file (`AGENTS.md`).
3. The latest approved decision recorded in the project documentation.
4. Existing implementation, only where it does not contradict the above.

When a new decision changes scope, design, architecture, content, or deployment, update the relevant documentation in the same work batch.

## 2. Project purpose

Create a polished, trustworthy, modern, responsive website for a school serving:
- Creche
- Nursery
- Primary

The public-facing identity is:
- School name: **Bukana Brilliant Schools**
- Tagline: **Be a star @ BBS**
- Website domain: `bukanabrilliantschools.com`

The website should communicate the school's identity, learning environment, educational levels, admissions pathway, school life, and official contact channels. It should help parents and guardians understand the school and take a clear next step.

Do not invent school facts. See `docs/CONTENT.md`.

## 3. Technical baseline

Use the established project stack and keep it consistent unless the owner approves a change:

- Node.js runtime: owner currently reports **v24.21.0**.
- npm: owner reports **12.2.1**; verify the actual local output with `npm --version` before dependency installation or lockfile changes. Do not assume npm's version from Node's version.
- React 19
- Vite 7
- JavaScript with JSX (do not introduce TypeScript without approval)
- Tailwind CSS 4
- `@tailwindcss/vite`
- shadcn/ui as a component foundation where useful
- Motion (`motion`, imported from `motion/react`)
- Lucide React
- `clsx`
- `tailwind-merge`
- `class-variance-authority`
- `tw-animate-css`

Keep package versions compatible with Node.js 24.21.0. The dependency manifest and lockfile are the definitive record of installed versions. Do not blindly upgrade packages or use floating/unpinned versions outside the version ranges approved in the package manifest.

Do not add Bootstrap or a second competing styling framework. Do not add dependencies for functionality that can be implemented cleanly with the existing stack.

Before installing or updating dependencies:
1. Read `package.json` and the lockfile.
2. Check the Node/npm versions available in the current environment.
3. Check package engine requirements and compatibility.
4. Preserve the existing package manager and lockfile.
5. Explain any dependency change in the implementation notes.

Do not change the Node runtime, npm version, or global machine configuration. Do not add an `engines` constraint that excludes the owner's confirmed Node 24 runtime.

## 4. Design rules

Use Bukana Brilliant Schools' own green-and-yellow school identity:
- Primary school green: `#0D8215`
- Deep supporting green: `#094F1B`
- Small yellow accent: `#F2C94C`
- Deep charcoal: `#171B17`
- Warm light surface: `#F4F5EF`
- Main text on light surfaces: `#172018`
- White: `#FFFFFF`, used selectively rather than as the default for every section.

Green is the dominant brand colour. Yellow is a restrained accent for small highlights, selected icons, badges, underlines, and occasional emphasis. Do not allow yellow to compete with green or become a large background colour. Use deep green and charcoal for visual depth, and warm light surfaces to keep pages readable without making the site predominantly white.

The school website must feel welcoming, credible, safe, energetic, and educational, with a distinctive identity appropriate for Creche, Nursery, and Primary education.

Use:
- Strong editorial typography and readable line lengths.
- Intentional section spacing and clear hierarchy.
- High-quality, relevant school/learning imagery.
- Green-led brand moments balanced with warm neutral surfaces.
- Restrained gradients and overlays for legibility.
- Rounded surfaces and borders consistently.
- Clear focus, hover, active, disabled, and loading states.
- Motion only where it improves comprehension or polish.
- Mobile-first layouts that are fully usable on small screens.

Avoid:
- Making every section green or every section white.
- Large yellow backgrounds or excessive yellow decoration.
- Introducing unrelated brand colours.
- Excessive glassmorphism, gradients, glow, shadows, or decorative shapes.
- Animating every element.
- Tiny text, low contrast, overcrowded sections, and oversized empty space.
- Fake statistics, fabricated testimonials, or unverified school claims.

See `docs/DESIGN_SYSTEM.md` for exact tokens and application guidance.

## 5. Product and content rules

The site is for a school, not a generic education SaaS product.

Core audiences:
- Parents and guardians researching the school.
- Families considering admission.
- Existing parents looking for school information.
- Visitors who need directions or official contact details.

Core educational levels:
- Creche
- Nursery
- Primary

Use the tagline exactly as supplied: **Be a star @ BBS**.

Use the known address only as recorded in the project documentation. Treat phone, WhatsApp, email, opening hours, admission fees, curriculum details, school history, facilities, staff biographies, awards, accreditations, and social media accounts as unverified until the owner confirms them.

Never:
- Invent testimonials, names, faces, results, rankings, fees, facilities, or policies.
- Present stock imagery as a photograph of the actual school.
- Claim an enquiry was submitted unless a real backend/email integration confirms success.
- Display placeholder contact details as if they were official.
- create fake news or event dates.

When verified content is missing, use clearly labelled editorial placeholders or omit the claim. Keep owner-dependent values centralized so they can be replaced without editing many components.

## 6. Engineering standards

- Build reusable components with clear responsibilities.
- Keep page content and structured data separate from presentation.
- Avoid a giant monolithic application component.
- Use semantic HTML and accessible names.
- Use real links for navigation and buttons for actions.
- Support keyboard navigation and visible focus.
- Ensure mobile navigation opens, closes, closes on Escape, and closes after navigation.
- Respect `prefers-reduced-motion`.
- Provide descriptive alt text for meaningful images and empty alt text for decorative images.
- Lazy-load below-the-fold images and use asynchronous decoding where appropriate.
- Reserve image dimensions/aspect ratios to reduce layout shift.
- Handle unknown routes with a useful 404 page.
- Ensure direct URL visits and page refreshes work for every route under the chosen SPA hosting configuration.
- Keep SEO metadata page-specific and meaningful.
- Do not add analytics, trackers, cookies, or third-party scripts without approval.

## 7. Forms and integrations

A visual form is not a functioning form. Do not simulate successful submission.

If an enquiry/admissions form is included:
- Validate required fields and formats.
- Provide accessible labels and useful inline errors.
- Prevent accidental duplicate submissions.
- Show success only after a real service confirms receipt.
- If no submission service has been configured, clearly mark the form as a prototype or use an approved direct contact action instead.
- Do not collect sensitive student or guardian information unnecessarily.
- Do not collect health, identity, or other sensitive information through an unapproved form.

Do not add a database, authentication, admin portal, CMS, payment system, or student portal unless the owner explicitly approves a later scope change.

## 8. Workflow expectations

Work in deliberate, reviewable phases:
1. Read documentation and inspect the current repository.
2. Report the existing state and propose a bounded plan.
3. Establish the foundation and verify it.
4. Implement one coherent feature group at a time.
5. Run build and relevant tests after each meaningful batch.
6. Inspect the actual rendered site at desktop and mobile sizes when browser tooling is available.
7. Fix regressions before declaring a batch complete.
8. Update documentation and summarize changed files, checks, results, and known limitations.

Do not:
- Replace the whole project in one uncontrolled code dump.
- silently change approved design or scope.
- claim tests passed when they were not run.
- ignore build errors, console errors, broken links, or responsive defects.
- overwrite owner-provided assets or data without checking first.
- deploy to production without explicit approval.

## 9. Required verification

Before marking the project ready for review:
- `npm run build` passes.
- Any configured smoke tests pass.
- All routes load directly and refresh correctly.
- Navigation works with mouse, touch, and keyboard.
- Mobile layouts have no horizontal overflow.
- Images load and have sensible fallbacks.
- Buttons and links have valid destinations.
- Forms do not claim success without a real submission service.
- Reduced-motion preferences are respected.
- SEO title, description, and social metadata are present.
- No obvious browser console errors remain.

## 10. Definition of done

A task is complete only when:
- The implementation matches the approved requirements.
- The relevant documentation is updated.
- The production build succeeds.
- Required tests and manual checks are completed or clearly identified as pending.
- No unrelated functionality has been changed.
- The final report states what changed, what was verified, and what remains.

The goal is a coherent, high-quality Bukana Brilliant Schools website—not merely a page that compiles.
