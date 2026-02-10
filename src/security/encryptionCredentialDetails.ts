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
* Details of the encryption credential used for encrypting the request payload (nexoBlob)
*/
export class EncryptionCredentialDetails {
    /**
    * The version of the Adyen-specific crypto implementation.
    */
    'AdyenCryptoVersion': number;
    /**
    * The unique identifier of the key.
    */
    'KeyIdentifier': string;
    /**
    * The version of the key.
    */
    'KeyVersion': number;
    /**
    * The passphrase used to derive the encryption key.
    */
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
        return EncryptionCredentialDetails.attributeTypeMap;
    }
}
