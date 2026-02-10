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


import { TransactionType } from './transactionType';

export class PaymentTotals {
    'TransactionAmount': number;
    'TransactionCount': number;
    'TransactionType': TransactionType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "TransactionAmount",
            "baseName": "TransactionAmount",
            "type": "number"
        },
        {
            "name": "TransactionCount",
            "baseName": "TransactionCount",
            "type": "number"
        },
        {
            "name": "TransactionType",
            "baseName": "TransactionType",
            "type": "TransactionType"
        }    ];

    static getAttributeTypeMap() {
        return PaymentTotals.attributeTypeMap;
    }
}

