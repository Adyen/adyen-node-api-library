"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalApiRequest = void 0;
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
exports.TerminalApiRequest = TerminalApiRequest;
//# sourceMappingURL=terminalApiRequest.js.map