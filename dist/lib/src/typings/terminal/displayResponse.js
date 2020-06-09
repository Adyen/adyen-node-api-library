"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayResponse = void 0;
var DisplayResponse = (function () {
    function DisplayResponse() {
    }
    DisplayResponse.getAttributeTypeMap = function () {
        return DisplayResponse.attributeTypeMap;
    };
    DisplayResponse.discriminator = undefined;
    DisplayResponse.attributeTypeMap = [
        {
            "name": "outputResult",
            "baseName": "OutputResult",
            "type": "Array<OutputResult>"
        }
    ];
    return DisplayResponse;
}());
exports.DisplayResponse = DisplayResponse;
//# sourceMappingURL=displayResponse.js.map