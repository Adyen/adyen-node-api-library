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



export class SecurityTrailer {
    'AdyenCryptoVersion'?: number;
    'Hmac'?: any | null;
    'KeyIdentifier'?: string;
    'KeyVersion'?: number;
    'Nonce'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AdyenCryptoVersion",
            "baseName": "AdyenCryptoVersion",
            "type": "number"
        },
        {
            "name": "Hmac",
            "baseName": "Hmac",
            "type": "any"
        },
        {
            "name": "KeyIdentifier",
            "baseName": "KeyIdentifier",
            "type": "string"
        },
        {
            "name": "KeyVersion",
            "baseName": "KeyVersion",
            "type": "number"
        },
        {
            "name": "Nonce",
            "baseName": "Nonce",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return SecurityTrailer.attributeTypeMap;
    }
}

