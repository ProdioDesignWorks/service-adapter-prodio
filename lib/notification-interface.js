'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INotification = function () {
    function INotification() {
        _classCallCheck(this, INotification);
    }

    _createClass(INotification, [{
        key: 'sendEmail',
        value: function sendEmail(payload) {
            throw new Error('send email not yet implemented');
        }
    }, {
        key: 'sendAppPushNotification',
        value: function sendAppPushNotification(payload) {
            throw new Error('send push notification not yet implemented');
        }
    }, {
        key: 'sendWebPushNotification',
        value: function sendWebPushNotification(payload) {
            throw new Error('send web push notification not yet implemented');
        }
    }, {
        key: 'sendTransactionalEmail',
        value: function sendTransactionalEmail(payload) {
            throw new Error('send transactional emails not yet implemented.');
        }
    }, {
        key: 'subscribeToTopic',
        value: function subscribeToTopic(payload) {
            throw new Error('subscribe topic is not yet implemented.');
        }
    }, {
        key: 'unsubscribeFromTopic',
        value: function unsubscribeFromTopic(payload) {
            throw new Error('unsubscribe topic is not yet implemented.');
        }
    }, {
        key: 'sendNotificationToTopic',
        value: function sendNotificationToTopic(payload, topic) {
            throw new Error('send notification to topic is not yet implemented.');
        }
    }]);

    return INotification;
}();

exports.default = INotification;