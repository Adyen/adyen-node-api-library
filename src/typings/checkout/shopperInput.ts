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
 * The version of the OpenAPI document: 68v
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ShopperInput {
    /**
    * Specifies visibility of billing address fields.  Permitted values: * editable * hidden * readOnly
    */
    'billingAddress'?: ShopperInput.BillingAddressEnum;
    /**
    * Specifies visibility of delivery address fields.  Permitted values: * editable * hidden * readOnly
    */
    'deliveryAddress'?: ShopperInput.DeliveryAddressEnum;
    /**
    * Specifies visibility of personal details.  Permitted values: * editable * hidden * readOnly
    */
    'personalDetails'?: ShopperInput.PersonalDetailsEnum;
}

export namespace ShopperInput {
    export enum BillingAddressEnum {
        Editable = <any> 'editable',
        Hidden = <any> 'hidden',
        ReadOnly = <any> 'readOnly'
    }
    export enum DeliveryAddressEnum {
        Editable = <any> 'editable',
        Hidden = <any> 'hidden',
        ReadOnly = <any> 'readOnly'
    }
    export enum PersonalDetailsEnum {
        Editable = <any> 'editable',
        Hidden = <any> 'hidden',
        ReadOnly = <any> 'readOnly'
    }
}
