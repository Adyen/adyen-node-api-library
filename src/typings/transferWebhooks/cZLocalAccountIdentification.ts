/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CZLocalAccountIdentification {
    /**
    * The 2- to 16-digit bank account number (Číslo účtu) in the following format:  - The optional prefix (předčíslí).  - The required second part (základní část) which must be at least two non-zero digits.  Examples:  - **19-123457** (with prefix)  - **123457** (without prefix)  - **000019-0000123457** (with prefix, normalized)  - **000000-0000123457** (without prefix, normalized)
    */
    'accountNumber': string;
    /**
    * The 4-digit bank code (Kód banky), without separators or whitespace.
    */
    'bankCode': string;
    /**
    * **czLocal**
    */
    'type': CZLocalAccountIdentification.TypeEnum;

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
            "name": "type",
            "baseName": "type",
            "type": "CZLocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CZLocalAccountIdentification.attributeTypeMap;
    }
}

export namespace CZLocalAccountIdentification {
    export enum TypeEnum {
        CzLocal = 'czLocal'
    }
}
