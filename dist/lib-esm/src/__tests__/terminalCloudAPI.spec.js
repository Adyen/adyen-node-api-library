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
import { createClient, createTerminalAPIPaymentRequest, createTerminalAPIRefundRequest } from "../__mocks__/base";
import { asyncRes } from "../__mocks__/terminalApi/async";
import { syncRefund, syncRes } from "../__mocks__/terminalApi/sync";
import TerminalCloudAPI from "../services/terminalCloudAPI";
var client;
var terminalCloudAPI;
var scope;
beforeEach(function () {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient(process.env.ADYEN_TERMINAL_APIKEY);
    client.config.merchantAccount = process.env.ADYEN_TERMINAL_MERCHANT;
    terminalCloudAPI = new TerminalCloudAPI(client);
    scope = nock("" + client.config.terminalApiCloudEndpoint);
});
afterEach(function () {
    nock.cleanAll();
});
var isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);
describe("Terminal Cloud API", function () {
    test.each([isCI, true])("should make an async payment request, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var terminalAPIPaymentRequest, requestResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    !isMock && nock.restore();
                    scope.post("/async").reply(200, asyncRes);
                    terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
                    return [4, terminalCloudAPI.async(terminalAPIPaymentRequest)];
                case 1:
                    requestResponse = _a.sent();
                    expect(requestResponse).toEqual("ok");
                    return [2];
            }
        });
    }); });
    test.each([isCI, true])("should make a sync payment request, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var terminalAPIPaymentRequest, terminalAPIResponse;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    !isMock && nock.restore();
                    scope.post("/sync").reply(200, syncRes);
                    terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
                    return [4, terminalCloudAPI.sync(terminalAPIPaymentRequest)];
                case 1:
                    terminalAPIResponse = _c.sent();
                    expect((_a = terminalAPIResponse.saleToPOIResponse) === null || _a === void 0 ? void 0 : _a.paymentResponse).toBeDefined();
                    expect((_b = terminalAPIResponse.saleToPOIResponse) === null || _b === void 0 ? void 0 : _b.messageHeader).toBeDefined();
                    return [2];
            }
        });
    }); });
    test.each([isCI, true])("should make an async refund request, isMock: %p", function (isMock) { return __awaiter(void 0, void 0, void 0, function () {
        var terminalAPIPaymentRequest, terminalAPIResponse, terminalAPIRefundRequest, terminalAPIRefundResponse;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    !isMock && nock.restore();
                    scope.post("/sync").reply(200, syncRes);
                    terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
                    return [4, terminalCloudAPI.sync(terminalAPIPaymentRequest)];
                case 1:
                    terminalAPIResponse = _d.sent();
                    scope.post("/sync").reply(200, syncRefund);
                    terminalAPIRefundRequest = createTerminalAPIRefundRequest((_b = (_a = terminalAPIResponse.saleToPOIResponse) === null || _a === void 0 ? void 0 : _a.paymentResponse) === null || _b === void 0 ? void 0 : _b.pOIData.pOITransactionID);
                    return [4, terminalCloudAPI.sync(terminalAPIRefundRequest)];
                case 2:
                    terminalAPIRefundResponse = _d.sent();
                    expect((_c = terminalAPIRefundResponse.saleToPOIResponse) === null || _c === void 0 ? void 0 : _c.reversalResponse).toBeDefined();
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=terminalCloudAPI.spec.js.map