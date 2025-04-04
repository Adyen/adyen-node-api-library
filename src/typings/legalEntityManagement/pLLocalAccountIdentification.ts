/*
 * The version of the OpenAPI document: v3
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
    * **plLocal**
    */
    'type': PLLocalAccountIdentification.TypeEnum = PLLocalAccountIdentification.TypeEnum.PlLocal;

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
            "type": "PLLocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PLLocalAccountIdentification.attributeTypeMap;
    }
}

export namespace PLLocalAccountIdentification {
    export enum TypeEnum {
        PlLocal = <any> 'plLocal'
    }
}
