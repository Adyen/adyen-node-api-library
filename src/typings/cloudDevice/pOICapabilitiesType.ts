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



export enum POICapabilitiesType {
    CashHandling = <any> 'CashHandling',
    CashierDisplay = <any> 'CashierDisplay',
    CashierError = <any> 'CashierError',
    CashierInput = <any> 'CashierInput',
    CustomerDisplay = <any> 'CustomerDisplay',
    CustomerError = <any> 'CustomerError',
    CustomerInput = <any> 'CustomerInput',
    EmvContactless = <any> 'EMVContactless',
    Icc = <any> 'ICC',
    MagStripe = <any> 'MagStripe',
    PrinterDocument = <any> 'PrinterDocument',
    PrinterReceipt = <any> 'PrinterReceipt',
    PrinterVoucher = <any> 'PrinterVoucher'
}
