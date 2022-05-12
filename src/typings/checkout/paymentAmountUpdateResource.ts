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
 *
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Amount } from './amount';
import { Split } from './split';

export class PaymentAmountUpdateResource {
    'amount': Amount;
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to update. 
    */
    'paymentPspReference': string;
    /**
    * Adyen\'s 16-character reference associated with the amount update request.
    */
    'pspReference': string;
    /**
    * The reason for the amount update. Possible values:  * **DelayedCharge**  * **NoShow**
    */
    'reason'?: PaymentAmountUpdateResource.ReasonEnum;
    /**
    * Your reference for the amount update request. Maximum length: 80 characters.
    */
    'reference': string;
    /**
    * An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
    */
    'splits'?: Array<Split>;
    /**
    * The status of your request. This will always have the value **received**.
    */
    'status': PaymentAmountUpdateResource.StatusEnum;
}

export namespace PaymentAmountUpdateResource {
    export enum ReasonEnum {
        DelayedCharge = <any> 'delayedCharge',
        NoShow = <any> 'noShow'
    }
    export enum StatusEnum {
        Received = <any> 'received'
    }
}
