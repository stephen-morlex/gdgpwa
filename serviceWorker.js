// assets to store in the cache.
const staticGDG = "gdg-devfeast-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
 
]

//  it returns a promise, which helps us store our assets in the cache with
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticGDG).then(cache => {
      cache.addAll(assets)
    })
  )
  
})


self.addEventListener("activate", event => {
  console.log("Service worker activated");
});

// let's fetch our cache.
// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//       caches.match(fetchEvent.request).then(res => {
//         return res || fetch(fetchEvent.request)
//       })
//     )
//   })
self.addEventListener('fetch', function (event) {
    var requestURL = new URL(event.request.url);
    var freshResource = fetch(event.request).then(function (response) {
        var clonedResponse = response.clone();
        // Don't update the cache with error pages!
        if (response.ok) {
            // All good? Update the cache with the network response
            caches.open(staticGDG).then(function (cache) {
                cache.put(event.request, clonedResponse);
            });
        }
        return response;
    });
    var cachedResource = caches.open(staticGDG).then(function (cache) {
        return cache.match(event.request).then(function(response) {
            return response || freshResource;
        });
    }).catch(function (e) {
        return freshResource;
    });
    event.respondWith(cachedResource);
});
