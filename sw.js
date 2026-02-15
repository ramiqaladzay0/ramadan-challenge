const CACHE_NAME = 'ramadan-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// کاتێک ئەپەکە دادەبەزێنرێت
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// بۆ ئەوەی ئەپەکە بە ئۆفلاینیش کار بکات
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

// گوێگرتن لە نۆتفیکەیشن
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
