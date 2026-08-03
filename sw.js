// Wallet-Tracer service worker — caches the app shell only.
// Live API calls (Blockscout, etc.) always go to the network.
// Site is now split: "/" (index.html) is the public landing page,
// "/app.html" is the actual tool — the PWA's start_url points at app.html
// directly so the installed home-screen icon opens the tool, not the landing page.
const CACHE_NAME = 'wallet-tracer-v34';
const APP_SHELL = [
  '/',
  '/index.html',
  '/app.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only intercept same-origin GET requests that are ACTUALLY part of the
  // app shell. Everything else — Breakpoint's page, an OAuth redirect with
  // a ?code=... query string, any page added later that this SW was never
  // told about — passes straight to the network untouched. The previous
  // version intercepted every same-origin GET regardless of whether it was
  // in APP_SHELL, which meant it was trying to cache-then-network-fetch
  // pages it never precached (like the Dropbox sign-in redirect back to
  // this site). When that fetch had any hiccup, the fallback resolved to
  // `undefined` (no cached entry existed to fall back to) — and
  // event.respondWith(undefined) is invalid, which is exactly what Safari
  // was surfacing as "FetchEvent.respondWith received an error: Returned
  // response is null."
  const isAppShellRequest = event.request.method === 'GET'
    && url.origin === self.location.origin
    && APP_SHELL.includes(url.pathname);
  if (!isAppShellRequest) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached || fetch(event.request)); // last resort: try the network directly rather than ever resolving to undefined
      return cached || networkFetch;
    })
  );
});
