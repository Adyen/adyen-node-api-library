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


export class PayUUpiDetails {

    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    *
    * @deprecated
    */
    'recurringDetailReference'?: string;

    /**
    * The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only.
    */
    'shopperNotificationReference'?: string;

    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;

    /**
    * **payu_IN_upi**
    */
    'type': PayUUpiDetails.TypeEnum;

    /**
    * The virtual payment address for UPI.
    */
    'virtualPaymentAddress'?: string;
}

export namespace PayUUpiDetails {
    export enum TypeEnum {
        PayuInUpi = <any> 'payu_IN_upi'
    }
}
