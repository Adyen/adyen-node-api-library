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



export enum ServiceProfilesType {
    Batch = <any> 'Batch',
    CardReader = <any> 'CardReader',
    Communication = <any> 'Communication',
    Loyalty = <any> 'Loyalty',
    OneTimeRes = <any> 'OneTimeRes',
    Pin = <any> 'PIN',
    Reservation = <any> 'Reservation',
    Sound = <any> 'Sound',
    StoredValue = <any> 'StoredValue',
    Synchro = <any> 'Synchro'
}
