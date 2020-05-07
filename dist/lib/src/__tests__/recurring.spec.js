"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nock_1 = __importDefault(require("nock"));
var base_1 = require("../__mocks__/base");
var disableSuccess_1 = require("../__mocks__/recurring/disableSuccess");
var listRecurringDetailsSuccess_1 = require("../__mocks__/recurring/listRecurringDetailsSuccess");
var recurring_1 = __importDefault(require("../services/recurring"));
var client_1 = __importDefault(require("../client"));
var paymentsSuccess_1 = require("../__mocks__/checkout/paymentsSuccess");
var checkout_spec_1 = require("./checkout.spec");
var checkout_1 = __importDefault(require("../services/checkout"));
var createRecurringDetailsRequest = function () {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT,
        recurring: { contract: "RECURRING" },
        shopperReference: "shopperReference",
    };
};
var client;
var recurring;
var checkout;
var scope;
beforeEach(function () {
    if (!nock_1.default.isActive()) {
        nock_1.default.activate();
    }
    client = base_1.createClient();
    recurring = new recurring_1.default(client);
    checkout = new checkout_1.default(client);
    scope = nock_1.default(client.config.endpoint + "/pal/servlet/Recurring/" + client_1.default.RECURRING_API_VERSION);
});
afterEach(function () {
    nock_1.default.cleanAll();
});
describe("Recurring", function () {
    test.each([false, true])("should test have recurring details list, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var request, result, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    !isMock && nock_1.default.restore();
                    scope.post("/listRecurringDetails")
                        .reply(200, listRecurringDetailsSuccess_1.listRecurringDetailsSuccess);
                    request = createRecurringDetailsRequest();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, recurring.listRecurringDetails(request)];
                case 2:
                    result = _a.sent();
                    expect(result).toBeTruthy();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    fail(e_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    test.each([false, true])("should disable, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var paymentsRequest, res, request, result, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    !isMock && nock_1.default.restore();
                    scope.post("/payments")
                        .reply(200, paymentsSuccess_1.paymentsSuccess);
                    paymentsRequest = checkout_spec_1.createPaymentsCheckoutRequest();
                    return [4 /*yield*/, checkout.payments(paymentsRequest)];
                case 1:
                    res = _a.sent();
                    scope.post("/disable")
                        .reply(200, disableSuccess_1.disableSuccess);
                    request = {
                        merchantAccount: process.env.ADYEN_MERCHANT,
                        shopperReference: "shopperReference",
                        recurringDetailReference: res.additionalData["recurring.recurringDetailReference"]
                    };
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, recurring.disable(request)];
                case 3:
                    result = _a.sent();
                    expect(result).toBeTruthy();
                    return [3 /*break*/, 5];
                case 4:
                    e_2 = _a.sent();
                    fail(e_2.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=recurring.spec.js.map