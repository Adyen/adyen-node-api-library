var IssuerAndSerialNumber = (function () {
    function IssuerAndSerialNumber() {
    }
    IssuerAndSerialNumber.getAttributeTypeMap = function () {
        return IssuerAndSerialNumber.attributeTypeMap;
    };
    IssuerAndSerialNumber.discriminator = undefined;
    IssuerAndSerialNumber.attributeTypeMap = [
        {
            "name": "issuer",
            "baseName": "Issuer",
            "type": "Issuer"
        },
        {
            "name": "serialNumber",
            "baseName": "SerialNumber",
            "type": "number"
        }
    ];
    return IssuerAndSerialNumber;
}());
export { IssuerAndSerialNumber };
//# sourceMappingURL=issuerAndSerialNumber.js.map