"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedKeyEncryptedData = void 0;
var NamedKeyEncryptedData = (function () {
    function NamedKeyEncryptedData() {
    }
    NamedKeyEncryptedData.getAttributeTypeMap = function () {
        return NamedKeyEncryptedData.attributeTypeMap;
    };
    NamedKeyEncryptedData.discriminator = undefined;
    NamedKeyEncryptedData.attributeTypeMap = [
        {
            "name": "encryptedContent",
            "baseName": "EncryptedContent",
            "type": "EncryptedContent"
        },
        {
            "name": "keyName",
            "baseName": "KeyName",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "NamedKeyEncryptedData.VersionEnum"
        }
    ];
    return NamedKeyEncryptedData;
}());
exports.NamedKeyEncryptedData = NamedKeyEncryptedData;
(function (NamedKeyEncryptedData) {
    var VersionEnum;
    (function (VersionEnum) {
        VersionEnum[VersionEnum["V0"] = 'V0'] = "V0";
        VersionEnum[VersionEnum["V1"] = 'V1'] = "V1";
        VersionEnum[VersionEnum["V2"] = 'V2'] = "V2";
        VersionEnum[VersionEnum["V3"] = 'V3'] = "V3";
        VersionEnum[VersionEnum["V4"] = 'V4'] = "V4";
        VersionEnum[VersionEnum["V5"] = 'V5'] = "V5";
    })(VersionEnum = NamedKeyEncryptedData.VersionEnum || (NamedKeyEncryptedData.VersionEnum = {}));
})(NamedKeyEncryptedData = exports.NamedKeyEncryptedData || (exports.NamedKeyEncryptedData = {}));
exports.NamedKeyEncryptedData = NamedKeyEncryptedData;
//# sourceMappingURL=namedKeyEncryptedData.js.map