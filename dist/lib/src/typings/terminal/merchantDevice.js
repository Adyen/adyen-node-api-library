"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantDevice = void 0;
var MerchantDevice = (function () {
    function MerchantDevice() {
    }
    MerchantDevice.getAttributeTypeMap = function () {
        return MerchantDevice.attributeTypeMap;
    };
    MerchantDevice.discriminator = undefined;
    MerchantDevice.attributeTypeMap = [
        {
            "name": "os",
            "baseName": "os",
            "type": "string"
        },
        {
            "name": "osVersion",
            "baseName": "osVersion",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }
    ];
    return MerchantDevice;
}());
exports.MerchantDevice = MerchantDevice;
//# sourceMappingURL=merchantDevice.js.map