"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigestedData = void 0;
var DigestedData = (function () {
    function DigestedData() {
    }
    DigestedData.getAttributeTypeMap = function () {
        return DigestedData.attributeTypeMap;
    };
    DigestedData.discriminator = undefined;
    DigestedData.attributeTypeMap = [
        {
            "name": "digest",
            "baseName": "Digest",
            "type": "AnyType"
        },
        {
            "name": "digestAlgorithm",
            "baseName": "DigestAlgorithm",
            "type": "AlgorithmIdentifier"
        },
        {
            "name": "encapsulatedContent",
            "baseName": "EncapsulatedContent",
            "type": "EncapsulatedContent"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "DigestedData.VersionEnum"
        }
    ];
    return DigestedData;
}());
exports.DigestedData = DigestedData;
(function (DigestedData) {
    var VersionEnum;
    (function (VersionEnum) {
        VersionEnum[VersionEnum["V0"] = 'V0'] = "V0";
        VersionEnum[VersionEnum["V1"] = 'V1'] = "V1";
        VersionEnum[VersionEnum["V2"] = 'V2'] = "V2";
        VersionEnum[VersionEnum["V3"] = 'V3'] = "V3";
        VersionEnum[VersionEnum["V4"] = 'V4'] = "V4";
        VersionEnum[VersionEnum["V5"] = 'V5'] = "V5";
    })(VersionEnum = DigestedData.VersionEnum || (DigestedData.VersionEnum = {}));
})(DigestedData = exports.DigestedData || (exports.DigestedData = {}));
exports.DigestedData = DigestedData;
//# sourceMappingURL=digestedData.js.map