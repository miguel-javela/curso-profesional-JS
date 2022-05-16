const VERSION = "v1"

self.addEventListener('install', event => {//cuando el navegador instale el SW
    event.waitUntil(precache())//espera a que el precache este listo
})

self.addEventListener('fetch', event =>{
    const request = event.request;
    //get
    if(request.method !=="GET"){
        return;
    }

    //buscar en cache
    event.respondWith(cachedResponse(request))

    //actualizar el cache
    event.waitUntil(updateCache(request))
})

async function precache() {
    const cache = await caches.open(VERSION);//nos da una instancia del cache en la version 1
    //anade los recursos al cache
    return cache.addAll([
      '/',
      '/index.html',
      '/assets/index.js',
      '/assets/MediaPlayer.js',
      '/assets/plugins/AutoPlay.js',
      '/assets/plugins/AutoPause.js',
      '/assets/index.css',
      '/assets/BigBuckBunny.mp4',
    ]);
}

async function cachedResponse (request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)//si no encuentra que vaya a la red
}

async function updateCache (request){
    const cache = await caches.open(VERSION)
    //busca una copia actualizada del cache
    const response = await fetch(request);
    return cache.put(request, response)  //anade nuevo contenido al cache
}
  