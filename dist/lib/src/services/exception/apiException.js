"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiException = (function () {
    function ApiException(message, statusCode) {
        if (statusCode === void 0) { statusCode = 500; }
        this.name = "ApiException";
        this.message = message;
        this.statusCode = statusCode;
    }
    return ApiException;
}());
exports.default = ApiException;
//# sourceMappingURL=apiException.js.map