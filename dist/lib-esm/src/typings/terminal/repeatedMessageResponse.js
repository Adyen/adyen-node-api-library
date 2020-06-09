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
export { RepeatedMessageResponse };
//# sourceMappingURL=repeatedMessageResponse.js.map