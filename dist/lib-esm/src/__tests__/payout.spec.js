var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
import { createMockClientFromResponse } from "../__mocks__/base";
import Payout from "../services/payout";
import Client from "../client";
import { ApiConstants } from "../constants/apiConstants";
var storeDetailAndSubmitThirdParty = JSON.stringify({
    additionalData: {
        fraudResultType: "GREEN",
        fraudManualReview: "false",
    },
    pspReference: "8515131751004933",
    resultCode: "[payout-submit-received]"
});
var storeDetail = JSON.stringify({
    pspReference: "8515136787207087",
    recurringDetailReference: "8415088571022720",
    resultCode: "Success"
});
var amountAndReference = {
    amount: {
        value: 1000,
        currency: "USD"
    },
    reference: "randomReference",
};
var defaultData = {
    dateOfBirth: (new Date()).toISOString(),
    nationality: "NL",
    shopperEmail: "johndoe@email.com",
    shopperReference: "shopperReference",
};
var mockStoreDetailRequest = function (merchantAccount) { return (__assign(__assign({}, defaultData), { entityType: "NaturalPerson", recurring: {
        contract: "ONECLICK"
    }, merchantAccount: merchantAccount })); };
var mockSubmitRequest = function (merchantAccount) { return (__assign(__assign(__assign({ selectedRecurringDetailReference: "LATEST", recurring: {
        contract: "ONECLICK"
    } }, defaultData), amountAndReference), { merchantAccount: merchantAccount })); };
var mockStoreDetailAndSubmitRequest = function (merchantAccount) { return (__assign(__assign({}, amountAndReference), (mockStoreDetailRequest(merchantAccount)))); };
var mockPayoutRequest = function (merchantAccount) { return (__assign(__assign(__assign({}, amountAndReference), defaultData), { card: {
        expiryMonth: "10",
        expiryYear: "2020",
        holderName: "John Smith",
        number: "4111111111111111",
    }, merchantAccount: merchantAccount })); };
var client;
var payout;
var scope;
beforeEach(function () {
    client = createMockClientFromResponse();
    scope = nock(client.config.endpoint + "/pal/servlet/Payout/" + Client.API_VERSION);
    payout = new Payout(client);
});
describe("PayoutTest", function () {
    it("should succeed on store detail and submit third party", function () {
        return __awaiter(this, void 0, void 0, function () {
            var request, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = mockStoreDetailAndSubmitRequest("" + client.config.merchantAccount);
                        scope.post("/storeDetail").reply(200, storeDetailAndSubmitThirdParty);
                        return [4 /*yield*/, payout.storeDetail(request)];
                    case 1:
                        result = _a.sent();
                        expect(result.resultCode).toEqual("[payout-submit-received]");
                        expect(result.pspReference).toEqual("8515131751004933");
                        if (result.additionalData) {
                            expect(result.additionalData[ApiConstants.FRAUD_RESULT_TYPE]).toEqual("GREEN");
                            expect(result.additionalData[ApiConstants.FRAUD_MANUAL_REVIEW]).toEqual("false");
                        }
                        return [2 /*return*/];
                }
            });
        });
    });
    it("should succeed on store detail", function () {
        return __awaiter(this, void 0, void 0, function () {
            var request, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scope.post("/storeDetail").reply(200, storeDetail);
                        request = mockStoreDetailRequest("MOCKED_MERCHANT_ACC");
                        return [4 /*yield*/, payout.storeDetail(request)];
                    case 1:
                        result = _a.sent();
                        expect("Success").toEqual(result.resultCode);
                        expect("8515136787207087").toEqual(result.pspReference);
                        expect("8415088571022720").toEqual(result.recurringDetailReference);
                        return [2 /*return*/];
                }
            });
        });
    });
    it("should succeed on confirm third party", function () {
        return __awaiter(this, void 0, void 0, function () {
            var request, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scope.post("/confirmThirdParty")
                            .reply(200, {
                            pspReference: "8815131762537886",
                            response: "[payout-confirm-received]"
                        });
                        request = {
                            merchantAccount: "MOCKED_MERCHANT_ACCOUNT",
                            originalReference: "reference"
                        };
                        return [4 /*yield*/, payout.confirmThirdParty(request)];
                    case 1:
                        result = _a.sent();
                        expect(result.response).toEqual("[payout-confirm-received]");
                        expect(result.pspReference).toEqual("8815131762537886");
                        return [2 /*return*/];
                }
            });
        });
    });
    it("should succeed on submit third party", function () {
        return __awaiter(this, void 0, void 0, function () {
            var request, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scope.post("/submitThirdParty").reply(200, storeDetailAndSubmitThirdParty);
                        request = mockSubmitRequest("MOCKED_MERCHANT_ACC");
                        return [4 /*yield*/, payout.submitThirdparty(request)];
                    case 1:
                        result = _a.sent();
                        expect(result.resultCode).toEqual("[payout-submit-received]");
                        expect(result.pspReference).toEqual("8515131751004933");
                        if (result.additionalData) {
                            expect(result.additionalData[ApiConstants.FRAUD_RESULT_TYPE]).toEqual("GREEN");
                            expect(result.additionalData[ApiConstants.FRAUD_MANUAL_REVIEW]).toEqual("false");
                        }
                        return [2 /*return*/];
                }
            });
        });
    });
    it("should succeed on decline third party", function () {
        return __awaiter(this, void 0, void 0, function () {
            var request, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scope.post("/storeDetailAndSubmitThirdParty").reply(200, {
                            pspReference: "8815131762537886",
                            response: "[payout-confirm-received]"
                        });
                        request = {
                            merchantAccount: "MOCKED_MERCHANT_ACC",
                            originalReference: "reference"
                        };
                        return [4 /*yield*/, payout.declineThirdParty(request)];
                    case 1:
                        result = _a.sent();
                        expect(result.response).toEqual("[payout-confirm-received]");
                        expect(result.pspReference).toEqual("8815131762537886");
                        return [2 /*return*/];
                }
            });
        });
    });
    it("should succeed on payout", function () {
        return __awaiter(this, void 0, void 0, function () {
            var request, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scope.post("/payout").reply(200, {
                            pspReference: "8815131762537886",
                            resultCode: "Received",
                        });
                        request = mockPayoutRequest("MOCKED_MERCHANT_ACC");
                        return [4 /*yield*/, payout.payout(request)];
                    case 1:
                        result = _a.sent();
                        expect(result.resultCode).toEqual("Received");
                        expect(result.pspReference).toEqual("8815131762537886");
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=payout.spec.js.map