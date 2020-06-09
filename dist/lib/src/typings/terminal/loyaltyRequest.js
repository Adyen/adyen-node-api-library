"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyRequest = void 0;
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
exports.LoyaltyRequest = LoyaltyRequest;
//# sourceMappingURL=loyaltyRequest.js.map