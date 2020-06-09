"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleToPOIResponse = void 0;
var SaleToPOIResponse = (function () {
    function SaleToPOIResponse() {
    }
    SaleToPOIResponse.getAttributeTypeMap = function () {
        return SaleToPOIResponse.attributeTypeMap;
    };
    SaleToPOIResponse.discriminator = undefined;
    SaleToPOIResponse.attributeTypeMap = [
        {
            "name": "adminResponse",
            "baseName": "AdminResponse",
            "type": "AdminResponse"
        },
        {
            "name": "balanceInquiryResponse",
            "baseName": "BalanceInquiryResponse",
            "type": "BalanceInquiryResponse"
        },
        {
            "name": "batchResponse",
            "baseName": "BatchResponse",
            "type": "BatchResponse"
        },
        {
            "name": "cardAcquisitionResponse",
            "baseName": "CardAcquisitionResponse",
            "type": "CardAcquisitionResponse"
        },
        {
            "name": "cardReaderAPDUResponse",
            "baseName": "CardReaderAPDUResponse",
            "type": "CardReaderAPDUResponse"
        },
        {
            "name": "cardReaderInitResponse",
            "baseName": "CardReaderInitResponse",
            "type": "CardReaderInitResponse"
        },
        {
            "name": "cardReaderPowerOffResponse",
            "baseName": "CardReaderPowerOffResponse",
            "type": "CardReaderPowerOffResponse"
        },
        {
            "name": "diagnosisResponse",
            "baseName": "DiagnosisResponse",
            "type": "DiagnosisResponse"
        },
        {
            "name": "displayResponse",
            "baseName": "DisplayResponse",
            "type": "DisplayResponse"
        },
        {
            "name": "enableServiceResponse",
            "baseName": "EnableServiceResponse",
            "type": "EnableServiceResponse"
        },
        {
            "name": "getTotalsResponse",
            "baseName": "GetTotalsResponse",
            "type": "GetTotalsResponse"
        },
        {
            "name": "inputResponse",
            "baseName": "InputResponse",
            "type": "InputResponse"
        },
        {
            "name": "loginResponse",
            "baseName": "LoginResponse",
            "type": "LoginResponse"
        },
        {
            "name": "logoutResponse",
            "baseName": "LogoutResponse",
            "type": "LogoutResponse"
        },
        {
            "name": "loyaltyResponse",
            "baseName": "LoyaltyResponse",
            "type": "LoyaltyResponse"
        },
        {
            "name": "messageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "paymentResponse",
            "baseName": "PaymentResponse",
            "type": "PaymentResponse"
        },
        {
            "name": "pINResponse",
            "baseName": "PINResponse",
            "type": "PINResponse"
        },
        {
            "name": "printResponse",
            "baseName": "PrintResponse",
            "type": "PrintResponse"
        },
        {
            "name": "reconciliationResponse",
            "baseName": "ReconciliationResponse",
            "type": "ReconciliationResponse"
        },
        {
            "name": "reversalResponse",
            "baseName": "ReversalResponse",
            "type": "ReversalResponse"
        },
        {
            "name": "securityTrailer",
            "baseName": "SecurityTrailer",
            "type": "ContentInformation"
        },
        {
            "name": "soundResponse",
            "baseName": "SoundResponse",
            "type": "SoundResponse"
        },
        {
            "name": "storedValueResponse",
            "baseName": "StoredValueResponse",
            "type": "StoredValueResponse"
        },
        {
            "name": "transactionStatusResponse",
            "baseName": "TransactionStatusResponse",
            "type": "TransactionStatusResponse"
        },
        {
            "name": "transmitResponse",
            "baseName": "TransmitResponse",
            "type": "TransmitResponse"
        }
    ];
    return SaleToPOIResponse;
}());
exports.SaleToPOIResponse = SaleToPOIResponse;
//# sourceMappingURL=saleToPOIResponse.js.map