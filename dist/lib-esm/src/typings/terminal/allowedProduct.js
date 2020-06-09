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
export { AllowedProduct };
//# sourceMappingURL=allowedProduct.js.map