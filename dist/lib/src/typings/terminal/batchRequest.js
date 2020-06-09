"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchRequest = void 0;
var BatchRequest = (function () {
    function BatchRequest() {
    }
    BatchRequest.getAttributeTypeMap = function () {
        return BatchRequest.attributeTypeMap;
    };
    BatchRequest.discriminator = undefined;
    BatchRequest.attributeTypeMap = [
        {
            "name": "removeAllFlag",
            "baseName": "RemoveAllFlag",
            "type": "boolean"
        },
        {
            "name": "transactionToPerform",
            "baseName": "TransactionToPerform",
            "type": "Array<TransactionToPerform>"
        }
    ];
    return BatchRequest;
}());
exports.BatchRequest = BatchRequest;
//# sourceMappingURL=batchRequest.js.map