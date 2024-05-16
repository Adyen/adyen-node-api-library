/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class NZLocalAccountIdentification {
    /**
    * The 15-16 digit bank account number. The first 2 digits are the bank number, the next 4 digits are the branch number, the next 7 digits are the account number, and the final 2-3 digits are the suffix.
    */
    'accountNumber': string;
    /**
    * **nzLocal**
    */
    'type': NZLocalAccountIdentification.TypeEnum;

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
            "type": "NZLocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return NZLocalAccountIdentification.attributeTypeMap;
    }
}

export namespace NZLocalAccountIdentification {
    export enum TypeEnum {
        NzLocal = 'nzLocal'
    }
}
