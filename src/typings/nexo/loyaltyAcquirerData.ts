/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionIDType } from './transactionIDType';

export class LoyaltyAcquirerData {
    'LoyaltyAcquirerID'?: string;
    'ApprovalCode'?: string;
    'LoyaltyTransactionID'?: TransactionIDType;
    'HostReconciliationID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "LoyaltyAcquirerID",
            "baseName": "LoyaltyAcquirerID",
            "type": "string"
        },
        {
            "name": "ApprovalCode",
            "baseName": "ApprovalCode",
            "type": "string"
        },
        {
            "name": "LoyaltyTransactionID",
            "baseName": "LoyaltyTransactionID",
            "type": "TransactionIDType"
        },
        {
            "name": "HostReconciliationID",
            "baseName": "HostReconciliationID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyAcquirerData.attributeTypeMap;
    }
}
