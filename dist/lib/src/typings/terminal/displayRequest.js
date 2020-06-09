"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayRequest = void 0;
var DisplayRequest = (function () {
    function DisplayRequest() {
    }
    DisplayRequest.getAttributeTypeMap = function () {
        return DisplayRequest.attributeTypeMap;
    };
    DisplayRequest.discriminator = undefined;
    DisplayRequest.attributeTypeMap = [
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "Array<DisplayOutput>"
        }
    ];
    return DisplayRequest;
}());
exports.DisplayRequest = DisplayRequest;
//# sourceMappingURL=displayRequest.js.map