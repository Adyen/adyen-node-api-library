"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PINRequest = void 0;
var PINRequest = (function () {
    function PINRequest() {
    }
    PINRequest.getAttributeTypeMap = function () {
        return PINRequest.attributeTypeMap;
    };
    PINRequest.discriminator = undefined;
    PINRequest.attributeTypeMap = [
        {
            "name": "additionalInput",
            "baseName": "AdditionalInput",
            "type": "string"
        },
        {
            "name": "cardholderPIN",
            "baseName": "CardholderPIN",
            "type": "CardholderPIN"
        },
        {
            "name": "keyReference",
            "baseName": "KeyReference",
            "type": "string"
        },
        {
            "name": "maxWaitingTime",
            "baseName": "MaxWaitingTime",
            "type": "number"
        },
        {
            "name": "pINEncAlgorithm",
            "baseName": "PINEncAlgorithm",
            "type": "string"
        },
        {
            "name": "pINFormat",
            "baseName": "PINFormat",
            "type": "PINRequest.PINFormatEnum"
        },
        {
            "name": "pINRequestType",
            "baseName": "PINRequestType",
            "type": "PINRequestType"
        },
        {
            "name": "pINVerifMethod",
            "baseName": "PINVerifMethod",
            "type": "string"
        }
    ];
    return PINRequest;
}());
exports.PINRequest = PINRequest;
(function (PINRequest) {
    var PINFormatEnum;
    (function (PINFormatEnum) {
        PINFormatEnum[PINFormatEnum["ISO0"] = 'ISO0'] = "ISO0";
        PINFormatEnum[PINFormatEnum["ISO1"] = 'ISO1'] = "ISO1";
        PINFormatEnum[PINFormatEnum["ISO2"] = 'ISO2'] = "ISO2";
        PINFormatEnum[PINFormatEnum["ISO3"] = 'ISO3'] = "ISO3";
    })(PINFormatEnum = PINRequest.PINFormatEnum || (PINRequest.PINFormatEnum = {}));
})(PINRequest = exports.PINRequest || (exports.PINRequest = {}));
exports.PINRequest = PINRequest;
//# sourceMappingURL=pINRequest.js.map