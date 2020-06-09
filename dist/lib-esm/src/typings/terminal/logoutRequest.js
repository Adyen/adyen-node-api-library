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
export { LogoutRequest };
//# sourceMappingURL=logoutRequest.js.map