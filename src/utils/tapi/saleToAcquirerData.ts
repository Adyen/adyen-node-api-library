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
 * Copyright (c) 2026 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/**
 * Recurring processing model as expected in the `SaleToAcquirerData` field.
 */
export enum RecurringProcessingModel {
    Subscription = "Subscription",
    CardOnFile = "CardOnFile",
    UnscheduledCardOnFile = "UnscheduledCardOnFile",
}

/**
 * Sale information intended for the Acquirer, decoded from the `SaleData.SaleToAcquirerData` field.
 *
 * The field supports two wire formats:
 * - Base64-encoded JSON: a JSON object encoded as a Base64 string.
 * - Key-value pairs: form-encoded pairs using `&` as separator
 *   (e.g. `shopperEmail=foo@bar.com&tenderOption=AskGratuity`).
 */
export interface SaleToAcquirerData {
    metadata?: Record<string, string>;
    shopperEmail?: string;
    shopperReference?: string;
    recurringContract?: string;
    shopperStatement?: string;
    recurringDetailName?: string;
    recurringTokenService?: string;
    store?: string;
    merchantAccount?: string;
    currency?: string;
    applicationInfo?: Record<string, unknown>;
    tenderOption?: string;
    additionalData?: Record<string, string>;
    authorisationType?: string;
    ssc?: string;
    recurringProcessingModel?: RecurringProcessingModel;
    redemptionType?: string;
}
