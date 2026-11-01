# Bukana Brilliant Schools

**Be a star @ BBS**

A modern, responsive public website for Bukana Brilliant Schools, serving Creche, Nursery, and Primary education.

## Project status

Project foundation and product documentation are being established. The repository is treated as a new, independent project with its own identity, architecture, design system, and school-specific requirements.

## Technology

The planned stack is:
- React 19
- Vite 7
- JavaScript / JSX
- Tailwind CSS 4
- shadcn/ui
- Motion
- Lucide React

The owner currently reports Node.js `v24.21.0` and npm `12.2.1`. Verify the installed versions locally before installing dependencies:

```bash
node --version
npm --version
```

## Documentation

Read these documents before implementation:

- [Agent instructions](./AGENTS.md)
- [Project definition](./docs/PROJECT.md)
- [Site specification](./docs/SITE_SPEC.md)
- [Scope](./docs/SCOPE.md)
- [Design system](./docs/DESIGN_SYSTEM.md)
- [Content rules and data](./docs/CONTENT.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [Implementation plan](./docs/IMPLEMENTATION.md)
- [Deployment](./docs/DEPLOYMENT.md)
- [Owner content checklist](./docs/OWNER_CONTENT_CHECKLIST.md)

## Development

Once the application foundation and package scripts are committed:

```bash
npm install
npm run dev
```

Build and verify:

```bash
npm run build
npm run test:smoke
```

The smoke-test command will be available once its script is implemented and documented.

## Important content rule

Only publish school information confirmed by the owner. Do not invent fees, admissions requirements, curriculum claims, facilities, staff details, testimonials, results, awards, opening hours, or contact information.

## Domain

Planned public domain: `bukanabrilliantschools.com`

Hosting and DNS configuration must be confirmed before production deployment.
