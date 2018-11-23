'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IPayment = function () {
	function IPayment() {
		_classCallCheck(this, IPayment);
	}

	_createClass(IPayment, [{
		key: 'createMerchant',
		value: function createMerchant(payloadJson) {
			throw new Error('Create Merchant not yet implemented');
		}
	}, {
		key: 'updateMerchant',
		value: function updateMerchant(payloadJson) {
			throw new Error('Update Merchant not yet implemented');
		}
	}, {
		key: 'deleteMerchant',
		value: function deleteMerchant(payloadJson) {
			throw new Error('Delete Merchant not yet implemented');
		}
	}, {
		key: 'getMerchantId',
		value: function getMerchantId(payloadJson) {
			throw new Error('getMerchantId not yet implemented');
		}
	}, {
		key: 'getMerchantActionvationStatus',
		value: function getMerchantActionvationStatus(payloadJson) {
			throw new Error('getMerchantActionvationStatus not yet implemented');
		}
	}, {
		key: 'getMerchantProfile',
		value: function getMerchantProfile(payloadJson) {
			throw new Error('getMerchantProfile not yet implemented');
		}
	}, {
		key: 'createPayer',
		value: function createPayer(payloadJson) {
			throw new Error('createPayer not yet implemented');
		}
	}, {
		key: 'bulkUploadPayers',
		value: function bulkUploadPayers(payloadJson) {
			throw new Error('bulkUploadPayers not yet implemented');
		}
	}, {
		key: 'createPaymentTransaction',
		value: function createPaymentTransaction(payloadJson) {
			throw new Error('createPaymentTransaction not yet implemented');
		}
	}]);

	return IPayment;
}();

exports.default = IPayment;