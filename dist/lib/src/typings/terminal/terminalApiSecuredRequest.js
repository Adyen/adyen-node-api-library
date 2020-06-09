"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalApiSecuredRequest = void 0;
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
exports.TerminalApiSecuredRequest = TerminalApiSecuredRequest;
//# sourceMappingURL=terminalApiSecuredRequest.js.map