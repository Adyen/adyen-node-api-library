/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class RatepayDetails {
    /**
    * The address where to send the invoice.
    */
    'billingAddress'?: string;
    /**
    * The address where the goods should be delivered.
    */
    'deliveryAddress'?: string;
    /**
    * Shopper name, date of birth, phone number, and email address.
    */
    'personalDetails'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **ratepay**
    */
    'type': RatepayDetails.TypeEnum = RatepayDetails.TypeEnum.Ratepay;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "string"
        },
        {
            "name": "deliveryAddress",
            "baseName": "deliveryAddress",
            "type": "string"
        },
        {
            "name": "personalDetails",
            "baseName": "personalDetails",
            "type": "string"
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
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
            "type": "RatepayDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return RatepayDetails.attributeTypeMap;
    }
}

export namespace RatepayDetails {
    export enum TypeEnum {
        Ratepay = <any> 'ratepay',
        RatepayDirectdebit = <any> 'ratepay_directdebit'
    }
}
