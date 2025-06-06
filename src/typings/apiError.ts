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

// ApiError interface to model Adyen API errors
// The interface is an union of the 2 different error models used by Adyen APIs:
// RestServiceError (based on RFC 7807)
// ServiceError (based on the original Adyen error model).
export interface ApiError {
    status?: number;
    errorCode?: string;
    message?: string;
    errorType?: string;
    pspReference?: string;

    detail?: string
    instance?: string;
    invalidFields?: Array<string>;
    requestId?: string;
    title?: string;
    type?: string;
}
