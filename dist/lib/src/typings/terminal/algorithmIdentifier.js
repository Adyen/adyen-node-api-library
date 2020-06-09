"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgorithmIdentifier = void 0;
var AlgorithmIdentifier = (function () {
    function AlgorithmIdentifier() {
    }
    AlgorithmIdentifier.getAttributeTypeMap = function () {
        return AlgorithmIdentifier.attributeTypeMap;
    };
    AlgorithmIdentifier.discriminator = undefined;
    AlgorithmIdentifier.attributeTypeMap = [
        {
            "name": "algorithm",
            "baseName": "Algorithm",
            "type": "AlgorithmType"
        },
        {
            "name": "parameter",
            "baseName": "Parameter",
            "type": "Parameter"
        }
    ];
    return AlgorithmIdentifier;
}());
exports.AlgorithmIdentifier = AlgorithmIdentifier;
//# sourceMappingURL=algorithmIdentifier.js.map