"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReconciliationRequest = void 0;
var ReconciliationRequest = (function () {
    function ReconciliationRequest() {
    }
    ReconciliationRequest.getAttributeTypeMap = function () {
        return ReconciliationRequest.attributeTypeMap;
    };
    ReconciliationRequest.discriminator = undefined;
    ReconciliationRequest.attributeTypeMap = [
        {
            "name": "acquirerID",
            "baseName": "AcquirerID",
            "type": "Array<string>"
        },
        {
            "name": "pOIReconciliationID",
            "baseName": "POIReconciliationID",
            "type": "string"
        },
        {
            "name": "reconciliationType",
            "baseName": "ReconciliationType",
            "type": "ReconciliationType"
        }
    ];
    return ReconciliationRequest;
}());
exports.ReconciliationRequest = ReconciliationRequest;
//# sourceMappingURL=reconciliationRequest.js.map