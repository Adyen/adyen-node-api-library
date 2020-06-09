var SignaturePoint = (function () {
    function SignaturePoint() {
    }
    SignaturePoint.getAttributeTypeMap = function () {
        return SignaturePoint.attributeTypeMap;
    };
    SignaturePoint.discriminator = undefined;
    SignaturePoint.attributeTypeMap = [
        {
            "name": "x",
            "baseName": "X",
            "type": "string"
        },
        {
            "name": "y",
            "baseName": "Y",
            "type": "string"
        }
    ];
    return SignaturePoint;
}());
export { SignaturePoint };
//# sourceMappingURL=signaturePoint.js.map