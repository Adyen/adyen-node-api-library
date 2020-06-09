"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintResponse = void 0;
var PrintResponse = (function () {
    function PrintResponse() {
    }
    PrintResponse.getAttributeTypeMap = function () {
        return PrintResponse.attributeTypeMap;
    };
    PrintResponse.discriminator = undefined;
    PrintResponse.attributeTypeMap = [
        {
            "name": "documentQualifier",
            "baseName": "DocumentQualifier",
            "type": "DocumentQualifierType"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return PrintResponse;
}());
exports.PrintResponse = PrintResponse;
//# sourceMappingURL=printResponse.js.map