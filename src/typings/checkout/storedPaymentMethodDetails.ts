/*
 * The version of the OpenAPI document: v71
 * 
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
        BcmcMobile = 'bcmc_mobile',
        BcmcMobileQr = 'bcmc_mobile_QR',
        BcmcMobileApp = 'bcmc_mobile_app',
        MomoWallet = 'momo_wallet',
        MomoWalletApp = 'momo_wallet_app',
        Twint = 'twint',
        PaymayaWallet = 'paymaya_wallet',
        GrabpaySg = 'grabpay_SG',
        GrabpayMy = 'grabpay_MY',
        GrabpayTh = 'grabpay_TH',
        GrabpayId = 'grabpay_ID',
        GrabpayVn = 'grabpay_VN',
        GrabpayPh = 'grabpay_PH',
        Oxxo = 'oxxo',
        Gcash = 'gcash',
        Dana = 'dana',
        Kakaopay = 'kakaopay',
        Truemoney = 'truemoney'
    }
}
