/*
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
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v68/payments ```
 *
 * The version of the OpenAPI document: 68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Amount } from './amount';
import { CheckoutOrderResponse } from './checkoutOrderResponse';
import { FraudResult } from './fraudResult';
import { ThreeDS2ResponseData } from './threeDS2ResponseData';
import { ThreeDS2Result } from './threeDS2Result';

export class PaymentDetailsResponse {
    /**
    * Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**.
    */
    'additionalData'?: { [key: string]: string; };
    'amount'?: Amount;
    /**
    * Donation Token containing payment details for Adyen Giving.
    */
    'donationToken'?: string;
    'fraudResult'?: FraudResult;
    /**
    * The reference used during the /payments request.
    */
    'merchantReference'?: string;
    'order'?: CheckoutOrderResponse;
    /**
    * The payment method used in the transaction.
    */
    'paymentMethod'?: string;
    /**
    * Adyen\'s 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
    */
    'pspReference'?: string;
    /**
    * If the payment\'s authorisation is refused or an error occurs during authorisation, this field holds Adyen\'s mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.  For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
    */
    'refusalReason'?: string;
    /**
    * Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
    */
    'refusalReasonCode'?: string;
    /**
    * The result of the payment. For more information, see [Result codes](https://docs.adyen.com/online-payments/payment-result-codes).  Possible values:  * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions. * **AuthenticationNotRequired** – The transaction does not require 3D Secure authentication. Returned for [standalone authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). * **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state. * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state. * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions. * **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state. * **IdentifyShopper** – The issuer requires the shopper\'s device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions. * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment. * **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment. * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments. * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation. * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.
    */
    'resultCode'?: PaymentDetailsResponse.ResultCodeEnum;
    /**
    * The shopperLocale.
    */
    'shopperLocale'?: string;
    'threeDS2ResponseData'?: ThreeDS2ResponseData;
    'threeDS2Result'?: ThreeDS2Result;
    /**
    * When non-empty, contains a value that you must submit to the `/payments/details` endpoint as `paymentData`.
    */
    'threeDSPaymentData'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "donationToken",
            "baseName": "donationToken",
            "type": "string"
        },
        {
            "name": "fraudResult",
            "baseName": "fraudResult",
            "type": "FraudResult"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "CheckoutOrderResponse"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "string"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "refusalReason",
            "baseName": "refusalReason",
            "type": "string"
        },
        {
            "name": "refusalReasonCode",
            "baseName": "refusalReasonCode",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "PaymentDetailsResponse.ResultCodeEnum"
        },
        {
            "name": "shopperLocale",
            "baseName": "shopperLocale",
            "type": "string"
        },
        {
            "name": "threeDS2ResponseData",
            "baseName": "threeDS2ResponseData",
            "type": "ThreeDS2ResponseData"
        },
        {
            "name": "threeDS2Result",
            "baseName": "threeDS2Result",
            "type": "ThreeDS2Result"
        },
        {
            "name": "threeDSPaymentData",
            "baseName": "threeDSPaymentData",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentDetailsResponse.attributeTypeMap;
    }
}

export namespace PaymentDetailsResponse {
    export enum ResultCodeEnum {
        AuthenticationFinished = <any> 'AuthenticationFinished',
        Authorised = <any> 'Authorised',
        Cancelled = <any> 'Cancelled',
        ChallengeShopper = <any> 'ChallengeShopper',
        Error = <any> 'Error',
        IdentifyShopper = <any> 'IdentifyShopper',
        Pending = <any> 'Pending',
        PresentToShopper = <any> 'PresentToShopper',
        Received = <any> 'Received',
        RedirectShopper = <any> 'RedirectShopper',
        Refused = <any> 'Refused',
        Success = <any> 'Success'
    }
}
