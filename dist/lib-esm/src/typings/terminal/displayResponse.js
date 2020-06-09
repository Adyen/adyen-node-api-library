var DisplayResponse = (function () {
    function DisplayResponse() {
    }
    DisplayResponse.getAttributeTypeMap = function () {
        return DisplayResponse.attributeTypeMap;
    };
    DisplayResponse.discriminator = undefined;
    DisplayResponse.attributeTypeMap = [
        {
            "name": "outputResult",
            "baseName": "OutputResult",
            "type": "Array<OutputResult>"
        }
    ];
    return DisplayResponse;
}());
export { DisplayResponse };
//# sourceMappingURL=displayResponse.js.map