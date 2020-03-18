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
import Client from "../client";
import Config from "../config";
import { MessageCategoryType, MessageClassType, MessageType, } from "../typings/terminal";
export var createMockClientFromResponse = function () {
    var config = new Config();
    config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_TEST;
    config.terminalApiLocalEndpoint = "https://mocked_local_endpoint.com";
    config.hmacKey = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
    config.endpoint = Client.ENDPOINT_TEST;
    config.checkoutEndpoint = Client.CHECKOUT_ENDPOINT_TEST;
    config.apiKey = "MOCKED_API_KEY";
    var client = new Client({ config: config });
    return client;
};
export var createTerminalAPIPaymentRequest = function () {
    var messageHeader = {
        messageCategory: MessageCategoryType.Payment,
        messageClass: MessageClassType.Service,
        messageType: MessageType.Request,
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