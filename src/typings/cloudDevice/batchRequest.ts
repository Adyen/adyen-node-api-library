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


import { TransactionToPerform } from './transactionToPerform';

export class BatchRequest {
    'RemoveAllFlag'?: boolean;
    'TransactionToPerform'?: Array<TransactionToPerform>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "RemoveAllFlag",
            "baseName": "RemoveAllFlag",
            "type": "boolean"
        },
        {
            "name": "TransactionToPerform",
            "baseName": "TransactionToPerform",
            "type": "Array<TransactionToPerform>"
        }    ];

    static getAttributeTypeMap() {
        return BatchRequest.attributeTypeMap;
    }
}

