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


import { AdminResponse } from './adminResponse';
import { BalanceInquiryResponse } from './balanceInquiryResponse';
import { BatchResponse } from './batchResponse';
import { CardAcquisitionResponse } from './cardAcquisitionResponse';
import { CardReaderAPDUResponse } from './cardReaderAPDUResponse';
import { CardReaderInitResponse } from './cardReaderInitResponse';
import { CardReaderPowerOffResponse } from './cardReaderPowerOffResponse';
import { ContentInformation } from './contentInformation';
import { DiagnosisResponse } from './diagnosisResponse';
import { DisplayResponse } from './displayResponse';
import { EnableServiceResponse } from './enableServiceResponse';
import { GetTotalsResponse } from './getTotalsResponse';
import { InputResponse } from './inputResponse';
import { LoginResponse } from './loginResponse';
import { LogoutResponse } from './logoutResponse';
import { LoyaltyResponse } from './loyaltyResponse';
import { MessageHeader } from './messageHeader';
import { PINResponse } from './pINResponse';
import { PaymentResponse } from './paymentResponse';
import { PrintResponse } from './printResponse';
import { ReconciliationResponse } from './reconciliationResponse';
import { ReversalResponse } from './reversalResponse';
import { SoundResponse } from './soundResponse';
import { StoredValueResponse } from './storedValueResponse';
import { TransactionStatusResponse } from './transactionStatusResponse';
import { TransmitResponse } from './transmitResponse';

export class SaleToPOIResponse {
    'AdminResponse'?: AdminResponse;
    'BalanceInquiryResponse'?: BalanceInquiryResponse;
    'BatchResponse'?: BatchResponse;
    'CardAcquisitionResponse'?: CardAcquisitionResponse;
    'CardReaderAPDUResponse'?: CardReaderAPDUResponse;
    'CardReaderInitResponse'?: CardReaderInitResponse;
    'CardReaderPowerOffResponse'?: CardReaderPowerOffResponse;
    'DiagnosisResponse'?: DiagnosisResponse;
    'DisplayResponse'?: DisplayResponse;
    'EnableServiceResponse'?: EnableServiceResponse;
    'GetTotalsResponse'?: GetTotalsResponse;
    'InputResponse'?: InputResponse;
    'LoginResponse'?: LoginResponse;
    'LogoutResponse'?: LogoutResponse;
    'LoyaltyResponse'?: LoyaltyResponse;
    'MessageHeader': MessageHeader;
    'PaymentResponse'?: PaymentResponse;
    'PINResponse'?: PINResponse;
    'PrintResponse'?: PrintResponse;
    'ReconciliationResponse'?: ReconciliationResponse;
    'ReversalResponse'?: ReversalResponse;
    'SecurityTrailer'?: ContentInformation;
    'SoundResponse'?: SoundResponse;
    'StoredValueResponse'?: StoredValueResponse;
    'TransactionStatusResponse'?: TransactionStatusResponse;
    'TransmitResponse'?: TransmitResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AdminResponse",
            "baseName": "AdminResponse",
            "type": "AdminResponse"
        },
        {
            "name": "BalanceInquiryResponse",
            "baseName": "BalanceInquiryResponse",
            "type": "BalanceInquiryResponse"
        },
        {
            "name": "BatchResponse",
            "baseName": "BatchResponse",
            "type": "BatchResponse"
        },
        {
            "name": "CardAcquisitionResponse",
            "baseName": "CardAcquisitionResponse",
            "type": "CardAcquisitionResponse"
        },
        {
            "name": "CardReaderAPDUResponse",
            "baseName": "CardReaderAPDUResponse",
            "type": "CardReaderAPDUResponse"
        },
        {
            "name": "CardReaderInitResponse",
            "baseName": "CardReaderInitResponse",
            "type": "CardReaderInitResponse"
        },
        {
            "name": "CardReaderPowerOffResponse",
            "baseName": "CardReaderPowerOffResponse",
            "type": "CardReaderPowerOffResponse"
        },
        {
            "name": "DiagnosisResponse",
            "baseName": "DiagnosisResponse",
            "type": "DiagnosisResponse"
        },
        {
            "name": "DisplayResponse",
            "baseName": "DisplayResponse",
            "type": "DisplayResponse"
        },
        {
            "name": "EnableServiceResponse",
            "baseName": "EnableServiceResponse",
            "type": "EnableServiceResponse"
        },
        {
            "name": "GetTotalsResponse",
            "baseName": "GetTotalsResponse",
            "type": "GetTotalsResponse"
        },
        {
            "name": "InputResponse",
            "baseName": "InputResponse",
            "type": "InputResponse"
        },
        {
            "name": "LoginResponse",
            "baseName": "LoginResponse",
            "type": "LoginResponse"
        },
        {
            "name": "LogoutResponse",
            "baseName": "LogoutResponse",
            "type": "LogoutResponse"
        },
        {
            "name": "LoyaltyResponse",
            "baseName": "LoyaltyResponse",
            "type": "LoyaltyResponse"
        },
        {
            "name": "MessageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "PaymentResponse",
            "baseName": "PaymentResponse",
            "type": "PaymentResponse"
        },
        {
            "name": "PINResponse",
            "baseName": "PINResponse",
            "type": "PINResponse"
        },
        {
            "name": "PrintResponse",
            "baseName": "PrintResponse",
            "type": "PrintResponse"
        },
        {
            "name": "ReconciliationResponse",
            "baseName": "ReconciliationResponse",
            "type": "ReconciliationResponse"
        },
        {
            "name": "ReversalResponse",
            "baseName": "ReversalResponse",
            "type": "ReversalResponse"
        },
        {
            "name": "SecurityTrailer",
            "baseName": "SecurityTrailer",
            "type": "ContentInformation"
        },
        {
            "name": "SoundResponse",
            "baseName": "SoundResponse",
            "type": "SoundResponse"
        },
        {
            "name": "StoredValueResponse",
            "baseName": "StoredValueResponse",
            "type": "StoredValueResponse"
        },
        {
            "name": "TransactionStatusResponse",
            "baseName": "TransactionStatusResponse",
            "type": "TransactionStatusResponse"
        },
        {
            "name": "TransmitResponse",
            "baseName": "TransmitResponse",
            "type": "TransmitResponse"
        }    ];

    static getAttributeTypeMap() {
        return SaleToPOIResponse.attributeTypeMap;
    }
}

