"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedData = void 0;
var SignedData = (function () {
    function SignedData() {
    }
    SignedData.getAttributeTypeMap = function () {
        return SignedData.attributeTypeMap;
    };
    SignedData.discriminator = undefined;
    SignedData.attributeTypeMap = [
        {
            "name": "certificate",
            "baseName": "Certificate",
            "type": "Array<AnyType>"
        },
        {
            "name": "digestAlgorithm",
            "baseName": "DigestAlgorithm",
            "type": "Array<AlgorithmIdentifier>"
        },
        {
            "name": "encapsulatedContent",
            "baseName": "EncapsulatedContent",
            "type": "EncapsulatedContent"
        },
        {
            "name": "signer",
            "baseName": "Signer",
            "type": "Array<Signer>"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "SignedData.VersionEnum"
        }
    ];
    return SignedData;
}());
exports.SignedData = SignedData;
(function (SignedData) {
    var VersionEnum;
    (function (VersionEnum) {
        VersionEnum[VersionEnum["V0"] = 'V0'] = "V0";
        VersionEnum[VersionEnum["V1"] = 'V1'] = "V1";
        VersionEnum[VersionEnum["V2"] = 'V2'] = "V2";
        VersionEnum[VersionEnum["V3"] = 'V3'] = "V3";
        VersionEnum[VersionEnum["V4"] = 'V4'] = "V4";
        VersionEnum[VersionEnum["V5"] = 'V5'] = "V5";
    })(VersionEnum = SignedData.VersionEnum || (SignedData.VersionEnum = {}));
})(SignedData = exports.SignedData || (exports.SignedData = {}));
exports.SignedData = SignedData;
//# sourceMappingURL=signedData.js.map