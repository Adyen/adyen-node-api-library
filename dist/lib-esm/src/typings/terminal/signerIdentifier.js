var SignerIdentifier = (function () {
    function SignerIdentifier() {
    }
    SignerIdentifier.getAttributeTypeMap = function () {
        return SignerIdentifier.attributeTypeMap;
    };
    SignerIdentifier.discriminator = undefined;
    SignerIdentifier.attributeTypeMap = [
        {
            "name": "issuerAndSerialNumber",
            "baseName": "IssuerAndSerialNumber",
            "type": "IssuerAndSerialNumber"
        }
    ];
    return SignerIdentifier;
}());
export { SignerIdentifier };
//# sourceMappingURL=signerIdentifier.js.map