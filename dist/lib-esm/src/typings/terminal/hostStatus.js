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
export { HostStatus };
//# sourceMappingURL=hostStatus.js.map