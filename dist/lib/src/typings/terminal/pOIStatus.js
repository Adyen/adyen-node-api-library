"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POIStatus = void 0;
var POIStatus = (function () {
    function POIStatus() {
    }
    POIStatus.getAttributeTypeMap = function () {
        return POIStatus.attributeTypeMap;
    };
    POIStatus.discriminator = undefined;
    POIStatus.attributeTypeMap = [
        {
            "name": "cardReaderOkFlag",
            "baseName": "CardReaderOkFlag",
            "type": "boolean"
        },
        {
            "name": "cashHandlingDevice",
            "baseName": "CashHandlingDevice",
            "type": "Array<CashHandlingDevice>"
        },
        {
            "name": "communicationOkFlag",
            "baseName": "CommunicationOkFlag",
            "type": "boolean"
        },
        {
            "name": "fraudPreventionFlag",
            "baseName": "FraudPreventionFlag",
            "type": "boolean"
        },
        {
            "name": "globalStatus",
            "baseName": "GlobalStatus",
            "type": "GlobalStatusType"
        },
        {
            "name": "pEDOKFlag",
            "baseName": "PEDOKFlag",
            "type": "boolean"
        },
        {
            "name": "printerStatus",
            "baseName": "PrinterStatus",
            "type": "POIStatus.PrinterStatusEnum"
        },
        {
            "name": "securityOkFlag",
            "baseName": "SecurityOkFlag",
            "type": "boolean"
        }
    ];
    return POIStatus;
}());
exports.POIStatus = POIStatus;
(function (POIStatus) {
    var PrinterStatusEnum;
    (function (PrinterStatusEnum) {
        PrinterStatusEnum[PrinterStatusEnum["NoPaper"] = 'NoPaper'] = "NoPaper";
        PrinterStatusEnum[PrinterStatusEnum["OK"] = 'OK'] = "OK";
        PrinterStatusEnum[PrinterStatusEnum["OutOfOrder"] = 'OutOfOrder'] = "OutOfOrder";
        PrinterStatusEnum[PrinterStatusEnum["PaperJam"] = 'PaperJam'] = "PaperJam";
        PrinterStatusEnum[PrinterStatusEnum["PaperLow"] = 'PaperLow'] = "PaperLow";
    })(PrinterStatusEnum = POIStatus.PrinterStatusEnum || (POIStatus.PrinterStatusEnum = {}));
})(POIStatus = exports.POIStatus || (exports.POIStatus = {}));
exports.POIStatus = POIStatus;
//# sourceMappingURL=pOIStatus.js.map