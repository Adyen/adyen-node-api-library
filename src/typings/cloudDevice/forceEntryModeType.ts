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



export enum ForceEntryModeType {
    CheckReader = <any> 'CheckReader',
    Contactless = <any> 'Contactless',
    File = <any> 'File',
    Icc = <any> 'ICC',
    Keyed = <any> 'Keyed',
    MagStripe = <any> 'MagStripe',
    Manual = <any> 'Manual',
    Rfid = <any> 'RFID',
    Scanned = <any> 'Scanned',
    SynchronousIcc = <any> 'SynchronousICC',
    Tapped = <any> 'Tapped'
}
