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


export class NexoDerivedKey {
    'cipherKey'?: any | null;
    'hmacKey'?: any | null;
    'iv'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cipherKey",
            "baseName": "cipherKey",
            "type": "any"
        },
        {
            "name": "hmacKey",
            "baseName": "hmacKey",
            "type": "any"
        },
        {
            "name": "iv",
            "baseName": "iv",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return NexoDerivedKey.attributeTypeMap;
    }
}

