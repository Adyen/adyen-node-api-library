/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SplitAmount {
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). By default, this is the original payment currency.
    */
    "currency"?: string;
    /**
    * The value of the split amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    "value": number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return SplitAmount.attributeTypeMap;
    }

    public constructor() {
    }
}

