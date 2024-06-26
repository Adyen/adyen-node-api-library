/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { DelegatedAuthenticationData } from './delegatedAuthenticationData';

export class RegisterSCARequest {
    /**
    * The unique identifier of the payment instrument for which you are registering the SCA device.
    */
    'paymentInstrumentId': string;
    'strongCustomerAuthentication': DelegatedAuthenticationData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentInstrumentId",
            "baseName": "paymentInstrumentId",
            "type": "string"
        },
        {
            "name": "strongCustomerAuthentication",
            "baseName": "strongCustomerAuthentication",
            "type": "DelegatedAuthenticationData"
        }    ];

    static getAttributeTypeMap() {
        return RegisterSCARequest.attributeTypeMap;
    }
}

