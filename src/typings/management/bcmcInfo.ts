/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BcmcInfo {
    /**
    * Indicates if [Bancontact mobile](https://docs.adyen.com/payment-methods/bancontact/bancontact-mobile) is enabled.
    */
    'enableBcmcMobile'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enableBcmcMobile",
            "baseName": "enableBcmcMobile",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return BcmcInfo.attributeTypeMap;
    }
}

