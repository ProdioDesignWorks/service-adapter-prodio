'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _paymentInterface = require('./payment-interface');

var _paymentInterface2 = _interopRequireDefault(_paymentInterface);

var _notificationInterface = require('./notification-interface');

var _notificationInterface2 = _interopRequireDefault(_notificationInterface);

var _configuration = require('./configuration');

var _configuration2 = _interopRequireDefault(_configuration);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Service = function () {
    function Service(type) {
        _classCallCheck(this, Service);

        this.serviceType = type;
    }

    _createClass(Service, [{
        key: 'ensureInitialized',
        value: function ensureInitialized() {
            if (!this.serviceType.length) {
                throw new Error('Service type not provided');
            }
        }
    }, {
        key: 'readConfig',
        value: function readConfig() {
            var service = this.serviceType;
            var j = service + 'sources.json';
            var p = _path2.default.resolve(__dirname, '..', 'services', j);
            if (!_fs2.default.existsSync(p)) {
                throw new Error(j + ' does not exists');
            }

            return require(p);
        }
    }, {
        key: 'init',
        value: function init() {
            var _this = this;

            this.ensureInitialized();
            var config = this.readConfig();
            var configurator = new _configuration2.default(config);
            var connectors = configurator.importConnectors();
            var iContract;

            switch (this.serviceType) {
                case 'payment':
                    iContract = new _paymentInterface2.default();
                    break;
                case 'notification':
                    iContract = new _notificationInterface2.default();
                    break;
                default:
                    throw new Error(this.serviceType + ' class not found');
            }

            var service = configurator.compact(iContract, connectors);
            var ks = Object.getOwnPropertyNames(service);
            ks.map(function (k) {
                return _this[k] = service[k];
            });
        }
    }]);

    return Service;
}();

exports.default = Service;