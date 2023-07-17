/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BillingEntity } from './billingEntity';

export class BillingEntitiesResponse {
    /**
    * List of legal entities that can be used for the billing of orders.
    */
    'data'?: Array<BillingEntity>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<BillingEntity>"
        }    ];

    static getAttributeTypeMap() {
        return BillingEntitiesResponse.attributeTypeMap;
    }
}

