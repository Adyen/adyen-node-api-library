"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTotals = void 0;
var TransactionTotals = (function () {
    function TransactionTotals() {
    }
    TransactionTotals.getAttributeTypeMap = function () {
        return TransactionTotals.attributeTypeMap;
    };
    TransactionTotals.discriminator = undefined;
    TransactionTotals.attributeTypeMap = [
        {
            "name": "acquirerID",
            "baseName": "AcquirerID",
            "type": "string"
        },
        {
            "name": "cardBrand",
            "baseName": "CardBrand",
            "type": "string"
        },
        {
            "name": "errorCondition",
            "baseName": "ErrorCondition",
            "type": "TransactionTotals.ErrorConditionEnum"
        },
        {
            "name": "hostReconciliationID",
            "baseName": "HostReconciliationID",
            "type": "string"
        },
        {
            "name": "loyaltyCurrency",
            "baseName": "LoyaltyCurrency",
            "type": "string"
        },
        {
            "name": "loyaltyTotals",
            "baseName": "LoyaltyTotals",
            "type": "Array<LoyaltyTotals>"
        },
        {
            "name": "loyaltyUnit",
            "baseName": "LoyaltyUnit",
            "type": "TransactionTotals.LoyaltyUnitEnum"
        },
        {
            "name": "operatorID",
            "baseName": "OperatorID",
            "type": "string"
        },
        {
            "name": "paymentCurrency",
            "baseName": "PaymentCurrency",
            "type": "string"
        },
        {
            "name": "paymentInstrumentType",
            "baseName": "PaymentInstrumentType",
            "type": "PaymentInstrumentType"
        },
        {
            "name": "paymentTotals",
            "baseName": "PaymentTotals",
            "type": "Array<PaymentTotals>"
        },
        {
            "name": "pOIID",
            "baseName": "POIID",
            "type": "string"
        },
        {
            "name": "saleID",
            "baseName": "SaleID",
            "type": "string"
        },
        {
            "name": "shiftNumber",
            "baseName": "ShiftNumber",
            "type": "string"
        },
        {
            "name": "totalsGroupID",
            "baseName": "TotalsGroupID",
            "type": "string"
        }
    ];
    return TransactionTotals;
}());
exports.TransactionTotals = TransactionTotals;
(function (TransactionTotals) {
    var ErrorConditionEnum;
    (function (ErrorConditionEnum) {
        ErrorConditionEnum[ErrorConditionEnum["Aborted"] = 'Aborted'] = "Aborted";
        ErrorConditionEnum[ErrorConditionEnum["Busy"] = 'Busy'] = "Busy";
        ErrorConditionEnum[ErrorConditionEnum["Cancel"] = 'Cancel'] = "Cancel";
        ErrorConditionEnum[ErrorConditionEnum["DeviceOut"] = 'DeviceOut'] = "DeviceOut";
        ErrorConditionEnum[ErrorConditionEnum["InProgress"] = 'InProgress'] = "InProgress";
        ErrorConditionEnum[ErrorConditionEnum["InsertedCard"] = 'InsertedCard'] = "InsertedCard";
        ErrorConditionEnum[ErrorConditionEnum["InvalidCard"] = 'InvalidCard'] = "InvalidCard";
        ErrorConditionEnum[ErrorConditionEnum["LoggedOut"] = 'LoggedOut'] = "LoggedOut";
        ErrorConditionEnum[ErrorConditionEnum["MessageFormat"] = 'MessageFormat'] = "MessageFormat";
        ErrorConditionEnum[ErrorConditionEnum["NotAllowed"] = 'NotAllowed'] = "NotAllowed";
        ErrorConditionEnum[ErrorConditionEnum["NotFound"] = 'NotFound'] = "NotFound";
        ErrorConditionEnum[ErrorConditionEnum["PaymentRestriction"] = 'PaymentRestriction'] = "PaymentRestriction";
        ErrorConditionEnum[ErrorConditionEnum["Refusal"] = 'Refusal'] = "Refusal";
        ErrorConditionEnum[ErrorConditionEnum["UnavailableDevice"] = 'UnavailableDevice'] = "UnavailableDevice";
        ErrorConditionEnum[ErrorConditionEnum["UnavailableService"] = 'UnavailableService'] = "UnavailableService";
        ErrorConditionEnum[ErrorConditionEnum["UnreachableHost"] = 'UnreachableHost'] = "UnreachableHost";
        ErrorConditionEnum[ErrorConditionEnum["WrongPIN"] = 'WrongPIN'] = "WrongPIN";
    })(ErrorConditionEnum = TransactionTotals.ErrorConditionEnum || (TransactionTotals.ErrorConditionEnum = {}));
    var LoyaltyUnitEnum;
    (function (LoyaltyUnitEnum) {
        LoyaltyUnitEnum[LoyaltyUnitEnum["Monetary"] = 'Monetary'] = "Monetary";
        LoyaltyUnitEnum[LoyaltyUnitEnum["Point"] = 'Point'] = "Point";
    })(LoyaltyUnitEnum = TransactionTotals.LoyaltyUnitEnum || (TransactionTotals.LoyaltyUnitEnum = {}));
})(TransactionTotals = exports.TransactionTotals || (exports.TransactionTotals = {}));
exports.TransactionTotals = TransactionTotals;
//# sourceMappingURL=transactionTotals.js.map