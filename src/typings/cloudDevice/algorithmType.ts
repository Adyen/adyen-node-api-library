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


export enum AlgorithmType {
    DesEde3Cbc = <any> 'Des-ede3-cbc',
    DesEde3Ecb = <any> 'Des-ede3-ecb',
    IdDukptWrap = <any> 'Id-dukpt-wrap',
    IdRetailCbcMac = <any> 'Id-retail-cbc-MAC',
    IdRetailCbcMacSha256 = <any> 'Id-retail-cbc-MAC-sha-256',
    IdSha256 = <any> 'Id-sha256',
    IdUkptWrap = <any> 'id-ukpt-wrap ',
    RsaEncryption = <any> 'RsaEncryption',
    Sha256WithRsaEncryption = <any> 'Sha256WithRSAEncryption'
}
