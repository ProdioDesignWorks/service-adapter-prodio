export default class INotification {
    sendEmail() {
        console.log("adapter function");
        throw new Error('not yet implemented');
    }

    sendSMS() {
        throw new Error('not yet implemented');
    }

    createTemplate() {
        throw new Error('not yet implemented');
    }
}