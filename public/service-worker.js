const cacheName = 'dev-guadalupana-site-v1';

const assets = [
    '/',
    '/index.html',
    'http://localhost:3000/',
    '/app.js',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/banner1.png',
    'img/banner2.png',
    'img/banner3.png',
    'img/galeria/platoto.jpg',
    'img/galeria/torti.jpg',
    'img/galeria/tacosmolde.jpg',
    '../api/public/img/productos/1698551539_tacosmolde.jpg', 

    
    // Agrega las rutas de los recursos que deseas cachear
];

self.addEventListener('install', (event) => {
    // Etapa de instalación
    event.waitUntil(
        caches.open(cacheName)
        .then((cache) => {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', (event) => {
    // Etapa de activación
    event.waitUntil(
        caches.keys()
        .then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name !== cacheName) {
                        return caches.delete(name);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    // Etapa de manejo de eventos fetch
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('push', (event) => {
    // Etapa de manejo de eventos push
    const options = {
        body: event.data.text(),
        icon: 'icon.png',
        badge: 'badge.png',
    };

    event.waitUntil(
        self.registration.showNotification('Notificación Push', options)
    );
});
