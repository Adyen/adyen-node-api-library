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
export const paymentsRedirectAction = JSON.stringify({
    additionalData: {
        "cardSummary": "5454",
        "threeds2.threeDS2ResponseData.messageVersion": "2.1.0",
        "threeds2.threeDS2Token": "R5CZ2NWPJTGV9D82...",
        "threeds2.threeDSServerTransID": "8835538461311270...",
        "cardBin": "545454",
        "threeds2.cardEnrolled": "true",
        "paymentMethod": "mc",
        "cardPaymentMethod": "mc",
        "fundingSource": "CREDIT",
        "merchantReference": "Your order number",
        "issuerBin": "54545454",
        "threeds2.threeDSMethodURL": "https://pal-test.adyen.com/threeds2simulator/acs/startMethod.shtml",
        "cardIssuingCountry": "PL"
    },
    pspReference: "JLCMPCQ8HXSKGK82",
    resultCode: "RedirectShopper",
    action: {
        paymentMethodType: "scheme",
        url: "https://checkoutshopper-test.adyen.com/checkoutshopper/threeDS/redirect...",
        method: "GET",
        type: "redirect"
    }
}, null, 2);