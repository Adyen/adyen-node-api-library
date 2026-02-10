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


import { CustomerOrder } from './customerOrder';
import { Instalment } from './instalment';
import { PaymentInstrumentData } from './paymentInstrumentData';
import { TransactionIdentification } from './transactionIdentification';

export class PaymentData {
    'CardAcquisitionReference'?: TransactionIdentification;
    'CustomerOrder'?: CustomerOrder;
    'Instalment'?: Instalment;
    'PaymentInstrumentData'?: PaymentInstrumentData;
    'PaymentType'?: PaymentData.PaymentTypeEnum;
    'RequestedValidityDate'?: string;
    'SplitPaymentFlag'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CardAcquisitionReference",
            "baseName": "CardAcquisitionReference",
            "type": "TransactionIdentification"
        },
        {
            "name": "CustomerOrder",
            "baseName": "CustomerOrder",
            "type": "CustomerOrder"
        },
        {
            "name": "Instalment",
            "baseName": "Instalment",
            "type": "Instalment"
        },
        {
            "name": "PaymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
        },
        {
            "name": "PaymentType",
            "baseName": "PaymentType",
            "type": "PaymentData.PaymentTypeEnum"
        },
        {
            "name": "RequestedValidityDate",
            "baseName": "RequestedValidityDate",
            "type": "string"
        },
        {
            "name": "SplitPaymentFlag",
            "baseName": "SplitPaymentFlag",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PaymentData.attributeTypeMap;
    }
}

export namespace PaymentData {
    export enum PaymentTypeEnum {
        CashAdvance = <any> 'CashAdvance',
        CashDeposit = <any> 'CashDeposit',
        Completion = <any> 'Completion',
        FirstReservation = <any> 'FirstReservation',
        Instalment = <any> 'Instalment',
        IssuerInstalment = <any> 'IssuerInstalment',
        Normal = <any> 'Normal',
        OneTimeReservation = <any> 'OneTimeReservation',
        PaidOut = <any> 'PaidOut',
        Recurring = <any> 'Recurring',
        Refund = <any> 'Refund',
        UpdateReservation = <any> 'UpdateReservation'
    }
}
