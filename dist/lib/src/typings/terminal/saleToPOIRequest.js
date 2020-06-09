"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleToPOIRequest = void 0;
var SaleToPOIRequest = (function () {
    function SaleToPOIRequest() {
    }
    SaleToPOIRequest.getAttributeTypeMap = function () {
        return SaleToPOIRequest.attributeTypeMap;
    };
    SaleToPOIRequest.discriminator = undefined;
    SaleToPOIRequest.attributeTypeMap = [
        {
            "name": "abortRequest",
            "baseName": "AbortRequest",
            "type": "AbortRequest"
        },
        {
            "name": "adminRequest",
            "baseName": "AdminRequest",
            "type": "AdminRequest"
        },
        {
            "name": "balanceInquiryRequest",
            "baseName": "BalanceInquiryRequest",
            "type": "BalanceInquiryRequest"
        },
        {
            "name": "batchRequest",
            "baseName": "BatchRequest",
            "type": "BatchRequest"
        },
        {
            "name": "cardAcquisitionRequest",
            "baseName": "CardAcquisitionRequest",
            "type": "CardAcquisitionRequest"
        },
        {
            "name": "cardReaderAPDURequest",
            "baseName": "CardReaderAPDURequest",
            "type": "CardReaderAPDURequest"
        },
        {
            "name": "cardReaderInitRequest",
            "baseName": "CardReaderInitRequest",
            "type": "CardReaderInitRequest"
        },
        {
            "name": "cardReaderPowerOffRequest",
            "baseName": "CardReaderPowerOffRequest",
            "type": "CardReaderPowerOffRequest"
        },
        {
            "name": "diagnosisRequest",
            "baseName": "DiagnosisRequest",
            "type": "DiagnosisRequest"
        },
        {
            "name": "displayRequest",
            "baseName": "DisplayRequest",
            "type": "DisplayRequest"
        },
        {
            "name": "enableServiceRequest",
            "baseName": "EnableServiceRequest",
            "type": "EnableServiceRequest"
        },
        {
            "name": "eventNotification",
            "baseName": "EventNotification",
            "type": "EventNotification"
        },
        {
            "name": "getTotalsRequest",
            "baseName": "GetTotalsRequest",
            "type": "GetTotalsRequest"
        },
        {
            "name": "inputRequest",
            "baseName": "InputRequest",
            "type": "InputRequest"
        },
        {
            "name": "inputUpdate",
            "baseName": "InputUpdate",
            "type": "InputUpdate"
        },
        {
            "name": "loginRequest",
            "baseName": "LoginRequest",
            "type": "LoginRequest"
        },
        {
            "name": "logoutRequest",
            "baseName": "LogoutRequest",
            "type": "LogoutRequest"
        },
        {
            "name": "loyaltyRequest",
            "baseName": "LoyaltyRequest",
            "type": "LoyaltyRequest"
        },
        {
            "name": "messageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "paymentRequest",
            "baseName": "PaymentRequest",
            "type": "PaymentRequest"
        },
        {
            "name": "pINRequest",
            "baseName": "PINRequest",
            "type": "PINRequest"
        },
        {
            "name": "printRequest",
            "baseName": "PrintRequest",
            "type": "PrintRequest"
        },
        {
            "name": "reconciliationRequest",
            "baseName": "ReconciliationRequest",
            "type": "ReconciliationRequest"
        },
        {
            "name": "reversalRequest",
            "baseName": "ReversalRequest",
            "type": "ReversalRequest"
        },
        {
            "name": "securityTrailer",
            "baseName": "SecurityTrailer",
            "type": "ContentInformation"
        },
        {
            "name": "soundRequest",
            "baseName": "SoundRequest",
            "type": "SoundRequest"
        },
        {
            "name": "storedValueRequest",
            "baseName": "StoredValueRequest",
            "type": "StoredValueRequest"
        },
        {
            "name": "transactionStatusRequest",
            "baseName": "TransactionStatusRequest",
            "type": "TransactionStatusRequest"
        },
        {
            "name": "transmitRequest",
            "baseName": "TransmitRequest",
            "type": "TransmitRequest"
        }
    ];
    return SaleToPOIRequest;
}());
exports.SaleToPOIRequest = SaleToPOIRequest;
//# sourceMappingURL=saleToPOIRequest.js.map