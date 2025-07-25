/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from "./amount";
import { ApplicationInfo } from "./applicationInfo";
import { EnhancedSchemeData } from "./enhancedSchemeData";
import { LineItem } from "./lineItem";
import { Split } from "./split";


export class PaymentAmountUpdateRequest {
    "amount": Amount;
    "applicationInfo"?: ApplicationInfo | null;
    "enhancedSchemeData"?: EnhancedSchemeData | null;
    /**
    * The reason for the amount update. Possible values:  * **delayedCharge**  * **noShow**  * **installment**
    */
    "industryUsage"?: PaymentAmountUpdateRequest.IndustryUsageEnum;
    /**
    * Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment). > This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.
    */
    "lineItems"?: Array<LineItem>;
    /**
    * The merchant account that is used to process the payment.
    */
    "merchantAccount": string;
    /**
    * Your reference for the amount update request. Maximum length: 80 characters.
    */
    "reference"?: string;
    /**
    * An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/process-payments) or [platforms](https://docs.adyen.com/platforms/process-payments).
    */
    "splits"?: Array<Split>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount",
            "format": ""
        },
        {
            "name": "applicationInfo",
            "baseName": "applicationInfo",
            "type": "ApplicationInfo | null",
            "format": ""
        },
        {
            "name": "enhancedSchemeData",
            "baseName": "enhancedSchemeData",
            "type": "EnhancedSchemeData | null",
            "format": ""
        },
        {
            "name": "industryUsage",
            "baseName": "industryUsage",
            "type": "PaymentAmountUpdateRequest.IndustryUsageEnum",
            "format": ""
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>",
            "format": ""
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "splits",
            "baseName": "splits",
            "type": "Array<Split>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentAmountUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace PaymentAmountUpdateRequest {
    export enum IndustryUsageEnum {
        DelayedCharge = 'delayedCharge',
        Installment = 'installment',
        NoShow = 'noShow'
    }
}
