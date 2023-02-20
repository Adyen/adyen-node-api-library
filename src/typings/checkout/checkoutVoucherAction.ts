/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class CheckoutVoucherAction {
    /**
    * The voucher alternative reference code.
    */
    'alternativeReference'?: string;
    /**
    * A collection institution number (store number) for Econtext Pay-Easy ATM.
    */
    'collectionInstitutionNumber'?: string;
    /**
    * The URL to download the voucher.
    */
    'downloadUrl'?: string;
    /**
    * An entity number of Multibanco.
    */
    'entity'?: string;
    /**
    * The date time of the voucher expiry.
    */
    'expiresAt'?: string;
    'initialAmount'?: Amount;
    /**
    * The URL to the detailed instructions to make payment using the voucher.
    */
    'instructionsUrl'?: string;
    /**
    * The issuer of the voucher.
    */
    'issuer'?: string;
    /**
    * The shopper telephone number (partially masked).
    */
    'maskedTelephoneNumber'?: string;
    /**
    * The merchant name.
    */
    'merchantName'?: string;
    /**
    * The merchant reference.
    */
    'merchantReference'?: string;
    /**
    * A value that must be submitted to the `/payments/details` endpoint to verify this payment.
    */
    'paymentData'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * The voucher reference code.
    */
    'reference'?: string;
    /**
    * The shopper email.
    */
    'shopperEmail'?: string;
    /**
    * The shopper name.
    */
    'shopperName'?: string;
    'surcharge'?: Amount;
    'totalAmount'?: Amount;
    /**
    * **voucher**
    */
    'type': CheckoutVoucherAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alternativeReference",
            "baseName": "alternativeReference",
            "type": "string"
        },
        {
            "name": "collectionInstitutionNumber",
            "baseName": "collectionInstitutionNumber",
            "type": "string"
        },
        {
            "name": "downloadUrl",
            "baseName": "downloadUrl",
            "type": "string"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "string"
        },
        {
            "name": "initialAmount",
            "baseName": "initialAmount",
            "type": "Amount"
        },
        {
            "name": "instructionsUrl",
            "baseName": "instructionsUrl",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "maskedTelephoneNumber",
            "baseName": "maskedTelephoneNumber",
            "type": "string"
        },
        {
            "name": "merchantName",
            "baseName": "merchantName",
            "type": "string"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "paymentData",
            "baseName": "paymentData",
            "type": "string"
        },
        {
            "name": "paymentMethodType",
            "baseName": "paymentMethodType",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "shopperName",
            "baseName": "shopperName",
            "type": "string"
        },
        {
            "name": "surcharge",
            "baseName": "surcharge",
            "type": "Amount"
        },
        {
            "name": "totalAmount",
            "baseName": "totalAmount",
            "type": "Amount"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CheckoutVoucherAction.TypeEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutVoucherAction.attributeTypeMap;
    }
}

export namespace CheckoutVoucherAction {
    export enum TypeEnum {
        Voucher = 'voucher'
    }
}
