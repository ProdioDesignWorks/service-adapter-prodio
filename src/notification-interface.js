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

    sendTransactionalEmail(payload){
        throw new Error('send transactional emails not yet implemented.');
    }

    subscribeToTopic(payload){
        throw new Error('subscribe topic is not yet implemented.');
    }

    unsubscribeFromTopic(payload){
        throw new Error('unsubscribe topic is not yet implemented.');
    }

    sendNotificationToTopic(payload, topic){
        throw new Error('send notification to topic is not yet implemented.');
    }

}