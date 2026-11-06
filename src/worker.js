export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Serve static assets from dist/ (built by Vite)
    try {
      const asset = await env.ASSETS.fetch(request);
      if (asset.status !== 404) {
        return asset;
      }
    } catch {
      // fall through to SPA fallback
    }

    // Single-page app fallback: serve index.html so client-side routing
    // works on direct visits and refreshes of any route.
    return env.ASSETS.fetch(new URL('/index.html', request.url));
  },
};
