var TrackData = (function () {
    function TrackData() {
    }
    TrackData.getAttributeTypeMap = function () {
        return TrackData.attributeTypeMap;
    };
    TrackData.discriminator = undefined;
    TrackData.attributeTypeMap = [
        {
            "name": "trackFormat",
            "baseName": "TrackFormat",
            "type": "TrackData.TrackFormatEnum"
        },
        {
            "name": "trackNumb",
            "baseName": "TrackNumb",
            "type": "number"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        }
    ];
    return TrackData;
}());
export { TrackData };
(function (TrackData) {
    var TrackFormatEnum;
    (function (TrackFormatEnum) {
        TrackFormatEnum[TrackFormatEnum["AAMVA"] = 'AAMVA'] = "AAMVA";
        TrackFormatEnum[TrackFormatEnum["CMC7"] = 'CMC-7'] = "CMC7";
        TrackFormatEnum[TrackFormatEnum["E13B"] = 'E-13B'] = "E13B";
        TrackFormatEnum[TrackFormatEnum["ISO"] = 'ISO'] = "ISO";
        TrackFormatEnum[TrackFormatEnum["JISI"] = 'JIS-I'] = "JISI";
        TrackFormatEnum[TrackFormatEnum["JISII"] = 'JIS-II'] = "JISII";
    })(TrackFormatEnum = TrackData.TrackFormatEnum || (TrackData.TrackFormatEnum = {}));
})(TrackData || (TrackData = {}));
//# sourceMappingURL=trackData.js.map