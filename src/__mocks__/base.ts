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
import {
    AmountsReq,
    MessageCategoryType,
    MessageClassType,
    MessageHeader,
    MessageType,
    PaymentRequest,
    PaymentTransaction,
    ReversalReasonType,
    ReversalRequest,
    SaleData,
    SaleToPoiRequest,
    TerminalApiRequest,
    TransactionIdentification,
} from "../typings/terminal";

export const createClient = (apiKey = process.env.ADYEN_API_KEY): Client => {
    const config: Config = new Config();
    config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_TEST;
    config.terminalApiLocalEndpoint = "https://mocked_local_endpoint.com";
    config.hmacKey = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
    config.endpoint = Client.ENDPOINT_TEST;
    config.checkoutEndpoint = Client.CHECKOUT_ENDPOINT_TEST;
    config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;
    config.apiKey = apiKey;
    config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;

    const client: Client = new Client({ config });

    return client;
};

export const createBasicAuthClient = (): Client => {
    const client: Client = new Client({
        username: process.env.ADYEN_USER!,
        password: process.env.ADYEN_PASSWORD!,
        environment: "TEST",
        applicationName: "adyen-node-api-library"
    });

    return client;
};

const id = Math.floor(Math.random() * Math.floor(10000000)).toString();
const getMessageHeader = ({ messageCategory = MessageCategoryType.Payment }: { messageCategory?: MessageCategoryType } = {}): MessageHeader => ({
    messageCategory,
    messageClass: MessageClassType.Service,
    messageType: MessageType.Request,
    poiid: process.env.ADYEN_TERMINAL_POIID!,
    protocolVersion: "3.0",
    saleId: id,
    serviceId: id,
});

const timestamp = (): string => new Date().toISOString();
const transactionIdentification: TransactionIdentification = {
    timeStamp: timestamp(),
    transactionId: id,
};

const saleData: SaleData = {
    saleTransactionId: transactionIdentification,
};

const amountsReq: AmountsReq = {
    currency: "EUR",
    requestedAmount: 1,
};

const paymentTransaction: PaymentTransaction = {
    amountsReq: amountsReq,
};

const paymentRequest: PaymentRequest = {
    paymentTransaction: paymentTransaction,
    saleData: saleData,
};

const getReversalRequest = (poiTransaction: TransactionIdentification): ReversalRequest => ({
    originalPoiTransaction: {
        poiTransactionId: {
            transactionId: poiTransaction.transactionId,
            timeStamp: poiTransaction.timeStamp
        },
    },
    reversalReason: ReversalReasonType.MerchantCancel
});

const getSaleToPOIRequest = (messageHeader: MessageHeader, request: Partial<SaleToPoiRequest>): SaleToPoiRequest => ({
    messageHeader: messageHeader,
    ...request
});


export const createTerminalAPIPaymentRequest = (): TerminalApiRequest => {
    const messageHeader = getMessageHeader();
    const saleToPOIRequest = getSaleToPOIRequest(messageHeader, { paymentRequest });
    return { saleToPoiRequest: saleToPOIRequest };
};

export const createTerminalAPIRefundRequest = (transactionIdentification: TransactionIdentification): TerminalApiRequest => {
    const messageHeader = getMessageHeader({ messageCategory: MessageCategoryType.Reversal });
    const saleToPOIRequest = getSaleToPOIRequest(messageHeader, { reversalRequest: getReversalRequest(transactionIdentification) });
    return { saleToPoiRequest: saleToPOIRequest };
};
