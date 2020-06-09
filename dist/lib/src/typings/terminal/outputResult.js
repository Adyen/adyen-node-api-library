"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputResult = void 0;
var OutputResult = (function () {
    function OutputResult() {
    }
    OutputResult.getAttributeTypeMap = function () {
        return OutputResult.attributeTypeMap;
    };
    OutputResult.discriminator = undefined;
    OutputResult.attributeTypeMap = [
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
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return OutputResult;
}());
exports.OutputResult = OutputResult;
//# sourceMappingURL=outputResult.js.map