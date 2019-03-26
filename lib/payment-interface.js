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
		key: 'editPayer',
		value: function editPayer(payloadJson) {
			throw new Error('createPayer not yet implemented');
		}
	}, {
		key: 'removePayer',
		value: function removePayer(payloadJson) {
			throw new Error('createPayer not yet implemented');
		}
	}, {
		key: 'bulkUploadPayers',
		value: function bulkUploadPayers(payloadJson) {
			throw new Error('bulkUploadPayers not yet implemented');
		}
	}, {
		key: 'makePayment',
		value: function makePayment(payloadJson) {
			throw new Error('makePayment not yet implemented');
		}
	}, {
		key: 'getPayersTransactions',
		value: function getPayersTransactions(payloadJson) {
			throw new Error('getPayersTransactions not yet implemented');
		}
	}, {
		key: 'saveCardForPayer',
		value: function saveCardForPayer(payloadJson) {
			throw new Error('saveCardForPayer not yet implemented');
		}
	}, {
		key: 'removeCard',
		value: function removeCard(payloadJson) {
			throw new Error('saveCardForPayer not yet implemented');
		}
	}, {
		key: 'makeDirectPayment',
		value: function makeDirectPayment(payloadJson) {
			throw new Error('makeDirectPayment not yet implemented');
		}
	}, {
		key: 'makeRefund',
		value: function makeRefund(payloadJson) {
			throw new Error('makeRefund not yet implemented');
		}
	}, {
		key: 'getOrderDetails',
		value: function getOrderDetails(payloadJson) {
			throw new Error('getOrderDetails not yet implemented');
		}
	}, {
		key: 'verifyCreditCard',
		value: function verifyCreditCard(payloadJson) {
			throw new Error('verifyCreditCard not yet implemented');
		}
	}, {
		key: 'payDirectlyWithSavedCard',
		value: function payDirectlyWithSavedCard(payloadJson) {
			throw new Error('payloadJson not yet implemented');
		}
	}]);

	return IPayment;
}();

exports.default = IPayment;