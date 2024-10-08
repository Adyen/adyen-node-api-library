/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PayMeInfo {
    /**
    * Merchant display name
    */
    'displayName': string;
    /**
    * Merchant logo. Format: Base64-encoded string.
    */
    'logo': string;
    /**
    * The email address of merchant support.
    */
    'supportEmail': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string"
        },
        {
            "name": "supportEmail",
            "baseName": "supportEmail",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PayMeInfo.attributeTypeMap;
    }
}

