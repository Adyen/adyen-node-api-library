"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileData = void 0;
var MobileData = (function () {
    function MobileData() {
    }
    MobileData.getAttributeTypeMap = function () {
        return MobileData.attributeTypeMap;
    };
    MobileData.discriminator = undefined;
    MobileData.attributeTypeMap = [
        {
            "name": "geolocation",
            "baseName": "Geolocation",
            "type": "Geolocation"
        },
        {
            "name": "maskedMSISDN",
            "baseName": "MaskedMSISDN",
            "type": "string"
        },
        {
            "name": "mobileCountryCode",
            "baseName": "MobileCountryCode",
            "type": "string"
        },
        {
            "name": "mobileNetworkCode",
            "baseName": "MobileNetworkCode",
            "type": "string"
        },
        {
            "name": "protectedMobileData",
            "baseName": "ProtectedMobileData",
            "type": "ContentInformation"
        },
        {
            "name": "sensitiveMobileData",
            "baseName": "SensitiveMobileData",
            "type": "SensitiveMobileData"
        }
    ];
    return MobileData;
}());
exports.MobileData = MobileData;
//# sourceMappingURL=mobileData.js.map