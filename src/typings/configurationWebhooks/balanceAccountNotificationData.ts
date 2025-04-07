/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BalanceAccount } from './balanceAccount';

export class BalanceAccountNotificationData {
    'balanceAccount'?: BalanceAccount;
    /**
    * The unique identifier of the balance platform.
    */
    'balancePlatform'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "balanceAccount",
            "baseName": "balanceAccount",
            "type": "BalanceAccount"
        },
        {
            "name": "balancePlatform",
            "baseName": "balancePlatform",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BalanceAccountNotificationData.attributeTypeMap;
    }
}

