var OutputBarcode = (function () {
    function OutputBarcode() {
    }
    OutputBarcode.getAttributeTypeMap = function () {
        return OutputBarcode.attributeTypeMap;
    };
    OutputBarcode.discriminator = undefined;
    OutputBarcode.attributeTypeMap = [
        {
            "name": "barcodeType",
            "baseName": "BarcodeType",
            "type": "OutputBarcode.BarcodeTypeEnum"
        },
        {
            "name": "barcodeValue",
            "baseName": "BarcodeValue",
            "type": "string"
        }
    ];
    return OutputBarcode;
}());
export { OutputBarcode };
(function (OutputBarcode) {
    var BarcodeTypeEnum;
    (function (BarcodeTypeEnum) {
        BarcodeTypeEnum[BarcodeTypeEnum["Code128"] = 'Code128'] = "Code128";
        BarcodeTypeEnum[BarcodeTypeEnum["Code25"] = 'Code25'] = "Code25";
        BarcodeTypeEnum[BarcodeTypeEnum["EAN13"] = 'EAN13'] = "EAN13";
        BarcodeTypeEnum[BarcodeTypeEnum["EAN8"] = 'EAN8'] = "EAN8";
        BarcodeTypeEnum[BarcodeTypeEnum["PDF417"] = 'PDF417'] = "PDF417";
        BarcodeTypeEnum[BarcodeTypeEnum["QRCode"] = 'QRCode'] = "QRCode";
        BarcodeTypeEnum[BarcodeTypeEnum["UPCA"] = 'UPCA'] = "UPCA";
    })(BarcodeTypeEnum = OutputBarcode.BarcodeTypeEnum || (OutputBarcode.BarcodeTypeEnum = {}));
})(OutputBarcode || (OutputBarcode = {}));
//# sourceMappingURL=outputBarcode.js.map