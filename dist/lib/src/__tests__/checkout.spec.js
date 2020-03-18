"use strict";
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
var paymentMethodsSuccess_1 = require("../__mocks__/checkout/paymentMethodsSuccess");
var paymentsSuccess_1 = require("../__mocks__/checkout/paymentsSuccess");
var paymentsDetailsSuccess_1 = require("../__mocks__/checkout/paymentsDetailsSuccess");
var paymentSessionSucess_1 = require("../__mocks__/checkout/paymentSessionSucess");
var paymentsResultMultibancoSuccess_1 = require("../__mocks__/checkout/paymentsResultMultibancoSuccess");
var paymentsResultSucess_1 = require("../__mocks__/checkout/paymentsResultSucess");
var client_1 = __importDefault(require("../client"));
var checkout_1 = __importDefault(require("../services/checkout"));
var httpClientException_1 = __importDefault(require("../httpClient/httpClientException"));
var merchantAccount = "MagentoMerchantTest";
var reference = "Your order number";
function createAmountObject(currency, value) {
    return {
        currency: currency,
        value: value,
    };
}
function createPaymentsDetailsRequest() {
    return {
        details: {
            MD: "mdValue",
            PaRes: "paResValue",
        },
        paymentData: "Ab02b4c0!BQABAgCJN1wRZuGJmq8dMncmypvknj9s7l5Tj...",
    };
}
function createPaymentsCheckoutRequest() {
    var paymentMethodDetails = {
        cvc: "737",
        expiryMonth: "10",
        expiryYear: "2018",
        holderName: "John Smith",
        number: "4111111111111111",
        type: "scheme",
    };
    return {
        amount: createAmountObject("USD", 1000),
        merchantAccount: merchantAccount,
        paymentMethod: paymentMethodDetails,
        reference: reference,
        returnUrl: "https://your-company.com/...",
    };
}
exports.createPaymentsCheckoutRequest = createPaymentsCheckoutRequest;
function createPaymentSessionRequest() {
    return {
        amount: createAmountObject("USD", 1000),
        countryCode: "NL",
        merchantAccount: merchantAccount,
        reference: reference,
        returnUrl: "https://your-company.com/...",
    };
}
var client;
var checkout;
var scope;
beforeEach(function () {
    client = base_1.createMockClientFromResponse();
    scope = nock_1.default(client.config.checkoutEndpoint + "/" + client_1.default.CHECKOUT_API_VERSION);
    checkout = new checkout_1.default(client);
});
describe("Checkout", function () {
    it("should make a payment", function () { return __awaiter(void 0, void 0, void 0, function () {
        var paymentsRequest, paymentsResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    scope.post("/payments")
                        .reply(200, paymentsSuccess_1.paymentsSuccess);
                    paymentsRequest = createPaymentsCheckoutRequest();
                    return [4 /*yield*/, checkout.payments(paymentsRequest)];
                case 1:
                    paymentsResponse = _a.sent();
                    expect(paymentsResponse.pspReference).toEqual("8535296650153317");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return correct Exception", function () { return __awaiter(void 0, void 0, void 0, function () {
        var paymentsRequest, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    scope.post("/payments")
                        .reply(401);
                    paymentsRequest = createPaymentsCheckoutRequest();
                    return [4 /*yield*/, checkout.payments(paymentsRequest)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    expect(e_1 instanceof httpClientException_1.default).toBeTruthy();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it("should have valid payment methods", function () { return __awaiter(void 0, void 0, void 0, function () {
        var paymentMethodsRequest, paymentMethodsResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paymentMethodsRequest = { merchantAccount: "MagentoMerchantTest" };
                    scope.post("/paymentMethods")
                        .reply(200, paymentMethodsSuccess_1.paymentMethodsSuccess);
                    return [4 /*yield*/, checkout.paymentMethods(paymentMethodsRequest)];
                case 1:
                    paymentMethodsResponse = _a.sent();
                    if (paymentMethodsResponse && paymentMethodsResponse.paymentMethods) {
                        expect(paymentMethodsResponse.paymentMethods.length).toEqual(65);
                        expect(paymentMethodsResponse.paymentMethods[0].name).toEqual("AliPay");
                    }
                    else {
                        fail();
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    it("should have valid payment link", function () { return __awaiter(void 0, void 0, void 0, function () {
        var amount, expiresAt, paymentLinkRequest, paymentLinkSuccess, paymentSuccessLinkResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    amount = createAmountObject("BRL", 1000);
                    expiresAt = "2019-12-17T10:05:29Z";
                    paymentLinkRequest = {
                        allowedPaymentMethods: ["scheme", "boletobancario"],
                        amount: amount,
                        countryCode: "BR",
                        merchantAccount: merchantAccount,
                        shopperReference: "shopperReference",
                        shopperEmail: "test@email.com",
                        shopperLocale: "pt_BR",
                        billingAddress: {
                            street: "Roque Petroni Jr",
                            postalCode: "59000060",
                            city: "São Paulo",
                            houseNumberOrName: "999",
                            country: "BR",
                            stateOrProvince: "SP"
                        },
                        deliveryAddress: {
                            street: "Roque Petroni Jr",
                            postalCode: "59000060",
                            city: "São Paulo",
                            houseNumberOrName: "999",
                            country: "BR",
                            stateOrProvince: "SP"
                        },
                        expiresAt: expiresAt,
                        reference: reference
                    };
                    paymentLinkSuccess = {
                        amount: amount,
                        expiresAt: expiresAt,
                        reference: reference,
                        url: "paymentLinkResponse.url"
                    };
                    scope.post("/paymentLinks").reply(200, paymentLinkSuccess);
                    return [4 /*yield*/, checkout.paymentLinks(paymentLinkRequest)];
                case 1:
                    paymentSuccessLinkResponse = _a.sent();
                    expect(paymentLinkSuccess).toEqual(paymentSuccessLinkResponse);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should have payment details", function () { return __awaiter(void 0, void 0, void 0, function () {
        var paymentsResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    scope.post("/payments/details")
                        .reply(200, paymentsDetailsSuccess_1.paymentDetailsSuccess);
                    return [4 /*yield*/, checkout.paymentsDetails(createPaymentsDetailsRequest())];
                case 1:
                    paymentsResponse = _a.sent();
                    expect(paymentsResponse.resultCode).toEqual("Authorised");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should have payment session success", function () { return __awaiter(void 0, void 0, void 0, function () {
        var paymentSessionRequest, paymentSessionResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    scope.post("/paymentSession")
                        .reply(200, paymentSessionSucess_1.paymentSessionSuccess);
                    paymentSessionRequest = createPaymentSessionRequest();
                    return [4 /*yield*/, checkout.paymentSession(paymentSessionRequest)];
                case 1:
                    paymentSessionResponse = _a.sent();
                    expect(paymentSessionResponse.paymentSession).not.toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should have payments result", function () { return __awaiter(void 0, void 0, void 0, function () {
        var paymentResultRequest, paymentResultResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    scope.post("/payments/result")
                        .reply(200, paymentsResultSucess_1.paymentsResultSuccess);
                    paymentResultRequest = {
                        payload: "This is a test payload",
                    };
                    return [4 /*yield*/, checkout.paymentResult(paymentResultRequest)];
                case 1:
                    paymentResultResponse = _a.sent();
                    expect(paymentResultResponse.resultCode).toEqual("Authorised");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should have missing identifier on live", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            client.setEnvironment("LIVE");
            try {
                new checkout_1.default(client);
                fail();
            }
            catch (e) {
                expect(e.message).toEqual("Please provide your unique live url prefix on the setEnvironment() call on the Client or provide checkoutEndpoint in your config object.");
            }
            return [2 /*return*/];
        });
    }); });
    it("should succeed on multibanco payment", function () { return __awaiter(void 0, void 0, void 0, function () {
        var paymentsRequest, paymentsResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    scope.post("/payments")
                        .reply(200, paymentsResultMultibancoSuccess_1.paymentsResultMultibancoSuccess);
                    paymentsRequest = createPaymentsCheckoutRequest();
                    return [4 /*yield*/, checkout.payments(paymentsRequest)];
                case 1:
                    paymentsResponse = _a.sent();
                    expect(paymentsResponse.pspReference).toEqual("8111111111111111");
                    if (paymentsResponse.additionalData) {
                        expect(paymentsResponse.additionalData["comprafacil.amount"]).toEqual("101.01");
                        expect(paymentsResponse.additionalData["comprafacil.deadline"]).toEqual("3");
                        expect(paymentsResponse.additionalData["comprafacil.entity"]).toEqual("12345");
                    }
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=checkout.spec.js.map