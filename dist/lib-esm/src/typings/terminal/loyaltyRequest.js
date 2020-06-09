var LoyaltyRequest = (function () {
    function LoyaltyRequest() {
    }
    LoyaltyRequest.getAttributeTypeMap = function () {
        return LoyaltyRequest.attributeTypeMap;
    };
    LoyaltyRequest.discriminator = undefined;
    LoyaltyRequest.attributeTypeMap = [
        {
            "name": "loyaltyData",
            "baseName": "LoyaltyData",
            "type": "Array<LoyaltyData>"
        },
        {
            "name": "loyaltyTransaction",
            "baseName": "LoyaltyTransaction",
            "type": "LoyaltyTransaction"
        },
        {
            "name": "saleData",
            "baseName": "SaleData",
            "type": "SaleData"
        }
    ];
    return LoyaltyRequest;
}());
export { LoyaltyRequest };
//# sourceMappingURL=loyaltyRequest.js.map