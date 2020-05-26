var ApiException = (function () {
    function ApiException(message, statusCode) {
        if (statusCode === void 0) { statusCode = 500; }
        this.name = "ApiException";
        this.message = message;
        this.statusCode = statusCode;
    }
    return ApiException;
}());
export default ApiException;
//# sourceMappingURL=apiException.js.map