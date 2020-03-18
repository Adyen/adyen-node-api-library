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
    dsPublicKeys: [{
            brand: "visa",
            directoryServerId: "F013371337",
            publicKey: "eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsIm4iOiI4VFBxZkFOWk4xSUEzcHFuMkdhUVZjZ1g4LUpWZ1Y0M2diWURtYmdTY0N5SkVSN3lPWEJqQmQyaTBEcVFBQWpVUVBXVUxZU1FsRFRKYm91bVB1aXVoeVMxUHN2NTM4UHBRRnEySkNaSERkaV85WThVZG9hbmlrU095c2NHQWtBVmJJWHA5cnVOSm1wTTBwZ0s5VGxJSWVHYlE3ZEJaR01OQVJLQXRKeTY3dVlvbVpXV0ZBbWpwM2d4SDVzNzdCR2xkaE9RUVlQTFdybDdyS0pLQlUwNm1tZlktUDNpazk5MmtPUTNEak02bHR2WmNvLThET2RCR0RKYmdWRGFmb29LUnVNd2NUTXhDdTRWYWpyNmQyZkppVXlqNUYzcVBrYng4WDl6a1c3UmlxVno2SU1qdE54NzZicmg3aU9Vd2JiWmoxYWF6VG1GQ2xEb0dyY2JxOV80Nnc9PSJ9"
        }],
    threeDS1Supported: true,
    threeDS2CardRangeDetails: [{
            brandCode: "visa",
            endRange: "411111111111",
            startRange: "411111111111",
            threeDS2Version: "2.1.0",
            threeDSMethodURL: "https://pal-test.adyen.com/threeds2simulator/acs/startMethod.shtml"
        }],
    threeDS2supported: true
};
var client;
var binLookup;
var scope;
beforeEach(function () {
    client = base_1.createMockClientFromResponse();
    binLookup = new binLookup_1.default(client);
    scope = nock_1.default("" + client.config.endpoint + client_1.default.BIN_LOOKUP_PAL_SUFFIX + client_1.default.BIN_LOOKUP_API_VERSION);
});
describe("Bin Lookup", function () {
    it("should succeed on get 3ds availability", function () {
        return __awaiter(this, void 0, void 0, function () {
            var threeDSAvailabilityRequest, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        threeDSAvailabilityRequest = {
                            merchantAccount: "MOCK_MERCHANT_ACCOUNT",
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
    it("should fail with invalid merchant", function () {
        return __awaiter(this, void 0, void 0, function () {
            var threeDSAvailabilityRequest, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
    it("should succeed on get cost estimate", function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, costEstimateRequest, expected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = {
                            cardBin: { summary: "1111" },
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
                            merchantAccount: "MOCKED_MERCHANT_ACC",
                            merchantDetails: {
                                countryCode: "NL",
                                mcc: "7411",
                                enrolledIn3DSecure: true
                            },
                            shopperInteraction: "Ecommerce"
                        };
                        scope.post("/getCostEstimate")
                            .reply(200, response);
                        return [4 /*yield*/, binLookup.getCostEstimate(costEstimateRequest)];
                    case 1:
                        expected = _a.sent();
                        expect(response).toEqual(expected);
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=binLookup.spec.js.map