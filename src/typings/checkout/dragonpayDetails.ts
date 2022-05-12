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


export class DragonpayDetails {
    /**
    * The Dragonpay issuer value of the shopper\'s selected bank. Set this to an **id** of a Dragonpay issuer to preselect it.
    */
    'issuer': string;
    /**
    * The shopper’s email address.
    */
    'shopperEmail'?: string;
    /**
    * **dragonpay**
    */
    'type': DragonpayDetails.TypeEnum;
}

export namespace DragonpayDetails {
    export enum TypeEnum {
        Ebanking = <any> 'dragonpay_ebanking',
        OtcBanking = <any> 'dragonpay_otc_banking',
        OtcNonBanking = <any> 'dragonpay_otc_non_banking',
        OtcPhilippines = <any> 'dragonpay_otc_philippines'
    }
}
