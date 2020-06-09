"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalApiSecuredResponse = void 0;
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
exports.TerminalApiSecuredResponse = TerminalApiSecuredResponse;
//# sourceMappingURL=terminalApiSecuredResponse.js.map