/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { RecurringDetailWrapper } from "./recurringDetailWrapper";


export class RecurringDetailsResult {
    /**
    * The date when the recurring details were created.
    */
    "creationDate"?: Date;
    /**
    * Payment details stored for recurring payments.
    */
    "details"?: Array<RecurringDetailWrapper>;
    /**
    * The most recent email for this shopper (if available).
    */
    "lastKnownShopperEmail"?: string;
    /**
    * The reference you use to uniquely identify the shopper (e.g. user ID or account ID).
    */
    "shopperReference"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "creationDate",
            "baseName": "creationDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<RecurringDetailWrapper>",
            "format": ""
        },
        {
            "name": "lastKnownShopperEmail",
            "baseName": "lastKnownShopperEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RecurringDetailsResult.attributeTypeMap;
    }

    public constructor() {
    }
}

