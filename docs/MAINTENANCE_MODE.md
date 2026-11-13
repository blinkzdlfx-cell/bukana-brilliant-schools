# Maintenance mode — Bukana Brilliant Schools

## Control

Maintenance mode is controlled independently on the Cloudflare Worker named `bukana-brilliant-schools`.

1. Open Cloudflare Dashboard → **Workers & Pages** → **bukana-brilliant-schools**.
2. Open **Settings** → **Variables and Secrets**.
3. Add or edit a **Text** variable named `MAINTENANCE_MODE`.
4. Set its value to `true` to show the maintenance page, or `false` to restore the full website.
5. Save and deploy the Worker configuration.

If the variable is absent, maintenance mode is off. The setting is case-insensitive, but use lowercase `true` and `false` for clarity.

## Behaviour

- The Worker is configured with `run_worker_first = true` and checks the setting before serving any asset or route.
- While enabled, every request—including the homepage, nested routes, favicon, and static assets—receives the Bukana-branded maintenance page.
- Responses use HTTP `503 Service Unavailable`, `Cache-Control: no-store`, and `X-Robots-Tag: noindex, nofollow, noarchive`.
- A `HEAD` request receives the same status and headers without a response body.
- The existing React app, assets, routes, and content remain unchanged and are served normally when the setting is false.

## Persistence

`wrangler.toml` sets `keep_vars = true` so a dashboard-managed maintenance setting is retained by later Wrangler deployments. This is a plain configuration value, not a secret.

This control affects only the `bukana-brilliant-schools` Worker. It does not change 846 Autos.
