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


export class AdditionalDataRiskStandalone {
    /**
    * Shopper\'s country of residence in the form of ISO standard 3166 2-character country codes.
    */
    'payPalCountryCode'?: string;
    /**
    * Shopper\'s email.
    */
    'payPalEmailId'?: string;
    /**
    * Shopper\'s first name.
    */
    'payPalFirstName'?: string;
    /**
    * Shopper\'s last name.
    */
    'payPalLastName'?: string;
    /**
    * Unique PayPal Customer Account identification number. Character length and limitations: 13 single-byte alphanumeric characters.
    */
    'payPalPayerId'?: string;
    /**
    * Shopper\'s phone number.
    */
    'payPalPhone'?: string;
    /**
    * Allowed values: * **Eligible** — Merchant is protected by PayPal\'s Seller Protection Policy for Unauthorized Payments and Item Not Received.  * **PartiallyEligible** — Merchant is protected by PayPal\'s Seller Protection Policy for Item Not Received.  * **Ineligible** — Merchant is not protected under the Seller Protection Policy.
    */
    'payPalProtectionEligibility'?: string;
    /**
    * Unique transaction ID of the payment.
    */
    'payPalTransactionId'?: string;
    /**
    * Raw AVS result received from the acquirer, where available. Example: D
    */
    'avsResultRaw'?: string;
    /**
    * The Bank Identification Number of a credit card, which is the first six digits of a card number. Required for [tokenized card request](https://docs.adyen.com/risk-management/standalone-risk#tokenised-pan-request).
    */
    'bin'?: string;
    /**
    * Raw CVC result received from the acquirer, where available. Example: 1
    */
    'cvcResultRaw'?: string;
    /**
    * Unique identifier or token for the shopper\'s card details.
    */
    'riskToken'?: string;
    /**
    * A Boolean value indicating whether 3DS authentication was completed on this payment. Example: true
    */
    'threeDAuthenticated'?: string;
    /**
    * A Boolean value indicating whether 3DS was offered for this payment. Example: true
    */
    'threeDOffered'?: string;
    /**
    * Required for PayPal payments only. The only supported value is: **paypal**.
    */
    'tokenDataType'?: string;
}

