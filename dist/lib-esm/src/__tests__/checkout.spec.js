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
import { createClient } from "../__mocks__/base";
import { paymentMethodsSuccess } from "../__mocks__/checkout/paymentMethodsSuccess";
import { paymentsSuccess } from "../__mocks__/checkout/paymentsSuccess";
import { paymentDetailsSuccess } from "../__mocks__/checkout/paymentsDetailsSuccess";
import { paymentSessionSuccess } from "../__mocks__/checkout/paymentSessionSucess";
import { paymentsResultMultibancoSuccess } from "../__mocks__/checkout/paymentsResultMultibancoSuccess";
import { paymentsResultSuccess } from "../__mocks__/checkout/paymentsResultSucess";
import Client from "../client";
import Checkout from "../services/checkout";
import HttpClientException from "../httpClient/httpClientException";
var merchantAccount = process.env.ADYEN_MERCHANT;
var reference = "Your order number";
var isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);
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
export function createPaymentsCheckoutRequest() {
    var paymentMethodDetails = {
        cvc: "737",
        expiryMonth: "03",
        expiryYear: "2030",
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
        enableRecurring: true,
        enableOneClick: true,
        shopperReference: "shopperReference",
        storePaymentMethod: true
    };
}
function createPaymentSessionRequest() {
    return {
        amount: createAmountObject("USD", 1000),
        countryCode: "NL",
        merchantAccount: merchantAccount,
        reference: reference,
        returnUrl: "https://your-company.com/...",
        channel: "Web",
        sdkVersion: "3.7.0"
    };
}
var client;
var checkout;
var scope;
beforeEach(function () {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(client.config.checkoutEndpoint + "/" + Client.CHECKOUT_API_VERSION);
    checkout = new Checkout(client);
});
afterEach(function () {
    nock.cleanAll();
});
describe("Checkout", function () {
    test.each([false, true])("should make a payment. isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var paymentsRequest, paymentsResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    !isMock && nock.restore();
                    scope.post("/payments")
                        .reply(200, paymentsSuccess);
                    paymentsRequest = createPaymentsCheckoutRequest();
                    return [4, checkout.payments(paymentsRequest)];
                case 1:
                    paymentsResponse = _a.sent();
                    expect(paymentsResponse.pspReference).toBeTruthy();
                    return [2];
            }
        });
    }); });
    test.each([false, true])("should return correct Exception, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var paymentsRequest, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    !isMock && nock.restore();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    scope.post("/payments")
                        .reply(401);
                    paymentsRequest = createPaymentsCheckoutRequest();
                    return [4, checkout.payments(paymentsRequest)];
                case 2:
                    _a.sent();
                    return [3, 4];
                case 3:
                    e_1 = _a.sent();
                    expect(e_1 instanceof HttpClientException).toBeTruthy();
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); });
    test.each([false, true])("should have valid payment methods, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var paymentMethodsRequest, paymentMethodsResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    !isMock && nock.restore();
                    paymentMethodsRequest = { merchantAccount: "MagentoMerchantTest" };
                    scope.post("/paymentMethods")
                        .reply(200, paymentMethodsSuccess);
                    return [4, checkout.paymentMethods(paymentMethodsRequest)];
                case 1:
                    paymentMethodsResponse = _a.sent();
                    if (paymentMethodsResponse && paymentMethodsResponse.paymentMethods) {
                        expect(paymentMethodsResponse.paymentMethods.length).toBeGreaterThan(0);
                    }
                    else {
                        fail();
                    }
                    return [2];
            }
        });
    }); });
    test.each([false, true])("should have valid payment link, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var amount, expiresAt, paymentLinkRequest, paymentLinkSuccess, paymentSuccessLinkResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    !isMock && nock.restore();
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
                        reference: reference
                    };
                    paymentLinkSuccess = {
                        amount: amount,
                        expiresAt: expiresAt,
                        reference: reference,
                        url: "paymentLinkResponse.url"
                    };
                    scope.post("/paymentLinks").reply(200, paymentLinkSuccess);
                    return [4, checkout.paymentLinks(paymentLinkRequest)];
                case 1:
                    paymentSuccessLinkResponse = _a.sent();
                    expect(paymentSuccessLinkResponse).toBeTruthy();
                    return [2];
            }
        });
    }); });
    test.each([isCI, true])("should have payment details, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var paymentsResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    !isMock && nock.restore();
                    scope.post("/payments/details")
                        .reply(200, paymentDetailsSuccess);
                    return [4, checkout.paymentsDetails(createPaymentsDetailsRequest())];
                case 1:
                    paymentsResponse = _a.sent();
                    expect(paymentsResponse.resultCode).toEqual("Authorised");
                    return [2];
            }
        });
    }); });
    test.each([false, true])("should have payment session success, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var paymentSessionRequest, paymentSessionResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    !isMock && nock.restore();
                    scope.post("/paymentSession")
                        .reply(200, paymentSessionSuccess);
                    paymentSessionRequest = createPaymentSessionRequest();
                    return [4, checkout.paymentSession(paymentSessionRequest)];
                case 1:
                    paymentSessionResponse = _a.sent();
                    expect(paymentSessionResponse.paymentSession).not.toBeUndefined();
                    return [2];
            }
        });
    }); });
    test.each([isCI, true])("should have payments result, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var paymentResultRequest, paymentResultResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    !isMock && nock.restore();
                    scope.post("/payments/result")
                        .reply(200, paymentsResultSuccess);
                    paymentResultRequest = {
                        payload: "This is a test payload",
                    };
                    return [4, checkout.paymentResult(paymentResultRequest)];
                case 1:
                    paymentResultResponse = _a.sent();
                    expect(paymentResultResponse.resultCode).toEqual("Authorised");
                    return [2];
            }
        });
    }); });
    test.each([false, true])("should have missing identifier on live, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            !isMock && nock.restore();
            client.setEnvironment("LIVE");
            try {
                new Checkout(client);
                fail();
            }
            catch (e) {
                expect(e.message).toEqual("Please provide your unique live url prefix on the setEnvironment() call on the Client or provide checkoutEndpoint in your config object.");
            }
            return [2];
        });
    }); });
    test.each([false, true])("should succeed on multibanco payment, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var paymentsRequest, paymentsResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    !isMock && nock.restore();
                    scope.post("/payments")
                        .reply(200, paymentsResultMultibancoSuccess);
                    paymentsRequest = createPaymentsCheckoutRequest();
                    return [4, checkout.payments(paymentsRequest)];
                case 1:
                    paymentsResponse = _a.sent();
                    expect(paymentsResponse.pspReference).toBeTruthy();
                    expect(paymentsResponse.additionalData).toBeTruthy();
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=checkout.spec.js.map