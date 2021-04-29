/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v67/payments ```
 *
 * The version of the OpenAPI document: 67
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
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
    'deliveryAddressIndicator'?: MerchantRiskIndicator.DeliveryAddressIndicatorEnum;
    /**
    * The delivery email address (for digital goods).
    */
    'deliveryEmail'?: string;
    /**
    * The estimated delivery time for the shopper to receive the goods. Allowed values: * `electronicDelivery` * `sameDayShipping` * `overnightShipping` * `twoOrMoreDaysShipping`
    */
    'deliveryTimeframe'?: MerchantRiskIndicator.DeliveryTimeframeEnum;
    'giftCardAmount'?: Amount;
    /**
    * For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased.
    */
    'giftCardCount'?: number;
    /**
    * For pre-order purchases, the expected date this product will be available to the shopper.
    */
    'preOrderDate'?: Date;
    /**
    * Indicator for whether this transaction is for pre-ordering a product.
    */
    'preOrderPurchase'?: boolean;
    /**
    * Indicator for whether the shopper has already purchased the same items in the past.
    */
    'reorderItems'?: boolean;

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
            "name": "reorderItems",
            "baseName": "reorderItems",
            "type": "boolean"
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
