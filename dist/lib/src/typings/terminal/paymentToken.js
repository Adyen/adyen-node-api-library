"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentToken = void 0;
var PaymentToken = (function () {
    function PaymentToken() {
    }
    PaymentToken.getAttributeTypeMap = function () {
        return PaymentToken.attributeTypeMap;
    };
    PaymentToken.discriminator = undefined;
    PaymentToken.attributeTypeMap = [
        {
            "name": "expiryDateTime",
            "baseName": "ExpiryDateTime",
            "type": "{ [key: string]: AnyType; }"
        },
        {
            "name": "tokenRequestedType",
            "baseName": "TokenRequestedType",
            "type": "TokenRequestedType"
        },
        {
            "name": "tokenValue",
            "baseName": "TokenValue",
            "type": "string"
        }
    ];
    return PaymentToken;
}());
exports.PaymentToken = PaymentToken;
//# sourceMappingURL=paymentToken.js.map