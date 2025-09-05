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

export enum EventToNotifyType {
    Abort = <any> 'Abort',
    BeginMaintenance = <any> 'BeginMaintenance',
    CardInserted = <any> 'CardInserted',
    CardRemoved = <any> 'CardRemoved',
    Completed = <any> 'Completed',
    CustomerLanguage = <any> 'CustomerLanguage',
    EndMaintenance = <any> 'EndMaintenance',
    Initialised = <any> 'Initialised',
    KeyPressed = <any> 'KeyPressed',
    NetworkConnected = <any> 'NetworkConnected',
    NetworkDisconnected = <any> 'NetworkDisconnected',
    OutOfOrder = <any> 'OutOfOrder',
    Reject = <any> 'Reject',
    SaleAdmin = <any> 'SaleAdmin',
    SaleWakeUp = <any> 'SaleWakeUp',
    ScanBarcodeResult = <any> 'ScanBarcodeResult',    
    SecurityAlarm = <any> 'SecurityAlarm',
    Shutdown = <any> 'Shutdown',
    StopAssistance = <any> 'StopAssistance'
}
