/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AmazonPayDetails {
    /**
    * This is the `amazonPayToken` that you obtained from the [Get Checkout Session](https://amazon-pay-acquirer-guide.s3-eu-west-1.amazonaws.com/v1/amazon-pay-api-v2/checkout-session.html#get-checkout-session) response. This token is used for API only integration specifically.
    */
    'amazonPayToken'?: string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The `checkoutSessionId` is used to identify the checkout session at the Amazon Pay side. This field is required only for drop-in and components integration, where it replaces the amazonPayToken.
    */
    'checkoutSessionId'?: string;
    /**
    * **amazonpay**
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amazonPayToken",
            "baseName": "amazonPayToken",
            "type": "string"
        },
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "checkoutSessionId",
            "baseName": "checkoutSessionId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AmazonPayDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return AmazonPayDetails.attributeTypeMap;
    }
}

