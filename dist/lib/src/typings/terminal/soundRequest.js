"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundRequest = void 0;
var SoundRequest = (function () {
    function SoundRequest() {
    }
    SoundRequest.getAttributeTypeMap = function () {
        return SoundRequest.attributeTypeMap;
    };
    SoundRequest.discriminator = undefined;
    SoundRequest.attributeTypeMap = [
        {
            "name": "responseMode",
            "baseName": "ResponseMode",
            "type": "SoundRequest.ResponseModeEnum"
        },
        {
            "name": "soundAction",
            "baseName": "SoundAction",
            "type": "SoundActionType"
        },
        {
            "name": "soundContent",
            "baseName": "SoundContent",
            "type": "SoundContent"
        },
        {
            "name": "soundVolume",
            "baseName": "SoundVolume",
            "type": "number"
        }
    ];
    return SoundRequest;
}());
exports.SoundRequest = SoundRequest;
(function (SoundRequest) {
    var ResponseModeEnum;
    (function (ResponseModeEnum) {
        ResponseModeEnum[ResponseModeEnum["Immediate"] = 'Immediate'] = "Immediate";
        ResponseModeEnum[ResponseModeEnum["NotRequired"] = 'NotRequired'] = "NotRequired";
        ResponseModeEnum[ResponseModeEnum["PrintEnd"] = 'PrintEnd'] = "PrintEnd";
        ResponseModeEnum[ResponseModeEnum["SoundEnd"] = 'SoundEnd'] = "SoundEnd";
    })(ResponseModeEnum = SoundRequest.ResponseModeEnum || (SoundRequest.ResponseModeEnum = {}));
})(SoundRequest = exports.SoundRequest || (exports.SoundRequest = {}));
exports.SoundRequest = SoundRequest;
//# sourceMappingURL=soundRequest.js.map