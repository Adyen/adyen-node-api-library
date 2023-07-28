/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class NOLocalAccountIdentification {
    /**
    * The 11-digit bank account number, without separators or whitespace.
    */
    'accountNumber': string;
    /**
    * **noLocal**
    */
    'type': NOLocalAccountIdentification.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "NOLocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return NOLocalAccountIdentification.attributeTypeMap;
    }
}

export namespace NOLocalAccountIdentification {
    export enum TypeEnum {
        NoLocal = 'noLocal'
    }
}
