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


import { OriginalPOITransaction } from './originalPOITransaction';
import { StoredValueAccountId } from './storedValueAccountId';
import { StoredValueTransactionType } from './storedValueTransactionType';

export class StoredValueData {
    'Currency': string;
    'EanUpc'?: string;
    'ItemAmount': number;
    'OriginalPOITransaction'?: OriginalPOITransaction;
    'ProductCode'?: string;
    'StoredValueAccountID'?: StoredValueAccountId;
    'StoredValueProvider'?: string;
    'StoredValueTransactionType': StoredValueTransactionType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "EanUpc",
            "baseName": "EanUpc",
            "type": "string"
        },
        {
            "name": "ItemAmount",
            "baseName": "ItemAmount",
            "type": "number"
        },
        {
            "name": "OriginalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "ProductCode",
            "baseName": "ProductCode",
            "type": "string"
        },
        {
            "name": "StoredValueAccountID",
            "baseName": "StoredValueAccountID",
            "type": "StoredValueAccountId"
        },
        {
            "name": "StoredValueProvider",
            "baseName": "StoredValueProvider",
            "type": "string"
        },
        {
            "name": "StoredValueTransactionType",
            "baseName": "StoredValueTransactionType",
            "type": "StoredValueTransactionType"
        }    ];

    static getAttributeTypeMap() {
        return StoredValueData.attributeTypeMap;
    }
}

