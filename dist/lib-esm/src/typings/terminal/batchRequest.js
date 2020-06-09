var BatchRequest = (function () {
    function BatchRequest() {
    }
    BatchRequest.getAttributeTypeMap = function () {
        return BatchRequest.attributeTypeMap;
    };
    BatchRequest.discriminator = undefined;
    BatchRequest.attributeTypeMap = [
        {
            "name": "removeAllFlag",
            "baseName": "RemoveAllFlag",
            "type": "boolean"
        },
        {
            "name": "transactionToPerform",
            "baseName": "TransactionToPerform",
            "type": "Array<TransactionToPerform>"
        }
    ];
    return BatchRequest;
}());
export { BatchRequest };
//# sourceMappingURL=batchRequest.js.map