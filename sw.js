const cacheName = 'v1'
const filesToCache = [
    '/index.html',
    '/main.js',
    '/styles.css',
    '/images/profile_pic.jpg'
]

self.addEventListener('install', function (event) {
    console.log('Service Worker: Installed')
    event.waitUntil(
        caches
            .open(cacheName)
            .then(function (cache) {
                console.log('Service Worker: Caching Files')
                cache.addAll(filesToCache)
            })
            .then(function () {
                self.skipWaiting()
            })
    )
})

self.addEventListener('activate', function (event) {
    console.log('Service Worker: Activated')
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cache) {
                    if (cache !== cacheName) {
                        console.log('Service Worker: clearing old cache')
                        return caches.delete(cache);
                    }
                })
            )
        })
    )

})

//Call fetch event

self.addEventListener('fetch', function (event) {
    console.log('Service Worker: Fetching')
    event.respondWith(
        fetch(event.request).catch(function () {
            caches.match(event.request)
        })
    )
})