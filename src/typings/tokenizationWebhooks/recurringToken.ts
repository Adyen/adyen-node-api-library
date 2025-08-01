/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class RecurringToken {
    /**
    * The identifier of the merchant account related to the event that triggered the webhook.
    */
    "merchantAccount": string;
    /**
    * Your unique shopper reference that is associated with the `storedPaymentMethodId`.
    */
    "shopperReference": string;
    /**
    * The ID of the token.
    */
    "storedPaymentMethodId": string;
    /**
    * The type of the payment method.
    */
    "type": string;

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
            "name": "shopperReference",
            "baseName": "shopperReference",
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
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RecurringToken.attributeTypeMap;
    }

    public constructor() {
    }
}

