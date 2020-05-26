var HttpClientException = (function () {
    function HttpClientException(props) {
        this.statusCode = 500;
        this.name = "HttpClientException";
        this.message = props.message;
        if (props.responseHeaders)
            this.responseHeaders = props.responseHeaders;
        if (props.responseBody)
            this.responseBody = props.responseBody;
        if (props.errorCode)
            this.errorCode = props.errorCode;
        if (props.statusCode)
            this.statusCode = props.statusCode;
    }
    return HttpClientException;
}());
export default HttpClientException;
//# sourceMappingURL=httpClientException.js.map