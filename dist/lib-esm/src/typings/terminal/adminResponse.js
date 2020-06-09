var AdminResponse = (function () {
    function AdminResponse() {
    }
    AdminResponse.getAttributeTypeMap = function () {
        return AdminResponse.attributeTypeMap;
    };
    AdminResponse.discriminator = undefined;
    AdminResponse.attributeTypeMap = [
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return AdminResponse;
}());
export { AdminResponse };
//# sourceMappingURL=adminResponse.js.map