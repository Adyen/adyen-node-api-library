"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputResponse = void 0;
var InputResponse = (function () {
    function InputResponse() {
    }
    InputResponse.getAttributeTypeMap = function () {
        return InputResponse.attributeTypeMap;
    };
    InputResponse.discriminator = undefined;
    InputResponse.attributeTypeMap = [
        {
            "name": "inputResult",
            "baseName": "InputResult",
            "type": "InputResult"
        },
        {
            "name": "outputResult",
            "baseName": "OutputResult",
            "type": "OutputResult"
        }
    ];
    return InputResponse;
}());
exports.InputResponse = InputResponse;
//# sourceMappingURL=inputResponse.js.map