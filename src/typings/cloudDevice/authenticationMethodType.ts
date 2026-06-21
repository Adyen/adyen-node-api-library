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



export enum AuthenticationMethodType {
    Bypass = <any> 'Bypass',
    ManualVerification = <any> 'ManualVerification',
    MerchantAuthentication = <any> 'MerchantAuthentication',
    OfflinePin = <any> 'OfflinePIN',
    OnlinePin = <any> 'OnlinePIN',
    PaperSignature = <any> 'PaperSignature',
    SecureCertificate = <any> 'SecureCertificate',
    SecureNoCertificate = <any> 'SecureNoCertificate',
    SecuredChannel = <any> 'SecuredChannel',
    SignatureCapture = <any> 'SignatureCapture',
    UnknownMethod = <any> 'UnknownMethod'
}
