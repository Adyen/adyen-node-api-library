/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Permit } from "./permit";


export class CreatePermitRequest {
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    "merchantAccount": string;
    /**
    * The permits to create for this recurring contract.
    */
    "permits": Array<Permit>;
    /**
    * The recurring contract the new permits will use.
    */
    "recurringDetailReference": string;
    /**
    * The shopper\'s reference to uniquely identify this shopper (e.g. user ID or account ID).
    */
    "shopperReference": string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string",
            "format": ""
        },
        {
            "name": "permits",
            "baseName": "permits",
            "type": "Array<Permit>",
            "format": ""
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
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
        return CreatePermitRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

