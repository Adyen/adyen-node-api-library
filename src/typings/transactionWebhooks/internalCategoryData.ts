/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class InternalCategoryData {
    /**
    * The capture\'s merchant reference included in the transfer.
    */
    "modificationMerchantReference"?: string;
    /**
    * The capture reference included in the transfer.
    */
    "modificationPspReference"?: string;
    /**
    * **internal**
    */
    "type"?: InternalCategoryData.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "modificationMerchantReference",
            "baseName": "modificationMerchantReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "modificationPspReference",
            "baseName": "modificationPspReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "InternalCategoryData.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InternalCategoryData.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace InternalCategoryData {
    export enum TypeEnum {
        Internal = 'internal'
    }
}
