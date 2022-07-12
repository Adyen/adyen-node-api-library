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
    MessageCategoryType,
    MessageClassType,
    MessageHeader,
    MessageType,
    PaymentRequest,
    PaymentTransaction,
    ReversalReasonType,
    ReversalRequest,
    SaleData,
    SaleToPOIRequest,
    TerminalApiRequest,
    TransactionIdentification
} from "../typings/terminal/models";

export const createClient = (apiKey = process.env.ADYEN_API_KEY): Client => {
    const config: Config = new Config();
    config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_TEST;
    config.terminalApiLocalEndpoint = "https://mocked_local_endpoint.com";
    config.hmacKey = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
    config.endpoint = Client.ENDPOINT_TEST;
    config.checkoutEndpoint = Client.CHECKOUT_ENDPOINT_TEST;
    config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;
    config.apiKey = apiKey;
    config.paymentEndpoint = Client.PAYMENT_API_ENDPOINT_TEST;
    config.storedValueEndpoint = Client.STOREDVALUE_API_ENDPOINT_TEST;
    config.terminalManagementEndpoint = Client.TERMINAL_MANAGEMENT_API_ENDPOINT_TEST;

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
const getMessageHeader = ({ messageCategory = MessageCategoryType.Payment }: { messageCategory?: MessageCategoryType } = {}): MessageHeader => ({
    MessageCategory: messageCategory,
    MessageClass: MessageClassType.Service,
    MessageType: MessageType.Request,
    POIID: process.env.ADYEN_TERMINAL_POIID!,
    ProtocolVersion: "3.0",
    SaleID: id,
    ServiceID: id,
});

const timestamp = (): string => new Date().toISOString();
const transactionIdentification: TransactionIdentification = {
    TimeStamp: timestamp(),
    TransactionID: id,
};

const saleData: SaleData = {
    SaleTransactionID: transactionIdentification,
    SaleToAcquirerData: {
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
    }
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

const getReversalRequest = (poiTransaction: TransactionIdentification): ReversalRequest => ({
    OriginalPOITransaction: {
        POITransactionID: {
            TransactionID: poiTransaction.TransactionID,
            TimeStamp: poiTransaction.TimeStamp
        },
    },
    ReversalReason: ReversalReasonType.MerchantCancel,
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

export const createTerminalAPIRefundRequest = (transactionIdentification: TransactionIdentification): TerminalApiRequest => {
    const messageHeader = getMessageHeader({ messageCategory: MessageCategoryType.Reversal });
    const saleToPOIRequest = getSaleToPOIRequest(messageHeader, { ReversalRequest: getReversalRequest(transactionIdentification) });
    return { SaleToPOIRequest: saleToPOIRequest };
};
