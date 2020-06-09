"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepeatedMessageResponse = void 0;
var RepeatedMessageResponse = (function () {
    function RepeatedMessageResponse() {
    }
    RepeatedMessageResponse.getAttributeTypeMap = function () {
        return RepeatedMessageResponse.attributeTypeMap;
    };
    RepeatedMessageResponse.discriminator = undefined;
    RepeatedMessageResponse.attributeTypeMap = [
        {
            "name": "messageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "repeatedResponseMessageBody",
            "baseName": "RepeatedResponseMessageBody",
            "type": "RepeatedResponseMessageBody"
        }
    ];
    return RepeatedMessageResponse;
}());
exports.RepeatedMessageResponse = RepeatedMessageResponse;
//# sourceMappingURL=repeatedMessageResponse.js.map