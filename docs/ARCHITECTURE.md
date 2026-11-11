# Technical Architecture — Bukana Brilliant Schools

## 1. Architecture goals

Build a small, maintainable, performant React website with clear separation between:
- Application entry and route selection.
- Shared layout.
- Page-level composition.
- Reusable UI components.
- School content data.
- Styling tokens and utilities.

The initial product is a frontend informational website. Do not add backend infrastructure until an approved feature requires it.

## 2. Runtime and framework

- Node.js 24.21.0 is the owner's reported runtime.
- npm version is reported as 12.2.1; verify with `npm --version`.
- React 19.
- Vite (use the version pinned in `package.json` and `package-lock.json`).
- JavaScript / JSX.
- Tailwind CSS 4 via `@tailwindcss/vite`.

Check compatibility before changing package versions. Do not change the owner's runtime or global environment.

## 3. Dependencies

The intended dependency family is:

### Runtime dependencies
- `react`
- `react-dom`
- `motion`
- `lucide-react`
- `clsx`
- `tailwind-merge`
- `class-variance-authority`
- `tailwindcss`
- `tw-animate-css`

### Development dependencies
- `vite`
- `@vitejs/plugin-react`
- `@tailwindcss/vite`
- `shadcn`

Deployment tooling such as Wrangler is only required if the approved hosting target uses Cloudflare Workers. Do not add hosting-specific tooling before deployment is decided.

The actual `package.json` and lockfile are authoritative once created. Keep versions compatible with Node.js 24.21.0.

## 4. Routing

Choose a simple routing strategy appropriate to the final page count. A lightweight pathname-based router is acceptable for a small static site; a dedicated routing dependency should only be introduced if nested routes, route-level data loading, or other real requirements justify it.

Initial route map:
- `/`
- `/about`
- `/academics`
- `/admissions`
- `/school-life` or `/gallery` (choose one canonical path and use it consistently)
- `/contact`
- `/news` only if approved and supplied with maintained content
- `*` for not found

All routes must support direct entry and refresh on the selected hosting platform.

## 5. Suggested source organization

A possible structure:

```text
src/
  app/
    App.jsx
    routes.js
  components/
    layout/
      SiteHeader.jsx
      MobileNavigation.jsx
      SiteFooter.jsx
      PageShell.jsx
    sections/
      HeroSection.jsx
      SectionHeading.jsx
      EducationLevelGrid.jsx
      AdmissionsCTA.jsx
      ContactSummary.jsx
    ui/
      button.jsx
      card.jsx
  pages/
    HomePage.jsx
    AboutPage.jsx
    AcademicsPage.jsx
    AdmissionsPage.jsx
    SchoolLifePage.jsx
    ContactPage.jsx
    NotFoundPage.jsx
  data/
    school.js
    academics.js
    navigation.js
    gallery.js
  lib/
    utils.js
  styles/
    index.css
  main.jsx
public/
  images/
  favicon.svg
  robots.txt
docs/
```

This is a proposed organization, not a requirement to create empty folders or unnecessary abstractions. Keep the final structure proportional to the application.

## 6. Styling

- Tailwind CSS 4 is the primary styling system.
- Global stylesheet owns design tokens, base resets, font setup, and reduced-motion defaults.
- shadcn/ui is the shared component foundation. `components.json` configures the New York style, JavaScript/JSX, Tailwind CSS 4 stylesheet path, and project aliases.
- Shared shadcn primitives live in `src/components/ui`; use `cn` from `src/lib/utils.js` for class composition. Extend variants rather than building parallel custom button/card systems.
- The homepage hero's `HeroRopeStrip` is a focused presentation component backed by `src/data/learning-images.js`; it uses local enhanced school photos, CSS motion, and reduced-motion handling.
- No Bootstrap.
- Avoid a large custom CSS framework.
- Keep the approved green, white, and restrained yellow brand colours, plus supporting deep-green and neutral tokens, centralized in the global stylesheet. Follow the balance and contrast rules in `docs/DESIGN_SYSTEM.md`; do not let white become excessive or yellow dominate.

## 7. Content architecture

Store school profile, navigation, education-level information, admissions content, contact values, and gallery metadata in structured modules.

Do not duplicate the same contact details or school facts across page components.

Keep unverified fields empty or marked pending in development data. Never display internal TODO strings as factual public copy.

## 8. Images

- Prefer optimized local assets in `public/images` when owner-provided.
- External image URLs are temporary unless approved for production.
- Provide width/height or aspect-ratio constraints.
- Lazy-load below-the-fold content images.
- Use descriptive alt text.
- Avoid embedding large base64 images in source files.

## 9. Forms and backend boundary

No backend is required for the first informational release.

If an admissions enquiry form is approved:
- Decide the actual submission provider first.
- Do not store sensitive student data without a security/privacy review.
- Use server-side validation and spam protection where applicable.
- Do not expose secret keys in browser code.
- Do not show a success state until delivery is confirmed.

## 10. Quality and test strategy

- Vite production build.
- Smoke checks for route output and key document metadata.
- Manual browser testing at phone, tablet, and desktop sizes.
- Keyboard navigation checks.
- Reduced-motion check.
- Broken link and image check.
- Direct-route refresh check on the real hosting platform.
- Console and network error review.

## 11. Architecture decision rule

Prefer the simplest architecture that meets the approved requirements. Do not introduce a database, CMS, global state library, router, form service, analytics, or UI framework without a concrete need and owner approval.
