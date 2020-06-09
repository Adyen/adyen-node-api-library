"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationInfo = void 0;
var ApplicationInfo = (function () {
    function ApplicationInfo() {
    }
    ApplicationInfo.getAttributeTypeMap = function () {
        return ApplicationInfo.attributeTypeMap;
    };
    ApplicationInfo.discriminator = undefined;
    ApplicationInfo.attributeTypeMap = [
        {
            "name": "adyenLibrary",
            "baseName": "adyenLibrary",
            "type": "CommonField"
        },
        {
            "name": "adyenPaymentSource",
            "baseName": "adyenPaymentSource",
            "type": "CommonField"
        },
        {
            "name": "externalPlatform",
            "baseName": "externalPlatform",
            "type": "ExternalPlatform"
        },
        {
            "name": "merchantApplication",
            "baseName": "merchantApplication",
            "type": "CommonField"
        },
        {
            "name": "merchantDevice",
            "baseName": "merchantDevice",
            "type": "MerchantDevice"
        },
        {
            "name": "paymentDetailsSource",
            "baseName": "paymentDetailsSource",
            "type": "CommonField"
        },
        {
            "name": "shopperInteractionDevice",
            "baseName": "shopperInteractionDevice",
            "type": "ShopperInteractionDevice"
        }
    ];
    return ApplicationInfo;
}());
exports.ApplicationInfo = ApplicationInfo;
//# sourceMappingURL=applicationInfo.js.map