/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { DeliveryMethod } from './deliveryMethod';
import { TaxTotal } from './taxTotal';

export class PaypalUpdateOrderRequest {
    'amount'?: Amount | null;
    /**
    * The list of new delivery methods and the cost of each.
    */
    'deliveryMethods'?: Array<DeliveryMethod>;
    /**
    * The `paymentData` from the client side. This value changes every time you make a `/paypal/updateOrder` request.
    */
    'paymentData'?: string;
    /**
    * The original `pspReference` from the `/payments` response.
    */
    'pspReference'?: string;
    /**
    * The original `sessionId` from the `/sessions` response.
    */
    'sessionId'?: string;
    'taxTotal'?: TaxTotal | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount | null"
        },
        {
            "name": "deliveryMethods",
            "baseName": "deliveryMethods",
            "type": "Array<DeliveryMethod>"
        },
        {
            "name": "paymentData",
            "baseName": "paymentData",
            "type": "string"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "sessionId",
            "baseName": "sessionId",
            "type": "string"
        },
        {
            "name": "taxTotal",
            "baseName": "taxTotal",
            "type": "TaxTotal | null"
        }    ];

    static getAttributeTypeMap() {
        return PaypalUpdateOrderRequest.attributeTypeMap;
    }
}

