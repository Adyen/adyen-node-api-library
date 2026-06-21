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


import { SaleData } from './saleData';
import { StoredValueData } from './storedValueData';

export class StoredValueRequest {
    'CustomerLanguage'?: string;
    'SaleData': SaleData;
    'StoredValueData': Array<StoredValueData>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CustomerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "SaleData",
            "baseName": "SaleData",
            "type": "SaleData"
        },
        {
            "name": "StoredValueData",
            "baseName": "StoredValueData",
            "type": "Array<StoredValueData>"
        }    ];

    static getAttributeTypeMap() {
        return StoredValueRequest.attributeTypeMap;
    }
}

