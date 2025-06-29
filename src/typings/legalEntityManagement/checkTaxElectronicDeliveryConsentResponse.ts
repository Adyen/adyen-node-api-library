/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CheckTaxElectronicDeliveryConsentResponse {
    /**
    * Consent to electronically deliver tax form US1099-K.
    */
    "US1099k"?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "US1099k",
            "baseName": "US1099k",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CheckTaxElectronicDeliveryConsentResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

