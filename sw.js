const cacheName = 'v1'


self.addEventListener('install', function (event) {
    console.log('Service Worker: Installed')
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
        fetch(event.request)
            .then(function (res) {
                //clone the response
                const resClone = res.clone()
                //open cache
                caches.open(cacheName)
                    .then(function (cache) {
                        //add response to cache
                        cache.put(event.request, resClone)
                    })
                return res;
            }).catch(function (err) {
                caches.match(event.request).then(function (res) {
                    return res
                })
            })
    )
})