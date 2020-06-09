var CardReaderInitResponse = (function () {
    function CardReaderInitResponse() {
    }
    CardReaderInitResponse.getAttributeTypeMap = function () {
        return CardReaderInitResponse.attributeTypeMap;
    };
    CardReaderInitResponse.discriminator = undefined;
    CardReaderInitResponse.attributeTypeMap = [
        {
            "name": "entryMode",
            "baseName": "EntryMode",
            "type": "Array<CardReaderInitResponse.EntryModeEnum>"
        },
        {
            "name": "iCCResetData",
            "baseName": "ICCResetData",
            "type": "ICCResetData"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "trackData",
            "baseName": "TrackData",
            "type": "Array<TrackData>"
        }
    ];
    return CardReaderInitResponse;
}());
export { CardReaderInitResponse };
(function (CardReaderInitResponse) {
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
    })(EntryModeEnum = CardReaderInitResponse.EntryModeEnum || (CardReaderInitResponse.EntryModeEnum = {}));
})(CardReaderInitResponse || (CardReaderInitResponse = {}));
//# sourceMappingURL=cardReaderInitResponse.js.map