/**
 * The ServiceWorkerContainer interface of the ServiceWorker API provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister and update service workers, and access the state of service workers and their registrations.
 */
declare interface ServiceWorkerContainer {
    /**
     * The register() method of the ServiceWorkerContainer interface creates or updates a ServiceWorkerRegistration for the given scriptURL.
     * @param scriptURL The URL of the service worker script.
     */
    register(scriptURL: String): PromiseLike<ServiceWorkerRegistration>
}

/**
 * The ServiceWorkerRegistion interface of the ServiceWorker API represents the service worker registration. You register a service worker to control one or more pages that share the same origin.
 */
declare interface ServiceWorkerRegistration {
    /**
     * Returns a reference to the PushManager interface for managing push subscriptions including subscribing, getting an active subscription, and accessing push permission status.
     */
    pushManager: PushManager,
    /**
     * The showNotification() method of the ServiceWorkerRegistration interface creates a notification on an active service worker.
     * @param title The title that must be shown within the notification
     * @param options An object that allows to configure the notification.
     */
    showNotification(title: String, options?: NotificationOptions): PromiseLike<PushEvent>
}

/**
 * The PushManager interface of the Push API provides a way to receive notifications from third-party servers as well as request URLs for push notifications.
 */
declare interface PushManager {
    /**
     * Retrieves an existing push subscription. It returns a Promise that resolves to a PushSubscription object containing details of an existing subscription. If no existing subscription exists, this resolves to a null value.
     */
    getSubscription(): PromiseLike<PushSubscription>,
    /**
     * Subscribes to a push service. It returns a Promise that resolves to a PushSubscription object containing details of a push subscription. A new push subscription is created if the current service worker does not have an existing subscription.
     */
    subscribe(option?: SubscribeOption): PromiseLike<PushSubscription>
}

declare interface SubscribeOption {
    /**
     * A boolean indicating that the returned push subscription will only be used for messages whose effect is made visible to the user.
     */
    userVisibleOnly: boolean
}

/**
 * The PushSubscription interface of the Push API provides a subcription's URL endpoint and allows unsubscription from a push service.
 */
declare interface PushSubscription {
    /**
     * A USVString containing the endpoint associated with the push subscription.
     */
    endpoint: String,
    /**
     * The getKey() method of the PushSubscription interface returns an ArrayBuffer representing a client public key, which can then be sent to a server and used in encrypting push message data.
     * Note: This is currently Firefox-only, and not yet included in the Push API spec.
     * @param method The encryption method used to generate the client public key. 'p256dh' is currently the only option.
     */
    getKey(method): ArrayBuffer
}

declare interface NotificationOptions {
    /**A string representing an extra content to display within the notification. */
    body: String
    /**The URL of an image to be used as an icon by the notification. */
    icon?: String
}

/**The PushEvent interface of the Push API represents a push message that has been received. This event is sent to the global scope of a ServiceWorker. It contains the information sent from an application server to a PushSubscription. */
declare interface PushEvent extends ExtendableEvent {
    /**Returns a reference to a PushMessageData object containing data sent to the PushSubscription. */
    data: PushMessageData
}

/**The PushMessageData interface of the Push API provides methods which let you retrieve the push data sent by a server in various formats. */
declare interface PushMessageData {
    json(): JSON,
    text(): String
}

declare interface ExtendableEvent extends Event {
    /**
     * Extends the lifetime of the event.  It is intended to be called in the install EventHandler for the installing worker and on the active EventHandler for the active worker.
     */
    waitUntil(promise: PromiseLike<any>): any
}

declare interface Navigator {
    serviceWorker: ServiceWorkerContainer
}

declare interface ServiceWorkerGlobalScope extends EventTarget {
    registration: ServiceWorkerRegistration
}