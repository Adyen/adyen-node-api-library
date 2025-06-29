/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class MinorUnitsMonetaryValue {
    /**
    * The transaction amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    "amount"?: number;
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
    */
    "currencyCode"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MinorUnitsMonetaryValue.attributeTypeMap;
    }

    public constructor() {
    }
}

