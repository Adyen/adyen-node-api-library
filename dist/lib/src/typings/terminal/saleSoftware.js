"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleSoftware = void 0;
var SaleSoftware = (function () {
    function SaleSoftware() {
    }
    SaleSoftware.getAttributeTypeMap = function () {
        return SaleSoftware.attributeTypeMap;
    };
    SaleSoftware.discriminator = undefined;
    SaleSoftware.attributeTypeMap = [
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
    return SaleSoftware;
}());
exports.SaleSoftware = SaleSoftware;
//# sourceMappingURL=saleSoftware.js.map