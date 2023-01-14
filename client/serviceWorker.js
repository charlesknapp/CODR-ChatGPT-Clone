const CODRBot = "codr-site-v1"
const assets = [
  "/",
  "client/index.html",
  "/client/assets",
  "/client/style.css",
]

// Handle the PWA cache

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CODRBot).then(cache => {
      cache.addAll(assets)
    })
  )
})

// Retrieve the cache

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })