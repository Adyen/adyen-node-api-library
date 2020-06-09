var Geolocation = (function () {
    function Geolocation() {
    }
    Geolocation.getAttributeTypeMap = function () {
        return Geolocation.attributeTypeMap;
    };
    Geolocation.discriminator = undefined;
    Geolocation.attributeTypeMap = [
        {
            "name": "geographicCoordinates",
            "baseName": "GeographicCoordinates",
            "type": "GeographicCoordinates"
        },
        {
            "name": "uTMCoordinates",
            "baseName": "UTMCoordinates",
            "type": "UTMCoordinates"
        }
    ];
    return Geolocation;
}());
export { Geolocation };
//# sourceMappingURL=geolocation.js.map