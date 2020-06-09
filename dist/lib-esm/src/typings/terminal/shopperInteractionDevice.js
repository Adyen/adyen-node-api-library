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
export { ShopperInteractionDevice };
//# sourceMappingURL=shopperInteractionDevice.js.map