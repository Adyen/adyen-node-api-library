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


import { StoredValueAccountStatus } from './storedValueAccountStatus';
import { StoredValueTransactionType } from './storedValueTransactionType';
import { TransactionIdentification } from './transactionIdentification';

export class StoredValueResult {
    'Currency': string;
    'EanUpc'?: string;
    'HostTransactionID'?: TransactionIdentification;
    'ItemAmount': number;
    'ProductCode': string;
    'StoredValueAccountStatus': StoredValueAccountStatus;
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
            "name": "HostTransactionID",
            "baseName": "HostTransactionID",
            "type": "TransactionIdentification"
        },
        {
            "name": "ItemAmount",
            "baseName": "ItemAmount",
            "type": "number"
        },
        {
            "name": "ProductCode",
            "baseName": "ProductCode",
            "type": "string"
        },
        {
            "name": "StoredValueAccountStatus",
            "baseName": "StoredValueAccountStatus",
            "type": "StoredValueAccountStatus"
        },
        {
            "name": "StoredValueTransactionType",
            "baseName": "StoredValueTransactionType",
            "type": "StoredValueTransactionType"
        }    ];

    static getAttributeTypeMap() {
        return StoredValueResult.attributeTypeMap;
    }
}

