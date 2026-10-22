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
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/* tslint:disable */
export const verifyShopperTaxIdentificationSuccess = JSON.stringify({
    "result": "VALID",
    "taxVerificationReference": "2111298765430000",
    "verifiedShopperTaxIdentification": {
        "maskedName": "A*** K***",
        "taxCountryCode": "IN",
        "taxIdentificationType": "PAN"
    },
    "verifiedShopperTaxIdentificationToken": "VERIFIED_SHOPPER_TAX_IDENTIFICATION_TOKEN"
});
