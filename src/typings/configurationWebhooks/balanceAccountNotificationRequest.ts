/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BalanceAccountNotificationData } from './balanceAccountNotificationData';

export class BalanceAccountNotificationRequest {
    'data': BalanceAccountNotificationData;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    'environment': string;
    /**
    * When the event was queued.
    */
    'timestamp'?: Date;
    /**
    * Type of webhook.
    */
    'type': BalanceAccountNotificationRequest.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "BalanceAccountNotificationData"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BalanceAccountNotificationRequest.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BalanceAccountNotificationRequest.attributeTypeMap;
    }
}

export namespace BalanceAccountNotificationRequest {
    export enum TypeEnum {
        Updated = 'balancePlatform.balanceAccount.updated',
        Created = 'balancePlatform.balanceAccount.created'
    }
}
