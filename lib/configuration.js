'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = function () {
	function Configuration(config) {
		_classCallCheck(this, Configuration);

		this.config = config;
	}

	_createClass(Configuration, [{
		key: 'isEmpty',
		value: function isEmpty(obj) {
			return Object.keys(obj).length < 1;
		}
	}, {
		key: 'getConfig',
		value: function getConfig(config) {
			var keysToRemove = ['connector'];
			keysToRemove.map(function (key) {
				return delete config[key];
			});
			return config;
		}
	}, {
		key: 'getConnectors',
		value: function getConnectors() {
			var _this = this;

			return Object.keys(this.config).map(function (connectorKey) {
				var o = {};
				/*
    	by default consider is_active is true
    */
				if (!_this.config[connectorKey].hasOwnProperty('is_active')) {
					_this.config[connectorKey]['is_active'] = true;
				}

				if (_this.config[connectorKey]['is_active']) {
					o['name'] = connectorKey;
					o['connector'] = _this.config[connectorKey]['connector'];
					o['config'] = _this.getConfig(_this.config[connectorKey]);
				}

				return o;
			}).filter(function (c) {
				return !_this.isEmpty(c);
			});
		}
	}, {
		key: 'importConnectors',
		value: function importConnectors() {
			var connectors = this.getConnectors();
			var o = {
				connectors: connectors.map(function (connector) {
					return connector.name;
				})
			};

			return connectors.reduce(function (config, connector) {
				var cn = require(connector.connector).default;
				var cf = new cn(connector.config);
				var cnf = _defineProperty({}, connector.name, cf);
				return Object.assign({}, config, cnf);
			}, o);
		}
	}, {
		key: 'compact',
		value: function compact(iInterface, connectors) {
			var connectorNames = Object.keys(connectors).filter(function (c) {
				return c !== 'connectors';
			});

			var noOfConnectors = connectorNames.length;
			var iInterfaceFns = Object.getOwnPropertyNames(Object.getPrototypeOf(iInterface));

			if (noOfConnectors === 1) {
				var cFns = Object.getOwnPropertyNames(Object.getPrototypeOf(connectors[connectorNames[0]]));

				var o = {};

				iInterfaceFns.map(function (fn) {
					if (fn !== 'constructor') o[fn] = connectors[connectorNames[0]][fn];
				});

				return _extends({}, connectors, o);
			} else {
				var oo = {};
				connectorNames.map(function (connectorName) {
					var cFns = Object.getOwnPropertyNames(Object.getPrototypeOf(connectors[connectorName]));

					var o = {};

					iInterfaceFns.map(function (fn) {
						if (fn !== 'constructor') o[fn] = connectors[connectorName][fn];
					});
				});

				return _extends({}, connectors);
			}
		}
	}]);

	return Configuration;
}();

exports.default = Configuration;