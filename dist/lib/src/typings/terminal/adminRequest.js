"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRequest = void 0;
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
exports.AdminRequest = AdminRequest;
//# sourceMappingURL=adminRequest.js.map