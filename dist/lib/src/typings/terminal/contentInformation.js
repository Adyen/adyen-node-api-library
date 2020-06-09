"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentInformation = void 0;
var ContentInformation = (function () {
    function ContentInformation() {
    }
    ContentInformation.getAttributeTypeMap = function () {
        return ContentInformation.attributeTypeMap;
    };
    ContentInformation.discriminator = undefined;
    ContentInformation.attributeTypeMap = [
        {
            "name": "authenticatedData",
            "baseName": "AuthenticatedData",
            "type": "AuthenticatedData"
        },
        {
            "name": "contentType",
            "baseName": "ContentType",
            "type": "ContentType"
        },
        {
            "name": "digestedData",
            "baseName": "DigestedData",
            "type": "DigestedData"
        },
        {
            "name": "envelopedData",
            "baseName": "EnvelopedData",
            "type": "EnvelopedData"
        },
        {
            "name": "namedKeyEncryptedData",
            "baseName": "NamedKeyEncryptedData",
            "type": "NamedKeyEncryptedData"
        },
        {
            "name": "signedData",
            "baseName": "SignedData",
            "type": "SignedData"
        }
    ];
    return ContentInformation;
}());
exports.ContentInformation = ContentInformation;
//# sourceMappingURL=contentInformation.js.map