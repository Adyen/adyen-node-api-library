/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class MerchantRiskIndicator {
    /**
    * Whether the chosen delivery address is identical to the billing address.
    */
    'addressMatch'?: boolean;
    /**
    * Indicator regarding the delivery address. Allowed values: * `shipToBillingAddress` * `shipToVerifiedAddress` * `shipToNewAddress` * `shipToStore` * `digitalGoods` * `goodsNotShipped` * `other`
    */
    'deliveryAddressIndicator'?: string;
    /**
    * The delivery email address (for digital goods).
    *
	* @deprecated since Adyen Checkout API v68
	* Use `deliveryEmailAddress` instead.
    */
    'deliveryEmail'?: string;
    /**
    * For Electronic delivery, the email address to which the merchandise was delivered. Maximum length: 254 characters.
    */
    'deliveryEmailAddress'?: string;
    /**
    * The estimated delivery time for the shopper to receive the goods. Allowed values: * `electronicDelivery` * `sameDayShipping` * `overnightShipping` * `twoOrMoreDaysShipping`
    */
    'deliveryTimeframe'?: string;
    'giftCardAmount'?: Amount;
    /**
    * For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased.
    */
    'giftCardCount'?: number;
    /**
    * For prepaid or gift card purchase, [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) three-digit currency code of the gift card, other than those listed in Table A.5 of the EMVCo 3D Secure Protocol and Core Functions Specification.
    */
    'giftCardCurr'?: string;
    /**
    * For pre-order purchases, the expected date this product will be available to the shopper.
    */
    'preOrderDate'?: Date;
    /**
    * Indicator for whether this transaction is for pre-ordering a product.
    */
    'preOrderPurchase'?: boolean;
    /**
    * Indicates whether Cardholder is placing an order for merchandise with a future availability or release date.
    */
    'preOrderPurchaseInd'?: string;
    /**
    * Indicator for whether the shopper has already purchased the same items in the past.
    */
    'reorderItems'?: boolean;
    /**
    * Indicates whether the cardholder is reordering previously purchased merchandise.
    */
    'reorderItemsInd'?: string;
    /**
    * Indicates shipping method chosen for the transaction.
    */
    'shipIndicator'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addressMatch",
            "baseName": "addressMatch",
            "type": "boolean"
        },
        {
            "name": "deliveryAddressIndicator",
            "baseName": "deliveryAddressIndicator",
            "type": "MerchantRiskIndicator.DeliveryAddressIndicatorEnum"
        },
        {
            "name": "deliveryEmail",
            "baseName": "deliveryEmail",
            "type": "string"
        },
        {
            "name": "deliveryEmailAddress",
            "baseName": "deliveryEmailAddress",
            "type": "string"
        },
        {
            "name": "deliveryTimeframe",
            "baseName": "deliveryTimeframe",
            "type": "MerchantRiskIndicator.DeliveryTimeframeEnum"
        },
        {
            "name": "giftCardAmount",
            "baseName": "giftCardAmount",
            "type": "Amount"
        },
        {
            "name": "giftCardCount",
            "baseName": "giftCardCount",
            "type": "number"
        },
        {
            "name": "giftCardCurr",
            "baseName": "giftCardCurr",
            "type": "string"
        },
        {
            "name": "preOrderDate",
            "baseName": "preOrderDate",
            "type": "Date"
        },
        {
            "name": "preOrderPurchase",
            "baseName": "preOrderPurchase",
            "type": "boolean"
        },
        {
            "name": "preOrderPurchaseInd",
            "baseName": "preOrderPurchaseInd",
            "type": "string"
        },
        {
            "name": "reorderItems",
            "baseName": "reorderItems",
            "type": "boolean"
        },
        {
            "name": "reorderItemsInd",
            "baseName": "reorderItemsInd",
            "type": "string"
        },
        {
            "name": "shipIndicator",
            "baseName": "shipIndicator",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MerchantRiskIndicator.attributeTypeMap;
    }
}

export namespace MerchantRiskIndicator {
    export enum DeliveryAddressIndicatorEnum {
        ShipToBillingAddress = <any> 'shipToBillingAddress',
        ShipToVerifiedAddress = <any> 'shipToVerifiedAddress',
        ShipToNewAddress = <any> 'shipToNewAddress',
        ShipToStore = <any> 'shipToStore',
        DigitalGoods = <any> 'digitalGoods',
        GoodsNotShipped = <any> 'goodsNotShipped',
        Other = <any> 'other'
    }
    export enum DeliveryTimeframeEnum {
        ElectronicDelivery = <any> 'electronicDelivery',
        SameDayShipping = <any> 'sameDayShipping',
        OvernightShipping = <any> 'overnightShipping',
        TwoOrMoreDaysShipping = <any> 'twoOrMoreDaysShipping'
    }
}
