var UTMCoordinates = (function () {
    function UTMCoordinates() {
    }
    UTMCoordinates.getAttributeTypeMap = function () {
        return UTMCoordinates.attributeTypeMap;
    };
    UTMCoordinates.discriminator = undefined;
    UTMCoordinates.attributeTypeMap = [
        {
            "name": "uTMEastward",
            "baseName": "UTMEastward",
            "type": "string"
        },
        {
            "name": "uTMNorthward",
            "baseName": "UTMNorthward",
            "type": "string"
        },
        {
            "name": "uTMZone",
            "baseName": "UTMZone",
            "type": "string"
        }
    ];
    return UTMCoordinates;
}());
export { UTMCoordinates };
//# sourceMappingURL=uTMCoordinates.js.map