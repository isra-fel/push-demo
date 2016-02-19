declare module "web-push" {
    /**
     * Send a Push notification to an endpoint.
     * @param endpoint the endpoint URL
     * @param TTL a value in seconds that describes how long a push message is retained by the push service
     * @param userPublicKey the public key of the browser
     * @param payload the message to attach to the notification
     */
    export function sendNotification(endpoint: String, TTL?: Number, userPublicKey?: String, payload?: String): PromiseLike<any>;
}