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


export class CheckoutQrCodeAction {

    /**
    * Expiry time of the QR code.
    */
    'expiresAt'?: string;

    /**
    * A value that must be submitted to the `/payments/details` endpoint to verify this payment.
    */
    'paymentData'?: string;

    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;

    /**
    * The contents of the QR code as a UTF8 string.
    */
    'qrCodeData'?: string;

    /**
    * **qrCode**
    */
    'type': CheckoutQrCodeAction.TypeEnum;

    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;
}

export namespace CheckoutQrCodeAction {
    export enum TypeEnum {
        QrCode = <any> 'qrCode'
    }
}
