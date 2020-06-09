"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeographicCoordinates = void 0;
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
exports.GeographicCoordinates = GeographicCoordinates;
//# sourceMappingURL=geographicCoordinates.js.map