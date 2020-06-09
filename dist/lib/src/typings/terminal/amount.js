"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amount = void 0;
var Amount = (function () {
    function Amount() {
    }
    Amount.getAttributeTypeMap = function () {
        return Amount.attributeTypeMap;
    };
    Amount.discriminator = undefined;
    Amount.attributeTypeMap = [
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "number"
        }
    ];
    return Amount;
}());
exports.Amount = Amount;
//# sourceMappingURL=amount.js.map