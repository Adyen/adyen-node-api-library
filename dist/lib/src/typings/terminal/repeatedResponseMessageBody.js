"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepeatedResponseMessageBody = void 0;
var RepeatedResponseMessageBody = (function () {
    function RepeatedResponseMessageBody() {
    }
    RepeatedResponseMessageBody.getAttributeTypeMap = function () {
        return RepeatedResponseMessageBody.attributeTypeMap;
    };
    RepeatedResponseMessageBody.discriminator = undefined;
    RepeatedResponseMessageBody.attributeTypeMap = [
        {
            "name": "cardAcquisitionResponse",
            "baseName": "CardAcquisitionResponse",
            "type": "CardAcquisitionResponse"
        },
        {
            "name": "cardReaderAPDUResponse",
            "baseName": "CardReaderAPDUResponse",
            "type": "CardReaderAPDUResponse"
        },
        {
            "name": "loyaltyResponse",
            "baseName": "LoyaltyResponse",
            "type": "LoyaltyResponse"
        },
        {
            "name": "paymentResponse",
            "baseName": "PaymentResponse",
            "type": "PaymentResponse"
        },
        {
            "name": "reversalResponse",
            "baseName": "ReversalResponse",
            "type": "ReversalResponse"
        },
        {
            "name": "storedValueResponse",
            "baseName": "StoredValueResponse",
            "type": "StoredValueResponse"
        }
    ];
    return RepeatedResponseMessageBody;
}());
exports.RepeatedResponseMessageBody = RepeatedResponseMessageBody;
//# sourceMappingURL=repeatedResponseMessageBody.js.map