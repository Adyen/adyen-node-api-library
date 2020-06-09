var Parameter = (function () {
    function Parameter() {
    }
    Parameter.getAttributeTypeMap = function () {
        return Parameter.attributeTypeMap;
    };
    Parameter.discriminator = undefined;
    Parameter.attributeTypeMap = [
        {
            "name": "initialisationVector",
            "baseName": "InitialisationVector",
            "type": "AnyType"
        }
    ];
    return Parameter;
}());
export { Parameter };
//# sourceMappingURL=parameter.js.map