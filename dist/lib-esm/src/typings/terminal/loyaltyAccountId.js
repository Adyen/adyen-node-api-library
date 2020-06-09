var LoyaltyAccountId = (function () {
    function LoyaltyAccountId() {
    }
    LoyaltyAccountId.getAttributeTypeMap = function () {
        return LoyaltyAccountId.attributeTypeMap;
    };
    LoyaltyAccountId.discriminator = undefined;
    LoyaltyAccountId.attributeTypeMap = [
        {
            "name": "entryMode",
            "baseName": "EntryMode",
            "type": "Array<LoyaltyAccountId.EntryModeEnum>"
        },
        {
            "name": "identificationSupport",
            "baseName": "IdentificationSupport",
            "type": "LoyaltyAccountId.IdentificationSupportEnum"
        },
        {
            "name": "identificationType",
            "baseName": "IdentificationType",
            "type": "IdentificationType"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        }
    ];
    return LoyaltyAccountId;
}());
export { LoyaltyAccountId };
(function (LoyaltyAccountId) {
    var EntryModeEnum;
    (function (EntryModeEnum) {
        EntryModeEnum[EntryModeEnum["Contactless"] = 'Contactless'] = "Contactless";
        EntryModeEnum[EntryModeEnum["File"] = 'File'] = "File";
        EntryModeEnum[EntryModeEnum["ICC"] = 'ICC'] = "ICC";
        EntryModeEnum[EntryModeEnum["Keyed"] = 'Keyed'] = "Keyed";
        EntryModeEnum[EntryModeEnum["MagStripe"] = 'MagStripe'] = "MagStripe";
        EntryModeEnum[EntryModeEnum["Manual"] = 'Manual'] = "Manual";
        EntryModeEnum[EntryModeEnum["Mobile"] = 'Mobile'] = "Mobile";
        EntryModeEnum[EntryModeEnum["RFID"] = 'RFID'] = "RFID";
        EntryModeEnum[EntryModeEnum["Scanned"] = 'Scanned'] = "Scanned";
        EntryModeEnum[EntryModeEnum["SynchronousICC"] = 'SynchronousICC'] = "SynchronousICC";
        EntryModeEnum[EntryModeEnum["Tapped"] = 'Tapped'] = "Tapped";
    })(EntryModeEnum = LoyaltyAccountId.EntryModeEnum || (LoyaltyAccountId.EntryModeEnum = {}));
    var IdentificationSupportEnum;
    (function (IdentificationSupportEnum) {
        IdentificationSupportEnum[IdentificationSupportEnum["HybridCard"] = 'HybridCard'] = "HybridCard";
        IdentificationSupportEnum[IdentificationSupportEnum["LinkedCard"] = 'LinkedCard'] = "LinkedCard";
        IdentificationSupportEnum[IdentificationSupportEnum["LoyaltyCard"] = 'LoyaltyCard'] = "LoyaltyCard";
        IdentificationSupportEnum[IdentificationSupportEnum["NoCard"] = 'NoCard'] = "NoCard";
    })(IdentificationSupportEnum = LoyaltyAccountId.IdentificationSupportEnum || (LoyaltyAccountId.IdentificationSupportEnum = {}));
})(LoyaltyAccountId || (LoyaltyAccountId = {}));
//# sourceMappingURL=loyaltyAccountId.js.map