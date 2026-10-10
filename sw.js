const CACHE_NAME = 'saharaverse-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/register.html',
  '/trips.html',
  '/events.html',
  '/hosting.html'
];

// تثبيت ملفات التطبيق في الذاكرة
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('تم تخزين ملفات SaharaVerse بنجاح');
        return cache.addAll(urlsToCache);
      })
  );
});

// استرجاع الملفات بسرعة عند تصفح التطبيق
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // إذا كان الملف موجوداً في الذاكرة، استخدمه فوراً
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
