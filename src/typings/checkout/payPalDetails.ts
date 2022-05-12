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


export class PayPalDetails {

    /**
    * The unique ID associated with the order.
    */
    'orderID'?: string;

    /**
    * The unique ID associated with the payer.
    */
    'payerID'?: string;

    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    *
    * @deprecated
    */
    'recurringDetailReference'?: string;

    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;

    /**
    * The type of flow to initiate.
    */
    'subtype'?: PayPalDetails.SubtypeEnum;

    /**
    * **paypal**
    */
    'type': PayPalDetails.TypeEnum;
}

export namespace PayPalDetails {
    export enum SubtypeEnum {
        Redirect = <any> 'redirect',
        Sdk = <any> 'sdk'
    }
    export enum TypeEnum {
        Paypal = <any> 'paypal'
    }
}
