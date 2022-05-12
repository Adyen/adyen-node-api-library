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
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Redirect } from './redirect';

export class CheckoutOneTimePasscodeAction {

    /**
    * A value that must be submitted to the `/payments/details` endpoint to verify this payment.
    */
    'paymentData'?: string;

    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;

    /**
    */
    'redirect'?: Redirect;

    /**
    * The interval in second between OTP resend.
    */
    'resendInterval'?: number;

    /**
    * The maximum number of OTP resend attempts.
    */
    'resendMaxAttempts'?: number;

    /**
    * The URL, to which you make POST request to trigger OTP resend.
    */
    'resendUrl'?: string;

    /**
    * The type of the action.
    */
    'type': CheckoutOneTimePasscodeAction.TypeEnum;

    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;
}

export namespace CheckoutOneTimePasscodeAction {
    export enum TypeEnum {
        OneTimePasscode = <any> 'oneTimePasscode'
    }
}
