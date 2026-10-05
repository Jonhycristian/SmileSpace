/* SmileSpace — service worker mínimo para instalabilidade PWA.
   Sem cache de conteúdo: apenas ativa e assume o controle,
   sem risco de servir páginas desatualizadas. */
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
