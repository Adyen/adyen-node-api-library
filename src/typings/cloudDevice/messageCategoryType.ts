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



export enum MessageCategoryType {
    Abort = <any> 'Abort',
    Admin = <any> 'Admin',
    BalanceInquiry = <any> 'BalanceInquiry',
    Batch = <any> 'Batch',
    CardAcquisition = <any> 'CardAcquisition',
    CardReaderApdu = <any> 'CardReaderAPDU',
    CardReaderInit = <any> 'CardReaderInit',
    CardReaderPowerOff = <any> 'CardReaderPowerOff',
    Diagnosis = <any> 'Diagnosis',
    Display = <any> 'Display',
    EnableService = <any> 'EnableService',
    Event = <any> 'Event',
    GetTotals = <any> 'GetTotals',
    Input = <any> 'Input',
    InputUpdate = <any> 'InputUpdate',
    Login = <any> 'Login',
    Logout = <any> 'Logout',
    Loyalty = <any> 'Loyalty',
    Pin = <any> 'PIN',
    Payment = <any> 'Payment',
    Print = <any> 'Print',
    Reconciliation = <any> 'Reconciliation',
    Reversal = <any> 'Reversal',
    Sound = <any> 'Sound',
    StoredValue = <any> 'StoredValue',
    TransactionStatus = <any> 'TransactionStatus',
    Transmit = <any> 'Transmit'
}
