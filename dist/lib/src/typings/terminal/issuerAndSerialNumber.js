"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuerAndSerialNumber = void 0;
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
exports.IssuerAndSerialNumber = IssuerAndSerialNumber;
//# sourceMappingURL=issuerAndSerialNumber.js.map