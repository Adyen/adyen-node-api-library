"use strict";
/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("../client"));
var config_1 = __importDefault(require("../config"));
var terminal_1 = require("../typings/terminal");
exports.createMockClientFromResponse = function () {
    var config = new config_1.default();
    config.terminalApiCloudEndpoint = client_1.default.TERMINAL_API_ENDPOINT_TEST;
    config.terminalApiLocalEndpoint = "https://mocked_local_endpoint.com";
    config.hmacKey = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
    config.endpoint = client_1.default.ENDPOINT_TEST;
    config.checkoutEndpoint = client_1.default.CHECKOUT_ENDPOINT_TEST;
    config.apiKey = "MOCKED_API_KEY";
    var client = new client_1.default({ config: config });
    return client;
};
exports.createTerminalAPIPaymentRequest = function () {
    var messageHeader = {
        messageCategory: terminal_1.MessageCategoryType.Payment,
        messageClass: terminal_1.MessageClassType.Service,
        messageType: terminal_1.MessageType.Request,
        poiid: "P400Plus-123456789",
        protocolVersion: "3.0",
        saleId: "001",
        serviceId: "001",
    };
    var timestamp = new Date().toISOString();
    var transactionIdentification = {
        timeStamp: timestamp,
        transactionId: "001",
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
    var saleToPOIRequest = {
        messageHeader: messageHeader,
        paymentRequest: paymentRequest,
    };
    var terminalApiRequest = {
        saleToPoiRequest: saleToPOIRequest,
    };
    return terminalApiRequest;
};
//# sourceMappingURL=base.js.map