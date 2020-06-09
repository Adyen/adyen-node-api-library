"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoredValueResult = void 0;
var StoredValueResult = (function () {
    function StoredValueResult() {
    }
    StoredValueResult.getAttributeTypeMap = function () {
        return StoredValueResult.attributeTypeMap;
    };
    StoredValueResult.discriminator = undefined;
    StoredValueResult.attributeTypeMap = [
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "eanUpc",
            "baseName": "EanUpc",
            "type": "string"
        },
        {
            "name": "hostTransactionID",
            "baseName": "HostTransactionID",
            "type": "TransactionIdentification"
        },
        {
            "name": "itemAmount",
            "baseName": "ItemAmount",
            "type": "number"
        },
        {
            "name": "productCode",
            "baseName": "ProductCode",
            "type": "string"
        },
        {
            "name": "storedValueAccountStatus",
            "baseName": "StoredValueAccountStatus",
            "type": "StoredValueAccountStatus"
        },
        {
            "name": "storedValueTransactionType",
            "baseName": "StoredValueTransactionType",
            "type": "StoredValueTransactionType"
        }
    ];
    return StoredValueResult;
}());
exports.StoredValueResult = StoredValueResult;
//# sourceMappingURL=storedValueResult.js.map