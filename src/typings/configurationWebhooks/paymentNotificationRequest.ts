/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { PaymentInstrumentNotificationData } from './paymentInstrumentNotificationData';

export class PaymentNotificationRequest {
    'data': PaymentInstrumentNotificationData;
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
    'type': PaymentNotificationRequest.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "PaymentInstrumentNotificationData"
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
            "type": "PaymentNotificationRequest.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentNotificationRequest.attributeTypeMap;
    }
}

export namespace PaymentNotificationRequest {
    export enum TypeEnum {
        Created = 'balancePlatform.paymentInstrument.created',
        Updated = 'balancePlatform.paymentInstrument.updated'
    }
}
