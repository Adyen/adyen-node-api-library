/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PLLocalAccountIdentification {
    /**
    * The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.
    */
    'accountNumber': string;
    /**
    * The form factor of the account.  Possible values: **physical**, **virtual**. Default value: **physical**.
    */
    'formFactor'?: string | null;
    /**
    * **plLocal**
    */
    'type': PLLocalAccountIdentification.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "formFactor",
            "baseName": "formFactor",
            "type": "string | null"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PLLocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PLLocalAccountIdentification.attributeTypeMap;
    }
}

export namespace PLLocalAccountIdentification {
    export enum TypeEnum {
        PlLocal = 'plLocal'
    }
}
