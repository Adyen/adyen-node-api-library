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



export enum ErrorConditionType {
    Aborted = <any> 'Aborted',
    Busy = <any> 'Busy',
    Cancel = <any> 'Cancel',
    DeviceOut = <any> 'DeviceOut',
    InProgress = <any> 'InProgress',
    InsertedCard = <any> 'InsertedCard',
    InvalidCard = <any> 'InvalidCard',
    LoggedOut = <any> 'LoggedOut',
    MessageFormat = <any> 'MessageFormat',
    NotAllowed = <any> 'NotAllowed',
    NotFound = <any> 'NotFound',
    PaymentRestriction = <any> 'PaymentRestriction',
    Refusal = <any> 'Refusal',
    UnavailableDevice = <any> 'UnavailableDevice',
    UnavailableService = <any> 'UnavailableService',
    UnreachableHost = <any> 'UnreachableHost',
    WrongPin = <any> 'WrongPIN'
}
