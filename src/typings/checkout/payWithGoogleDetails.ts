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


export class PayWithGoogleDetails {

    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    'fundingSource'?: PayWithGoogleDetails.FundingSourceEnum;

    /**
    * The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response.
    */
    'googlePayToken': string;

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
    * **paywithgoogle**
    */
    'type'?: PayWithGoogleDetails.TypeEnum;
}

export namespace PayWithGoogleDetails {
    export enum FundingSourceEnum {
        Debit = <any> 'debit'
    }
    export enum TypeEnum {
        Paywithgoogle = <any> 'paywithgoogle'
    }
}
