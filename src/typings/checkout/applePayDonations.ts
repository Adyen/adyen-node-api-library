/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ApplePayDonations {
    /**
    * The stringified and base64 encoded `paymentData` you retrieved from the Apple framework.
    */
    'applePayToken': string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    'fundingSource'?: ApplePayDonations.FundingSourceEnum;
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
    * **applepay**
    */
    'type'?: ApplePayDonations.TypeEnum = ApplePayDonations.TypeEnum.Applepay;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "applePayToken",
            "baseName": "applePayToken",
            "type": "string"
        },
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "fundingSource",
            "baseName": "fundingSource",
            "type": "ApplePayDonations.FundingSourceEnum"
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
            "type": "ApplePayDonations.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return ApplePayDonations.attributeTypeMap;
    }
}

export namespace ApplePayDonations {
    export enum FundingSourceEnum {
        Credit = <any> 'credit',
        Debit = <any> 'debit'
    }
    export enum TypeEnum {
        Applepay = <any> 'applepay'
    }
}
