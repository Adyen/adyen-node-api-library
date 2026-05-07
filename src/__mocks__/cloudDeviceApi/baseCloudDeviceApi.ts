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
 * Copyright (c) 2025 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

// base test class for Cloud Device API

import {
    AmountsReq,
    MessageCategoryType,
    MessageClassType,
    MessageHeader,
    MessageType,
    PaymentRequest,
    PaymentTransaction,
    SaleData,
    SaleToPOIRequest,
    CloudDeviceApiRequest,
    TransactionIdentification,
    ReversalRequest,
    ReversalReasonType
} from "../../typings/cloudDevice/models";

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


export const createCloudDeviceApiRequest = (): CloudDeviceApiRequest => {
    const messageHeader = getMessageHeader();
    const saleToPOIRequest = getSaleToPOIRequest(messageHeader, { PaymentRequest: paymentRequest });
    return { SaleToPOIRequest: saleToPOIRequest };
};

export const createCloudDeviceAPIRefundRequest = (transactionIdentification: TransactionIdentification): CloudDeviceApiRequest => {
    const messageHeader = getMessageHeader({ messageCategory: MessageCategoryType.Reversal });
    const saleToPOIRequest = getSaleToPOIRequest(messageHeader, { ReversalRequest: getReversalRequest(transactionIdentification) });
    return { SaleToPOIRequest: saleToPOIRequest };
};