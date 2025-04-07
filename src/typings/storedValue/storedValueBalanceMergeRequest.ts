/*
 * The version of the OpenAPI document: v46
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class StoredValueBalanceMergeRequest {
    'amount'?: Amount;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    /**
    * The collection that contains the type of the payment method and its specific information if available
    */
    'paymentMethod': { [key: string]: string; };
    'recurringDetailReference'?: string;
    /**
    * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens (\"-\"). Maximum length: 80 characters.
    */
    'reference': string;
    /**
    * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper interaction by default.  This field has the following possible values: * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request. * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment). * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone. * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
    */
    'shopperInteraction'?: StoredValueBalanceMergeRequest.ShopperInteractionEnum;
    'shopperReference'?: string;
    /**
    * The collection that contains the source payment method and its specific information if available. Note that type should not be included since it is inferred from the (target) payment method
    */
    'sourcePaymentMethod': { [key: string]: string; };
    /**
    * The physical store, for which this payment is processed.
    */
    'store'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "shopperInteraction",
            "baseName": "shopperInteraction",
            "type": "StoredValueBalanceMergeRequest.ShopperInteractionEnum"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "sourcePaymentMethod",
            "baseName": "sourcePaymentMethod",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StoredValueBalanceMergeRequest.attributeTypeMap;
    }
}

export namespace StoredValueBalanceMergeRequest {
    export enum ShopperInteractionEnum {
        Ecommerce = <any> 'Ecommerce',
        ContAuth = <any> 'ContAuth',
        Moto = <any> 'Moto',
        Pos = <any> 'POS'
    }
}
