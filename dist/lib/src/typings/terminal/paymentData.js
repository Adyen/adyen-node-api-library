"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentData = void 0;
var PaymentData = (function () {
    function PaymentData() {
    }
    PaymentData.getAttributeTypeMap = function () {
        return PaymentData.attributeTypeMap;
    };
    PaymentData.discriminator = undefined;
    PaymentData.attributeTypeMap = [
        {
            "name": "cardAcquisitionReference",
            "baseName": "CardAcquisitionReference",
            "type": "TransactionIdentification"
        },
        {
            "name": "customerOrder",
            "baseName": "CustomerOrder",
            "type": "CustomerOrder"
        },
        {
            "name": "instalment",
            "baseName": "Instalment",
            "type": "Instalment"
        },
        {
            "name": "paymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
        },
        {
            "name": "paymentType",
            "baseName": "PaymentType",
            "type": "PaymentData.PaymentTypeEnum"
        },
        {
            "name": "requestedValidityDate",
            "baseName": "RequestedValidityDate",
            "type": "string"
        },
        {
            "name": "splitPaymentFlag",
            "baseName": "SplitPaymentFlag",
            "type": "boolean"
        }
    ];
    return PaymentData;
}());
exports.PaymentData = PaymentData;
(function (PaymentData) {
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
    })(PaymentTypeEnum = PaymentData.PaymentTypeEnum || (PaymentData.PaymentTypeEnum = {}));
})(PaymentData = exports.PaymentData || (exports.PaymentData = {}));
exports.PaymentData = PaymentData;
//# sourceMappingURL=paymentData.js.map