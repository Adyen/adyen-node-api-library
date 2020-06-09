"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatedData = void 0;
var AuthenticatedData = (function () {
    function AuthenticatedData() {
    }
    AuthenticatedData.getAttributeTypeMap = function () {
        return AuthenticatedData.attributeTypeMap;
    };
    AuthenticatedData.discriminator = undefined;
    AuthenticatedData.attributeTypeMap = [
        {
            "name": "encapsulatedContent",
            "baseName": "EncapsulatedContent",
            "type": "EncapsulatedContent"
        },
        {
            "name": "keyTransportOrKEK",
            "baseName": "KeyTransportOrKEK",
            "type": "Array<AnyType>"
        },
        {
            "name": "mAC",
            "baseName": "MAC",
            "type": "AnyType"
        },
        {
            "name": "mACAlgorithm",
            "baseName": "MACAlgorithm",
            "type": "AlgorithmIdentifier"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "AuthenticatedData.VersionEnum"
        }
    ];
    return AuthenticatedData;
}());
exports.AuthenticatedData = AuthenticatedData;
(function (AuthenticatedData) {
    var VersionEnum;
    (function (VersionEnum) {
        VersionEnum[VersionEnum["V0"] = 'V0'] = "V0";
        VersionEnum[VersionEnum["V1"] = 'V1'] = "V1";
        VersionEnum[VersionEnum["V2"] = 'V2'] = "V2";
        VersionEnum[VersionEnum["V3"] = 'V3'] = "V3";
        VersionEnum[VersionEnum["V4"] = 'V4'] = "V4";
        VersionEnum[VersionEnum["V5"] = 'V5'] = "V5";
    })(VersionEnum = AuthenticatedData.VersionEnum || (AuthenticatedData.VersionEnum = {}));
})(AuthenticatedData = exports.AuthenticatedData || (exports.AuthenticatedData = {}));
exports.AuthenticatedData = AuthenticatedData;
//# sourceMappingURL=authenticatedData.js.map