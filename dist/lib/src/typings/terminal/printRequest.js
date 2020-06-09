"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintRequest = void 0;
var PrintRequest = (function () {
    function PrintRequest() {
    }
    PrintRequest.getAttributeTypeMap = function () {
        return PrintRequest.attributeTypeMap;
    };
    PrintRequest.discriminator = undefined;
    PrintRequest.attributeTypeMap = [
        {
            "name": "printOutput",
            "baseName": "PrintOutput",
            "type": "PrintOutput"
        }
    ];
    return PrintRequest;
}());
exports.PrintRequest = PrintRequest;
//# sourceMappingURL=printRequest.js.map