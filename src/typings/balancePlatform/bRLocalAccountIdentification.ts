/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BRLocalAccountIdentification {
    /**
    * The bank account number, without separators or whitespace.
    */
    'accountNumber': string;
    /**
    * The 3-digit bank code, with leading zeros.
    */
    'bankCode': string;
    /**
    * The bank account branch number, without separators or whitespace.
    */
    'branchNumber': string;
    /**
    * The 8-digit ISPB, with leading zeros.
    */
    'ispb'?: string;
    /**
    * **brLocal**
    */
    'type': BRLocalAccountIdentification.TypeEnum = BRLocalAccountIdentification.TypeEnum.BrLocal;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "bankCode",
            "baseName": "bankCode",
            "type": "string"
        },
        {
            "name": "branchNumber",
            "baseName": "branchNumber",
            "type": "string"
        },
        {
            "name": "ispb",
            "baseName": "ispb",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BRLocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BRLocalAccountIdentification.attributeTypeMap;
    }
}

export namespace BRLocalAccountIdentification {
    export enum TypeEnum {
        BrLocal = <any> 'brLocal'
    }
}
