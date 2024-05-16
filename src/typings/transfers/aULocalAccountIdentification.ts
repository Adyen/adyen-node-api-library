/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AULocalAccountIdentification {
    /**
    * The bank account number, without separators or whitespace.
    */
    'accountNumber': string;
    /**
    * The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.
    */
    'bsbCode': string;
    /**
    * **auLocal**
    */
    'type': AULocalAccountIdentification.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "bsbCode",
            "baseName": "bsbCode",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AULocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return AULocalAccountIdentification.attributeTypeMap;
    }
}

export namespace AULocalAccountIdentification {
    export enum TypeEnum {
        AuLocal = 'auLocal'
    }
}
