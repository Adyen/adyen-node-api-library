var CardAcquisitionTransaction = (function () {
    function CardAcquisitionTransaction() {
    }
    CardAcquisitionTransaction.getAttributeTypeMap = function () {
        return CardAcquisitionTransaction.attributeTypeMap;
    };
    CardAcquisitionTransaction.discriminator = undefined;
    CardAcquisitionTransaction.attributeTypeMap = [
        {
            "name": "allowedLoyaltyBrand",
            "baseName": "AllowedLoyaltyBrand",
            "type": "Array<string>"
        },
        {
            "name": "allowedPaymentBrand",
            "baseName": "AllowedPaymentBrand",
            "type": "Array<string>"
        },
        {
            "name": "cashBackFlag",
            "baseName": "CashBackFlag",
            "type": "boolean"
        },
        {
            "name": "customerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "forceCustomerSelectionFlag",
            "baseName": "ForceCustomerSelectionFlag",
            "type": "boolean"
        },
        {
            "name": "forceEntryMode",
            "baseName": "ForceEntryMode",
            "type": "Array<Array<CardAcquisitionTransaction.ForceEntryModeEnum>>"
        },
        {
            "name": "loyaltyHandling",
            "baseName": "LoyaltyHandling",
            "type": "CardAcquisitionTransaction.LoyaltyHandlingEnum"
        },
        {
            "name": "paymentType",
            "baseName": "PaymentType",
            "type": "CardAcquisitionTransaction.PaymentTypeEnum"
        },
        {
            "name": "totalAmount",
            "baseName": "TotalAmount",
            "type": "number"
        }
    ];
    return CardAcquisitionTransaction;
}());
export { CardAcquisitionTransaction };
(function (CardAcquisitionTransaction) {
    var ForceEntryModeEnum;
    (function (ForceEntryModeEnum) {
        ForceEntryModeEnum[ForceEntryModeEnum["CheckReader"] = 'CheckReader'] = "CheckReader";
        ForceEntryModeEnum[ForceEntryModeEnum["Contactless"] = 'Contactless'] = "Contactless";
        ForceEntryModeEnum[ForceEntryModeEnum["File"] = 'File'] = "File";
        ForceEntryModeEnum[ForceEntryModeEnum["ICC"] = 'ICC'] = "ICC";
        ForceEntryModeEnum[ForceEntryModeEnum["Keyed"] = 'Keyed'] = "Keyed";
        ForceEntryModeEnum[ForceEntryModeEnum["MagStripe"] = 'MagStripe'] = "MagStripe";
        ForceEntryModeEnum[ForceEntryModeEnum["Manual"] = 'Manual'] = "Manual";
        ForceEntryModeEnum[ForceEntryModeEnum["RFID"] = 'RFID'] = "RFID";
        ForceEntryModeEnum[ForceEntryModeEnum["Scanned"] = 'Scanned'] = "Scanned";
        ForceEntryModeEnum[ForceEntryModeEnum["SynchronousICC"] = 'SynchronousICC'] = "SynchronousICC";
        ForceEntryModeEnum[ForceEntryModeEnum["Tapped"] = 'Tapped'] = "Tapped";
    })(ForceEntryModeEnum = CardAcquisitionTransaction.ForceEntryModeEnum || (CardAcquisitionTransaction.ForceEntryModeEnum = {}));
    var LoyaltyHandlingEnum;
    (function (LoyaltyHandlingEnum) {
        LoyaltyHandlingEnum[LoyaltyHandlingEnum["Allowed"] = 'Allowed'] = "Allowed";
        LoyaltyHandlingEnum[LoyaltyHandlingEnum["Forbidden"] = 'Forbidden'] = "Forbidden";
        LoyaltyHandlingEnum[LoyaltyHandlingEnum["Processed"] = 'Processed'] = "Processed";
        LoyaltyHandlingEnum[LoyaltyHandlingEnum["Proposed"] = 'Proposed'] = "Proposed";
        LoyaltyHandlingEnum[LoyaltyHandlingEnum["Required"] = 'Required'] = "Required";
    })(LoyaltyHandlingEnum = CardAcquisitionTransaction.LoyaltyHandlingEnum || (CardAcquisitionTransaction.LoyaltyHandlingEnum = {}));
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
    })(PaymentTypeEnum = CardAcquisitionTransaction.PaymentTypeEnum || (CardAcquisitionTransaction.PaymentTypeEnum = {}));
})(CardAcquisitionTransaction || (CardAcquisitionTransaction = {}));
//# sourceMappingURL=cardAcquisitionTransaction.js.map