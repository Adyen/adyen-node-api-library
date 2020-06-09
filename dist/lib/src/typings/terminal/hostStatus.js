"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostStatus = void 0;
var HostStatus = (function () {
    function HostStatus() {
    }
    HostStatus.getAttributeTypeMap = function () {
        return HostStatus.attributeTypeMap;
    };
    HostStatus.discriminator = undefined;
    HostStatus.attributeTypeMap = [
        {
            "name": "acquirerID",
            "baseName": "AcquirerID",
            "type": "string"
        },
        {
            "name": "isReachableFlag",
            "baseName": "IsReachableFlag",
            "type": "boolean"
        }
    ];
    return HostStatus;
}());
exports.HostStatus = HostStatus;
//# sourceMappingURL=hostStatus.js.map