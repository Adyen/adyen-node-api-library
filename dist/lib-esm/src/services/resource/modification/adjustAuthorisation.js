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
import Client from "../../../client";
import Resource from "../../resource";
var AdjustAuthorisation = (function (_super) {
    __extends(AdjustAuthorisation, _super);
    function AdjustAuthorisation(service) {
        return _super.call(this, service, service.client.config.endpoint + "/pal/servlet/Payment/" + Client.API_VERSION + "/adjustAuthorisation") || this;
    }
    return AdjustAuthorisation;
}(Resource));
export default AdjustAuthorisation;
//# sourceMappingURL=adjustAuthorisation.js.map