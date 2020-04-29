/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
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
import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import getJsonResponse from "../helpers/getJsonResponse";
import OriginKeys from "./resource/checkoutUtility/originKeys";
var CheckoutUtility = /** @class */ (function (_super) {
    __extends(CheckoutUtility, _super);
    function CheckoutUtility(client) {
        var _this = _super.call(this, client) || this;
        _this._originKeys = new OriginKeys(_this);
        return _this;
    }
    CheckoutUtility.prototype.originKeys = function (originKeysRequest) {
        return getJsonResponse(this._originKeys, originKeysRequest);
    };
    return CheckoutUtility;
}(ApiKeyAuthenticatedService));
export default CheckoutUtility;
//# sourceMappingURL=checkoutUtility.js.map