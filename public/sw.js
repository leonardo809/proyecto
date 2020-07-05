
const CACHE = "lct";

const ARCHIVOS = [
  "favicon.png",
  "estilos.css",
  "favicon.ico",
  "escuela.html",
  "index.html",
  "A_es.html",
  "ENBA_A.html",
  "ESCOM_A.html",
  "ESE_A.html",
  "UPIICSA_A.html",
  "M_es.html",
  "ENBA_M.html",
  "ESCOM_M.html",
  "ESE_M.html",
  "UPIICSA_M.html",
  "herramientas-abc.js",
  "mi-footer.js",
  "mi-nav.js",
  "util.js",
  "manifest.json",
  "__/firebase/7.8.2/firebase-app.js",
  "__/firebase/7.8.2/firebase-auth.js",
  "__/firebase/7.8.2/firebase-database.js",
  "__/firebase/7.8.2/firebase-messaging.js",
  "__/firebase/7.8.2/firebase-storage.js",
  "__/firebase/7.8.2/firebase-firestore.js",
  "__/firebase/init.js",
  '/'
];
self.addEventListener("install", evt => {
  console.log("Service Worker instalado.");

  // @ts-ignore
  evt.waitUntil(cargaCache());
});

self.addEventListener("fetch", evt => {
  // @ts-ignore
  if (evt.request.method === "GET") {
    // @ts-ignore
    evt.respondWith(usaCache(evt));
  }
});
self.addEventListener("activate", () => console.log("Service Worker activo."));

async function cargaCache() {
  console.log("Intentando cargar cache: " + CACHE);
  const cache = await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache cargado: " + CACHE);
}

async function usaCache(evt) {
  const cache = await caches.open(CACHE);
  const response = await cache.match(evt.request, { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}