const MAINTENANCE_HTML = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"robots\" content=\"noindex, nofollow, noarchive\">\n  <meta name=\"theme-color\" content=\"#176b3a\">\n  <title>Temporarily Unavailable | Bukana Brilliant Schools</title>\n  <style>\n    :root{color-scheme:light; font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif}\n    *{box-sizing:border-box}\n    body{margin:0;min-height:100vh;display:grid;place-items:center;padding:28px;background:radial-gradient(ellipse at 50% 0%,#e7f4e9 0,transparent 58%),#f7faf7;color:#173b27}\n    main{width:min(100%,680px);text-align:center;padding:clamp(30px,7vw,68px);background:rgba(255,255,255,.92);border:1px solid #dcebdd;border-radius:28px;box-shadow:0 24px 80px rgba(20,74,42,.09)}\n    .mark{width:64px;height:64px;margin:0 auto 24px;display:grid;place-items:center;border-radius:20px;background:#176b3a;color:#fff;font-size:30px;box-shadow:0 8px 22px rgba(23,107,58,.2)}\n    .brand{margin:0;color:#176b3a;font-size:13px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}\n    .tagline{margin:8px 0 0;color:#a58a42;font-size:12px;font-weight:700;letter-spacing:.12em}\n    h1{margin:36px 0 14px;color:#153d27;font-size:clamp(32px,6vw,48px);line-height:1.08;letter-spacing:-.045em}\n    .message{max-width:490px;margin:0 auto;color:#5b6d60;font-size:16px;line-height:1.8}\n    .rule{width:52px;height:3px;margin:30px auto;background:#d8b85b;border-radius:99px}\n    .foot{margin:0;color:#7b8a7f;font-size:13px}\n  </style>\n</head>\n<body>\n  <main aria-labelledby=\"maintenance-title\">\n    <div class=\"mark\" aria-hidden=\"true\">✦</div>\n    <p class=\"brand\">Bukana Brilliant Schools</p>\n    <p class=\"tagline\">Be a star @ BBS</p>\n    <h1 id=\"maintenance-title\">We’ll be back soon.</h1>\n    <p class=\"message\">Our website is temporarily unavailable while we carry out some improvements. We’re working to make your next visit even better.</p>\n    <div class=\"rule\" aria-hidden=\"true\"></div>\n    <p class=\"foot\">Thank you for your patience.</p>\n  </main>\n</body>\n</html>";

function isMaintenanceEnabled(env) {
  return String(env.MAINTENANCE_MODE ?? '').trim().toLowerCase() === 'true';
}

function maintenanceResponse(request) {
  const headers = {
    'content-type': 'text/html; charset=utf-8',
    'cache-control': 'no-store, no-cache, must-revalidate',
    'x-robots-tag': 'noindex, nofollow, noarchive',
    'x-content-type-options': 'nosniff',
    'referrer-policy': 'strict-origin-when-cross-origin',
  };

  return new Response(request.method === 'HEAD' ? null : MAINTENANCE_HTML, {
    status: 503,
    statusText: 'Service Unavailable',
    headers,
  });
}

export default {
  async fetch(request, env) {
    // This check intentionally runs before favicon handling or asset lookup so
    // every public path is covered while maintenance mode is enabled.
    if (isMaintenanceEnabled(env)) {
      return maintenanceResponse(request);
    }

    const url = new URL(request.url);

    // Browsers and some crawlers request /favicon.ico automatically.
    // Redirect to the existing SVG instead of sending a missing asset
    // through the SPA fallback.
    if (url.pathname === '/favicon.ico') {
      return Response.redirect(new URL('/favicon.svg', url), 301);
    }

    // Serve built static assets first.
    try {
      const asset = await env.ASSETS.fetch(request);
      if (asset.status !== 404) return asset;
    } catch (error) {
      console.error('Static asset lookup failed:', error);
    }

    // Only document navigations should receive the SPA entry point.
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Not found', { status: 404 });
    }

    try {
      const fallbackUrl = new URL('/index.html', url);
      const fallbackRequest = new Request(fallbackUrl, {
        method: request.method,
        headers: request.headers,
      });
      return await env.ASSETS.fetch(fallbackRequest);
    } catch (error) {
      console.error('SPA document fallback failed:', error);
      return new Response('The website is temporarily unavailable.', {
        status: 503,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'cache-control': 'no-store',
        },
      });
    }
  },
};
