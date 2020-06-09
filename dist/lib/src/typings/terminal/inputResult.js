"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputResult = void 0;
var InputResult = (function () {
    function InputResult() {
    }
    InputResult.getAttributeTypeMap = function () {
        return InputResult.attributeTypeMap;
    };
    InputResult.discriminator = undefined;
    InputResult.attributeTypeMap = [
        {
            "name": "device",
            "baseName": "Device",
            "type": "DeviceType"
        },
        {
            "name": "infoQualify",
            "baseName": "InfoQualify",
            "type": "InfoQualifyType"
        },
        {
            "name": "input",
            "baseName": "Input",
            "type": "Input"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return InputResult;
}());
exports.InputResult = InputResult;
//# sourceMappingURL=inputResult.js.map