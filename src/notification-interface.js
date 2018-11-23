export default class INotification {
    sendEmail(payload) {
        throw new Error('send email not yet implemented');
    }

    sendSMS() {
        throw new Error('not yet implemented');
    }

    createTemplate() {
        throw new Error('not yet implemented');
    }
}