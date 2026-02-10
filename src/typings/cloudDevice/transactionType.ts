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
 * Copyright (c) 2025 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Cloud Device API
 * Definition of Cloud Device API Schema
 *
 */



export enum TransactionType {
    Award = <any> 'Award',
    CashAdvance = <any> 'CashAdvance',
    CompletedDeffered = <any> 'CompletedDeffered',
    CompletedReservation = <any> 'CompletedReservation',
    Credit = <any> 'Credit',
    Debit = <any> 'Debit',
    Declined = <any> 'Declined',
    Failed = <any> 'Failed',
    FirstReservation = <any> 'FirstReservation',
    IssuerInstalment = <any> 'IssuerInstalment',
    OneTimeReservation = <any> 'OneTimeReservation',
    Rebate = <any> 'Rebate',
    Redemption = <any> 'Redemption',
    ReverseAward = <any> 'ReverseAward',
    ReverseCredit = <any> 'ReverseCredit',
    ReverseDebit = <any> 'ReverseDebit',
    ReverseRebate = <any> 'ReverseRebate',
    ReverseRedemption = <any> 'ReverseRedemption',
    UpdateReservation = <any> 'UpdateReservation'
}
