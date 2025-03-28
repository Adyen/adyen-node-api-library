/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PayUUpiDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    *
	* @deprecated since Adyen Checkout API v49
	* Use `storedPaymentMethodId` instead.
    */
    'recurringDetailReference'?: string;
    /**
    * The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only.
    */
    'shopperNotificationReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **payu_IN_upi**
    */
    'type': PayUUpiDetails.TypeEnum;
    /**
    * The virtual payment address for UPI.
    */
    'virtualPaymentAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
            "type": "string"
        },
        {
            "name": "shopperNotificationReference",
            "baseName": "shopperNotificationReference",
            "type": "string"
        },
        {
            "name": "storedPaymentMethodId",
            "baseName": "storedPaymentMethodId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PayUUpiDetails.TypeEnum"
        },
        {
            "name": "virtualPaymentAddress",
            "baseName": "virtualPaymentAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PayUUpiDetails.attributeTypeMap;
    }
}

export namespace PayUUpiDetails {
    export enum TypeEnum {
        PayuInUpi = 'payu_IN_upi'
    }
}
