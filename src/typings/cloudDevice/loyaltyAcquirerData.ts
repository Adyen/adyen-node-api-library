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

export class LoyaltyAcquirerData {
    'ApprovalCode'?: string;
    'HostReconciliationID'?: string;
    'LoyaltyAcquirerID'?: string;
    'LoyaltyTransactionID'?: TransactionIdentification;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ApprovalCode",
            "baseName": "ApprovalCode",
            "type": "string"
        },
        {
            "name": "HostReconciliationID",
            "baseName": "HostReconciliationID",
            "type": "string"
        },
        {
            "name": "LoyaltyAcquirerID",
            "baseName": "LoyaltyAcquirerID",
            "type": "string"
        },
        {
            "name": "LoyaltyTransactionID",
            "baseName": "LoyaltyTransactionID",
            "type": "TransactionIdentification"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyAcquirerData.attributeTypeMap;
    }
}

