/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address } from "./address";


export class BillingEntity {
    "address"?: Address | null;
    /**
    * The email address of the billing entity.
    */
    "email"?: string;
    /**
    * The unique identifier of the billing entity, for use as `billingEntityId` when creating an order.
    */
    "id"?: string;
    /**
    * The unique name of the billing entity.
    */
    "name"?: string;
    /**
    * The tax number of the billing entity.
    */
    "taxId"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address | null",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "taxId",
            "baseName": "taxId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BillingEntity.attributeTypeMap;
    }

    public constructor() {
    }
}

