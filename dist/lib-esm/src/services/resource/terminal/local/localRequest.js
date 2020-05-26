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
import Resource from "../../../../services/resource";
var LocalRequest = (function (_super) {
    __extends(LocalRequest, _super);
    function LocalRequest(service) {
        return _super.call(this, service, service.client.config.terminalApiLocalEndpoint + ":8443/nexo/") || this;
    }
    return LocalRequest;
}(Resource));
export default LocalRequest;
//# sourceMappingURL=localRequest.js.map