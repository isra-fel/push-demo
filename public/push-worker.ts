declare var self: ServiceWorkerGlobalScope;
self.addEventListener('push', function (event: PushEvent) {
    event.waitUntil(self.registration.showNotification('Title', {
        body: 'Body'
    }));
});