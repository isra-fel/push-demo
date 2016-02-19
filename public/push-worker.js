self.addEventListener('push', function (event) {
    event.waitUntil(function () {
        return self.registration.showNotification('Title', {
            body: 'Body'
        });
    });
});
//# sourceMappingURL=push-worker.js.map