var SensitiveCardData = (function () {
    function SensitiveCardData() {
    }
    SensitiveCardData.getAttributeTypeMap = function () {
        return SensitiveCardData.attributeTypeMap;
    };
    SensitiveCardData.discriminator = undefined;
    SensitiveCardData.attributeTypeMap = [
        {
            "name": "cardSeqNumb",
            "baseName": "CardSeqNumb",
            "type": "string"
        },
        {
            "name": "expiryDate",
            "baseName": "ExpiryDate",
            "type": "string"
        },
        {
            "name": "pAN",
            "baseName": "PAN",
            "type": "string"
        },
        {
            "name": "trackData",
            "baseName": "TrackData",
            "type": "Array<TrackData>"
        }
    ];
    return SensitiveCardData;
}());
export { SensitiveCardData };
//# sourceMappingURL=sensitiveCardData.js.map