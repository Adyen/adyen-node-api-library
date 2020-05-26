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
import Client from "../client";
import Config from "../config";
import { MessageCategoryType, MessageClassType, MessageType, ReversalReasonType, } from "../typings/terminal";
export var createClient = function (apiKey) {
    if (apiKey === void 0) { apiKey = process.env.ADYEN_API_KEY; }
    var config = new Config();
    config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_TEST;
    config.terminalApiLocalEndpoint = "https://mocked_local_endpoint.com";
    config.hmacKey = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
    config.endpoint = Client.ENDPOINT_TEST;
    config.checkoutEndpoint = Client.CHECKOUT_ENDPOINT_TEST;
    config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;
    config.apiKey = apiKey;
    config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;
    var client = new Client({ config: config });
    return client;
};
export var createBasicAuthClient = function () {
    var client = new Client({
        username: process.env.ADYEN_USER,
        password: process.env.ADYEN_PASSWORD,
        environment: "TEST",
        applicationName: "adyen-node-api-library"
    });
    return client;
};
var id = Math.floor(Math.random() * Math.floor(10000000)).toString();
var getMessageHeader = function (_a) {
    var _b = (_a === void 0 ? {} : _a).messageCategory, messageCategory = _b === void 0 ? MessageCategoryType.Payment : _b;
    return ({
        messageCategory: messageCategory,
        messageClass: MessageClassType.Service,
        messageType: MessageType.Request,
        poiid: process.env.ADYEN_TERMINAL_POIID,
        protocolVersion: "3.0",
        saleId: id,
        serviceId: id,
    });
};
var timestamp = function () { return new Date().toISOString(); };
var transactionIdentification = {
    timeStamp: timestamp(),
    transactionId: id,
};
var saleData = {
    saleTransactionId: transactionIdentification,
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
    originalPoiTransaction: {
        poiTransactionId: {
            transactionId: poiTransaction.transactionId,
            timeStamp: poiTransaction.timeStamp
        },
    },
    reversalReason: ReversalReasonType.MerchantCancel
}); };
var getSaleToPOIRequest = function (messageHeader, request) { return (__assign({ messageHeader: messageHeader }, request)); };
export var createTerminalAPIPaymentRequest = function () {
    var messageHeader = getMessageHeader();
    var saleToPOIRequest = getSaleToPOIRequest(messageHeader, { paymentRequest: paymentRequest });
    return { saleToPoiRequest: saleToPOIRequest };
};
export var createTerminalAPIRefundRequest = function (transactionIdentification) {
    var messageHeader = getMessageHeader({ messageCategory: MessageCategoryType.Reversal });
    var saleToPOIRequest = getSaleToPOIRequest(messageHeader, { reversalRequest: getReversalRequest(transactionIdentification) });
    return { saleToPoiRequest: saleToPOIRequest };
};
//# sourceMappingURL=base.js.map