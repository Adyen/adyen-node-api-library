var DisplayRequest = (function () {
    function DisplayRequest() {
    }
    DisplayRequest.getAttributeTypeMap = function () {
        return DisplayRequest.attributeTypeMap;
    };
    DisplayRequest.discriminator = undefined;
    DisplayRequest.attributeTypeMap = [
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "Array<DisplayOutput>"
        }
    ];
    return DisplayRequest;
}());
export { DisplayRequest };
//# sourceMappingURL=displayRequest.js.map