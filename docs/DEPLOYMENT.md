# Deployment Plan — Bukana Brilliant Schools

## 1. Current status

The production hosting provider has not yet been confirmed in this project documentation.

Planned domain:
- `bukanabrilliantschools.com`

Do not assume DNS access, hosting configuration, environment variables, or deployment credentials are available.

## 2. Application build

The expected static build output from Vite is:
- Build command: `npm run build`
- Output directory: `dist`

The final hosting provider must support serving a Vite-built single-page application and configuring route fallback to `index.html`, or the routing approach must be adapted.

## 3. Node and npm

Owner-reported local environment:
- Node.js: `24.21.0`
- npm: `12.2.1`

Verify actual runtime output before dependency installation or deployment:
```bash
node --version
npm --version
```

Do not downgrade or globally replace Node/npm as part of routine deployment.

## 4. Hosting decision

Possible static hosting providers may be evaluated when the owner confirms the preferred platform and account availability.

Before selecting a provider, check:
- Free-tier limits and current terms.
- Custom domain support.
- Build command and output directory.
- SPA fallback behavior.
- SSL certificate provisioning.
- Build minutes and bandwidth limits.
- Deployment rollback and preview support.

Do not add platform-specific config or dependencies until the target is chosen.

## 5. Environment variables

The initial informational website should not require secrets.

If an enquiry integration or external service is later approved:
- Document required variables.
- Keep private keys server-side.
- Never commit secrets.
- Never expose private keys through `VITE_*` variables.
- Provide a safe example environment file without real credentials.

## 6. Release checklist

- [ ] Owner has approved all public copy.
- [ ] Address and map destination are verified.
- [ ] Phone, WhatsApp, and email are verified.
- [ ] School imagery is owner-approved and usage permissions are confirmed.
- [ ] Student images have appropriate approval and consent.
- [ ] Admissions details and fees are verified if published.
- [ ] No placeholder or fabricated content remains.
- [ ] `npm run build` passes.
- [ ] Smoke tests pass.
- [ ] Direct route access and refresh work.
- [ ] Mobile and desktop browser checks pass.
- [ ] No critical console or network errors.
- [ ] Domain DNS points to the approved host.
- [ ] HTTPS works.
- [ ] Final production review is approved by the owner.

## 7. Deployment safety

Do not:
- Deploy to a production domain without approval.
- change DNS records without approval.
- commit credentials or secrets.
- claim a deployment is live without verifying the public URL.
- treat a successful local build as proof of production readiness.
