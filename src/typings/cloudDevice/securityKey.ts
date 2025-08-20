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



export class SecurityKey {
    'AdyenCryptoVersion': number;
    'KeyIdentifier': string;
    'KeyVersion': number;
    'Passphrase': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AdyenCryptoVersion",
            "baseName": "AdyenCryptoVersion",
            "type": "number"
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
            "name": "Passphrase",
            "baseName": "Passphrase",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SecurityKey.attributeTypeMap;
    }
}

