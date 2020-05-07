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
var nock_1 = __importDefault(require("nock"));
var base_1 = require("../__mocks__/base");
var binLookup_1 = __importDefault(require("../services/binLookup"));
var client_1 = __importDefault(require("../client"));
var httpClientException_1 = __importDefault(require("../httpClient/httpClientException"));
var threeDSAvailabilitySuccess = {
    binDetails: {
        issuerCountry: "NL"
    },
    threeDS1Supported: true,
    threeDS2CardRangeDetails: [],
    threeDS2supported: false
};
var client;
var binLookup;
var scope;
beforeEach(function () {
    if (!nock_1.default.isActive()) {
        nock_1.default.activate();
    }
    client = base_1.createClient();
    binLookup = new binLookup_1.default(client);
    scope = nock_1.default("" + client.config.endpoint + client_1.default.BIN_LOOKUP_PAL_SUFFIX + client_1.default.BIN_LOOKUP_API_VERSION);
});
afterEach(function () {
    nock_1.default.cleanAll();
});
describe("Bin Lookup", function () {
    test.each([false, true])("should succeed on get 3ds availability. isMock: %p", function (isMock) {
        return __awaiter(this, void 0, void 0, function () {
            var threeDSAvailabilityRequest, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        !isMock && nock_1.default.restore();
                        threeDSAvailabilityRequest = {
                            merchantAccount: process.env.ADYEN_MERCHANT,
                            brands: ["randomBrand"],
                            cardNumber: "4111111111111111"
                        };
                        scope.post("/get3dsAvailability")
                            .reply(200, threeDSAvailabilitySuccess);
                        return [4 /*yield*/, binLookup.get3dsAvailability(threeDSAvailabilityRequest)];
                    case 1:
                        response = _a.sent();
                        expect(response).toEqual(threeDSAvailabilitySuccess);
                        return [2 /*return*/];
                }
            });
        });
    });
    test.each([false, true])("should fail with invalid merchant. isMock: %p", function (isMock) {
        return __awaiter(this, void 0, void 0, function () {
            var threeDSAvailabilityRequest, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        !isMock && nock_1.default.restore();
                        threeDSAvailabilityRequest = {
                            merchantAccount: undefined,
                            cardNumber: "4111111111111",
                            brands: []
                        };
                        scope.post("/get3dsAvailability")
                            .reply(403, JSON.stringify({ status: 403, message: "fail", errorCode: "171" }));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, binLookup.get3dsAvailability(threeDSAvailabilityRequest)];
                    case 2:
                        _a.sent();
                        fail("Expected request to fail");
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        expect(e_1 instanceof httpClientException_1.default).toBeTruthy();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    });
    test.each([false, true])("should succeed on get cost estimate. isMock: %p", function (isMock) {
        return __awaiter(this, void 0, void 0, function () {
            var expected, costEstimateRequest, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        !isMock && nock_1.default.restore();
                        expected = {
                            costEstimateAmount: {
                                currency: "EUR",
                                value: 10
                            },
                            resultCode: "Unsupported",
                            surchargeType: "ZERO"
                        };
                        costEstimateRequest = {
                            amount: { currency: "EUR", value: 1000 },
                            assumptions: {
                                assumeLevel3Data: true,
                                assume3DSecureAuthenticated: true
                            },
                            cardNumber: "411111111111",
                            merchantAccount: process.env.ADYEN_MERCHANT,
                            merchantDetails: {
                                countryCode: "NL",
                                mcc: "7411",
                                enrolledIn3DSecure: true
                            },
                            shopperInteraction: "Ecommerce"
                        };
                        scope.post("/getCostEstimate")
                            .reply(200, expected);
                        return [4 /*yield*/, binLookup.getCostEstimate(costEstimateRequest)];
                    case 1:
                        response = _a.sent();
                        expect(response).toEqual(expected);
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=binLookup.spec.js.map