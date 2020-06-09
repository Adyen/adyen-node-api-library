"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoredValueRequest = void 0;
var StoredValueRequest = (function () {
    function StoredValueRequest() {
    }
    StoredValueRequest.getAttributeTypeMap = function () {
        return StoredValueRequest.attributeTypeMap;
    };
    StoredValueRequest.discriminator = undefined;
    StoredValueRequest.attributeTypeMap = [
        {
            "name": "customerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "saleData",
            "baseName": "SaleData",
            "type": "SaleData"
        },
        {
            "name": "storedValueData",
            "baseName": "StoredValueData",
            "type": "Array<StoredValueData>"
        }
    ];
    return StoredValueRequest;
}());
exports.StoredValueRequest = StoredValueRequest;
//# sourceMappingURL=storedValueRequest.js.map