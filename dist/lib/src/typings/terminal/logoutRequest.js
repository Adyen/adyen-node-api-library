"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutRequest = void 0;
var LogoutRequest = (function () {
    function LogoutRequest() {
    }
    LogoutRequest.getAttributeTypeMap = function () {
        return LogoutRequest.attributeTypeMap;
    };
    LogoutRequest.discriminator = undefined;
    LogoutRequest.attributeTypeMap = [
        {
            "name": "maintenanceAllowed",
            "baseName": "MaintenanceAllowed",
            "type": "boolean"
        }
    ];
    return LogoutRequest;
}());
exports.LogoutRequest = LogoutRequest;
//# sourceMappingURL=logoutRequest.js.map