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
 * Copyright (c) 2022 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Adyen Checkout API
 *
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class PaymentCompletionDetails {
    /**
    * A payment session identifier returned by the card issuer.
    */
    'mD'?: string;
    /**
    * (3D) Payment Authentication Request data for the card issuer.
    */
    'paReq'?: string;
    /**
    * (3D) Payment Authentication Response data by the card issuer.
    */
    'paRes'?: string;
    /**
    * PayPal-generated token for recurring payments.
    */
    'billingToken'?: string;
    /**
    * The SMS verification code collected from the shopper.
    */
    'cupsecureplusSmscode'?: string;
    /**
    * PayPal-generated third party access token.
    */
    'facilitatorAccessToken'?: string;
    /**
    * A random number sent to the mobile phone number of the shopper to verify the payment.
    */
    'oneTimePasscode'?: string;
    /**
    * PayPal-assigned ID for the order.
    */
    'orderID'?: string;
    /**
    * PayPal-assigned ID for the payer (shopper).
    */
    'payerID'?: string;
    /**
    * Payload appended to the `returnURL` as a result of the redirect.
    */
    'payload'?: string;
    /**
    * PayPal-generated ID for the payment.
    */
    'paymentID'?: string;
    /**
    * Value passed from the WeChat MiniProgram `wx.requestPayment` **complete** callback. Possible values: any value starting with `requestPayment:`.
    */
    'paymentStatus'?: string;
    /**
    * The result of the redirect as appended to the `returnURL`.
    */
    'redirectResult'?: string;
    /**
    * Base64-encoded string returned by the Component after the challenge flow. It contains the following parameters: `transStatus`, `authorisationToken`.
    */
    'threeDSResult'?: string;
    /**
    * Base64-encoded string returned by the Component after the challenge flow. It contains the following parameter: `transStatus`.
    */
    'threeds2ChallengeResult'?: string;
    /**
    * Base64-encoded string returned by the Component after the challenge flow. It contains the following parameter: `threeDSCompInd`.
    */
    'threeds2Fingerprint'?: string;
}

