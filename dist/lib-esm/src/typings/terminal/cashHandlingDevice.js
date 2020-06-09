var CashHandlingDevice = (function () {
    function CashHandlingDevice() {
    }
    CashHandlingDevice.getAttributeTypeMap = function () {
        return CashHandlingDevice.attributeTypeMap;
    };
    CashHandlingDevice.discriminator = undefined;
    CashHandlingDevice.attributeTypeMap = [
        {
            "name": "cashHandlingOkFlag",
            "baseName": "CashHandlingOkFlag",
            "type": "boolean"
        },
        {
            "name": "coinsOrBills",
            "baseName": "CoinsOrBills",
            "type": "Array<CoinsOrBills>"
        },
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        }
    ];
    return CashHandlingDevice;
}());
export { CashHandlingDevice };
//# sourceMappingURL=cashHandlingDevice.js.map