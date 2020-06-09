"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POISoftware = void 0;
var POISoftware = (function () {
    function POISoftware() {
    }
    POISoftware.getAttributeTypeMap = function () {
        return POISoftware.attributeTypeMap;
    };
    POISoftware.discriminator = undefined;
    POISoftware.attributeTypeMap = [
        {
            "name": "applicationName",
            "baseName": "ApplicationName",
            "type": "string"
        },
        {
            "name": "certificationCode",
            "baseName": "CertificationCode",
            "type": "string"
        },
        {
            "name": "manufacturerID",
            "baseName": "ManufacturerID",
            "type": "string"
        },
        {
            "name": "softwareVersion",
            "baseName": "SoftwareVersion",
            "type": "string"
        }
    ];
    return POISoftware;
}());
exports.POISoftware = POISoftware;
//# sourceMappingURL=pOISoftware.js.map