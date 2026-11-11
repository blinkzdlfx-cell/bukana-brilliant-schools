# Bukana Brilliant Schools

**Be a star @ BBS**

A responsive public website for Bukana Brilliant Schools, serving Creche, Nursery, and Primary education.

## Technology

- React 19
- Vite (the installed version is defined by `package.json` and `package-lock.json`)
- JavaScript / JSX
- Tailwind CSS 4 via `@tailwindcss/vite`
- shadcn/ui (New York style, configured in `components.json`)
- Motion
- Lucide React

The owner has reported Node.js `v24.21.0` and npm `12.2.1`. Verify the versions in your environment before installing dependencies:

```bash
node --version
npm --version
```

## UI components

Shared UI primitives live in `src/components/ui/` and follow shadcn/ui conventions. The root `components.json` configures the shadcn CLI for Vite, JavaScript/JSX, Tailwind CSS 4, and the repository aliases. Add or update primitives through the shadcn workflow, then adapt variants to the BBS design tokens. Avoid creating a separate custom UI kit.

The homepage hero includes a moving photographic rope strip built from approved local school images. It pauses on hover/focus and respects reduced-motion preferences.

Current shadcn/ui primitives: Button, Card, Input, Label, Textarea, Badge and Separator. The contact enquiry form uses the form primitives, and the gallery uses Badge. Components are copied into the project and themed with the school tokens; add new components only when a page needs them.

## Setup

```bash
npm ci
npm run dev
```

## Build and verify

Run these before pushing changes or deploying:

```bash
npm run build
npm run test:smoke
npm run lint
```

The smoke test expects a completed production build in `dist/`. It checks that the generated HTML, JavaScript bundle, and CSS bundle exist and that the HTML references the generated assets.

## Deployment

The site is a Vite-built React single-page application (SPA).

- Build command: `npm run build`
- Build output directory: `dist`
- Ensure the hosting platform serves the built files from `dist`.
- Ensure SPA fallback is configured so direct visits and refreshes on routes such as `/about` and `/admissions` return `index.html`.
- After deployment, open the root URL and at least one nested route. Check browser Console and Network for JavaScript exceptions, failed module requests, and missing assets.
- A successful build does not by itself prove that the deployed site renders correctly.

For Cloudflare Pages, connect the repository using the build command and output directory above, then verify the deployment URL before changing or attaching a custom domain. Do not change DNS or production hosting settings without the owner's approval.

## Agent instructions and project source of truth

Read [AGENTS.md](./AGENTS.md) and the relevant project documents before making changes:

- [Project definition](./docs/PROJECT.md)
- [Site specification](./docs/SITE_SPEC.md)
- [Scope](./docs/SCOPE.md)
- [Design system](./docs/DESIGN_SYSTEM.md)
- [Content rules](./docs/CONTENT.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [Implementation plan](./docs/IMPLEMENTATION.md)
- [Deployment plan](./docs/DEPLOYMENT.md)
- [Owner content checklist](./docs/OWNER_CONTENT_CHECKLIST.md)

When a fix changes implementation assumptions or reveals a deployment failure mode, update `AGENTS.md` and the relevant documentation in the same change.

## Content accuracy

Only publish school information confirmed by the owner. Do not invent fees, admission requirements, curriculum claims, facilities, staff details, testimonials, results, awards, opening hours, or contact information.

## Domain

Planned public domain: `bukanabrilliantschools.com`. Hosting and DNS configuration must be confirmed before production deployment.
