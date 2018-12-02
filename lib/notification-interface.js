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
        key: 'sendPushNotification',
        value: function sendPushNotification(payload) {
            throw new Error('send push notification not yet implemented');
        }
    }, {
        key: 'sendAndroidPushNotification',
        value: function sendAndroidPushNotification(payload) {
            throw new Error('send android push notification not yet implemented');
        }
    }, {
        key: 'sendIosPushNotification',
        value: function sendIosPushNotification(payload) {
            throw new Error('send ios push notification not yet implemented');
        }
    }, {
        key: 'sendWebPushNotification',
        value: function sendWebPushNotification(payload) {
            throw new Error('send web push notification not yet implemented');
        }
    }]);

    return INotification;
}();

exports.default = INotification;