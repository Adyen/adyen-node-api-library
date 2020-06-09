var AdminRequest = (function () {
    function AdminRequest() {
    }
    AdminRequest.getAttributeTypeMap = function () {
        return AdminRequest.attributeTypeMap;
    };
    AdminRequest.discriminator = undefined;
    AdminRequest.attributeTypeMap = [
        {
            "name": "serviceIdentification",
            "baseName": "ServiceIdentification",
            "type": "string"
        }
    ];
    return AdminRequest;
}());
export { AdminRequest };
//# sourceMappingURL=adminRequest.js.map