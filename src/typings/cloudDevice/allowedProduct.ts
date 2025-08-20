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


export class AllowedProduct {
    'AdditionalProductInfo'?: string;
    'EanUpc'?: string;
    'ProductCode': string;
    'ProductLabel'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AdditionalProductInfo",
            "baseName": "AdditionalProductInfo",
            "type": "string"
        },
        {
            "name": "EanUpc",
            "baseName": "EanUpc",
            "type": "string"
        },
        {
            "name": "ProductCode",
            "baseName": "ProductCode",
            "type": "string"
        },
        {
            "name": "ProductLabel",
            "baseName": "ProductLabel",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AllowedProduct.attributeTypeMap;
    }
}

