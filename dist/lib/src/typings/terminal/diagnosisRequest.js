"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisRequest = void 0;
var DiagnosisRequest = (function () {
    function DiagnosisRequest() {
    }
    DiagnosisRequest.getAttributeTypeMap = function () {
        return DiagnosisRequest.attributeTypeMap;
    };
    DiagnosisRequest.discriminator = undefined;
    DiagnosisRequest.attributeTypeMap = [
        {
            "name": "acquirerID",
            "baseName": "AcquirerID",
            "type": "Array<string>"
        },
        {
            "name": "hostDiagnosisFlag",
            "baseName": "HostDiagnosisFlag",
            "type": "boolean"
        },
        {
            "name": "pOIID",
            "baseName": "POIID",
            "type": "string"
        }
    ];
    return DiagnosisRequest;
}());
exports.DiagnosisRequest = DiagnosisRequest;
//# sourceMappingURL=diagnosisRequest.js.map