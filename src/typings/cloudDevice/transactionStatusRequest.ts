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
 
/**
 * Cloud Device API
 * Definition of Cloud Device API Schema
 *
 */


import { MessageReference } from './messageReference';

export class TransactionStatusRequest {
    'DocumentQualifier'?: Array<TransactionStatusRequest.DocumentQualifierEnum>;
    'MessageReference'?: MessageReference;
    'ReceiptReprintFlag'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "DocumentQualifier",
            "baseName": "DocumentQualifier",
            "type": "Array<TransactionStatusRequest.DocumentQualifierEnum>"
        },
        {
            "name": "MessageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        },
        {
            "name": "ReceiptReprintFlag",
            "baseName": "ReceiptReprintFlag",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TransactionStatusRequest.attributeTypeMap;
    }
}

export namespace TransactionStatusRequest {
    export enum DocumentQualifierEnum {
        CashierReceipt = <any> 'CashierReceipt',
        CustomerReceipt = <any> 'CustomerReceipt',
        Document = <any> 'Document',
        Journal = <any> 'Journal',
        SaleReceipt = <any> 'SaleReceipt',
        Voucher = <any> 'Voucher'
    }
}
