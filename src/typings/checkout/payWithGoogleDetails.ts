/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PayWithGoogleDetails {
    /**
    * The checkout attempt identifier.
    */
    "checkoutAttemptId"?: string;
    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    "fundingSource"?: PayWithGoogleDetails.FundingSourceEnum;
    /**
    * The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response.
    */
    "googlePayToken": string;
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
    * Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.
    */
    "threeDS2SdkVersion"?: string;
    /**
    * **paywithgoogle**
    */
    "type"?: PayWithGoogleDetails.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundingSource",
            "baseName": "fundingSource",
            "type": "PayWithGoogleDetails.FundingSourceEnum",
            "format": ""
        },
        {
            "name": "googlePayToken",
            "baseName": "googlePayToken",
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
            "name": "threeDS2SdkVersion",
            "baseName": "threeDS2SdkVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PayWithGoogleDetails.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PayWithGoogleDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace PayWithGoogleDetails {
    export enum FundingSourceEnum {
        Credit = 'credit',
        Debit = 'debit'
    }
    export enum TypeEnum {
        Paywithgoogle = 'paywithgoogle'
    }
}
