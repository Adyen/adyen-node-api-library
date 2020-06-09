var POITerminalData = (function () {
    function POITerminalData() {
    }
    POITerminalData.getAttributeTypeMap = function () {
        return POITerminalData.attributeTypeMap;
    };
    POITerminalData.discriminator = undefined;
    POITerminalData.attributeTypeMap = [
        {
            "name": "pOICapabilities",
            "baseName": "POICapabilities",
            "type": "Array<POITerminalData.POICapabilitiesEnum>"
        },
        {
            "name": "pOIProfile",
            "baseName": "POIProfile",
            "type": "POIProfile"
        },
        {
            "name": "pOISerialNumber",
            "baseName": "POISerialNumber",
            "type": "string"
        },
        {
            "name": "terminalEnvironment",
            "baseName": "TerminalEnvironment",
            "type": "TerminalEnvironmentType"
        }
    ];
    return POITerminalData;
}());
export { POITerminalData };
(function (POITerminalData) {
    var POICapabilitiesEnum;
    (function (POICapabilitiesEnum) {
        POICapabilitiesEnum[POICapabilitiesEnum["CashHandling"] = 'CashHandling'] = "CashHandling";
        POICapabilitiesEnum[POICapabilitiesEnum["CashierDisplay"] = 'CashierDisplay'] = "CashierDisplay";
        POICapabilitiesEnum[POICapabilitiesEnum["CashierError"] = 'CashierError'] = "CashierError";
        POICapabilitiesEnum[POICapabilitiesEnum["CashierInput"] = 'CashierInput'] = "CashierInput";
        POICapabilitiesEnum[POICapabilitiesEnum["CustomerDisplay"] = 'CustomerDisplay'] = "CustomerDisplay";
        POICapabilitiesEnum[POICapabilitiesEnum["CustomerError"] = 'CustomerError'] = "CustomerError";
        POICapabilitiesEnum[POICapabilitiesEnum["CustomerInput"] = 'CustomerInput'] = "CustomerInput";
        POICapabilitiesEnum[POICapabilitiesEnum["EMVContactless"] = 'EMVContactless'] = "EMVContactless";
        POICapabilitiesEnum[POICapabilitiesEnum["ICC"] = 'ICC'] = "ICC";
        POICapabilitiesEnum[POICapabilitiesEnum["MagStripe"] = 'MagStripe'] = "MagStripe";
        POICapabilitiesEnum[POICapabilitiesEnum["PrinterDocument"] = 'PrinterDocument'] = "PrinterDocument";
        POICapabilitiesEnum[POICapabilitiesEnum["PrinterReceipt"] = 'PrinterReceipt'] = "PrinterReceipt";
        POICapabilitiesEnum[POICapabilitiesEnum["PrinterVoucher"] = 'PrinterVoucher'] = "PrinterVoucher";
    })(POICapabilitiesEnum = POITerminalData.POICapabilitiesEnum || (POITerminalData.POICapabilitiesEnum = {}));
})(POITerminalData || (POITerminalData = {}));
//# sourceMappingURL=pOITerminalData.js.map