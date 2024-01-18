/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TokenRequestedType } from './tokenRequestedType';

/**
* Surrogate of the PAN (Primary Account Number) of the payment card to  identify the payment mean of the customer. It allows, for a merchant, to identify   the customer.
*/
export class PaymentToken {
    'TokenRequestedType': TokenRequestedType;
    'TokenValue': string;
    /**
    * Expiry date and time. Limits the validity of a payment token.
    */
    'ExpiryDateTime'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "TokenRequestedType",
            "baseName": "TokenRequestedType",
            "type": "TokenRequestedType"
        },
        {
            "name": "TokenValue",
            "baseName": "TokenValue",
            "type": "string"
        },
        {
            "name": "ExpiryDateTime",
            "baseName": "ExpiryDateTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return PaymentToken.attributeTypeMap;
    }
}

