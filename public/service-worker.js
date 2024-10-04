const CACHE_NAME = "job-swipe-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/logo192.png",
  "/logo512.png",
  "/static/js/bundle.js",
  "/static/js/main.js",
  "/styles.css",
  "/bookmarks",
  "/jobs",
];

// Install event: cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Immediately activate the new service worker
});

// Activate event: clear old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim(); // Claim clients immediately
});

// Fetch event: cache with network fallback
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cache if found, else fetch from network
      return (
        response ||
        fetch(event.request)
          .then((networkResponse) => {
            // Cache the fetched response dynamically
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          })
          .catch(() => {
            // Fallback logic (optional), like serving an offline page
            if (event.request.mode === "navigate") {
              return caches.match("/index.html");
            }
          })
      );
    })
  );
});
