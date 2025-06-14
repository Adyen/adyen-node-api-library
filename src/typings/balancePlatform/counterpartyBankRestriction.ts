/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BankIdentification } from "./bankIdentification";


export class CounterpartyBankRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    "operation": string;
    /**
    * The list of counterparty bank institutions to be evaluated.
    */
    "value"?: Array<BankIdentification>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<BankIdentification>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CounterpartyBankRestriction.attributeTypeMap;
    }

    public constructor() {
    }
}

