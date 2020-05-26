"use strict";
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
var apiKeyAuthenticatedService_1 = __importDefault(require("../apiKeyAuthenticatedService"));
var getJsonResponse_1 = __importDefault(require("../helpers/getJsonResponse"));
var terminal_1 = require("../typings/terminal");
var async_1 = __importDefault(require("./resource/terminal/cloud/async"));
var sync_1 = __importDefault(require("./resource/terminal/cloud/sync"));
var mergeDeep_1 = __importDefault(require("../utils/mergeDeep"));
var applicationInfo_1 = require("../typings/applicationInfo");
var TerminalCloudAPI = (function (_super) {
    __extends(TerminalCloudAPI, _super);
    function TerminalCloudAPI(client) {
        var _this = _super.call(this, client) || this;
        _this.terminalApiAsync = new async_1.default(_this);
        _this.terminalApiSync = new sync_1.default(_this);
        return _this;
    }
    TerminalCloudAPI.setApplicationInfo = function (request) {
        if (request.saleToPoiRequest.paymentRequest) {
            var applicationInfo = Buffer.from(JSON.stringify(new applicationInfo_1.ApplicationInfo())).toString("base64");
            var saleToAcquirerData = { applicationInfo: applicationInfo };
            var saleData = { saleToAcquirerData: saleToAcquirerData };
            var paymentRequest = { saleData: saleData };
            var saleToPoiRequest = { paymentRequest: paymentRequest };
            var newRequest = { saleToPoiRequest: saleToPoiRequest };
            return mergeDeep_1.default(request, newRequest);
        }
        return request;
    };
    TerminalCloudAPI.prototype.async = function (terminalApiRequest) {
        var request = TerminalCloudAPI.setApplicationInfo(terminalApiRequest);
        return getJsonResponse_1.default(this.terminalApiAsync, terminal_1.Convert.terminalApiRequestToJson(request));
    };
    TerminalCloudAPI.prototype.sync = function (terminalApiRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = TerminalCloudAPI.setApplicationInfo(terminalApiRequest);
                        return [4, getJsonResponse_1.default(this.terminalApiSync, terminal_1.Convert.terminalApiRequestToJson(request))];
                    case 1:
                        response = _a.sent();
                        return [2, terminal_1.Convert.toTerminalApiResponse(JSON.stringify(response))];
                }
            });
        });
    };
    return TerminalCloudAPI;
}(apiKeyAuthenticatedService_1.default));
exports.default = TerminalCloudAPI;
//# sourceMappingURL=terminalCloudAPI.js.map