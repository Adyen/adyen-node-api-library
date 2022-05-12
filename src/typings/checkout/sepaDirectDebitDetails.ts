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


export class SepaDirectDebitDetails {

    /**
    * The International Bank Account Number (IBAN).
    */
    'iban': string;

    /**
    * The name of the bank account holder.
    */
    'ownerName': string;

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
    * **sepadirectdebit**
    */
    'type'?: SepaDirectDebitDetails.TypeEnum;
}

export namespace SepaDirectDebitDetails {
    export enum TypeEnum {
        Sepadirectdebit = <any> 'sepadirectdebit',
        SepadirectdebitAmazonpay = <any> 'sepadirectdebit_amazonpay'
    }
}
