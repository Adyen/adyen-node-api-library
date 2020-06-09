var SaleTerminalData = (function () {
    function SaleTerminalData() {
    }
    SaleTerminalData.getAttributeTypeMap = function () {
        return SaleTerminalData.attributeTypeMap;
    };
    SaleTerminalData.discriminator = undefined;
    SaleTerminalData.attributeTypeMap = [
        {
            "name": "saleCapabilities",
            "baseName": "SaleCapabilities",
            "type": "Array<SaleTerminalData.SaleCapabilitiesEnum>"
        },
        {
            "name": "saleProfile",
            "baseName": "SaleProfile",
            "type": "SaleProfile"
        },
        {
            "name": "terminalEnvironment",
            "baseName": "TerminalEnvironment",
            "type": "SaleTerminalData.TerminalEnvironmentEnum"
        },
        {
            "name": "totalsGroupID",
            "baseName": "TotalsGroupID",
            "type": "string"
        }
    ];
    return SaleTerminalData;
}());
export { SaleTerminalData };
(function (SaleTerminalData) {
    var SaleCapabilitiesEnum;
    (function (SaleCapabilitiesEnum) {
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["CashierDisplay"] = 'CashierDisplay'] = "CashierDisplay";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["CashierError"] = 'CashierError'] = "CashierError";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["CashierInput"] = 'CashierInput'] = "CashierInput";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["CashierStatus"] = 'CashierStatus'] = "CashierStatus";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["CustomerAssistance"] = 'CustomerAssistance'] = "CustomerAssistance";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["CustomerDisplay"] = 'CustomerDisplay'] = "CustomerDisplay";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["CustomerError"] = 'CustomerError'] = "CustomerError";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["CustomerInput"] = 'CustomerInput'] = "CustomerInput";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["EMVContactless"] = 'EMVContactless'] = "EMVContactless";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["ICC"] = 'ICC'] = "ICC";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["MagStripe"] = 'MagStripe'] = "MagStripe";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["POIReplication"] = 'POIReplication'] = "POIReplication";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["PrinterDocument"] = 'PrinterDocument'] = "PrinterDocument";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["PrinterReceipt"] = 'PrinterReceipt'] = "PrinterReceipt";
        SaleCapabilitiesEnum[SaleCapabilitiesEnum["PrinterVoucher"] = 'PrinterVoucher'] = "PrinterVoucher";
    })(SaleCapabilitiesEnum = SaleTerminalData.SaleCapabilitiesEnum || (SaleTerminalData.SaleCapabilitiesEnum = {}));
    var TerminalEnvironmentEnum;
    (function (TerminalEnvironmentEnum) {
        TerminalEnvironmentEnum[TerminalEnvironmentEnum["Attended"] = 'Attended'] = "Attended";
        TerminalEnvironmentEnum[TerminalEnvironmentEnum["SemiAttended"] = 'SemiAttended'] = "SemiAttended";
        TerminalEnvironmentEnum[TerminalEnvironmentEnum["Unattended"] = 'Unattended'] = "Unattended";
    })(TerminalEnvironmentEnum = SaleTerminalData.TerminalEnvironmentEnum || (SaleTerminalData.TerminalEnvironmentEnum = {}));
})(SaleTerminalData || (SaleTerminalData = {}));
//# sourceMappingURL=saleTerminalData.js.map