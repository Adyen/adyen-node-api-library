/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Transaction } from "./transaction";


export class TransactionNotificationRequestV4 {
    "data": Transaction;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    "environment": string;
    /**
    * When the event was queued.
    */
    "timestamp"?: Date;
    /**
    * Type of the webhook.
    */
    "type"?: TransactionNotificationRequestV4.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Transaction",
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
            "type": "TransactionNotificationRequestV4.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionNotificationRequestV4.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace TransactionNotificationRequestV4 {
    export enum TypeEnum {
        BalancePlatformTransactionCreated = 'balancePlatform.transaction.created'
    }
}
