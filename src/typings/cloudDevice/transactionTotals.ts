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


import { LoyaltyTotals } from './loyaltyTotals';
import { PaymentInstrumentType } from './paymentInstrumentType';
import { PaymentTotals } from './paymentTotals';

export class TransactionTotals {
    'AcquirerID'?: string;
    'CardBrand'?: string;
    'ErrorCondition'?: TransactionTotals.ErrorConditionEnum;
    'HostReconciliationID'?: string;
    'LoyaltyCurrency'?: string;
    'LoyaltyTotals'?: Array<LoyaltyTotals>;
    'LoyaltyUnit'?: TransactionTotals.LoyaltyUnitEnum;
    'OperatorID'?: string;
    'PaymentCurrency'?: string;
    'PaymentInstrumentType': PaymentInstrumentType;
    'PaymentTotals'?: Array<PaymentTotals>;
    'POIID'?: string;
    'SaleID'?: string;
    'ShiftNumber'?: string;
    'TotalsGroupID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AcquirerID",
            "baseName": "AcquirerID",
            "type": "string"
        },
        {
            "name": "CardBrand",
            "baseName": "CardBrand",
            "type": "string"
        },
        {
            "name": "ErrorCondition",
            "baseName": "ErrorCondition",
            "type": "TransactionTotals.ErrorConditionEnum"
        },
        {
            "name": "HostReconciliationID",
            "baseName": "HostReconciliationID",
            "type": "string"
        },
        {
            "name": "LoyaltyCurrency",
            "baseName": "LoyaltyCurrency",
            "type": "string"
        },
        {
            "name": "LoyaltyTotals",
            "baseName": "LoyaltyTotals",
            "type": "Array<LoyaltyTotals>"
        },
        {
            "name": "LoyaltyUnit",
            "baseName": "LoyaltyUnit",
            "type": "TransactionTotals.LoyaltyUnitEnum"
        },
        {
            "name": "OperatorID",
            "baseName": "OperatorID",
            "type": "string"
        },
        {
            "name": "PaymentCurrency",
            "baseName": "PaymentCurrency",
            "type": "string"
        },
        {
            "name": "PaymentInstrumentType",
            "baseName": "PaymentInstrumentType",
            "type": "PaymentInstrumentType"
        },
        {
            "name": "PaymentTotals",
            "baseName": "PaymentTotals",
            "type": "Array<PaymentTotals>"
        },
        {
            "name": "POIID",
            "baseName": "POIID",
            "type": "string"
        },
        {
            "name": "SaleID",
            "baseName": "SaleID",
            "type": "string"
        },
        {
            "name": "ShiftNumber",
            "baseName": "ShiftNumber",
            "type": "string"
        },
        {
            "name": "TotalsGroupID",
            "baseName": "TotalsGroupID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionTotals.attributeTypeMap;
    }
}

export namespace TransactionTotals {
    export enum ErrorConditionEnum {
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
    export enum LoyaltyUnitEnum {
        Monetary = <any> 'Monetary',
        Point = <any> 'Point'
    }
}
