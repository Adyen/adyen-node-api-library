/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ConvertedAmount {
    'AmountValue': number;
    'Currency': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AmountValue",
            "baseName": "AmountValue",
            "type": "number"
        },
        {
            "name": "Currency",
            "baseName": "Currency",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConvertedAmount.attributeTypeMap;
    }
}

