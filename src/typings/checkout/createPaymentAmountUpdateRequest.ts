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

export class CreatePaymentAmountUpdateRequest {
    'amount': Amount;
    /**
    * The reason for the amount update. Possible values:  * **delayedCharge**  * **noShow**  * **installment**
    */
    'industryUsage'?: CreatePaymentAmountUpdateRequest.IndustryUsageEnum;
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * Your reference for the amount update request. Maximum length: 80 characters.
    */
    'reference'?: string;
    /**
    * An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information).
    */
    'splits'?: Array<Split>;

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
            "type": "CreatePaymentAmountUpdateRequest.IndustryUsageEnum"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
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
        }    ];

    static getAttributeTypeMap() {
        return CreatePaymentAmountUpdateRequest.attributeTypeMap;
    }
}

export namespace CreatePaymentAmountUpdateRequest {
    export enum IndustryUsageEnum {
        DelayedCharge = 'delayedCharge',
        Installment = 'installment',
        NoShow = 'noShow'
    }
}
