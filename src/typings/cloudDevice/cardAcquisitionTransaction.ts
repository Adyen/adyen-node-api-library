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



export class CardAcquisitionTransaction {
    'AllowedLoyaltyBrand'?: Array<string>;
    'AllowedPaymentBrand'?: Array<string>;
    'CashBackFlag'?: boolean;
    'CustomerLanguage'?: string;
    'ForceCustomerSelectionFlag'?: boolean;
    'ForceEntryMode'?: Array<CardAcquisitionTransaction.ForceEntryModeEnum>;
    'LoyaltyHandling'?: CardAcquisitionTransaction.LoyaltyHandlingEnum;
    'PaymentType'?: CardAcquisitionTransaction.PaymentTypeEnum;
    'TotalAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AllowedLoyaltyBrand",
            "baseName": "AllowedLoyaltyBrand",
            "type": "Array<string>"
        },
        {
            "name": "AllowedPaymentBrand",
            "baseName": "AllowedPaymentBrand",
            "type": "Array<string>"
        },
        {
            "name": "CashBackFlag",
            "baseName": "CashBackFlag",
            "type": "boolean"
        },
        {
            "name": "CustomerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "ForceCustomerSelectionFlag",
            "baseName": "ForceCustomerSelectionFlag",
            "type": "boolean"
        },
        {
            "name": "ForceEntryMode",
            "baseName": "ForceEntryMode",
            "type": "Array<CardAcquisitionTransaction.ForceEntryModeEnum>"
        },
        {
            "name": "LoyaltyHandling",
            "baseName": "LoyaltyHandling",
            "type": "CardAcquisitionTransaction.LoyaltyHandlingEnum"
        },
        {
            "name": "PaymentType",
            "baseName": "PaymentType",
            "type": "CardAcquisitionTransaction.PaymentTypeEnum"
        },
        {
            "name": "TotalAmount",
            "baseName": "TotalAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CardAcquisitionTransaction.attributeTypeMap;
    }
}

export namespace CardAcquisitionTransaction {
    export enum ForceEntryModeEnum {
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
    export enum LoyaltyHandlingEnum {
        Allowed = <any> 'Allowed',
        Forbidden = <any> 'Forbidden',
        Processed = <any> 'Processed',
        Proposed = <any> 'Proposed',
        Required = <any> 'Required'
    }
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
