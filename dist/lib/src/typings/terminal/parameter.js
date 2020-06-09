"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameter = void 0;
var Parameter = (function () {
    function Parameter() {
    }
    Parameter.getAttributeTypeMap = function () {
        return Parameter.attributeTypeMap;
    };
    Parameter.discriminator = undefined;
    Parameter.attributeTypeMap = [
        {
            "name": "initialisationVector",
            "baseName": "InitialisationVector",
            "type": "AnyType"
        }
    ];
    return Parameter;
}());
exports.Parameter = Parameter;
//# sourceMappingURL=parameter.js.map