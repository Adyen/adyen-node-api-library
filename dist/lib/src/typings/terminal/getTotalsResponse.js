"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTotalsResponse = void 0;
var GetTotalsResponse = (function () {
    function GetTotalsResponse() {
    }
    GetTotalsResponse.getAttributeTypeMap = function () {
        return GetTotalsResponse.attributeTypeMap;
    };
    GetTotalsResponse.discriminator = undefined;
    GetTotalsResponse.attributeTypeMap = [
        {
            "name": "pOIReconciliationID",
            "baseName": "POIReconciliationID",
            "type": "string"
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
    return GetTotalsResponse;
}());
exports.GetTotalsResponse = GetTotalsResponse;
//# sourceMappingURL=getTotalsResponse.js.map