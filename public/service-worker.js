const CACHE_NAME = 'my-cache-v1';
const FILES_TO_CACHE = ['/', '/index.html'];

// // 설치: 필요한 파일 캐시
// self.addEventListener('install', (event) => {
//   console.log('[SW] Installing and caching...');
//   event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE)));
//   self.skipWaiting(); // 설치되자마자 활성화
// });

// // 활성화: 오래된 캐시 정리
// self.addEventListener('activate', (event) => {
//   console.log('[SW] Activating...');
//   event.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheName !== CACHE_NAME) {
//             console.log('[SW] Deleting old cache:', cacheName);
//             return caches.delete(cacheName);
//           }
//         }),
//       ),
//     ),
//   );
// });

// // 요청: 캐시 먼저, 없으면 네트워크
// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((cachedResponse) => {
//       if (cachedResponse) {
//         console.log('[SW] Serving from cache:', event.request.url);
//         return cachedResponse;
//       }
//       return fetch(event.request);
//     }),
//   );
// });

// 개발 단계에서 빌드 파일명이 계속 변경되므로, 캐시 최소화
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    }),
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)))),
  );
});
