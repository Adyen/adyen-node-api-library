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


import { AbortRequest } from './abortRequest';
import { AdminRequest } from './adminRequest';
import { BalanceInquiryRequest } from './balanceInquiryRequest';
import { BatchRequest } from './batchRequest';
import { CardAcquisitionRequest } from './cardAcquisitionRequest';
import { CardReaderAPDURequest } from './cardReaderAPDURequest';
import { CardReaderInitRequest } from './cardReaderInitRequest';
import { CardReaderPowerOffRequest } from './cardReaderPowerOffRequest';
import { ContentInformation } from './contentInformation';
import { DiagnosisRequest } from './diagnosisRequest';
import { DisplayRequest } from './displayRequest';
import { EnableServiceRequest } from './enableServiceRequest';
import { EventNotification } from './eventNotification';
import { GetTotalsRequest } from './getTotalsRequest';
import { InputRequest } from './inputRequest';
import { InputUpdate } from './inputUpdate';
import { LoginRequest } from './loginRequest';
import { LogoutRequest } from './logoutRequest';
import { LoyaltyRequest } from './loyaltyRequest';
import { MessageHeader } from './messageHeader';
import { PINRequest } from './pINRequest';
import { PaymentRequest } from './paymentRequest';
import { PrintRequest } from './printRequest';
import { ReconciliationRequest } from './reconciliationRequest';
import { ReversalRequest } from './reversalRequest';
import { SoundRequest } from './soundRequest';
import { StoredValueRequest } from './storedValueRequest';
import { TransactionStatusRequest } from './transactionStatusRequest';
import { TransmitRequest } from './transmitRequest';

export class SaleToPOIRequest {
    'AbortRequest'?: AbortRequest;
    'AdminRequest'?: AdminRequest;
    'BalanceInquiryRequest'?: BalanceInquiryRequest;
    'BatchRequest'?: BatchRequest;
    'CardAcquisitionRequest'?: CardAcquisitionRequest;
    'CardReaderAPDURequest'?: CardReaderAPDURequest;
    'CardReaderInitRequest'?: CardReaderInitRequest;
    'CardReaderPowerOffRequest'?: CardReaderPowerOffRequest;
    'DiagnosisRequest'?: DiagnosisRequest;
    'DisplayRequest'?: DisplayRequest;
    'EnableServiceRequest'?: EnableServiceRequest;
    'EventNotification'?: EventNotification;
    'GetTotalsRequest'?: GetTotalsRequest;
    'InputRequest'?: InputRequest;
    'InputUpdate'?: InputUpdate;
    'LoginRequest'?: LoginRequest;
    'LogoutRequest'?: LogoutRequest;
    'LoyaltyRequest'?: LoyaltyRequest;
    'MessageHeader': MessageHeader;
    'PaymentRequest'?: PaymentRequest;
    'PINRequest'?: PINRequest;
    'PrintRequest'?: PrintRequest;
    'ReconciliationRequest'?: ReconciliationRequest;
    'ReversalRequest'?: ReversalRequest;
    'SecurityTrailer'?: ContentInformation;
    'SoundRequest'?: SoundRequest;
    'StoredValueRequest'?: StoredValueRequest;
    'TransactionStatusRequest'?: TransactionStatusRequest;
    'TransmitRequest'?: TransmitRequest;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AbortRequest",
            "baseName": "AbortRequest",
            "type": "AbortRequest"
        },
        {
            "name": "AdminRequest",
            "baseName": "AdminRequest",
            "type": "AdminRequest"
        },
        {
            "name": "BalanceInquiryRequest",
            "baseName": "BalanceInquiryRequest",
            "type": "BalanceInquiryRequest"
        },
        {
            "name": "BatchRequest",
            "baseName": "BatchRequest",
            "type": "BatchRequest"
        },
        {
            "name": "CardAcquisitionRequest",
            "baseName": "CardAcquisitionRequest",
            "type": "CardAcquisitionRequest"
        },
        {
            "name": "CardReaderAPDURequest",
            "baseName": "CardReaderAPDURequest",
            "type": "CardReaderAPDURequest"
        },
        {
            "name": "CardReaderInitRequest",
            "baseName": "CardReaderInitRequest",
            "type": "CardReaderInitRequest"
        },
        {
            "name": "CardReaderPowerOffRequest",
            "baseName": "CardReaderPowerOffRequest",
            "type": "CardReaderPowerOffRequest"
        },
        {
            "name": "DiagnosisRequest",
            "baseName": "DiagnosisRequest",
            "type": "DiagnosisRequest"
        },
        {
            "name": "DisplayRequest",
            "baseName": "DisplayRequest",
            "type": "DisplayRequest"
        },
        {
            "name": "EnableServiceRequest",
            "baseName": "EnableServiceRequest",
            "type": "EnableServiceRequest"
        },
        {
            "name": "EventNotification",
            "baseName": "EventNotification",
            "type": "EventNotification"
        },
        {
            "name": "GetTotalsRequest",
            "baseName": "GetTotalsRequest",
            "type": "GetTotalsRequest"
        },
        {
            "name": "InputRequest",
            "baseName": "InputRequest",
            "type": "InputRequest"
        },
        {
            "name": "InputUpdate",
            "baseName": "InputUpdate",
            "type": "InputUpdate"
        },
        {
            "name": "LoginRequest",
            "baseName": "LoginRequest",
            "type": "LoginRequest"
        },
        {
            "name": "LogoutRequest",
            "baseName": "LogoutRequest",
            "type": "LogoutRequest"
        },
        {
            "name": "LoyaltyRequest",
            "baseName": "LoyaltyRequest",
            "type": "LoyaltyRequest"
        },
        {
            "name": "MessageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "PaymentRequest",
            "baseName": "PaymentRequest",
            "type": "PaymentRequest"
        },
        {
            "name": "PINRequest",
            "baseName": "PINRequest",
            "type": "PINRequest"
        },
        {
            "name": "PrintRequest",
            "baseName": "PrintRequest",
            "type": "PrintRequest"
        },
        {
            "name": "ReconciliationRequest",
            "baseName": "ReconciliationRequest",
            "type": "ReconciliationRequest"
        },
        {
            "name": "ReversalRequest",
            "baseName": "ReversalRequest",
            "type": "ReversalRequest"
        },
        {
            "name": "SecurityTrailer",
            "baseName": "SecurityTrailer",
            "type": "ContentInformation"
        },
        {
            "name": "SoundRequest",
            "baseName": "SoundRequest",
            "type": "SoundRequest"
        },
        {
            "name": "StoredValueRequest",
            "baseName": "StoredValueRequest",
            "type": "StoredValueRequest"
        },
        {
            "name": "TransactionStatusRequest",
            "baseName": "TransactionStatusRequest",
            "type": "TransactionStatusRequest"
        },
        {
            "name": "TransmitRequest",
            "baseName": "TransmitRequest",
            "type": "TransmitRequest"
        }    ];

    static getAttributeTypeMap() {
        return SaleToPOIRequest.attributeTypeMap;
    }
}

