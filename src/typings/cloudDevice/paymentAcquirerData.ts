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


import { TransactionIdentification } from './transactionIdentification';

export class PaymentAcquirerData {
    'AcquirerID'?: string;
    'AcquirerPOIID': string;
    'AcquirerTransactionID'?: TransactionIdentification;
    'ApprovalCode'?: string;
    'MerchantID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AcquirerID",
            "baseName": "AcquirerID",
            "type": "string"
        },
        {
            "name": "AcquirerPOIID",
            "baseName": "AcquirerPOIID",
            "type": "string"
        },
        {
            "name": "AcquirerTransactionID",
            "baseName": "AcquirerTransactionID",
            "type": "TransactionIdentification"
        },
        {
            "name": "ApprovalCode",
            "baseName": "ApprovalCode",
            "type": "string"
        },
        {
            "name": "MerchantID",
            "baseName": "MerchantID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentAcquirerData.attributeTypeMap;
    }
}

