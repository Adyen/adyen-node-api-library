"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTMCoordinates = void 0;
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
exports.UTMCoordinates = UTMCoordinates;
//# sourceMappingURL=uTMCoordinates.js.map