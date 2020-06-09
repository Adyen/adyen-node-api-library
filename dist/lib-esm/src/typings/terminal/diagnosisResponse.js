var DiagnosisResponse = (function () {
    function DiagnosisResponse() {
    }
    DiagnosisResponse.getAttributeTypeMap = function () {
        return DiagnosisResponse.attributeTypeMap;
    };
    DiagnosisResponse.discriminator = undefined;
    DiagnosisResponse.attributeTypeMap = [
        {
            "name": "hostStatus",
            "baseName": "HostStatus",
            "type": "Array<HostStatus>"
        },
        {
            "name": "loggedSaleID",
            "baseName": "LoggedSaleID",
            "type": "Array<string>"
        },
        {
            "name": "pOIStatus",
            "baseName": "POIStatus",
            "type": "POIStatus"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return DiagnosisResponse;
}());
export { DiagnosisResponse };
//# sourceMappingURL=diagnosisResponse.js.map