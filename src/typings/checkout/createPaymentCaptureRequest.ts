/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { LineItem } from './lineItem';
import { Split } from './split';

export class CreatePaymentCaptureRequest {
    'amount': Amount;
    /**
    * Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment). > This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * Your reference for the capture request. Maximum length: 80 characters.
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
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
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
        return CreatePaymentCaptureRequest.attributeTypeMap;
    }
}

