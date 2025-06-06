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
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
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
    SecurityAlarm = <any> 'SecurityAlarm',
    Shutdown = <any> 'Shutdown',
    StopAssistance = <any> 'StopAssistance'
}
