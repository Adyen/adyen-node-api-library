"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geolocation = void 0;
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
exports.Geolocation = Geolocation;
//# sourceMappingURL=geolocation.js.map