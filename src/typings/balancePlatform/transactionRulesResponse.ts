/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionRule } from "./transactionRule";


export class TransactionRulesResponse {
    /**
    * List of transaction rules.
    */
    "transactionRules"?: Array<TransactionRule>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "transactionRules",
            "baseName": "transactionRules",
            "type": "Array<TransactionRule>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionRulesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

