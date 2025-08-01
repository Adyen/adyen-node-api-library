/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DifferentCurrenciesRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    "operation": string;
    /**
    * Checks the currency of the payment against the currency of the payment instrument.  Possible values:  - **true**: The currency of the payment is different from the currency of the payment instrument.  - **false**: The currencies are the same.  
    */
    "value"?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DifferentCurrenciesRestriction.attributeTypeMap;
    }

    public constructor() {
    }
}

