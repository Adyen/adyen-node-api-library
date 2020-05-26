"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resource = (function () {
    function Resource(service, endpoint) {
        this.service = service;
        this.endpoint = endpoint;
    }
    Resource.prototype.request = function (json, requestOptions) {
        var clientInterface = this.service.client.httpClient;
        var config = this.service.client.config;
        return clientInterface.request(this.endpoint, json, config, this.service.apiKeyRequired, requestOptions);
    };
    return Resource;
}());
exports.default = Resource;
//# sourceMappingURL=resource.js.map