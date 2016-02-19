declare var self: ServiceWorkerGlobalScope;
self.addEventListener('push', function (event: PushEvent) {
    event.waitUntil(function () {
        return self.registration.showNotification('Title', {
            body: 'Body'
        });
    });
});