/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionEventViolation } from './transactionEventViolation';

export class TransactionRulesResult {
    /**
    * The advice given by the Risk analysis.
    */
    'advice'?: string;
    /**
    * Indicates whether the transaction passed the evaluation for all transaction rules.
    */
    'allRulesPassed'?: boolean;
    /**
    * Array containing all the transaction rules that the transaction violated. This list is only sent when `allRulesPassed` is **false**.
    */
    'failedTransactionRules'?: Array<TransactionEventViolation>;
    /**
    * The score of the Risk analysis.
    */
    'score'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "advice",
            "baseName": "advice",
            "type": "string"
        },
        {
            "name": "allRulesPassed",
            "baseName": "allRulesPassed",
            "type": "boolean"
        },
        {
            "name": "failedTransactionRules",
            "baseName": "failedTransactionRules",
            "type": "Array<TransactionEventViolation>"
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRulesResult.attributeTypeMap;
    }
}

