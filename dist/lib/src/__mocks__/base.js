"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTerminalAPIRefundRequest = exports.createTerminalAPIPaymentRequest = exports.createBasicAuthClient = exports.createClient = void 0;
var client_1 = __importDefault(require("../client"));
var config_1 = __importDefault(require("../config"));
var models_1 = require("../typings/terminal/models");
exports.createClient = function (apiKey) {
    if (apiKey === void 0) { apiKey = process.env.ADYEN_API_KEY; }
    var config = new config_1.default();
    config.terminalApiCloudEndpoint = client_1.default.TERMINAL_API_ENDPOINT_TEST;
    config.terminalApiLocalEndpoint = "https://mocked_local_endpoint.com";
    config.hmacKey = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
    config.endpoint = client_1.default.ENDPOINT_TEST;
    config.checkoutEndpoint = client_1.default.CHECKOUT_ENDPOINT_TEST;
    config.marketPayEndpoint = client_1.default.MARKETPAY_ENDPOINT_TEST;
    config.apiKey = apiKey;
    config.marketPayEndpoint = client_1.default.MARKETPAY_ENDPOINT_TEST;
    var client = new client_1.default({ config: config });
    return client;
};
exports.createBasicAuthClient = function () {
    var client = new client_1.default({
        username: process.env.ADYEN_USER,
        password: process.env.ADYEN_PASSWORD,
        environment: "TEST",
        applicationName: "adyen-node-api-library"
    });
    return client;
};
var id = Math.floor(Math.random() * Math.floor(10000000)).toString();
var getMessageHeader = function (_a) {
    var _b = (_a === void 0 ? {} : _a).messageCategory, messageCategory = _b === void 0 ? models_1.MessageCategoryType.Payment : _b;
    return ({
        messageCategory: messageCategory,
        messageClass: models_1.MessageClassType.Service,
        messageType: models_1.MessageType.Request,
        pOIID: process.env.ADYEN_TERMINAL_POIID,
        protocolVersion: "3.0",
        saleID: id,
        serviceID: id,
    });
};
var timestamp = function () { return new Date().toISOString(); };
var transactionIdentification = {
    timeStamp: timestamp(),
    transactionID: id,
};
var saleData = {
    saleTransactionID: transactionIdentification,
    saleToAcquirerData: {
        applicationInfo: {
            merchantApplication: {
                version: "1",
                name: "test"
            }
        }
    }
};
var amountsReq = {
    currency: "EUR",
    requestedAmount: 1,
};
var paymentTransaction = {
    amountsReq: amountsReq,
};
var paymentRequest = {
    paymentTransaction: paymentTransaction,
    saleData: saleData,
};
var getReversalRequest = function (poiTransaction) { return ({
    originalPOITransaction: {
        pOITransactionID: {
            transactionID: poiTransaction.transactionID,
            timeStamp: poiTransaction.timeStamp
        },
    },
    reversalReason: models_1.ReversalReasonType.MerchantCancel
}); };
var getSaleToPOIRequest = function (messageHeader, request) { return (__assign({ messageHeader: messageHeader }, request)); };
exports.createTerminalAPIPaymentRequest = function () {
    var messageHeader = getMessageHeader();
    var saleToPOIRequest = getSaleToPOIRequest(messageHeader, { paymentRequest: paymentRequest });
    return { saleToPOIRequest: saleToPOIRequest };
};
exports.createTerminalAPIRefundRequest = function (transactionIdentification) {
    var messageHeader = getMessageHeader({ messageCategory: models_1.MessageCategoryType.Reversal });
    var saleToPOIRequest = getSaleToPOIRequest(messageHeader, { reversalRequest: getReversalRequest(transactionIdentification) });
    return { saleToPOIRequest: saleToPOIRequest };
};
//# sourceMappingURL=base.js.map