export default {
  async fetch(request, env) {
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
