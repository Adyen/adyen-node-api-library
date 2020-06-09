"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveMobileData = void 0;
var SensitiveMobileData = (function () {
    function SensitiveMobileData() {
    }
    SensitiveMobileData.getAttributeTypeMap = function () {
        return SensitiveMobileData.attributeTypeMap;
    };
    SensitiveMobileData.discriminator = undefined;
    SensitiveMobileData.attributeTypeMap = [
        {
            "name": "iMEI",
            "baseName": "IMEI",
            "type": "string"
        },
        {
            "name": "iMSI",
            "baseName": "IMSI",
            "type": "string"
        },
        {
            "name": "mSISDN",
            "baseName": "MSISDN",
            "type": "string"
        }
    ];
    return SensitiveMobileData;
}());
exports.SensitiveMobileData = SensitiveMobileData;
//# sourceMappingURL=sensitiveMobileData.js.map