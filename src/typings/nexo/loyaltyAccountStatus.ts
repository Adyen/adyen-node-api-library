/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { LoyaltyAccount } from './loyaltyAccount';
import { LoyaltyUnit } from './loyaltyUnit';

export class LoyaltyAccountStatus {
    'LoyaltyAccount': LoyaltyAccount;
    'CurrentBalance'?: number;
    'LoyaltyUnit'?: LoyaltyUnit;
    'Currency'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "LoyaltyAccount",
            "baseName": "LoyaltyAccount",
            "type": "LoyaltyAccount"
        },
        {
            "name": "CurrentBalance",
            "baseName": "CurrentBalance",
            "type": "number"
        },
        {
            "name": "LoyaltyUnit",
            "baseName": "LoyaltyUnit",
            "type": "LoyaltyUnit"
        },
        {
            "name": "Currency",
            "baseName": "Currency",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyAccountStatus.attributeTypeMap;
    }
}

