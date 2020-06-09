"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyAcquirerData = void 0;
var LoyaltyAcquirerData = (function () {
    function LoyaltyAcquirerData() {
    }
    LoyaltyAcquirerData.getAttributeTypeMap = function () {
        return LoyaltyAcquirerData.attributeTypeMap;
    };
    LoyaltyAcquirerData.discriminator = undefined;
    LoyaltyAcquirerData.attributeTypeMap = [
        {
            "name": "approvalCode",
            "baseName": "ApprovalCode",
            "type": "string"
        },
        {
            "name": "hostReconciliationID",
            "baseName": "HostReconciliationID",
            "type": "string"
        },
        {
            "name": "loyaltyAcquirerID",
            "baseName": "LoyaltyAcquirerID",
            "type": "string"
        },
        {
            "name": "loyaltyTransactionID",
            "baseName": "LoyaltyTransactionID",
            "type": "TransactionIdentification"
        }
    ];
    return LoyaltyAcquirerData;
}());
exports.LoyaltyAcquirerData = LoyaltyAcquirerData;
//# sourceMappingURL=loyaltyAcquirerData.js.map