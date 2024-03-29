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
    'modificationMerchantReference'?: string;
    /**
    * The capture reference included in the transfer.
    */
    'modificationPspReference'?: string;
    /**
    * **internal**
    */
    'type'?: InternalCategoryData.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "modificationMerchantReference",
            "baseName": "modificationMerchantReference",
            "type": "string"
        },
        {
            "name": "modificationPspReference",
            "baseName": "modificationPspReference",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "InternalCategoryData.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return InternalCategoryData.attributeTypeMap;
    }
}

export namespace InternalCategoryData {
    export enum TypeEnum {
        Internal = 'internal'
    }
}
