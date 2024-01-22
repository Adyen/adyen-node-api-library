/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


/**
* It contains information related to the security of the message. SecurityTrailer as used by Adyen.
*/
export class SecurityTrailer {
    'AdyenCryptoVersion': number;
    'KeyIdentifier': string;
    'KeyVersion': number;
    'Nonce': string;
    'Hmac': string;

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
            "name": "Nonce",
            "baseName": "Nonce",
            "type": "string"
        },
        {
            "name": "Hmac",
            "baseName": "Hmac",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SecurityTrailer.attributeTypeMap;
    }
}
