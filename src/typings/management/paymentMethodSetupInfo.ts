/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ApplePayInfo } from './applePayInfo';
import { BcmcInfo } from './bcmcInfo';
import { CartesBancairesInfo } from './cartesBancairesInfo';
import { GiroPayInfo } from './giroPayInfo';
import { GooglePayInfo } from './googlePayInfo';
import { KlarnaInfo } from './klarnaInfo';
import { PayPalInfo } from './payPalInfo';
import { SofortInfo } from './sofortInfo';
import { SwishInfo } from './swishInfo';

export class PaymentMethodSetupInfo {
    'applePay'?: ApplePayInfo;
    'bcmc'?: BcmcInfo;
    /**
    * The unique identifier of the business line.
    */
    'businessLineId'?: string;
    'cartesBancaires'?: CartesBancairesInfo;
    /**
    * The list of countries where a payment method is available. By default, all countries supported by the payment method.
    */
    'countries'?: Array<string>;
    /**
    * The list of currencies that a payment method supports. By default, all currencies supported by the payment method.
    */
    'currencies'?: Array<string>;
    'giroPay'?: GiroPayInfo;
    'googlePay'?: GooglePayInfo;
    'klarna'?: KlarnaInfo;
    'paypal'?: PayPalInfo;
    /**
    * The sales channel. Required if the merchant account does not have a sales channel. When you provide this field, it overrides the default sales channel set on the merchant account.  Possible values: **eCommerce**, **pos**, **contAuth**, and **moto**. 
    */
    'shopperInteraction'?: PaymentMethodSetupInfo.ShopperInteractionEnum;
    'sofort'?: SofortInfo;
    /**
    * The ID of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/stores__resParam_id), if any.
    */
    'storeId'?: string;
    'swish'?: SwishInfo;
    /**
    * Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
    */
    'type': PaymentMethodSetupInfo.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "applePay",
            "baseName": "applePay",
            "type": "ApplePayInfo"
        },
        {
            "name": "bcmc",
            "baseName": "bcmc",
            "type": "BcmcInfo"
        },
        {
            "name": "businessLineId",
            "baseName": "businessLineId",
            "type": "string"
        },
        {
            "name": "cartesBancaires",
            "baseName": "cartesBancaires",
            "type": "CartesBancairesInfo"
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<string>"
        },
        {
            "name": "currencies",
            "baseName": "currencies",
            "type": "Array<string>"
        },
        {
            "name": "giroPay",
            "baseName": "giroPay",
            "type": "GiroPayInfo"
        },
        {
            "name": "googlePay",
            "baseName": "googlePay",
            "type": "GooglePayInfo"
        },
        {
            "name": "klarna",
            "baseName": "klarna",
            "type": "KlarnaInfo"
        },
        {
            "name": "paypal",
            "baseName": "paypal",
            "type": "PayPalInfo"
        },
        {
            "name": "shopperInteraction",
            "baseName": "shopperInteraction",
            "type": "PaymentMethodSetupInfo.ShopperInteractionEnum"
        },
        {
            "name": "sofort",
            "baseName": "sofort",
            "type": "SofortInfo"
        },
        {
            "name": "storeId",
            "baseName": "storeId",
            "type": "string"
        },
        {
            "name": "swish",
            "baseName": "swish",
            "type": "SwishInfo"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentMethodSetupInfo.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodSetupInfo.attributeTypeMap;
    }
}

export namespace PaymentMethodSetupInfo {
    export enum ShopperInteractionEnum {
        ECommerce = <any> 'eCommerce',
        Pos = <any> 'pos',
        Moto = <any> 'moto',
        ContAuth = <any> 'contAuth'
    }
    export enum TypeEnum {
        Alipay = <any> 'alipay',
        Amex = <any> 'amex',
        Applepay = <any> 'applepay',
        Bcmc = <any> 'bcmc',
        Blik = <any> 'blik',
        Cartebancaire = <any> 'cartebancaire',
        Cup = <any> 'cup',
        Diners = <any> 'diners',
        DirectEbanking = <any> 'directEbanking',
        DirectdebitGb = <any> 'directdebit_GB',
        Discover = <any> 'discover',
        EbankingFi = <any> 'ebanking_FI',
        EftposAustralia = <any> 'eftpos_australia',
        Girocard = <any> 'girocard',
        Giropay = <any> 'giropay',
        Googlepay = <any> 'googlepay',
        Ideal = <any> 'ideal',
        InteracCard = <any> 'interac_card',
        Jcb = <any> 'jcb',
        Klarna = <any> 'klarna',
        KlarnaAccount = <any> 'klarna_account',
        KlarnaPaynow = <any> 'klarna_paynow',
        Maestro = <any> 'maestro',
        Mbway = <any> 'mbway',
        Mc = <any> 'mc',
        Mobilepay = <any> 'mobilepay',
        Multibanco = <any> 'multibanco',
        Paypal = <any> 'paypal',
        Payshop = <any> 'payshop',
        Swish = <any> 'swish',
        Trustly = <any> 'trustly',
        Visa = <any> 'visa',
        Wechatpay = <any> 'wechatpay',
        WechatpayPos = <any> 'wechatpay_pos'
    }
}
