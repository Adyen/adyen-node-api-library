"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequest = void 0;
var LoginRequest = (function () {
    function LoginRequest() {
    }
    LoginRequest.getAttributeTypeMap = function () {
        return LoginRequest.attributeTypeMap;
    };
    LoginRequest.discriminator = undefined;
    LoginRequest.attributeTypeMap = [
        {
            "name": "customerOrderReq",
            "baseName": "CustomerOrderReq",
            "type": "Array<LoginRequest.CustomerOrderReqEnum>"
        },
        {
            "name": "dateTime",
            "baseName": "DateTime",
            "type": "{ [key: string]: AnyType; }"
        },
        {
            "name": "operatorID",
            "baseName": "OperatorID",
            "type": "string"
        },
        {
            "name": "operatorLanguage",
            "baseName": "OperatorLanguage",
            "type": "string"
        },
        {
            "name": "pOISerialNumber",
            "baseName": "POISerialNumber",
            "type": "string"
        },
        {
            "name": "saleSoftware",
            "baseName": "SaleSoftware",
            "type": "SaleSoftware"
        },
        {
            "name": "saleTerminalData",
            "baseName": "SaleTerminalData",
            "type": "SaleTerminalData"
        },
        {
            "name": "shiftNumber",
            "baseName": "ShiftNumber",
            "type": "string"
        },
        {
            "name": "tokenRequestedType",
            "baseName": "TokenRequestedType",
            "type": "LoginRequest.TokenRequestedTypeEnum"
        },
        {
            "name": "trainingModeFlag",
            "baseName": "TrainingModeFlag",
            "type": "boolean"
        }
    ];
    return LoginRequest;
}());
exports.LoginRequest = LoginRequest;
(function (LoginRequest) {
    var CustomerOrderReqEnum;
    (function (CustomerOrderReqEnum) {
        CustomerOrderReqEnum[CustomerOrderReqEnum["Both"] = 'Both'] = "Both";
        CustomerOrderReqEnum[CustomerOrderReqEnum["Closed"] = 'Closed'] = "Closed";
        CustomerOrderReqEnum[CustomerOrderReqEnum["Open"] = 'Open'] = "Open";
    })(CustomerOrderReqEnum = LoginRequest.CustomerOrderReqEnum || (LoginRequest.CustomerOrderReqEnum = {}));
    var TokenRequestedTypeEnum;
    (function (TokenRequestedTypeEnum) {
        TokenRequestedTypeEnum[TokenRequestedTypeEnum["Customer"] = 'Customer'] = "Customer";
        TokenRequestedTypeEnum[TokenRequestedTypeEnum["Transaction"] = 'Transaction'] = "Transaction";
    })(TokenRequestedTypeEnum = LoginRequest.TokenRequestedTypeEnum || (LoginRequest.TokenRequestedTypeEnum = {}));
})(LoginRequest = exports.LoginRequest || (exports.LoginRequest = {}));
exports.LoginRequest = LoginRequest;
//# sourceMappingURL=loginRequest.js.map