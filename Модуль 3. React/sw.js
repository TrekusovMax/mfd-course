const staticCacheName = 'static-site'
const assets = ['/']

self.addEventListener('install', (event) => {
  console.log('Service Worker has been installed')
  caches.open(staticCacheName).then((cache) => {
    cache.addAll()
  })
})
self.addEventListener('activate', (event) => {
  console.log('Service Worker has been activated')
})
self.addEventListener('fetch', (event) => {
  console.log(event.request.url)
})
