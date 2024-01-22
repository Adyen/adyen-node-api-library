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
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import Client from "../client";
import Config from "../config";
import {
    AmountsReq,
    MessageCategory,
    MessageClass,
    MessageHeader,
    MessageType,
    PaymentRequest,
    PaymentTransaction,
    ReversalReason,
    ReversalRequest,
    SaleData,
    SaleToPOIRequest,
    TerminalApiRequest,
    TransactionIDType,
} from "../typings/terminal/models";

export const createClient = (apiKey = process.env.ADYEN_API_KEY): Client => {
    const config: Config = new Config();
    config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_TEST;
    config.terminalApiLocalEndpoint = "https://mocked_local_endpoint.com";
    config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;
    config.apiKey = apiKey == null ? "apiKey" : apiKey;
    return new Client({ config });
};

export const createBasicAuthClient = (): Client => {
    return new Client({
        username: process.env.ADYEN_USER!,
        password: process.env.ADYEN_PASSWORD!,
        environment: "TEST",
        applicationName: "adyen-node-api-library"
    });
};

const id = Math.floor(Math.random() * Math.floor(10000000)).toString();
const getMessageHeader = ({ messageCategory = MessageCategory.Payment }: { messageCategory?: MessageCategory } = {}): MessageHeader => ({
    MessageCategory: messageCategory,
    MessageClass: MessageClass.Service,
    MessageType: MessageType.Request,
    POIID: process.env.ADYEN_TERMINAL_POIID!,
    ProtocolVersion: "3.0",
    SaleID: id,
    ServiceID: id,
});

const transactionIdentification: TransactionIDType = {
    TimeStamp: new Date(),
    TransactionID: id,
};

const saleToAcquirerData = JSON.stringify({
    applicationInfo: {
        merchantApplication: {
            version: "1",
            name: "test"
        }
    },
    metadata: {
        someMetaDataKey1: "YOUR_VALUE",
        someMetaDataKey2: "YOUR_VALUE"
    },
});
const saleData: SaleData = {
    SaleTransactionID: transactionIdentification,
    SaleToAcquirerData: Buffer.from(saleToAcquirerData).toString("base64")
};

const amountsReq: AmountsReq = {
    Currency: "EUR",
    RequestedAmount: 1,
};

const paymentTransaction: PaymentTransaction = {
    AmountsReq: amountsReq,
};

const paymentRequest: PaymentRequest = {
    PaymentTransaction: paymentTransaction,
    SaleData: saleData,
};

const getReversalRequest = (poiTransaction: TransactionIDType): ReversalRequest => ({
    OriginalPOITransaction: {
        POITransactionID: {
            TransactionID: poiTransaction.TransactionID,
            TimeStamp: poiTransaction.TimeStamp
        },
    },
    ReversalReason: ReversalReason.MerchantCancel,
    SaleData: saleData
});

const getSaleToPOIRequest = (messageHeader: MessageHeader, request: Partial<SaleToPOIRequest>): SaleToPOIRequest => ({
    MessageHeader: messageHeader,
    ...request
});


export const createTerminalAPIPaymentRequest = (): TerminalApiRequest => {
    const messageHeader = getMessageHeader();
    const saleToPOIRequest = getSaleToPOIRequest(messageHeader, { PaymentRequest: paymentRequest });
    return { SaleToPOIRequest: saleToPOIRequest };
};

export const createTerminalAPIRefundRequest = (transactionIdentification: TransactionIDType): TerminalApiRequest => {
    const messageHeader = getMessageHeader({ messageCategory: MessageCategory.Reversal });
    const saleToPOIRequest = getSaleToPOIRequest(messageHeader, { ReversalRequest: getReversalRequest(transactionIdentification) });
    return { SaleToPOIRequest: saleToPOIRequest };
};
