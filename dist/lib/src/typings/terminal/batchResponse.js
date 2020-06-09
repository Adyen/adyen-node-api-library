"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchResponse = void 0;
var BatchResponse = (function () {
    function BatchResponse() {
    }
    BatchResponse.getAttributeTypeMap = function () {
        return BatchResponse.attributeTypeMap;
    };
    BatchResponse.discriminator = undefined;
    BatchResponse.attributeTypeMap = [
        {
            "name": "performedTransaction",
            "baseName": "PerformedTransaction",
            "type": "Array<PerformedTransaction>"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return BatchResponse;
}());
exports.BatchResponse = BatchResponse;
//# sourceMappingURL=batchResponse.js.map