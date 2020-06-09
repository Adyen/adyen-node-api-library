"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStatusResponse = void 0;
var TransactionStatusResponse = (function () {
    function TransactionStatusResponse() {
    }
    TransactionStatusResponse.getAttributeTypeMap = function () {
        return TransactionStatusResponse.attributeTypeMap;
    };
    TransactionStatusResponse.discriminator = undefined;
    TransactionStatusResponse.attributeTypeMap = [
        {
            "name": "messageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        },
        {
            "name": "repeatedMessageResponse",
            "baseName": "RepeatedMessageResponse",
            "type": "RepeatedMessageResponse"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return TransactionStatusResponse;
}());
exports.TransactionStatusResponse = TransactionStatusResponse;
//# sourceMappingURL=transactionStatusResponse.js.map