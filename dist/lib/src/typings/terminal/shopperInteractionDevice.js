"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopperInteractionDevice = void 0;
var ShopperInteractionDevice = (function () {
    function ShopperInteractionDevice() {
    }
    ShopperInteractionDevice.getAttributeTypeMap = function () {
        return ShopperInteractionDevice.attributeTypeMap;
    };
    ShopperInteractionDevice.discriminator = undefined;
    ShopperInteractionDevice.attributeTypeMap = [
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
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        }
    ];
    return ShopperInteractionDevice;
}());
exports.ShopperInteractionDevice = ShopperInteractionDevice;
//# sourceMappingURL=shopperInteractionDevice.js.map