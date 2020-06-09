"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionConditions = void 0;
var TransactionConditions = (function () {
    function TransactionConditions() {
    }
    TransactionConditions.getAttributeTypeMap = function () {
        return TransactionConditions.attributeTypeMap;
    };
    TransactionConditions.discriminator = undefined;
    TransactionConditions.attributeTypeMap = [
        {
            "name": "acquirerID",
            "baseName": "AcquirerID",
            "type": "Array<string>"
        },
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
            "name": "customerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "debitPreferredFlag",
            "baseName": "DebitPreferredFlag",
            "type": "boolean"
        },
        {
            "name": "forceEntryMode",
            "baseName": "ForceEntryMode",
            "type": "Array<Array<TransactionConditions.ForceEntryModeEnum>>"
        },
        {
            "name": "forceOnlineFlag",
            "baseName": "ForceOnlineFlag",
            "type": "boolean"
        },
        {
            "name": "loyaltyHandling",
            "baseName": "LoyaltyHandling",
            "type": "TransactionConditions.LoyaltyHandlingEnum"
        },
        {
            "name": "merchantCategoryCode",
            "baseName": "MerchantCategoryCode",
            "type": "string"
        }
    ];
    return TransactionConditions;
}());
exports.TransactionConditions = TransactionConditions;
(function (TransactionConditions) {
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
    })(ForceEntryModeEnum = TransactionConditions.ForceEntryModeEnum || (TransactionConditions.ForceEntryModeEnum = {}));
    var LoyaltyHandlingEnum;
    (function (LoyaltyHandlingEnum) {
        LoyaltyHandlingEnum[LoyaltyHandlingEnum["Allowed"] = 'Allowed'] = "Allowed";
        LoyaltyHandlingEnum[LoyaltyHandlingEnum["Forbidden"] = 'Forbidden'] = "Forbidden";
        LoyaltyHandlingEnum[LoyaltyHandlingEnum["Processed"] = 'Processed'] = "Processed";
        LoyaltyHandlingEnum[LoyaltyHandlingEnum["Proposed"] = 'Proposed'] = "Proposed";
        LoyaltyHandlingEnum[LoyaltyHandlingEnum["Required"] = 'Required'] = "Required";
    })(LoyaltyHandlingEnum = TransactionConditions.LoyaltyHandlingEnum || (TransactionConditions.LoyaltyHandlingEnum = {}));
})(TransactionConditions = exports.TransactionConditions || (exports.TransactionConditions = {}));
exports.TransactionConditions = TransactionConditions;
//# sourceMappingURL=transactionConditions.js.map