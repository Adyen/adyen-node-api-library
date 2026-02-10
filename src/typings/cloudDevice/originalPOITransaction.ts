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

export class OriginalPOITransaction {
    'AcquirerID'?: string;
    'ApprovalCode'?: string;
    'CustomerLanguage'?: string;
    'HostTransactionID'?: TransactionIdentification;
    'POIID'?: string;
    'POITransactionID'?: TransactionIdentification;
    'ReuseCardDataFlag'?: boolean;
    'SaleID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AcquirerID",
            "baseName": "AcquirerID",
            "type": "string"
        },
        {
            "name": "ApprovalCode",
            "baseName": "ApprovalCode",
            "type": "string"
        },
        {
            "name": "CustomerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "HostTransactionID",
            "baseName": "HostTransactionID",
            "type": "TransactionIdentification"
        },
        {
            "name": "POIID",
            "baseName": "POIID",
            "type": "string"
        },
        {
            "name": "POITransactionID",
            "baseName": "POITransactionID",
            "type": "TransactionIdentification"
        },
        {
            "name": "ReuseCardDataFlag",
            "baseName": "ReuseCardDataFlag",
            "type": "boolean"
        },
        {
            "name": "SaleID",
            "baseName": "SaleID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OriginalPOITransaction.attributeTypeMap;
    }
}

