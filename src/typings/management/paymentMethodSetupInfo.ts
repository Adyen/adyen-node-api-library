/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AfterpayTouchInfo } from './afterpayTouchInfo';
import { ApplePayInfo } from './applePayInfo';
import { BcmcInfo } from './bcmcInfo';
import { CartesBancairesInfo } from './cartesBancairesInfo';
import { ClearpayInfo } from './clearpayInfo';
import { GenericPmWithTdiInfo } from './genericPmWithTdiInfo';
import { GiroPayInfo } from './giroPayInfo';
import { GooglePayInfo } from './googlePayInfo';
import { KlarnaInfo } from './klarnaInfo';
import { MealVoucherFRInfo } from './mealVoucherFRInfo';
import { PayPalInfo } from './payPalInfo';
import { SofortInfo } from './sofortInfo';
import { SwishInfo } from './swishInfo';
import { TwintInfo } from './twintInfo';
import { VippsInfo } from './vippsInfo';

export class PaymentMethodSetupInfo {
    'afterpayTouch'?: AfterpayTouchInfo;
    'applePay'?: ApplePayInfo;
    'bcmc'?: BcmcInfo;
    /**
    * The unique identifier of the business line. Required if you have a [platform setup](https://docs.adyen.com/marketplaces-and-platforms/platform-structure-resources/platform-setup/).
    */
    'businessLineId'?: string;
    'cartesBancaires'?: CartesBancairesInfo;
    'clearpay'?: ClearpayInfo;
    /**
    * The list of countries where a payment method is available. By default, all countries supported by the payment method.
    */
    'countries'?: Array<string>;
    'cup'?: GenericPmWithTdiInfo;
    /**
    * The list of currencies that a payment method supports. By default, all currencies supported by the payment method.
    */
    'currencies'?: Array<string>;
    /**
    * The list of custom routing flags to route payment to the intended acquirer.
    */
    'customRoutingFlags'?: Array<string>;
    'diners'?: GenericPmWithTdiInfo;
    'discover'?: GenericPmWithTdiInfo;
    'eftpos_australia'?: GenericPmWithTdiInfo;
    'giroPay'?: GiroPayInfo;
    'girocard'?: GenericPmWithTdiInfo;
    'googlePay'?: GooglePayInfo;
    'ideal'?: GenericPmWithTdiInfo;
    'interac_card'?: GenericPmWithTdiInfo;
    'jcb'?: GenericPmWithTdiInfo;
    'klarna'?: KlarnaInfo;
    'maestro'?: GenericPmWithTdiInfo;
    'mc'?: GenericPmWithTdiInfo;
    'mealVoucher_FR'?: MealVoucherFRInfo;
    'paypal'?: PayPalInfo;
    /**
    * Your reference for the payment method. Supported characters a-z, A-Z, 0-9.
    */
    'reference'?: string;
    /**
    * The sales channel. Required if the merchant account does not have a sales channel. When you provide this field, it overrides the default sales channel set on the merchant account.  Possible values: **eCommerce**, **pos**, **contAuth**, and **moto**. 
    */
    'shopperInteraction'?: PaymentMethodSetupInfo.ShopperInteractionEnum;
    'sofort'?: SofortInfo;
    /**
    * The unique identifier of the store for which to configure the payment method, if any.
    */
    'storeIds'?: Array<string>;
    'swish'?: SwishInfo;
    'twint'?: TwintInfo;
    /**
    * Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
    */
    'type': PaymentMethodSetupInfo.TypeEnum;
    'vipps'?: VippsInfo;
    'visa'?: GenericPmWithTdiInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "afterpayTouch",
            "baseName": "afterpayTouch",
            "type": "AfterpayTouchInfo"
        },
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
            "name": "clearpay",
            "baseName": "clearpay",
            "type": "ClearpayInfo"
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<string>"
        },
        {
            "name": "cup",
            "baseName": "cup",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "currencies",
            "baseName": "currencies",
            "type": "Array<string>"
        },
        {
            "name": "customRoutingFlags",
            "baseName": "customRoutingFlags",
            "type": "Array<string>"
        },
        {
            "name": "diners",
            "baseName": "diners",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "discover",
            "baseName": "discover",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "eftpos_australia",
            "baseName": "eftpos_australia",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "giroPay",
            "baseName": "giroPay",
            "type": "GiroPayInfo"
        },
        {
            "name": "girocard",
            "baseName": "girocard",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "googlePay",
            "baseName": "googlePay",
            "type": "GooglePayInfo"
        },
        {
            "name": "ideal",
            "baseName": "ideal",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "interac_card",
            "baseName": "interac_card",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "jcb",
            "baseName": "jcb",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "klarna",
            "baseName": "klarna",
            "type": "KlarnaInfo"
        },
        {
            "name": "maestro",
            "baseName": "maestro",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "mc",
            "baseName": "mc",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "mealVoucher_FR",
            "baseName": "mealVoucher_FR",
            "type": "MealVoucherFRInfo"
        },
        {
            "name": "paypal",
            "baseName": "paypal",
            "type": "PayPalInfo"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
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
            "name": "storeIds",
            "baseName": "storeIds",
            "type": "Array<string>"
        },
        {
            "name": "swish",
            "baseName": "swish",
            "type": "SwishInfo"
        },
        {
            "name": "twint",
            "baseName": "twint",
            "type": "TwintInfo"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentMethodSetupInfo.TypeEnum"
        },
        {
            "name": "vipps",
            "baseName": "vipps",
            "type": "VippsInfo"
        },
        {
            "name": "visa",
            "baseName": "visa",
            "type": "GenericPmWithTdiInfo"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodSetupInfo.attributeTypeMap;
    }
}

export namespace PaymentMethodSetupInfo {
    export enum ShopperInteractionEnum {
        ECommerce = 'eCommerce',
        Pos = 'pos',
        Moto = 'moto',
        ContAuth = 'contAuth'
    }
    export enum TypeEnum {
        Afterpaytouch = 'afterpaytouch',
        Alipay = 'alipay',
        AlipayHk = 'alipay_hk',
        Amex = 'amex',
        Applepay = 'applepay',
        Bcmc = 'bcmc',
        Blik = 'blik',
        Cartebancaire = 'cartebancaire',
        Clearpay = 'clearpay',
        Cup = 'cup',
        Diners = 'diners',
        DirectdebitGb = 'directdebit_GB',
        Discover = 'discover',
        EbankingFi = 'ebanking_FI',
        EftposAustralia = 'eftpos_australia',
        Elo = 'elo',
        Elocredit = 'elocredit',
        Elodebit = 'elodebit',
        Girocard = 'girocard',
        Googlepay = 'googlepay',
        Hiper = 'hiper',
        Hipercard = 'hipercard',
        Ideal = 'ideal',
        InteracCard = 'interac_card',
        Jcb = 'jcb',
        Klarna = 'klarna',
        KlarnaAccount = 'klarna_account',
        KlarnaPaynow = 'klarna_paynow',
        Maestro = 'maestro',
        Mbway = 'mbway',
        Mc = 'mc',
        Mcdebit = 'mcdebit',
        MealVoucherFr = 'mealVoucher_FR',
        Mobilepay = 'mobilepay',
        Multibanco = 'multibanco',
        OnlineBankingPl = 'onlineBanking_PL',
        Paybybank = 'paybybank',
        Paypal = 'paypal',
        Payshop = 'payshop',
        Swish = 'swish',
        Trustly = 'trustly',
        Twint = 'twint',
        TwintPos = 'twint_pos',
        Vipps = 'vipps',
        Visa = 'visa',
        Visadebit = 'visadebit',
        Vpay = 'vpay',
        Wechatpay = 'wechatpay',
        WechatpayPos = 'wechatpay_pos'
    }
}
