/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { Split } from './split';

export class PaymentAmountUpdateResource {
    'amount': Amount;
    /**
    * The reason for the amount update. Possible values:  * **delayedCharge**  * **noShow**  * **installment**
    */
    'industryUsage'?: PaymentAmountUpdateResource.IndustryUsageEnum;
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to update. 
    */
    'paymentPspReference': string;
    /**
    * Adyen\'s 16-character reference associated with the amount update request.
    */
    'pspReference': string;
    /**
    * Your reference for the amount update request. Maximum length: 80 characters.
    */
    'reference': string;
    /**
    * An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information).
    */
    'splits'?: Array<Split>;
    /**
    * The status of your request. This will always have the value **received**.
    */
    'status': PaymentAmountUpdateResource.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "industryUsage",
            "baseName": "industryUsage",
            "type": "PaymentAmountUpdateResource.IndustryUsageEnum"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "paymentPspReference",
            "baseName": "paymentPspReference",
            "type": "string"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "splits",
            "baseName": "splits",
            "type": "Array<Split>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentAmountUpdateResource.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentAmountUpdateResource.attributeTypeMap;
    }
}

export namespace PaymentAmountUpdateResource {
    export enum IndustryUsageEnum {
        DelayedCharge = <any> 'delayedCharge',
        Installment = <any> 'installment',
        NoShow = <any> 'noShow'
    }
    export enum StatusEnum {
        Received = <any> 'received'
    }
}
