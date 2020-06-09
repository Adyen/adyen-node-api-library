var TerminalApiSecuredResponse = (function () {
    function TerminalApiSecuredResponse() {
    }
    TerminalApiSecuredResponse.getAttributeTypeMap = function () {
        return TerminalApiSecuredResponse.attributeTypeMap;
    };
    TerminalApiSecuredResponse.discriminator = undefined;
    TerminalApiSecuredResponse.attributeTypeMap = [
        {
            "name": "saleToPOIResponse",
            "baseName": "SaleToPOIResponse",
            "type": "SaleToPOISecuredMessage"
        }
    ];
    return TerminalApiSecuredResponse;
}());
export { TerminalApiSecuredResponse };
//# sourceMappingURL=terminalApiSecuredResponse.js.map