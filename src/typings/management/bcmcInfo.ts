/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BcmcInfo {
    /**
    * Indicates if [Bancontact mobile](https://docs.adyen.com/payment-methods/bancontact/bancontact-mobile) is enabled.
    */
    "enableBcmcMobile"?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enableBcmcMobile",
            "baseName": "enableBcmcMobile",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BcmcInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

