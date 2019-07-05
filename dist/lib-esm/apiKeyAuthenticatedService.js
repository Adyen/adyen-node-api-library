var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Service from "./service";
var ApiKeyAuthenticatedService = /** @class */ (function (_super) {
    __extends(ApiKeyAuthenticatedService, _super);
    function ApiKeyAuthenticatedService(client) {
        var _this = _super.call(this, client) || this;
        _this.apiKeyRequired = true;
        return _this;
    }
    return ApiKeyAuthenticatedService;
}(Service));
export default ApiKeyAuthenticatedService;
//# sourceMappingURL=apiKeyAuthenticatedService.js.map