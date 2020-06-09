"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionIdentification = void 0;
var TransactionIdentification = (function () {
    function TransactionIdentification() {
    }
    TransactionIdentification.getAttributeTypeMap = function () {
        return TransactionIdentification.attributeTypeMap;
    };
    TransactionIdentification.discriminator = undefined;
    TransactionIdentification.attributeTypeMap = [
        {
            "name": "timeStamp",
            "baseName": "TimeStamp",
            "type": "string"
        },
        {
            "name": "transactionID",
            "baseName": "TransactionID",
            "type": "string"
        }
    ];
    return TransactionIdentification;
}());
exports.TransactionIdentification = TransactionIdentification;
//# sourceMappingURL=transactionIdentification.js.map