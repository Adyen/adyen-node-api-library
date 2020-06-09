"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponse = void 0;
var LoginResponse = (function () {
    function LoginResponse() {
    }
    LoginResponse.getAttributeTypeMap = function () {
        return LoginResponse.attributeTypeMap;
    };
    LoginResponse.discriminator = undefined;
    LoginResponse.attributeTypeMap = [
        {
            "name": "pOISystemData",
            "baseName": "POISystemData",
            "type": "POISystemData"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return LoginResponse;
}());
exports.LoginResponse = LoginResponse;
//# sourceMappingURL=loginResponse.js.map