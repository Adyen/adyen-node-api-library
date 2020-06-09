"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyAccountReq = void 0;
var LoyaltyAccountReq = (function () {
    function LoyaltyAccountReq() {
    }
    LoyaltyAccountReq.getAttributeTypeMap = function () {
        return LoyaltyAccountReq.attributeTypeMap;
    };
    LoyaltyAccountReq.discriminator = undefined;
    LoyaltyAccountReq.attributeTypeMap = [
        {
            "name": "cardAcquisitionReference",
            "baseName": "CardAcquisitionReference",
            "type": "TransactionIdentification"
        },
        {
            "name": "loyaltyAccountID",
            "baseName": "LoyaltyAccountID",
            "type": "LoyaltyAccountId"
        }
    ];
    return LoyaltyAccountReq;
}());
exports.LoyaltyAccountReq = LoyaltyAccountReq;
//# sourceMappingURL=loyaltyAccountReq.js.map