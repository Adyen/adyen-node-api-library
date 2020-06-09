"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbortRequest = void 0;
var AbortRequest = (function () {
    function AbortRequest() {
    }
    AbortRequest.getAttributeTypeMap = function () {
        return AbortRequest.attributeTypeMap;
    };
    AbortRequest.discriminator = undefined;
    AbortRequest.attributeTypeMap = [
        {
            "name": "abortReason",
            "baseName": "AbortReason",
            "type": "string"
        },
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "messageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        }
    ];
    return AbortRequest;
}());
exports.AbortRequest = AbortRequest;
//# sourceMappingURL=abortRequest.js.map