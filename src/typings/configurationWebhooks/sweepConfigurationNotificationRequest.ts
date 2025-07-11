/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { SweepConfigurationNotificationData } from "./sweepConfigurationNotificationData";


export class SweepConfigurationNotificationRequest {
    "data": SweepConfigurationNotificationData;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    "environment": string;
    /**
    * When the event was queued.
    */
    "timestamp"?: Date;
    /**
    * Type of webhook.
    */
    "type": SweepConfigurationNotificationRequest.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "SweepConfigurationNotificationData",
            "format": ""
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SweepConfigurationNotificationRequest.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SweepConfigurationNotificationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace SweepConfigurationNotificationRequest {
    export enum TypeEnum {
        BalancePlatformBalanceAccountSweepCreated = 'balancePlatform.balanceAccountSweep.created',
        BalancePlatformBalanceAccountSweepUpdated = 'balancePlatform.balanceAccountSweep.updated',
        BalancePlatformBalanceAccountSweepDeleted = 'balancePlatform.balanceAccountSweep.deleted'
    }
}
