/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccelInfo } from './accelInfo';
import { AffirmInfo } from './affirmInfo';
import { AfterpayTouchInfo } from './afterpayTouchInfo';
import { AmexInfo } from './amexInfo';
import { ApplePayInfo } from './applePayInfo';
import { BcmcInfo } from './bcmcInfo';
import { CartesBancairesInfo } from './cartesBancairesInfo';
import { ClearpayInfo } from './clearpayInfo';
import { DinersInfo } from './dinersInfo';
import { GenericPmWithTdiInfo } from './genericPmWithTdiInfo';
import { GiroPayInfo } from './giroPayInfo';
import { GooglePayInfo } from './googlePayInfo';
import { JCBInfo } from './jCBInfo';
import { KlarnaInfo } from './klarnaInfo';
import { MealVoucherFRInfo } from './mealVoucherFRInfo';
import { NyceInfo } from './nyceInfo';
import { PayMeInfo } from './payMeInfo';
import { PayPalInfo } from './payPalInfo';
import { PayToInfo } from './payToInfo';
import { PulseInfo } from './pulseInfo';
import { SodexoInfo } from './sodexoInfo';
import { SofortInfo } from './sofortInfo';
import { StarInfo } from './starInfo';
import { SwishInfo } from './swishInfo';
import { TicketInfo } from './ticketInfo';
import { TwintInfo } from './twintInfo';
import { VippsInfo } from './vippsInfo';
import { WeChatPayInfo } from './weChatPayInfo';
import { WeChatPayPosInfo } from './weChatPayPosInfo';

export class PaymentMethodSetupInfo {
    'accel'?: AccelInfo;
    'affirm'?: AffirmInfo;
    'afterpayTouch'?: AfterpayTouchInfo;
    'amex'?: AmexInfo;
    'applePay'?: ApplePayInfo;
    'bcmc'?: BcmcInfo;
    /**
    * The unique identifier of the business line. Required if you are a [platform model](https://docs.adyen.com/platforms).
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
    'diners'?: DinersInfo;
    'discover'?: GenericPmWithTdiInfo;
    'eft_directdebit_CA'?: GenericPmWithTdiInfo;
    'eftpos_australia'?: GenericPmWithTdiInfo;
    'giroPay'?: GiroPayInfo;
    'girocard'?: GenericPmWithTdiInfo;
    'googlePay'?: GooglePayInfo;
    'ideal'?: GenericPmWithTdiInfo;
    'interac_card'?: GenericPmWithTdiInfo;
    'jcb'?: JCBInfo;
    'klarna'?: KlarnaInfo;
    'maestro'?: GenericPmWithTdiInfo;
    'mc'?: GenericPmWithTdiInfo;
    'mealVoucher_FR'?: MealVoucherFRInfo;
    'nyce'?: NyceInfo;
    'payme'?: PayMeInfo;
    'paypal'?: PayPalInfo;
    'payto'?: PayToInfo;
    'pulse'?: PulseInfo;
    /**
    * Your reference for the payment method. Supported characters a-z, A-Z, 0-9.
    */
    'reference'?: string;
    /**
    * The sales channel. Required if the merchant account does not have a sales channel. When you provide this field, it overrides the default sales channel set on the merchant account.  Possible values: **eCommerce**, **pos**, **contAuth**, and **moto**. 
    */
    'shopperInteraction'?: PaymentMethodSetupInfo.ShopperInteractionEnum;
    'sodexo'?: SodexoInfo;
    'sofort'?: SofortInfo;
    'star'?: StarInfo;
    /**
    * The unique identifier of the store for which to configure the payment method, if any.
    */
    'storeIds'?: Array<string>;
    'swish'?: SwishInfo;
    'ticket'?: TicketInfo;
    'twint'?: TwintInfo;
    /**
    * Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
    */
    'type': PaymentMethodSetupInfo.TypeEnum;
    'vipps'?: VippsInfo;
    'visa'?: GenericPmWithTdiInfo;
    'wechatpay'?: WeChatPayInfo;
    'wechatpay_pos'?: WeChatPayPosInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accel",
            "baseName": "accel",
            "type": "AccelInfo"
        },
        {
            "name": "affirm",
            "baseName": "affirm",
            "type": "AffirmInfo"
        },
        {
            "name": "afterpayTouch",
            "baseName": "afterpayTouch",
            "type": "AfterpayTouchInfo"
        },
        {
            "name": "amex",
            "baseName": "amex",
            "type": "AmexInfo"
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
            "type": "DinersInfo"
        },
        {
            "name": "discover",
            "baseName": "discover",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "eft_directdebit_CA",
            "baseName": "eft_directdebit_CA",
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
            "type": "JCBInfo"
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
            "name": "nyce",
            "baseName": "nyce",
            "type": "NyceInfo"
        },
        {
            "name": "payme",
            "baseName": "payme",
            "type": "PayMeInfo"
        },
        {
            "name": "paypal",
            "baseName": "paypal",
            "type": "PayPalInfo"
        },
        {
            "name": "payto",
            "baseName": "payto",
            "type": "PayToInfo"
        },
        {
            "name": "pulse",
            "baseName": "pulse",
            "type": "PulseInfo"
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
            "name": "sodexo",
            "baseName": "sodexo",
            "type": "SodexoInfo"
        },
        {
            "name": "sofort",
            "baseName": "sofort",
            "type": "SofortInfo"
        },
        {
            "name": "star",
            "baseName": "star",
            "type": "StarInfo"
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
            "name": "ticket",
            "baseName": "ticket",
            "type": "TicketInfo"
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
        },
        {
            "name": "wechatpay",
            "baseName": "wechatpay",
            "type": "WeChatPayInfo"
        },
        {
            "name": "wechatpay_pos",
            "baseName": "wechatpay_pos",
            "type": "WeChatPayPosInfo"
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
        Accel = <any> 'accel',
        Ach = <any> 'ach',
        Affirm = <any> 'affirm',
        Afterpaytouch = <any> 'afterpaytouch',
        Alelo = <any> 'alelo',
        Alipay = <any> 'alipay',
        AlipayHk = <any> 'alipay_hk',
        AlipayWap = <any> 'alipay_wap',
        Amex = <any> 'amex',
        Applepay = <any> 'applepay',
        BaneseCard = <any> 'banese_card',
        BaneseCardCredit = <any> 'banese_card_credit',
        BaneseCardDebit = <any> 'banese_card_debit',
        BaneseCardPrepaid = <any> 'banese_card_prepaid',
        Bcmc = <any> 'bcmc',
        Blik = <any> 'blik',
        Cartebancaire = <any> 'cartebancaire',
        Clearpay = <any> 'clearpay',
        Clicktopay = <any> 'clicktopay',
        Credtodos = <any> 'credtodos',
        CredtodosPrivateCredit = <any> 'credtodos_private_credit',
        CredtodosPrivateDebit = <any> 'credtodos_private_debit',
        Cup = <any> 'cup',
        Diners = <any> 'diners',
        DirectdebitGb = <any> 'directdebit_GB',
        Discover = <any> 'discover',
        EbankingFi = <any> 'ebanking_FI',
        EftDirectdebitCa = <any> 'eft_directdebit_CA',
        EftposAustralia = <any> 'eftpos_australia',
        Elo = <any> 'elo',
        Elocredit = <any> 'elocredit',
        Elodebit = <any> 'elodebit',
        Girocard = <any> 'girocard',
        Googlepay = <any> 'googlepay',
        Hiper = <any> 'hiper',
        Hipercard = <any> 'hipercard',
        Ideal = <any> 'ideal',
        InteracCard = <any> 'interac_card',
        Jcb = <any> 'jcb',
        Klarna = <any> 'klarna',
        KlarnaAccount = <any> 'klarna_account',
        KlarnaPaynow = <any> 'klarna_paynow',
        Maestro = <any> 'maestro',
        Mbway = <any> 'mbway',
        Mc = <any> 'mc',
        Mcdebit = <any> 'mcdebit',
        MealVoucherFr = <any> 'mealVoucher_FR',
        Mobilepay = <any> 'mobilepay',
        Multibanco = <any> 'multibanco',
        Nyce = <any> 'nyce',
        OnlineBankingPl = <any> 'onlineBanking_PL',
        Paybybank = <any> 'paybybank',
        Payme = <any> 'payme',
        PaymePos = <any> 'payme_pos',
        Paynow = <any> 'paynow',
        PaynowPos = <any> 'paynow_pos',
        Paypal = <any> 'paypal',
        Payshop = <any> 'payshop',
        Payto = <any> 'payto',
        Pulse = <any> 'pulse',
        Sodexo = <any> 'sodexo',
        Star = <any> 'star',
        Swish = <any> 'swish',
        Ticket = <any> 'ticket',
        TodoGiftcard = <any> 'todo_giftcard',
        Trustly = <any> 'trustly',
        Twint = <any> 'twint',
        TwintPos = <any> 'twint_pos',
        UpBrazilCredit = <any> 'up_brazil_credit',
        ValeRefeicao = <any> 'vale_refeicao',
        ValeRefeicaoPrepaid = <any> 'vale_refeicao_prepaid',
        Vipps = <any> 'vipps',
        Visa = <any> 'visa',
        Visadebit = <any> 'visadebit',
        Vpay = <any> 'vpay',
        Wechatpay = <any> 'wechatpay',
        WechatpayPos = <any> 'wechatpay_pos'
    }
}
