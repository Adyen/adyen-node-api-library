var POISystemData = (function () {
    function POISystemData() {
    }
    POISystemData.getAttributeTypeMap = function () {
        return POISystemData.attributeTypeMap;
    };
    POISystemData.discriminator = undefined;
    POISystemData.attributeTypeMap = [
        {
            "name": "dateTime",
            "baseName": "DateTime",
            "type": "{ [key: string]: AnyType; }"
        },
        {
            "name": "pOISoftware",
            "baseName": "POISoftware",
            "type": "POISoftware"
        },
        {
            "name": "pOIStatus",
            "baseName": "POIStatus",
            "type": "POIStatus"
        },
        {
            "name": "pOITerminalData",
            "baseName": "POITerminalData",
            "type": "POITerminalData"
        }
    ];
    return POISystemData;
}());
export { POISystemData };
//# sourceMappingURL=pOISystemData.js.map