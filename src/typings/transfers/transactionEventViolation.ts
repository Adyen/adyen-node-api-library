/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionRuleReference } from './transactionRuleReference';
import { TransactionRuleSource } from './transactionRuleSource';

export class TransactionEventViolation {
    /**
    * An explanation about why the transaction rule failed.
    */
    'reason'?: string;
    'transactionRule'?: TransactionRuleReference;
    'transactionRuleSource'?: TransactionRuleSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "transactionRule",
            "baseName": "transactionRule",
            "type": "TransactionRuleReference"
        },
        {
            "name": "transactionRuleSource",
            "baseName": "transactionRuleSource",
            "type": "TransactionRuleSource"
        }    ];

    static getAttributeTypeMap() {
        return TransactionEventViolation.attributeTypeMap;
    }
}

