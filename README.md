# Bukana Brilliant Schools Website

Professional multi-page school website demo for Bukana Brilliant Schools.

## Important documentation

Before coding or modifying this project, read:

1. `AGENTS.md`
2. `docs/SITE_PLAN.md`
3. `docs/DESIGN_REFERENCE.md`

These documents are written to be usable by different coding agents and are the project's working specification.

## Design reference

The supplied EduPro repository is used only as a visual/information-architecture reference:

https://github.com/sharonbrainacademy-stack/edupro-school-template

## Technical direction

Preferred stack:
- HTML
- CSS (design tokens via CSS custom properties)
- Vanilla JavaScript
- Vite (optional, for dev server and build)

The project must NOT use Tailwind CDN or hardcoded Tailwind utility classes as its styling architecture.

Use maintainable CSS with centralized design tokens.

## Brand

Primary color: `#0d8215`

The brand color is subject to change, so keep it centralized in `assets/css/variables.css`.

## Development

### Prerequisites

- Node.js 18+

### Install

```bash
npm install
```

### Run (dev server)

```bash
npm run dev
```

Opens at http://localhost:3000.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview production build

```bash
npm run preview
```

### Without Vite

Open any `.html` file directly in a browser, or serve the project root with any static file server:

```bash
npx serve .
```

## Current phase

This repository is intentionally prepared for a fresh coding-agent implementation.

Scope:
- public school website
- responsive UI
- admissions information
- academics
- school life/gallery
- news/announcements
- contact/enquiry

Not currently in scope:
- authentication
- admin dashboard
- student portal
- parent portal
- teacher portal
- payment system
- result management
- full school management system

## Data policy

Do not invent official school facts. Phone, address, email, leadership, fees, curriculum, accreditation and similar details must be verified before being presented as factual.

## Development

The coding agent should choose a simple maintainable setup and document the exact install/build/run commands after implementation.


## Offline and navigation behavior

The public site uses a service worker (`/sw.js`) to cache the app shell and demo image assets. Same-origin page navigation is handled as soft navigation with the History API and View Transitions API where supported, so the header/footer/runtime are not torn down and rebuilt on every click. Full page URLs remain valid and work without JavaScript.

See `docs/IMAGE_SOURCES.md` for the current demo photography sources and the AVIF production-image strategy.
