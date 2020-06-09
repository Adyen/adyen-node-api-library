var CapturedSignature = (function () {
    function CapturedSignature() {
    }
    CapturedSignature.getAttributeTypeMap = function () {
        return CapturedSignature.attributeTypeMap;
    };
    CapturedSignature.discriminator = undefined;
    CapturedSignature.attributeTypeMap = [
        {
            "name": "areaSize",
            "baseName": "AreaSize",
            "type": "AreaSize"
        },
        {
            "name": "signaturePoint",
            "baseName": "SignaturePoint",
            "type": "Array<SignaturePoint>"
        }
    ];
    return CapturedSignature;
}());
export { CapturedSignature };
//# sourceMappingURL=capturedSignature.js.map