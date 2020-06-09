var CardReaderInitRequest = (function () {
    function CardReaderInitRequest() {
    }
    CardReaderInitRequest.getAttributeTypeMap = function () {
        return CardReaderInitRequest.attributeTypeMap;
    };
    CardReaderInitRequest.discriminator = undefined;
    CardReaderInitRequest.attributeTypeMap = [
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "forceEntryMode",
            "baseName": "ForceEntryMode",
            "type": "Array<Array<CardReaderInitRequest.ForceEntryModeEnum>>"
        },
        {
            "name": "leaveCardFlag",
            "baseName": "LeaveCardFlag",
            "type": "boolean"
        },
        {
            "name": "maxWaitingTime",
            "baseName": "MaxWaitingTime",
            "type": "number"
        },
        {
            "name": "warmResetFlag",
            "baseName": "WarmResetFlag",
            "type": "boolean"
        }
    ];
    return CardReaderInitRequest;
}());
export { CardReaderInitRequest };
(function (CardReaderInitRequest) {
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
    })(ForceEntryModeEnum = CardReaderInitRequest.ForceEntryModeEnum || (CardReaderInitRequest.ForceEntryModeEnum = {}));
})(CardReaderInitRequest || (CardReaderInitRequest = {}));
//# sourceMappingURL=cardReaderInitRequest.js.map