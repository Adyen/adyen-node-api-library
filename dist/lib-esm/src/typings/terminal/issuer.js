var Issuer = (function () {
    function Issuer() {
    }
    Issuer.getAttributeTypeMap = function () {
        return Issuer.attributeTypeMap;
    };
    Issuer.discriminator = undefined;
    Issuer.attributeTypeMap = [
        {
            "name": "relativeDistinguishedName",
            "baseName": "RelativeDistinguishedName",
            "type": "Array<RelativeDistinguishedName>"
        }
    ];
    return Issuer;
}());
export { Issuer };
//# sourceMappingURL=issuer.js.map