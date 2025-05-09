const CACHE_NAME = 'my-cache-v1';
const FILES_TO_CACHE = ['/', '/index.html', '/main.js', '/style.css'];

// Install 이벤트에서 캐시 설정
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE); // 캐시할 파일들
    }),
  );
});

// Fetch 이벤트에서 캐시된 파일들을 응답으로 반환
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 캐시된 파일이 있으면 반환, 없으면 네트워크 요청
      return cachedResponse || fetch(event.request);
    }),
  );
});

// Activate 이벤트에서 이전 캐시 제거
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME]; // 유지할 캐시 목록
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // 오래된 캐시 삭제
          }
        }),
      );
    }),
  );
});
