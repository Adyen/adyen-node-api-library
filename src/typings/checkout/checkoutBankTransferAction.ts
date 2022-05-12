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

import { Amount } from './amount';

export class CheckoutBankTransferAction {

    /**
    * The name of the account holder.
    */
    'beneficiary'?: string;

    /**
    * The BIC of the IBAN.
    */
    'bic'?: string;

    /**
    * The url to download payment details with.
    */
    'downloadUrl'?: string;

    /**
    * The IBAN of the bank transfer.
    */
    'iban'?: string;

    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;

    /**
    * The transfer reference.
    */
    'reference'?: string;

    /**
    * The e-mail of the shopper, included if an e-mail was sent to the shopper.
    */
    'shopperEmail'?: string;

    /**
    */
    'totalAmount'?: Amount;

    /**
    * The type of the action.
    */
    'type': CheckoutBankTransferAction.TypeEnum;

    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;
}

export namespace CheckoutBankTransferAction {
    export enum TypeEnum {
        BankTransfer = <any> 'bankTransfer'
    }
}
