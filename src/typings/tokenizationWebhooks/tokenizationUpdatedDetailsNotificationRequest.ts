/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { RecurringTokenStoreOperation } from "./recurringTokenStoreOperation";


export class TokenizationUpdatedDetailsNotificationRequest {
    /**
    * The date and time when the event happened, in ISO 8601 extended format.
    */
    "createdAt": Date;
    "data": RecurringTokenStoreOperation;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    "environment": TokenizationUpdatedDetailsNotificationRequest.EnvironmentEnum;
    /**
    * The PSP reference of the event that triggered the webhook.
    */
    "eventId": string;
    /**
    * The type of webhook.
    */
    "type": TokenizationUpdatedDetailsNotificationRequest.TypeEnum;
    /**
    * The version of this entity.
    */
    "version"?: string;

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
            "type": "RecurringTokenStoreOperation",
            "format": ""
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "TokenizationUpdatedDetailsNotificationRequest.EnvironmentEnum",
            "format": ""
        },
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TokenizationUpdatedDetailsNotificationRequest.TypeEnum",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TokenizationUpdatedDetailsNotificationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace TokenizationUpdatedDetailsNotificationRequest {
    export enum EnvironmentEnum {
        Test = 'test',
        Live = 'live'
    }
    export enum TypeEnum {
        RecurringTokenUpdated = 'recurring.token.updated'
    }
}
