/**
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2022 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v68/payments ```  ## Release notes Have a look at the [release notes](https://docs.adyen.com/online-payments/release-notes?integration_type=api&version=68) to find out what changed in this version!
 *
 * The version of the OpenAPI document: 68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class AdditionalDataLevel23 {
    /**
    * Customer code, if supplied by a customer.  Encoding: ASCII.  Max length: 25 characters.  > Required for Level 2 and Level 3 data.
    */
    'enhancedSchemeDataCustomerReference'?: string;
    /**
    * Destination country code.  Encoding: ASCII.  Max length: 3 characters.
    */
    'enhancedSchemeDataDestinationCountryCode'?: string;
    /**
    * The postal code of a destination address.  Encoding: ASCII.  Max length: 10 characters.  > Required for American Express.
    */
    'enhancedSchemeDataDestinationPostalCode'?: string;
    /**
    * Destination state or province code.  Encoding: ASCII.Max length: 3 characters.
    */
    'enhancedSchemeDataDestinationStateProvinceCode'?: string;
    /**
    * Duty amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.
    */
    'enhancedSchemeDataDutyAmount'?: string;
    /**
    * Shipping amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.
    */
    'enhancedSchemeDataFreightAmount'?: string;
    /**
    * Item commodity code.  Encoding: ASCII.  Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrCommodityCode'?: string;
    /**
    * Item description.  Encoding: ASCII.  Max length: 26 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrDescription'?: string;
    /**
    * Discount amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrDiscountAmount'?: string;
    /**
    * Product code.  Encoding: ASCII.  Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrProductCode'?: string;
    /**
    * Quantity, specified as an integer value.  Value must be greater than 0.  Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrQuantity'?: string;
    /**
    * Total amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrTotalAmount'?: string;
    /**
    * Item unit of measurement.  Encoding: ASCII.  Max length: 3 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrUnitOfMeasure'?: string;
    /**
    * Unit price, specified in [minor units](https://docs.adyen.com/development-resources/currency-codes).  Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrUnitPrice'?: string;
    /**
    * Order date. * Format: `ddMMyy`  Encoding: ASCII.  Max length: 6 characters.
    */
    'enhancedSchemeDataOrderDate'?: string;
    /**
    * The postal code of a \"ship-from\" address.  Encoding: ASCII.  Max length: 10 characters.
    */
    'enhancedSchemeDataShipFromPostalCode'?: string;
    /**
    * Total tax amount, in minor units.  For example, 2000 means USD 20.00.  Max length: 12 characters.  > Required for Level 2 and Level 3 data.
    */
    'enhancedSchemeDataTotalTaxAmount'?: string;
}

