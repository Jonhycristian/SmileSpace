/* SmileSpace - service worker minimo para instalabilidade PWA.
   Sem cache de conteudo: apenas ativa e assume o controle,
   sem risco de servir paginas desatualizadas.
   Versao atualizada para forcar renovacao dos icones PWA. */
const SMILESPACE_SW_VERSION = "2026-11-09-icons";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    if (self.caches) {
      const keys = await self.caches.keys();
      await Promise.all(keys.map((key) => self.caches.delete(key)));
    }
    await self.clients.claim();
  })());
});