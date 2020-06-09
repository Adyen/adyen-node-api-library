"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoredValueAccountId = void 0;
var StoredValueAccountId = (function () {
    function StoredValueAccountId() {
    }
    StoredValueAccountId.getAttributeTypeMap = function () {
        return StoredValueAccountId.attributeTypeMap;
    };
    StoredValueAccountId.discriminator = undefined;
    StoredValueAccountId.attributeTypeMap = [
        {
            "name": "entryMode",
            "baseName": "EntryMode",
            "type": "Array<StoredValueAccountId.EntryModeEnum>"
        },
        {
            "name": "expiryDate",
            "baseName": "ExpiryDate",
            "type": "string"
        },
        {
            "name": "identificationType",
            "baseName": "IdentificationType",
            "type": "IdentificationType"
        },
        {
            "name": "ownerName",
            "baseName": "OwnerName",
            "type": "string"
        },
        {
            "name": "storedValueAccountType",
            "baseName": "StoredValueAccountType",
            "type": "StoredValueAccountType"
        },
        {
            "name": "storedValueProvider",
            "baseName": "StoredValueProvider",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        }
    ];
    return StoredValueAccountId;
}());
exports.StoredValueAccountId = StoredValueAccountId;
(function (StoredValueAccountId) {
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
    })(EntryModeEnum = StoredValueAccountId.EntryModeEnum || (StoredValueAccountId.EntryModeEnum = {}));
})(StoredValueAccountId = exports.StoredValueAccountId || (exports.StoredValueAccountId = {}));
exports.StoredValueAccountId = StoredValueAccountId;
//# sourceMappingURL=storedValueAccountId.js.map