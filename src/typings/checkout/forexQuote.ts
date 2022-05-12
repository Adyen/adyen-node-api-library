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

import { Amount } from './amount';

export class ForexQuote {
    /**
    * The account name.
    */
    'account'?: string;
    /**
    * The account type.
    */
    'accountType'?: string;
    'baseAmount'?: Amount;
    /**
    * The base points.
    */
    'basePoints': number;
    'buy'?: Amount;
    'interbank'?: Amount;
    /**
    * The reference assigned to the forex quote request.
    */
    'reference'?: string;
    'sell'?: Amount;
    /**
    * The signature to validate the integrity.
    */
    'signature'?: string;
    /**
    * The source of the forex quote.
    */
    'source'?: string;
    /**
    * The type of forex.
    */
    'type'?: string;
    /**
    * The date until which the forex quote is valid.
    */
    'validTill': Date;
}

