self.addEventListener('push', function (event) {
    event.waitUntil(self.registration.showNotification('Title', {
        body: 'Body'
    }));
});
//# sourceMappingURL=push-worker.js.map