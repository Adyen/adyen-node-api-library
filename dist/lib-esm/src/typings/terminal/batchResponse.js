var BatchResponse = (function () {
    function BatchResponse() {
    }
    BatchResponse.getAttributeTypeMap = function () {
        return BatchResponse.attributeTypeMap;
    };
    BatchResponse.discriminator = undefined;
    BatchResponse.attributeTypeMap = [
        {
            "name": "performedTransaction",
            "baseName": "PerformedTransaction",
            "type": "Array<PerformedTransaction>"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return BatchResponse;
}());
export { BatchResponse };
//# sourceMappingURL=batchResponse.js.map