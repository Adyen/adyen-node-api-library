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



export enum InputCommandType {
    DecimalString = <any> 'DecimalString',
    DigitString = <any> 'DigitString',
    GetAnyKey = <any> 'GetAnyKey',
    GetConfirmation = <any> 'GetConfirmation',
    GetFunctionKey = <any> 'GetFunctionKey',
    GetMenuEntry = <any> 'GetMenuEntry',
    Password = <any> 'Password',
    SiteManager = <any> 'SiteManager',
    TextString = <any> 'TextString'
}
