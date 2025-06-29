/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BankAccountAccountIdentification } from "./bankAccountAccountIdentification";


export class BankAccount {
    "accountIdentification": BankAccountAccountIdentification;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountIdentification",
            "baseName": "accountIdentification",
            "type": "BankAccountAccountIdentification",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BankAccount.attributeTypeMap;
    }

    public constructor() {
    }
}

