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


import { LoyaltyTransactionType } from './loyaltyTransactionType';
import { OriginalPOITransaction } from './originalPOITransaction';
import { SaleItem } from './saleItem';
import { TransactionConditions } from './transactionConditions';

export class LoyaltyTransaction {
    'Currency'?: string;
    'LoyaltyTransactionType': LoyaltyTransactionType;
    'OriginalPOITransaction'?: OriginalPOITransaction;
    'SaleItem'?: Array<SaleItem>;
    'TotalAmount'?: number;
    'TransactionConditions'?: TransactionConditions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "LoyaltyTransactionType",
            "baseName": "LoyaltyTransactionType",
            "type": "LoyaltyTransactionType"
        },
        {
            "name": "OriginalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "SaleItem",
            "baseName": "SaleItem",
            "type": "Array<SaleItem>"
        },
        {
            "name": "TotalAmount",
            "baseName": "TotalAmount",
            "type": "number"
        },
        {
            "name": "TransactionConditions",
            "baseName": "TransactionConditions",
            "type": "TransactionConditions"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyTransaction.attributeTypeMap;
    }
}

