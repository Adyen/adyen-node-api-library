"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageHeader = void 0;
var MessageHeader = (function () {
    function MessageHeader() {
    }
    MessageHeader.getAttributeTypeMap = function () {
        return MessageHeader.attributeTypeMap;
    };
    MessageHeader.discriminator = undefined;
    MessageHeader.attributeTypeMap = [
        {
            "name": "deviceID",
            "baseName": "DeviceID",
            "type": "string"
        },
        {
            "name": "messageCategory",
            "baseName": "MessageCategory",
            "type": "MessageCategoryType"
        },
        {
            "name": "messageClass",
            "baseName": "MessageClass",
            "type": "MessageClassType"
        },
        {
            "name": "messageType",
            "baseName": "MessageType",
            "type": "MessageType"
        },
        {
            "name": "pOIID",
            "baseName": "POIID",
            "type": "string"
        },
        {
            "name": "protocolVersion",
            "baseName": "ProtocolVersion",
            "type": "string"
        },
        {
            "name": "saleID",
            "baseName": "SaleID",
            "type": "string"
        },
        {
            "name": "serviceID",
            "baseName": "ServiceID",
            "type": "string"
        }
    ];
    return MessageHeader;
}());
exports.MessageHeader = MessageHeader;
//# sourceMappingURL=messageHeader.js.map