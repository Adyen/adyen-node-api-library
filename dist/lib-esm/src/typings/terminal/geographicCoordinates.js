var GeographicCoordinates = (function () {
    function GeographicCoordinates() {
    }
    GeographicCoordinates.getAttributeTypeMap = function () {
        return GeographicCoordinates.attributeTypeMap;
    };
    GeographicCoordinates.discriminator = undefined;
    GeographicCoordinates.attributeTypeMap = [
        {
            "name": "latitude",
            "baseName": "Latitude",
            "type": "string"
        },
        {
            "name": "longitude",
            "baseName": "Longitude",
            "type": "string"
        }
    ];
    return GeographicCoordinates;
}());
export { GeographicCoordinates };
//# sourceMappingURL=geographicCoordinates.js.map