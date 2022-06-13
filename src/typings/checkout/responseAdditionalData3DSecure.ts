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

export class ResponseAdditionalData3DSecure {
    /**
    * Information provided by the issuer to the cardholder. If this field is present, you need to display this information to the cardholder. 
    */
    'cardHolderInfo'?: string;
    /**
    * The Cardholder Authentication Verification Value (CAVV) for the 3D Secure authentication session, as a Base64-encoded 20-byte array.
    */
    'cavv'?: string;
    /**
    * The CAVV algorithm used.
    */
    'cavvAlgorithm'?: string;
    /**
    * Shows the [exemption type](https://docs.adyen.com/payments-fundamentals/psd2-sca-compliance-and-implementation-guide#specifypreferenceinyourapirequest) that Adyen requested for the payment.   Possible values: * **lowValue**  * **secureCorporate**  * **trustedBeneficiary**  * **transactionRiskAnalysis** 
    */
    'scaExemptionRequested'?: string;
    /**
    * Indicates whether a card is enrolled for 3D Secure 2.
    */
    'threeds2CardEnrolled'?: boolean;
}

