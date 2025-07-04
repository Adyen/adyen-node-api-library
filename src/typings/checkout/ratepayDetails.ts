/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class RatepayDetails {
    /**
    * The address where to send the invoice.
    */
    "billingAddress"?: string;
    /**
    * The checkout attempt identifier.
    */
    "checkoutAttemptId"?: string;
    /**
    * The address where the goods should be delivered.
    */
    "deliveryAddress"?: string;
    /**
    * Shopper name, date of birth, phone number, and email address.
    */
    "personalDetails"?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    *
	* @deprecated since Adyen Checkout API v49
	* Use `storedPaymentMethodId` instead.
    */
    "recurringDetailReference"?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    "storedPaymentMethodId"?: string;
    /**
    * **ratepay**
    */
    "type": RatepayDetails.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryAddress",
            "baseName": "deliveryAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "personalDetails",
            "baseName": "personalDetails",
            "type": "string",
            "format": ""
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "storedPaymentMethodId",
            "baseName": "storedPaymentMethodId",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RatepayDetails.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RatepayDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace RatepayDetails {
    export enum TypeEnum {
        Ratepay = 'ratepay',
        RatepayDirectdebit = 'ratepay_directdebit'
    }
}
