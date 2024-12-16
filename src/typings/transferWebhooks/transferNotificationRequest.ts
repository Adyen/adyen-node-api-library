/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransferData } from './transferData';

export class TransferNotificationRequest {
    'data': TransferData;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    'environment': string;
    /**
    * When the event was queued.
    */
    'timestamp'?: Date;
    /**
    * The type of webhook.
    */
    'type'?: TransferNotificationRequest.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "TransferData"
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
            "type": "TransferNotificationRequest.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return TransferNotificationRequest.attributeTypeMap;
    }
}

export namespace TransferNotificationRequest {
    export enum TypeEnum {
        Created = 'balancePlatform.transfer.created',
        Updated = 'balancePlatform.transfer.updated'
    }
}
