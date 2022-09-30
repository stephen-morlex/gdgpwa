// assets to store in the cache.
const staticDevCoffee = "gdg-devfeast-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
 
]

//  it returns a promise, which helps us store our assets in the cache with
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

// let's fetch our cache.
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })