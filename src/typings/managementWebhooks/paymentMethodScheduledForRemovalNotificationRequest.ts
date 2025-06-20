/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { MidServiceNotificationData } from "./midServiceNotificationData";


export class PaymentMethodScheduledForRemovalNotificationRequest {
    /**
    * Timestamp for when the webhook was created.
    */
    "createdAt": Date;
    "data": MidServiceNotificationData;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    "environment": string;
    /**
    * Type of notification.
    */
    "type": PaymentMethodScheduledForRemovalNotificationRequest.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "MidServiceNotificationData",
            "format": ""
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentMethodScheduledForRemovalNotificationRequest.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodScheduledForRemovalNotificationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace PaymentMethodScheduledForRemovalNotificationRequest {
    export enum TypeEnum {
        PaymentMethodRequestScheduledForRemoval = 'paymentMethodRequest.scheduledForRemoval'
    }
}
