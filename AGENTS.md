# Bukana Brilliant Schools — Agent Instructions

## Mission
Build and maintain a professional, production-quality multi-page school website for Bukana Brilliant Schools.

## Mandatory rules
- Treat `docs/SITE_PLAN.md` as the source of truth for page structure, UX, content direction and requirements.
- Treat `docs/DESIGN_REFERENCE.md` as the source of truth for the visual direction.
- The supplied EduPro repository is a design/information-architecture reference only. Do not copy its branding, text, code, or implementation.
- Do not turn this project into a single-page website.
- Do not use hardcoded Tailwind utility classes as the project's styling architecture.
- Do not use the Tailwind CDN.
- Prefer semantic HTML, external CSS, CSS custom properties/design tokens, and vanilla JavaScript.
- Keep branding tokens centralized so the primary color can be changed globally.
- Do not invent real school facts. Clearly mark information that requires confirmation.
- Do not create fake backend functionality, fake submissions, fake authentication, fake payments, or fake admin data.
- Keep the current phase focused on the public-facing school website. Do not build a school management system unless explicitly requested.
- Do not introduce React, Vue, Angular, Next.js, or another framework unless explicitly requested.
- Avoid unnecessary dependencies.
- Ensure all pages work on mobile, tablet and desktop.
- All navigation links must point to real implemented pages.
- Every interactive control must either work or be clearly identified as a demo/placeholder.
- Use accessible labels, keyboard navigation, visible focus states, semantic landmarks and appropriate contrast.
- Optimize images and avoid unnecessarily huge assets.
- Do not overwrite working features to solve unrelated problems.

## Before coding
1. Read this file.
2. Read `docs/SITE_PLAN.md`.
3. Read `docs/DESIGN_REFERENCE.md`.
4. Inspect the existing repository before modifying anything.
5. Identify reusable components/patterns before duplicating markup.

## After coding
- Check every page and navigation route.
- Check responsive layouts.
- Check console errors.
- Check missing assets and broken links.
- Check forms and interactive elements.
- Check that no Tailwind CDN or hardcoded Tailwind utility architecture was introduced.
- Update documentation when architecture or requirements materially change.
