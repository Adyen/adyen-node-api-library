"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReconciliationResponse = void 0;
var ReconciliationResponse = (function () {
    function ReconciliationResponse() {
    }
    ReconciliationResponse.getAttributeTypeMap = function () {
        return ReconciliationResponse.attributeTypeMap;
    };
    ReconciliationResponse.discriminator = undefined;
    ReconciliationResponse.attributeTypeMap = [
        {
            "name": "pOIReconciliationID",
            "baseName": "POIReconciliationID",
            "type": "string"
        },
        {
            "name": "reconciliationType",
            "baseName": "ReconciliationType",
            "type": "ReconciliationType"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "transactionTotals",
            "baseName": "TransactionTotals",
            "type": "Array<TransactionTotals>"
        }
    ];
    return ReconciliationResponse;
}());
exports.ReconciliationResponse = ReconciliationResponse;
//# sourceMappingURL=reconciliationResponse.js.map