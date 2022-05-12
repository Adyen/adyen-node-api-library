/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2022 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Adyen Checkout API
 *
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class StoredPaymentMethodDetails {

    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    *
    * @deprecated
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
