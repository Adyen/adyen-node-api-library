var Signer = (function () {
    function Signer() {
    }
    Signer.getAttributeTypeMap = function () {
        return Signer.attributeTypeMap;
    };
    Signer.discriminator = undefined;
    Signer.attributeTypeMap = [
        {
            "name": "digestAlgorithm",
            "baseName": "DigestAlgorithm",
            "type": "AlgorithmIdentifier"
        },
        {
            "name": "signature",
            "baseName": "Signature",
            "type": "AnyType"
        },
        {
            "name": "signatureAlgorithm",
            "baseName": "SignatureAlgorithm",
            "type": "AlgorithmIdentifier"
        },
        {
            "name": "signerIdentifier",
            "baseName": "SignerIdentifier",
            "type": "SignerIdentifier"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "Signer.VersionEnum"
        }
    ];
    return Signer;
}());
export { Signer };
(function (Signer) {
    var VersionEnum;
    (function (VersionEnum) {
        VersionEnum[VersionEnum["V0"] = 'V0'] = "V0";
        VersionEnum[VersionEnum["V1"] = 'V1'] = "V1";
        VersionEnum[VersionEnum["V2"] = 'V2'] = "V2";
        VersionEnum[VersionEnum["V3"] = 'V3'] = "V3";
        VersionEnum[VersionEnum["V4"] = 'V4'] = "V4";
        VersionEnum[VersionEnum["V5"] = 'V5'] = "V5";
    })(VersionEnum = Signer.VersionEnum || (Signer.VersionEnum = {}));
})(Signer || (Signer = {}));
//# sourceMappingURL=signer.js.map