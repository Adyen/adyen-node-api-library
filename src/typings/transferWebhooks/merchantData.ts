/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { NameLocation } from './nameLocation';

export class MerchantData {
    /**
    * The unique identifier of the merchant\'s acquirer.
    */
    'acquirerId'?: string;
    /**
    * The merchant category code.
    */
    'mcc'?: string;
    /**
    * The unique identifier of the merchant.
    */
    'merchantId'?: string;
    'nameLocation'?: NameLocation | null;
    /**
    * The postal code of the merchant.
    */
    'postalCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acquirerId",
            "baseName": "acquirerId",
            "type": "string"
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "nameLocation",
            "baseName": "nameLocation",
            "type": "NameLocation | null"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MerchantData.attributeTypeMap;
    }
}

