var TransactionStatusResponse = (function () {
    function TransactionStatusResponse() {
    }
    TransactionStatusResponse.getAttributeTypeMap = function () {
        return TransactionStatusResponse.attributeTypeMap;
    };
    TransactionStatusResponse.discriminator = undefined;
    TransactionStatusResponse.attributeTypeMap = [
        {
            "name": "messageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        },
        {
            "name": "repeatedMessageResponse",
            "baseName": "RepeatedMessageResponse",
            "type": "RepeatedMessageResponse"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return TransactionStatusResponse;
}());
export { TransactionStatusResponse };
//# sourceMappingURL=transactionStatusResponse.js.map