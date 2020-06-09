var EnvelopedData = (function () {
    function EnvelopedData() {
    }
    EnvelopedData.getAttributeTypeMap = function () {
        return EnvelopedData.attributeTypeMap;
    };
    EnvelopedData.discriminator = undefined;
    EnvelopedData.attributeTypeMap = [
        {
            "name": "encryptedContent",
            "baseName": "EncryptedContent",
            "type": "EncryptedContent"
        },
        {
            "name": "keyTransportOrKEK",
            "baseName": "KeyTransportOrKEK",
            "type": "Array<AnyType>"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "EnvelopedData.VersionEnum"
        }
    ];
    return EnvelopedData;
}());
export { EnvelopedData };
(function (EnvelopedData) {
    var VersionEnum;
    (function (VersionEnum) {
        VersionEnum[VersionEnum["V0"] = 'V0'] = "V0";
        VersionEnum[VersionEnum["V1"] = 'V1'] = "V1";
        VersionEnum[VersionEnum["V2"] = 'V2'] = "V2";
        VersionEnum[VersionEnum["V3"] = 'V3'] = "V3";
        VersionEnum[VersionEnum["V4"] = 'V4'] = "V4";
        VersionEnum[VersionEnum["V5"] = 'V5'] = "V5";
    })(VersionEnum = EnvelopedData.VersionEnum || (EnvelopedData.VersionEnum = {}));
})(EnvelopedData || (EnvelopedData = {}));
//# sourceMappingURL=envelopedData.js.map