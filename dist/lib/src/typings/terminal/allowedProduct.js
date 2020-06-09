"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowedProduct = void 0;
var AllowedProduct = (function () {
    function AllowedProduct() {
    }
    AllowedProduct.getAttributeTypeMap = function () {
        return AllowedProduct.attributeTypeMap;
    };
    AllowedProduct.discriminator = undefined;
    AllowedProduct.attributeTypeMap = [
        {
            "name": "additionalProductInfo",
            "baseName": "AdditionalProductInfo",
            "type": "string"
        },
        {
            "name": "eanUpc",
            "baseName": "EanUpc",
            "type": "string"
        },
        {
            "name": "productCode",
            "baseName": "ProductCode",
            "type": "string"
        },
        {
            "name": "productLabel",
            "baseName": "ProductLabel",
            "type": "string"
        }
    ];
    return AllowedProduct;
}());
exports.AllowedProduct = AllowedProduct;
//# sourceMappingURL=allowedProduct.js.map