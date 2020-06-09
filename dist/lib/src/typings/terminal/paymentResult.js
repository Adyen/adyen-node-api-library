"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentResult = void 0;
var PaymentResult = (function () {
    function PaymentResult() {
    }
    PaymentResult.getAttributeTypeMap = function () {
        return PaymentResult.attributeTypeMap;
    };
    PaymentResult.discriminator = undefined;
    PaymentResult.attributeTypeMap = [
        {
            "name": "amountsResp",
            "baseName": "AmountsResp",
            "type": "AmountsResp"
        },
        {
            "name": "authenticationMethod",
            "baseName": "AuthenticationMethod",
            "type": "Array<PaymentResult.AuthenticationMethodEnum>"
        },
        {
            "name": "capturedSignature",
            "baseName": "CapturedSignature",
            "type": "CapturedSignature"
        },
        {
            "name": "currencyConversion",
            "baseName": "CurrencyConversion",
            "type": "Array<CurrencyConversion>"
        },
        {
            "name": "customerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "instalmentType",
            "baseName": "InstalmentType",
            "type": "Instalment"
        },
        {
            "name": "merchantOverrideFlag",
            "baseName": "MerchantOverrideFlag",
            "type": "boolean"
        },
        {
            "name": "onlineFlag",
            "baseName": "OnlineFlag",
            "type": "boolean"
        },
        {
            "name": "paymentAcquirerData",
            "baseName": "PaymentAcquirerData",
            "type": "PaymentAcquirerData"
        },
        {
            "name": "paymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
        },
        {
            "name": "paymentType",
            "baseName": "PaymentType",
            "type": "PaymentResult.PaymentTypeEnum"
        },
        {
            "name": "protectedSignature",
            "baseName": "ProtectedSignature",
            "type": "ContentInformation"
        },
        {
            "name": "validityDate",
            "baseName": "ValidityDate",
            "type": "string"
        }
    ];
    return PaymentResult;
}());
exports.PaymentResult = PaymentResult;
(function (PaymentResult) {
    var AuthenticationMethodEnum;
    (function (AuthenticationMethodEnum) {
        AuthenticationMethodEnum[AuthenticationMethodEnum["Bypass"] = 'Bypass'] = "Bypass";
        AuthenticationMethodEnum[AuthenticationMethodEnum["ManualVerification"] = 'ManualVerification'] = "ManualVerification";
        AuthenticationMethodEnum[AuthenticationMethodEnum["MerchantAuthentication"] = 'MerchantAuthentication'] = "MerchantAuthentication";
        AuthenticationMethodEnum[AuthenticationMethodEnum["OfflinePIN"] = 'OfflinePIN'] = "OfflinePIN";
        AuthenticationMethodEnum[AuthenticationMethodEnum["OnlinePIN"] = 'OnlinePIN'] = "OnlinePIN";
        AuthenticationMethodEnum[AuthenticationMethodEnum["PaperSignature"] = 'PaperSignature'] = "PaperSignature";
        AuthenticationMethodEnum[AuthenticationMethodEnum["SecureCertificate"] = 'SecureCertificate'] = "SecureCertificate";
        AuthenticationMethodEnum[AuthenticationMethodEnum["SecureNoCertificate"] = 'SecureNoCertificate'] = "SecureNoCertificate";
        AuthenticationMethodEnum[AuthenticationMethodEnum["SecuredChannel"] = 'SecuredChannel'] = "SecuredChannel";
        AuthenticationMethodEnum[AuthenticationMethodEnum["SignatureCapture"] = 'SignatureCapture'] = "SignatureCapture";
        AuthenticationMethodEnum[AuthenticationMethodEnum["UnknownMethod"] = 'UnknownMethod'] = "UnknownMethod";
    })(AuthenticationMethodEnum = PaymentResult.AuthenticationMethodEnum || (PaymentResult.AuthenticationMethodEnum = {}));
    var PaymentTypeEnum;
    (function (PaymentTypeEnum) {
        PaymentTypeEnum[PaymentTypeEnum["CashAdvance"] = 'CashAdvance'] = "CashAdvance";
        PaymentTypeEnum[PaymentTypeEnum["CashDeposit"] = 'CashDeposit'] = "CashDeposit";
        PaymentTypeEnum[PaymentTypeEnum["Completion"] = 'Completion'] = "Completion";
        PaymentTypeEnum[PaymentTypeEnum["FirstReservation"] = 'FirstReservation'] = "FirstReservation";
        PaymentTypeEnum[PaymentTypeEnum["Instalment"] = 'Instalment'] = "Instalment";
        PaymentTypeEnum[PaymentTypeEnum["IssuerInstalment"] = 'IssuerInstalment'] = "IssuerInstalment";
        PaymentTypeEnum[PaymentTypeEnum["Normal"] = 'Normal'] = "Normal";
        PaymentTypeEnum[PaymentTypeEnum["OneTimeReservation"] = 'OneTimeReservation'] = "OneTimeReservation";
        PaymentTypeEnum[PaymentTypeEnum["PaidOut"] = 'PaidOut'] = "PaidOut";
        PaymentTypeEnum[PaymentTypeEnum["Recurring"] = 'Recurring'] = "Recurring";
        PaymentTypeEnum[PaymentTypeEnum["Refund"] = 'Refund'] = "Refund";
        PaymentTypeEnum[PaymentTypeEnum["UpdateReservation"] = 'UpdateReservation'] = "UpdateReservation";
    })(PaymentTypeEnum = PaymentResult.PaymentTypeEnum || (PaymentResult.PaymentTypeEnum = {}));
})(PaymentResult = exports.PaymentResult || (exports.PaymentResult = {}));
exports.PaymentResult = PaymentResult;
//# sourceMappingURL=paymentResult.js.map