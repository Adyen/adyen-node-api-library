/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Permit } from './permit';

export class CreatePermitRequest {
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    /**
    * The permits to create for this recurring contract.
    */
    'permits': Array<Permit>;
    /**
    * The recurring contract the new permits will use.
    */
    'recurringDetailReference': string;
    /**
    * The shopper\'s reference to uniquely identify this shopper (e.g. user ID or account ID).
    */
    'shopperReference': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "permits",
            "baseName": "permits",
            "type": "Array<Permit>"
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
            "type": "string"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreatePermitRequest.attributeTypeMap;
    }
}

