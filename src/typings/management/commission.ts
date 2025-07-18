/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Commission {
    /**
    * A fixed commission fee, in minor units.
    */
    "fixedAmount"?: number;
    /**
    * A variable commission fee, in basis points.
    */
    "variablePercentage"?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fixedAmount",
            "baseName": "fixedAmount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "variablePercentage",
            "baseName": "variablePercentage",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return Commission.attributeTypeMap;
    }

    public constructor() {
    }
}

