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
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class InstallmentOption {
    /**
    * The maximum number of installments offered for this payment method.
    */
    'maxValue'?: number;
    /**
    * Defines the type of installment plan. If not set, defaults to **regular**.  Possible values: * **regular** * **revolving**
    */
    'plans'?: Array<InstallmentOption.PlansEnum>;
    /**
    * Preselected number of installments offered for this payment method.
    */
    'preselectedValue'?: number;
    /**
    * An array of the number of installments that the shopper can choose from. For example, **[2,3,5]**. This cannot be specified simultaneously with `maxValue`.
    */
    'values'?: Array<number>;
}

export namespace InstallmentOption {
    export enum PlansEnum {
        Regular = <any> 'regular',
        Revolving = <any> 'revolving'
    }
}
