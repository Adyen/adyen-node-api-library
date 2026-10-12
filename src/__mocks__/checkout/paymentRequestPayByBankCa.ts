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
export const paymentRequestPayByBankCa = JSON.stringify({
    amount: {
        currency: "USD",
        value: 1000,
    },
    reference: "Your order number",
    paymentMethod: {
        type: "paybybank_ca",
        checkoutAttemptId: "1",
        storedPaymentMethodId: "M5N7TQ4TG5PFWR50",
    },
    returnUrl: "https://your-company.com/...",
    merchantAccount: "YOUR_MERCHANT_ACCOUNT",
});
