/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { MidServiceNotificationData } from './midServiceNotificationData';

export class PaymentMethodRequestRemovedNotificationRequest {
    /**
    * Timestamp for when the webhook was created.
    */
    'createdAt': Date;
    'data': MidServiceNotificationData;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    'environment': string;
    /**
    * Type of notification.
    */
    'type': PaymentMethodRequestRemovedNotificationRequest.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "MidServiceNotificationData"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentMethodRequestRemovedNotificationRequest.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodRequestRemovedNotificationRequest.attributeTypeMap;
    }
}

export namespace PaymentMethodRequestRemovedNotificationRequest {
    export enum TypeEnum {
        PaymentMethodRequestRemoved = 'paymentMethod.requestRemoved'
    }
}
