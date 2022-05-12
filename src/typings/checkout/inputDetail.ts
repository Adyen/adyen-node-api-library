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

import { Item } from './item';
import { SubInputDetail } from './subInputDetail';

export class InputDetail {
    /**
    * Configuration parameters for the required input.
    */
    'configuration'?: { [key: string]: string; };
    /**
    * Input details can also be provided recursively.
    */
    'details'?: Array<SubInputDetail>;
    /**
    * Input details can also be provided recursively (deprecated).
    */
    'inputDetails'?: Array<SubInputDetail>;
    /**
    * In case of a select, the URL from which to query the items.
    */
    'itemSearchUrl'?: string;
    /**
    * In case of a select, the items to choose from.
    */
    'items'?: Array<Item>;
    /**
    * The value to provide in the result.
    */
    'key'?: string;
    /**
    * True if this input value is optional.
    */
    'optional'?: boolean;
    /**
    * The type of the required input.
    */
    'type'?: string;
    /**
    * The value can be pre-filled, if available.
    */
    'value'?: string;
}

