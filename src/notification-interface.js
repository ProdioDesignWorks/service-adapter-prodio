export default class INotification {
    sendEmail(payload) {
        throw new Error('send email not yet implemented');
    }

    sendAppPushNotification(payload){
        throw new Error('send push notification not yet implemented');
    }

    sendWebPushNotification(payload){
        throw new Error('send web push notification not yet implemented');
    }
}