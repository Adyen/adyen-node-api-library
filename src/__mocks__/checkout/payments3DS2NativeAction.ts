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
export const payments3DS2NativeAction = JSON.stringify({
    action:{
        type:"threeDS2",
        subtype: "fingerprint",
        paymentData:"Ab02b4c0!BQABAgCuZFJrQOjSslzt+...",
        paymentMethodType:"scheme",
        authorisationToken : "Ab02b4c0!BQABAgAvrX03p...",
        token:"eyJ0aHJlZURTTWV0aG9kTm90aWZpY..."
    },
    pspReference: "JLCMPCQ8HXSKGK82",
    resultCode:"IdentifyShopper",  
}, null, 2);