/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { DisputeEventNotification } from './disputeEventNotification';

export class DisputeNotificationRequest {
    'data': DisputeEventNotification;
    /**
    * Type of webhook.
    */
    'type': DisputeNotificationRequest.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "DisputeEventNotification"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DisputeNotificationRequest.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return DisputeNotificationRequest.attributeTypeMap;
    }
}

export namespace DisputeNotificationRequest {
    export enum TypeEnum {
        Created = 'balancePlatform.dispute.created',
        Updated = 'balancePlatform.dispute.updated'
    }
}
