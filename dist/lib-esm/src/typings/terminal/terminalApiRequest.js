var TerminalApiRequest = (function () {
    function TerminalApiRequest() {
    }
    TerminalApiRequest.getAttributeTypeMap = function () {
        return TerminalApiRequest.attributeTypeMap;
    };
    TerminalApiRequest.discriminator = undefined;
    TerminalApiRequest.attributeTypeMap = [
        {
            "name": "saleToPOIRequest",
            "baseName": "SaleToPOIRequest",
            "type": "SaleToPOIRequest"
        }
    ];
    return TerminalApiRequest;
}());
export { TerminalApiRequest };
//# sourceMappingURL=terminalApiRequest.js.map