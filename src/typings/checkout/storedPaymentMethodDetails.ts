/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class StoredPaymentMethodDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * The payment method type.
    */
    'type'?: StoredPaymentMethodDetails.TypeEnum;

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
            "name": "storedPaymentMethodId",
            "baseName": "storedPaymentMethodId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "StoredPaymentMethodDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return StoredPaymentMethodDetails.attributeTypeMap;
    }
}

export namespace StoredPaymentMethodDetails {
    export enum TypeEnum {
        BcmcMobile = <any> 'bcmc_mobile',
        BcmcMobileQr = <any> 'bcmc_mobile_QR',
        BcmcMobileApp = <any> 'bcmc_mobile_app',
        MomoWallet = <any> 'momo_wallet',
        MomoWalletApp = <any> 'momo_wallet_app',
        PaymayaWallet = <any> 'paymaya_wallet',
        GrabpaySg = <any> 'grabpay_SG',
        GrabpayMy = <any> 'grabpay_MY',
        GrabpayTh = <any> 'grabpay_TH',
        GrabpayId = <any> 'grabpay_ID',
        GrabpayVn = <any> 'grabpay_VN',
        GrabpayPh = <any> 'grabpay_PH',
        Oxxo = <any> 'oxxo',
        Gcash = <any> 'gcash',
        Kakaopay = <any> 'kakaopay',
        Truemoney = <any> 'truemoney'
    }
}
