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


export class MessageReference {
    'DeviceID'?: string;
    'MessageCategory'?: MessageReference.MessageCategoryEnum;
    'POIID'?: string;
    'SaleID'?: string;
    'ServiceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "DeviceID",
            "baseName": "DeviceID",
            "type": "string"
        },
        {
            "name": "MessageCategory",
            "baseName": "MessageCategory",
            "type": "MessageReference.MessageCategoryEnum"
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
            "name": "ServiceID",
            "baseName": "ServiceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MessageReference.attributeTypeMap;
    }
}

export namespace MessageReference {
    export enum MessageCategoryEnum {
        Abort = <any> 'Abort',
        Admin = <any> 'Admin',
        BalanceInquiry = <any> 'BalanceInquiry',
        Batch = <any> 'Batch',
        CardAcquisition = <any> 'CardAcquisition',
        CardReaderApdu = <any> 'CardReaderAPDU',
        CardReaderInit = <any> 'CardReaderInit',
        CardReaderPowerOff = <any> 'CardReaderPowerOff',
        Diagnosis = <any> 'Diagnosis',
        Display = <any> 'Display',
        EnableService = <any> 'EnableService',
        Event = <any> 'Event',
        GetTotals = <any> 'GetTotals',
        Input = <any> 'Input',
        InputUpdate = <any> 'InputUpdate',
        Login = <any> 'Login',
        Logout = <any> 'Logout',
        Loyalty = <any> 'Loyalty',
        Pin = <any> 'PIN',
        Payment = <any> 'Payment',
        Print = <any> 'Print',
        Reconciliation = <any> 'Reconciliation',
        Reversal = <any> 'Reversal',
        Sound = <any> 'Sound',
        StoredValue = <any> 'StoredValue',
        TransactionStatus = <any> 'TransactionStatus',
        Transmit = <any> 'Transmit'
    }
}
