const CACHE_VERSION = 'bukana-v2';

const REMOTE_IMAGES = [
  'https://upload.wikimedia.org/wikipedia/commons/0/0c/School_with_a_group_of_young_african_children_1.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/29/6.Children_Students.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/b/bc/Primary_students_in_Chati.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/7/7f/Nigeria_school_children_%2814373239383%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/d/d0/An_African_class.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/87/Africa_student_in_classroom.jpg',
  'https://images.unsplash.com/photo-1689973849511-e1995810cf7a?auto=format&fit=crop&fm=jpg&q=78&w=1200'
];

const APP_SHELL = [
  '/',
  '/index.html',
  '/about.html',
  '/academics.html',
  '/admissions.html',
  '/school-life.html',
  '/gallery.html',
  '/news.html',
  '/contact.html',
  '/assets/css/variables.css',
  '/assets/css/base.css',
  '/assets/css/components.css',
  '/assets/css/pages.css',
  '/assets/js/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      .then(warmRemoteImages)
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    if (REMOTE_IMAGES.indexOf(request.url) !== -1) {
      event.respondWith(cacheFirstRemote(request));
    }
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
  } else {
    event.respondWith(cacheFirst(request));
  }
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_VERSION);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return (await cache.match(request)) || (await cache.match('/index.html')) || Response.error();
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_VERSION);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return Response.error();
  }
}

async function warmRemoteImages() {
  const cache = await caches.open(CACHE_VERSION);
  await Promise.all(REMOTE_IMAGES.map(async url => {
    try {
      const request = new Request(url, { mode: 'no-cors' });
      const response = await fetch(request);
      if (response) await cache.put(request, response);
    } catch {}
  }));
}

async function cacheFirstRemote(request) {
  const cache = await caches.open(CACHE_VERSION);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response) await cache.put(request, response.clone());
    return response;
  } catch {
    return Response.error();
  }
}
