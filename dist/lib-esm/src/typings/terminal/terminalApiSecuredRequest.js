var TerminalApiSecuredRequest = (function () {
    function TerminalApiSecuredRequest() {
    }
    TerminalApiSecuredRequest.getAttributeTypeMap = function () {
        return TerminalApiSecuredRequest.attributeTypeMap;
    };
    TerminalApiSecuredRequest.discriminator = undefined;
    TerminalApiSecuredRequest.attributeTypeMap = [
        {
            "name": "saleToPOIRequest",
            "baseName": "SaleToPOIRequest",
            "type": "SaleToPOISecuredMessage"
        }
    ];
    return TerminalApiSecuredRequest;
}());
export { TerminalApiSecuredRequest };
//# sourceMappingURL=terminalApiSecuredRequest.js.map