const cacheName = 'aniba';

const filesToCache = [ '/index.html', '/avatar.jpg' ];

// Install Service Worker
this.addEventListener('install', function(event) {
	console.log('Service Worker: Installing....');

	event.waitUntil(
		// Open the Cache
		caches.open(cacheName).then(function(cache) {
			// console.log('Service Worker: Caching App Shell at the moment......');

			// Add Files to the Cache
			return cache.addAll(filesToCache);
		})
	);
});

// Fired when the Service Worker starts up
this.addEventListener('activate', function(event) {
	console.log('Service Worker: Activating....');

	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(key) {
					if (key !== cacheName) {
						// console.log('Service Worker: Removing Old Cache', key);
						return caches.delete(key);
					}
				})
			);
		})
	);
	return this.clients.claim();
});

this.addEventListener('fetch', function(event) {
	let url = event.request.url;
	if (!url.includes('/video')) {
		event.respondWith(
			caches.match(event.request).then(function(response) {
				return response || fetch(event.request);
			})
		);
	}
});
