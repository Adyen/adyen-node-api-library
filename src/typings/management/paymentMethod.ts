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

export class PaymentMethod {
    'afterpayTouch'?: AfterpayTouchInfo;
    /**
    * Indicates whether receiving payments is allowed. This value is set to **true** by Adyen after screening your merchant account.
    */
    'allowed'?: boolean;
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
    'diners'?: GenericPmWithTdiInfo;
    'discover'?: GenericPmWithTdiInfo;
    'eftpos_australia'?: GenericPmWithTdiInfo;
    /**
    * Indicates whether the payment method is enabled (**true**) or disabled (**false**).
    */
    'enabled'?: boolean;
    'giroPay'?: GiroPayInfo;
    'girocard'?: GenericPmWithTdiInfo;
    'googlePay'?: GooglePayInfo;
    /**
    * The identifier of the resource.
    */
    'id': string;
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
    * The sales channel.
    */
    'shopperInteraction'?: string;
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
    'type'?: string;
    /**
    * Payment method status. Possible values: * **valid** * **pending** * **invalid** * **rejected**
    */
    'verificationStatus'?: PaymentMethod.VerificationStatusEnum;
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
            "name": "allowed",
            "baseName": "allowed",
            "type": "boolean"
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
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
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
            "name": "id",
            "baseName": "id",
            "type": "string"
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
            "type": "string"
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
            "type": "string"
        },
        {
            "name": "verificationStatus",
            "baseName": "verificationStatus",
            "type": "PaymentMethod.VerificationStatusEnum"
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
        return PaymentMethod.attributeTypeMap;
    }
}

export namespace PaymentMethod {
    export enum VerificationStatusEnum {
        Valid = 'valid',
        Pending = 'pending',
        Invalid = 'invalid',
        Rejected = 'rejected'
    }
}
