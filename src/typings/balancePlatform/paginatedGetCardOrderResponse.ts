/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CardOrder } from "./cardOrder";


export class PaginatedGetCardOrderResponse {
    /**
    * Contains objects with information about card orders.
    */
    "cardOrders"?: Array<CardOrder>;
    /**
    * Indicates whether there are more items on the next page.
    */
    "hasNext": boolean;
    /**
    * Indicates whether there are more items on the previous page.
    */
    "hasPrevious": boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cardOrders",
            "baseName": "cardOrders",
            "type": "Array<CardOrder>",
            "format": ""
        },
        {
            "name": "hasNext",
            "baseName": "hasNext",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasPrevious",
            "baseName": "hasPrevious",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaginatedGetCardOrderResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

