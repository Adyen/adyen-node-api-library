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


export class StandalonePaymentCancelResource {
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * The [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference) of the payment to cancel.
    */
    'paymentReference': string;
    /**
    * Adyen\'s 16-character reference associated with the cancel request.
    */
    'pspReference': string;
    /**
    * Your reference for the cancel request.
    */
    'reference'?: string;
    /**
    * The status of your request. This will always have the value **received**.
    */
    'status': StandalonePaymentCancelResource.StatusEnum;
}

export namespace StandalonePaymentCancelResource {
    export enum StatusEnum {
        Received = <any> 'received'
    }
}
