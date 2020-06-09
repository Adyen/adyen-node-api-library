"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PINResponse = void 0;
var PINResponse = (function () {
    function PINResponse() {
    }
    PINResponse.getAttributeTypeMap = function () {
        return PINResponse.attributeTypeMap;
    };
    PINResponse.discriminator = undefined;
    PINResponse.attributeTypeMap = [
        {
            "name": "cardholderPIN",
            "baseName": "CardholderPIN",
            "type": "CardholderPIN"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return PINResponse;
}());
exports.PINResponse = PINResponse;
//# sourceMappingURL=pINResponse.js.map