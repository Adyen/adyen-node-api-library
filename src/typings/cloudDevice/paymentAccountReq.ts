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


import { PaymentInstrumentData } from './paymentInstrumentData';
import { TransactionIdentification } from './transactionIdentification';

export class PaymentAccountReq {
    'AccountType'?: PaymentAccountReq.AccountTypeEnum;
    'CardAcquisitionReference'?: TransactionIdentification;
    'PaymentInstrumentData'?: PaymentInstrumentData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AccountType",
            "baseName": "AccountType",
            "type": "PaymentAccountReq.AccountTypeEnum"
        },
        {
            "name": "CardAcquisitionReference",
            "baseName": "CardAcquisitionReference",
            "type": "TransactionIdentification"
        },
        {
            "name": "PaymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
        }    ];

    static getAttributeTypeMap() {
        return PaymentAccountReq.attributeTypeMap;
    }
}

export namespace PaymentAccountReq {
    export enum AccountTypeEnum {
        CardTotals = <any> 'CardTotals',
        Checking = <any> 'Checking',
        CreditCard = <any> 'CreditCard',
        Default = <any> 'Default',
        EpurseCard = <any> 'EpurseCard',
        Investment = <any> 'Investment',
        Savings = <any> 'Savings',
        Universal = <any> 'Universal'
    }
}
