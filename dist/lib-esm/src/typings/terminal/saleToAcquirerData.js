var SaleToAcquirerData = (function () {
    function SaleToAcquirerData() {
    }
    SaleToAcquirerData.getAttributeTypeMap = function () {
        return SaleToAcquirerData.attributeTypeMap;
    };
    SaleToAcquirerData.discriminator = undefined;
    SaleToAcquirerData.attributeTypeMap = [
        {
            "name": "applicationInfo",
            "baseName": "ApplicationInfo",
            "type": "{ [key: string]: AnyType; }"
        },
        {
            "name": "shopperEmail",
            "baseName": "ShopperEmail",
            "type": "string"
        },
        {
            "name": "shopperReference",
            "baseName": "ShopperReference",
            "type": "string"
        },
        {
            "name": "recurringContract",
            "baseName": "RecurringContract",
            "type": "string"
        },
        {
            "name": "shopperStatement",
            "baseName": "ShopperStatement",
            "type": "string"
        },
        {
            "name": "recurringDetailName",
            "baseName": "RecurringDetailName",
            "type": "string"
        },
        {
            "name": "store",
            "baseName": "Store",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "MerchantAccount",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "tenderOption",
            "baseName": "TenderOption",
            "type": "string"
        },
        {
            "name": "additionalData",
            "baseName": "AdditionalData",
            "type": "object"
        }
    ];
    return SaleToAcquirerData;
}());
export { SaleToAcquirerData };
//# sourceMappingURL=saleToAcquirerData.js.map