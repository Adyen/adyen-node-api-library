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


export class ThreeDSRequestorPriorAuthenticationInfo {
    /**
    * Data that documents and supports a specific authentication process. Maximum length: 2048 bytes.
    */
    'threeDSReqPriorAuthData'?: string;
    /**
    * Mechanism used by the Cardholder to previously authenticate to the 3DS Requestor. Allowed values: * **01** — Frictionless authentication occurred by ACS. * **02** — Cardholder challenge occurred by ACS. * **03** — AVS verified. * **04** — Other issuer methods.
    */
    'threeDSReqPriorAuthMethod'?: ThreeDSRequestorPriorAuthenticationInfo.ThreeDSReqPriorAuthMethodEnum;
    /**
    * Date and time in UTC of the prior cardholder authentication. Format: YYYYMMDDHHMM
    */
    'threeDSReqPriorAuthTimestamp'?: string;
    /**
    * This data element provides additional information to the ACS to determine the best approach for handing a request. This data element contains an ACS Transaction ID for a prior authenticated transaction. For example, the first recurring transaction that was authenticated with the cardholder. Length: 30 characters.
    */
    'threeDSReqPriorRef'?: string;
}

export namespace ThreeDSRequestorPriorAuthenticationInfo {
    export enum ThreeDSReqPriorAuthMethodEnum {
        _01 = <any> '01',
        _02 = <any> '02',
        _03 = <any> '03',
        _04 = <any> '04'
    }
}
