var endpoint: String;

navigator.serviceWorker.register('push-worker.js').then(function (registration) {
    return registration.pushManager.getSubscription().then(function (subscription) {
        return subscription ? subscription : registration.pushManager.subscribe({userVisibleOnly: true});
    });
}).then(function (subscription: PushSubscription) {
    endpoint = subscription.endpoint;
});

document.getElementById('magic').addEventListener('mouseup', function (e) {
    fetch('./sendNotification?endpoint=' + endpoint, {
        method: 'post'
    });
}, false);
console.log('addEventListener');