/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SGLocalAccountIdentification {
    /**
    * The 4- to 19-digit bank account number, without separators or whitespace.
    */
    'accountNumber': string;
    /**
    * The bank\'s 8- or 11-character BIC or SWIFT code.
    */
    'bic': string;
    /**
    * **sgLocal**
    */
    'type'?: SGLocalAccountIdentification.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SGLocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return SGLocalAccountIdentification.attributeTypeMap;
    }
}

export namespace SGLocalAccountIdentification {
    export enum TypeEnum {
        SgLocal = 'sgLocal'
    }
}
