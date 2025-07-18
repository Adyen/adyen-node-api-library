/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class WalletProviderAccountScoreRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    "operation": string;
    "value"?: number;

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
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return WalletProviderAccountScoreRestriction.attributeTypeMap;
    }

    public constructor() {
    }
}

