/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class GenericIssuerPaymentMethodDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The issuer id of the shopper\'s selected bank.
    */
    'issuer': string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    *
	* @deprecated since Adyen Checkout API v49
	* Use `storedPaymentMethodId` instead.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **genericissuer**
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
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
            "type": "GenericIssuerPaymentMethodDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return GenericIssuerPaymentMethodDetails.attributeTypeMap;
    }
}

