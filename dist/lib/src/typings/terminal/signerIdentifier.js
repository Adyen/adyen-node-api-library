"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignerIdentifier = void 0;
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
exports.SignerIdentifier = SignerIdentifier;
//# sourceMappingURL=signerIdentifier.js.map