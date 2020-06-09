var AbortRequest = (function () {
    function AbortRequest() {
    }
    AbortRequest.getAttributeTypeMap = function () {
        return AbortRequest.attributeTypeMap;
    };
    AbortRequest.discriminator = undefined;
    AbortRequest.attributeTypeMap = [
        {
            "name": "abortReason",
            "baseName": "AbortReason",
            "type": "string"
        },
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "messageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        }
    ];
    return AbortRequest;
}());
export { AbortRequest };
//# sourceMappingURL=abortRequest.js.map