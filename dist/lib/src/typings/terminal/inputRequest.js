"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputRequest = void 0;
var InputRequest = (function () {
    function InputRequest() {
    }
    InputRequest.getAttributeTypeMap = function () {
        return InputRequest.attributeTypeMap;
    };
    InputRequest.discriminator = undefined;
    InputRequest.attributeTypeMap = [
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "inputData",
            "baseName": "InputData",
            "type": "InputData"
        }
    ];
    return InputRequest;
}());
exports.InputRequest = InputRequest;
//# sourceMappingURL=inputRequest.js.map