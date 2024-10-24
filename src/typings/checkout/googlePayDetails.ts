/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class GooglePayDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    'fundingSource'?: GooglePayDetails.FundingSourceEnum;
    /**
    * The selected payment card network. 
    */
    'googlePayCardNetwork'?: string;
    /**
    * The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response.
    */
    'googlePayToken': string;
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
    * Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.
    */
    'threeDS2SdkVersion'?: string;
    /**
    * **googlepay**, **paywithgoogle**
    */
    'type'?: GooglePayDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "fundingSource",
            "baseName": "fundingSource",
            "type": "GooglePayDetails.FundingSourceEnum"
        },
        {
            "name": "googlePayCardNetwork",
            "baseName": "googlePayCardNetwork",
            "type": "string"
        },
        {
            "name": "googlePayToken",
            "baseName": "googlePayToken",
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
            "name": "threeDS2SdkVersion",
            "baseName": "threeDS2SdkVersion",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "GooglePayDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return GooglePayDetails.attributeTypeMap;
    }
}

export namespace GooglePayDetails {
    export enum FundingSourceEnum {
        Credit = 'credit',
        Debit = 'debit'
    }
    export enum TypeEnum {
        Googlepay = 'googlepay'
    }
}
