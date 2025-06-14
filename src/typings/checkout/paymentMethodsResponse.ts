/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { PaymentMethod } from "./paymentMethod";
import { StoredPaymentMethod } from "./storedPaymentMethod";


export class PaymentMethodsResponse {
    /**
    * Detailed list of payment methods required to generate payment forms.
    */
    "paymentMethods"?: Array<PaymentMethod>;
    /**
    * List of all stored payment methods.
    */
    "storedPaymentMethods"?: Array<StoredPaymentMethod>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paymentMethods",
            "baseName": "paymentMethods",
            "type": "Array<PaymentMethod>",
            "format": ""
        },
        {
            "name": "storedPaymentMethods",
            "baseName": "storedPaymentMethods",
            "type": "Array<StoredPaymentMethod>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

