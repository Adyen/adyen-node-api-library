/*
 * The version of the OpenAPI document: v54
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BinDetail {
    /**
    * The country where the card was issued.
    */
    "issuerCountry"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "issuerCountry",
            "baseName": "issuerCountry",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BinDetail.attributeTypeMap;
    }

    public constructor() {
    }
}

