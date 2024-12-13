const staticCacheName='site-static-v3';
const assets =[
    '.',
    'index.html',
    'pwa.js',
    'images/people.png',
    'pwa.css',
    'manifest.json',
    'images/icons/icon-128x128.png',
    'images/icons/icon-192x192.png'
]

self.addEventListener('install',evt=>{
    evt.waitUntil(
        caches.open(staticCacheName).then(cache=>{
            console.log('Кэширование ресурсов')
            cache.addAll(assets)
        })
    )
})

    self.addEventListener('activate',evt=>{
        evt.waitUntil(
            caches.keys().then(keys=>{
                return Promise.all(keys
                    .filter(key=>key!==staticCacheName)
                    .map(key=>caches.delete(key))
                )
            })
        )
    })
    self.addEventListener('fetch',evt=>{
        evt.respondWith(
            caches.match(evt.request).then(CacheRes=>{
                return CacheRes|| fetch(evt.request)
            })
        )
    })