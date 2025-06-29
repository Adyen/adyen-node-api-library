/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { DelegatedAuthenticationData } from "./delegatedAuthenticationData";


export class RegisterSCARequest {
    /**
    * The name of the SCA device that you are registering. You can use it to help your users identify the device.  If you do not specify a `name`, Adyen automatically generates one.
    */
    "name"?: string;
    /**
    * The unique identifier of the payment instrument for which you are registering the SCA device.
    */
    "paymentInstrumentId": string;
    "strongCustomerAuthentication": DelegatedAuthenticationData;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentInstrumentId",
            "baseName": "paymentInstrumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "strongCustomerAuthentication",
            "baseName": "strongCustomerAuthentication",
            "type": "DelegatedAuthenticationData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RegisterSCARequest.attributeTypeMap;
    }

    public constructor() {
    }
}

