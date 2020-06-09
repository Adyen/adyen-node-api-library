"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReversalRequest = void 0;
var ReversalRequest = (function () {
    function ReversalRequest() {
    }
    ReversalRequest.getAttributeTypeMap = function () {
        return ReversalRequest.attributeTypeMap;
    };
    ReversalRequest.discriminator = undefined;
    ReversalRequest.attributeTypeMap = [
        {
            "name": "customerOrderID",
            "baseName": "CustomerOrderID",
            "type": "CustomerOrder"
        },
        {
            "name": "originalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "reversalReason",
            "baseName": "ReversalReason",
            "type": "ReversalReasonType"
        },
        {
            "name": "reversedAmount",
            "baseName": "ReversedAmount",
            "type": "number"
        },
        {
            "name": "saleReferenceID",
            "baseName": "SaleReferenceID",
            "type": "string"
        }
    ];
    return ReversalRequest;
}());
exports.ReversalRequest = ReversalRequest;
//# sourceMappingURL=reversalRequest.js.map