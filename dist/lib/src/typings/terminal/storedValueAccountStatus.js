"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoredValueAccountStatus = void 0;
var StoredValueAccountStatus = (function () {
    function StoredValueAccountStatus() {
    }
    StoredValueAccountStatus.getAttributeTypeMap = function () {
        return StoredValueAccountStatus.attributeTypeMap;
    };
    StoredValueAccountStatus.discriminator = undefined;
    StoredValueAccountStatus.attributeTypeMap = [
        {
            "name": "currentBalance",
            "baseName": "CurrentBalance",
            "type": "number"
        },
        {
            "name": "storedValueAccountID",
            "baseName": "StoredValueAccountID",
            "type": "StoredValueAccountId"
        }
    ];
    return StoredValueAccountStatus;
}());
exports.StoredValueAccountStatus = StoredValueAccountStatus;
//# sourceMappingURL=storedValueAccountStatus.js.map