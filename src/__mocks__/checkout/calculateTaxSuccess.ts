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
export const calculateTaxSuccess = JSON.stringify({
    "taxCalculationReference": "2111234567890000",
    "taxCalculationToken": "TAX_CALCULATION_TOKEN",
    "taxCalculation": {
        "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
        "taxCalculationContext": {
            "calculationType": "LRS_TCS",
            "taxCountryCode": "IN",
            "lrs": {
                "remittancePurpose": "TOUR_PROGRAMME",
                "sublimitStatus": "NOT_EXCEEDED"
            }
        },
        "taxCalculations": [
            {
                "type": "LRS_TCS",
                "taxAmount": {
                    "currency": "INR",
                    "value": 100
                }
            }
        ],
        "taxableAmount": {
            "currency": "INR",
            "value": 10000
        },
        "totalAmount": {
            "currency": "INR",
            "value": 10100
        },
        "totalTaxAmount": {
            "currency": "INR",
            "value": 100
        }
    }
});
