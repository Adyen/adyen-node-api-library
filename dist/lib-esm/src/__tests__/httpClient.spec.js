var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import nock from "nock";
import Client from "../client";
import Checkout from "../services/checkout";
import ApiException from "../services/exception/apiException";
import { createPaymentsCheckoutRequest } from "./checkout.spec";
import HttpClientException from "../httpClient/httpClientException";
beforeEach(function () {
    nock.cleanAll();
});
var getResponse = function (_a, cb) {
    var apiKey = _a.apiKey, environment = _a.environment;
    return __awaiter(void 0, void 0, void 0, function () {
        var client, checkout, scope, _b, errorMessageContains, errorMessageEquals, errorType, ErrorException, e_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    client = new Client({ apiKey: apiKey, environment: environment });
                    checkout = new Checkout(client);
                    scope = nock(client.config.checkoutEndpoint + "/" + Client.CHECKOUT_API_VERSION)
                        .post("/payments");
                    _b = cb(scope), errorMessageContains = _b.errorMessageContains, errorMessageEquals = _b.errorMessageEquals, errorType = _b.errorType;
                    ErrorException = errorType === "ApiException" ? ApiException : HttpClientException;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, checkout.payments(createPaymentsCheckoutRequest())];
                case 2:
                    _c.sent();
                    fail("request should fail");
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _c.sent();
                    expect(e_1 instanceof ErrorException).toBeTruthy();
                    if (errorMessageEquals)
                        expect(e_1.message).toEqual(errorMessageEquals);
                    if (errorMessageContains)
                        expect(e_1.message.toLowerCase()).toContain(errorMessageContains);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
describe("HTTP Client", function () {
    var _this = this;
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        apiKey               | environment    | withError | args                                                                                                 | errorType                | contains       | equals  \n        ", "                | ", "      | ", "   | ", "                                                                         | ", "        | ", " | ", "\n        ", "  | ", "      | ", "   | ", "                                                                                    | ", "        | ", "          | ", "\n        ", "         | ", "      | ", "  | ", " | ", " | ", "          | ", "\n        ", "         | ", "      | ", "  | ", "                                                                                         | ", " | ", "          | ", "\n        ", "         | ", "      | ", "  | ", "                                                                                     | ", " | ", "          | ", "\n    "], ["\n        apiKey               | environment    | withError | args                                                                                                 | errorType                | contains       | equals  \n        ", "                | ", "      | ", "   | ", "                                                                         | ", "        | ", " | ", "\n        ", "  | ", "      | ", "   | ", "                                                                                    | ", "        | ", "          | ", "\n        ", "         | ", "      | ", "  | ", " | ", " | ", "          | ", "\n        ", "         | ", "      | ", "  | ", "                                                                                         | ", " | ", "          | ", "\n        ", "         | ", "      | ", "  | ", "                                                                                     | ", " | ", "          | ", "\n    "])), "", "TEST", true, ["mocked_error_response"], "ApiException", "x-api-key", "", "MOCKED_API_KEY", "TEST", true, ["some_error"], "ApiException", "", "some_error", "API_KEY", "TEST", false, [401, { status: 401, message: "Invalid Request", errorCode: "171", errorType: "validationError" }], "HttpClientException", "", "HTTP Exception: 401. null: Invalid Request", "API_KEY", "TEST", false, [401, {}], "HttpClientException", "", "HTTP Exception: 401. null", "API_KEY", "TEST", false, [401, "fail"], "HttpClientException", "", "HTTP Exception: 401. null")("Should return $errorType, $contains, $equals", function (_a) {
        var apiKey = _a.apiKey, environment = _a.environment, withError = _a.withError, args = _a.args, errorType = _a.errorType, contains = _a.contains, equals = _a.equals;
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, getResponse({ apiKey: apiKey, environment: environment }, function (scope) {
                            if (withError)
                                scope.replyWithError(args[0]);
                            else
                                scope.reply(args[0], args[1]);
                            return { errorType: errorType, errorMessageContains: contains, errorMessageEquals: equals };
                        })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
});
var templateObject_1;
//# sourceMappingURL=httpClient.spec.js.map