"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nock_1 = __importDefault(require("nock"));
var ts_auto_mock_1 = require("ts-auto-mock");
var base_1 = require("../__mocks__/base");
var documentContent_1 = require("../__mocks__/platforms/documentContent");
var index_1 = require("../index");
var client;
var platforms;
var scope;
var accountHolder;
var account;
var accountHolderToSuspend;
var accountToClose;
var accountHolderToUnSuspend;
var accountHolderToClose;
var notificationConfigurationToRetrieve;
var generateRandomCode = function () { return Math.floor(Math.random() * Date.now()).toString(); };
var accountHolderDetails = {
    email: "random_email@example.com",
    fullPhoneNumber: "312030291928",
    webAddress: "http://example.com",
    individualDetails: {
        name: {
            firstName: "John",
            gender: "MALE",
            lastName: "Smith"
        }
    },
    address: {
        country: "NL"
    },
};
var notificationConfigurationDetails = {
    active: true,
    notifyURL: "https://www.adyen.com/notification-handler",
    eventConfigs: [
        {
            eventType: "ACCOUNT_HOLDER_VERIFICATION",
            includeMode: "INCLUDE"
        }
    ],
    sslProtocol: "SSL"
};
var assertError = function (e) {
    var _a, _b;
    if (((_a = e.responseBody) === null || _a === void 0 ? void 0 : _a.includes("Account code does not exist or invalid")) || ((_b = e.responseBody) === null || _b === void 0 ? void 0 : _b.includes("Failed to retrieve account holder"))) {
        return;
    }
    fail(e);
};
beforeEach(function () {
    if (!nock_1.default.isActive()) {
        nock_1.default.activate();
    }
    client = base_1.createBasicAuthClient();
    client.config.password = process.env.ADYEN_MARKETPLACE_PASSWORD;
    client.config.username = process.env.ADYEN_MARKETPLACE_USER;
    scope = nock_1.default(client.config.marketPayEndpoint);
    platforms = new index_1.Platforms(client);
});
afterEach(function () {
    nock_1.default.cleanAll();
});
describe("Platforms Test", function () {
    describe("Account", function () {
        describe("Accounts", function () {
            var _this = this;
            var cases = [
                ["closeAccount", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["updateAccount", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["createAccount", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["uploadDocument", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["getUploadedDocuments", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["deleteBankAccounts", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["deletePayoutMethods", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["deleteShareholders", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["checkAccountHolder", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["createAccountHolder", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["getAccountHolder", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["updateAccountHolder", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["updateAccountHolderState", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["suspendAccountHolder", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["unSuspendAccountHolder", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
                ["closeAccountHolder", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
            ];
            test.each(cases)("should %p", function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(_this, void 0, void 0, function () {
                    var service, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                service = platforms.Account;
                                scope.post("/Account/" + index_1.Client.MARKETPAY_ACCOUNT_API_VERSION + "//" + args[0]).reply(200, args[2]);
                                return [4, service[args[0]](args[1])];
                            case 1:
                                result = _a.sent();
                                expect(result).toMatchObject(args[2]);
                                return [2];
                        }
                    });
                });
            });
        });
    });
    describe("Fund", function () {
        var _this = this;
        var cases = [
            ["accountHolderBalance", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
            ["accountHolderTransactionList", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
            ["payoutAccountHolder", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
            ["transferFunds", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
            ["refundFundsTransfer", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
            ["setupBeneficiary", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
            ["refundNotPaidOutTransfers", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
        ];
        test.each(cases)("should %p", function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(_this, void 0, void 0, function () {
                var fund, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fund = platforms.Fund;
                            scope.post("/Fund/" + index_1.Client.MARKETPAY_FUND_API_VERSION + "//" + args[0]).reply(200, args[2]);
                            return [4, fund[args[0]](args[1])];
                        case 1:
                            result = _a.sent();
                            expect(result).toMatchObject(args[2]);
                            return [2];
                    }
                });
            });
        });
    });
    describe("Notification Configuration", function () {
        var _this = this;
        var cases = [
            ["createNotificationConfiguration", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
            ["getNotificationConfiguration", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
            ["getNotificationConfigurationList", {}, ts_auto_mock_1.createMock()],
            ["testNotificationConfiguration", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
            ["updateNotificationConfiguration", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
            ["deleteNotificationConfigurations", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()],
        ];
        test.each(cases)("should %p", function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(_this, void 0, void 0, function () {
                var notificationConfiguration, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            notificationConfiguration = platforms.NotificationConfiguration;
                            scope.post("/Notification/" + index_1.Client.MARKETPAY_NOTIFICATION_API_VERSION + "//" + args[0]).reply(200, args[2]);
                            return [4, notificationConfiguration[args[0]](args[1])];
                        case 1:
                            result = _a.sent();
                            expect(result).toMatchObject(args[2]);
                            return [2];
                    }
                });
            });
        });
    });
    describe("Hop", function () {
        var _this = this;
        var cases = [
            ["getOnboardingUrl", ts_auto_mock_1.createMock(), ts_auto_mock_1.createMock()]
        ];
        test.each(cases)("should %p", function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(_this, void 0, void 0, function () {
                var hostedOnboardingPage, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            hostedOnboardingPage = platforms.HostedOnboardingPage;
                            scope.post("/Hop/" + index_1.Client.MARKETPAY_HOP_API_VERSION + "//" + args[0]).reply(200, args[2]);
                            return [4, hostedOnboardingPage[args[0]](args[1])];
                        case 1:
                            result = _a.sent();
                            expect(result).toMatchObject(args[2]);
                            return [2];
                    }
                });
            });
        });
    });
});
describe.skip("Platforms Test E2E", function () {
    var _this = this;
    beforeAll(function (done) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, platforms.Account.createAccountHolder({
                        accountHolderCode: generateRandomCode(),
                        accountHolderDetails: accountHolderDetails,
                        legalEntity: "Individual",
                    })];
                case 1:
                    accountHolder = _a.sent();
                    return [4, platforms.Account.createAccount({
                            accountHolderCode: generateRandomCode(),
                            description: "This is a new account",
                            metadata: { meta: "data" },
                            payoutSchedule: "WEEKLY"
                        })];
                case 2:
                    account = _a.sent();
                    return [4, platforms.Account.createAccountHolder({
                            accountHolderCode: generateRandomCode(),
                            accountHolderDetails: accountHolderDetails,
                            legalEntity: "Individual"
                        })];
                case 3:
                    accountHolderToSuspend = _a.sent();
                    return [4, platforms.Account.createAccount({
                            accountHolderCode: generateRandomCode(),
                            description: "This is a new account",
                            metadata: { meta: "data" },
                            payoutSchedule: "WEEKLY"
                        })];
                case 4:
                    accountToClose = _a.sent();
                    return [4, platforms.Account.createAccountHolder({
                            accountHolderCode: generateRandomCode(),
                            accountHolderDetails: accountHolderDetails,
                            legalEntity: "Individual"
                        })];
                case 5:
                    accountHolderToUnSuspend = _a.sent();
                    return [4, platforms.Account.suspendAccountHolder({ accountHolderCode: accountHolderToUnSuspend.accountHolderCode })];
                case 6:
                    _a.sent();
                    return [4, platforms.Account.createAccountHolder({
                            accountHolderCode: generateRandomCode(),
                            accountHolderDetails: accountHolderDetails,
                            legalEntity: "Individual"
                        })];
                case 7:
                    accountHolderToClose = _a.sent();
                    return [4, platforms.NotificationConfiguration.createNotificationConfiguration({
                            configurationDetails: __assign(__assign({}, notificationConfigurationDetails), { description: "" + generateRandomCode() })
                        })];
                case 8:
                    notificationConfigurationToRetrieve = _a.sent();
                    done();
                    return [2];
            }
        });
    }); });
    describe("Account", function () {
        describe("Accounts E2E", function () {
            it("should create account holder", function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        nock_1.default.restore();
                        try {
                            expect(accountHolder.pspReference).toBeDefined();
                        }
                        catch (e) {
                            assertError(e);
                        }
                        return [2];
                    });
                });
            });
            it("should get account holder", function () {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                nock_1.default.restore();
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4, platforms.Account.getAccountHolder({
                                        accountHolderCode: accountHolder.accountHolderCode,
                                    })];
                            case 2:
                                result = _a.sent();
                                expect(result.accountHolderDetails.email).toEqual("random_email@example.com");
                                return [3, 4];
                            case 3:
                                e_1 = _a.sent();
                                assertError(e_1);
                                return [3, 4];
                            case 4: return [2];
                        }
                    });
                });
            });
            it("should update account holder", function () {
                var _a;
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_2;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                nock_1.default.restore();
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                return [4, platforms.Account.updateAccountHolder({
                                        accountHolderCode: accountHolder.accountHolderCode,
                                        accountHolderDetails: __assign(__assign({}, accountHolderDetails), { address: {
                                                country: "BE"
                                            } })
                                    })];
                            case 2:
                                result = _b.sent();
                                expect((_a = result.accountHolderDetails.address) === null || _a === void 0 ? void 0 : _a.country).toEqual("BE");
                                return [3, 4];
                            case 3:
                                e_2 = _b.sent();
                                assertError(e_2);
                                return [3, 4];
                            case 4: return [2];
                        }
                    });
                });
            });
            it("should check account holder", function () {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                nock_1.default.restore();
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4, platforms.Account.checkAccountHolder({
                                        accountHolderCode: accountHolder.accountHolderCode,
                                        accountStateType: "Processing",
                                        tier: 2
                                    })];
                            case 2:
                                result = _a.sent();
                                expect(result.resultCode).toEqual("Success");
                                return [3, 4];
                            case 3:
                                e_3 = _a.sent();
                                assertError(e_3);
                                return [3, 4];
                            case 4: return [2];
                        }
                    });
                });
            });
            it("should create an account", function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        nock_1.default.restore();
                        try {
                            expect(account.pspReference).toBeDefined();
                        }
                        catch (e) {
                            assertError(e);
                        }
                        return [2];
                    });
                });
            });
            it("should upload verification document", function () {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                nock_1.default.restore();
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4, platforms.Account.uploadDocument({
                                        documentContent: documentContent_1.documentContent,
                                        documentDetail: {
                                            accountHolderCode: account.accountHolderCode,
                                            documentType: "ID_CARD_FRONT",
                                            description: "test document 000",
                                            filename: "IDCardFront.png"
                                        }
                                    })];
                            case 2:
                                result = _a.sent();
                                expect(result.pspReference).toBeDefined();
                                return [3, 4];
                            case 3:
                                e_4 = _a.sent();
                                assertError(e_4);
                                return [3, 4];
                            case 4: return [2];
                        }
                    });
                });
            });
            it("should get uploaded verification documents", function () {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_5;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                nock_1.default.restore();
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 4, , 5]);
                                return [4, platforms.Account.uploadDocument({
                                        documentContent: documentContent_1.documentContent,
                                        documentDetail: {
                                            accountHolderCode: account.accountHolderCode,
                                            documentType: "ID_CARD_FRONT",
                                            description: "test document 000",
                                            filename: "IDCardFront.png"
                                        }
                                    })];
                            case 2:
                                _a.sent();
                                return [4, platforms.Account.getUploadedDocuments({
                                        accountHolderCode: account.accountHolderCode,
                                    })];
                            case 3:
                                result = _a.sent();
                                expect(result.documentDetails[0].filename).toEqual("IDCardFront.png");
                                return [3, 5];
                            case 4:
                                e_5 = _a.sent();
                                assertError(e_5);
                                return [3, 5];
                            case 5: return [2];
                        }
                    });
                });
            });
            it("should close account", function () {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_6;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                nock_1.default.restore();
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4, platforms.Account.closeAccount({
                                        accountCode: accountToClose.accountCode
                                    })];
                            case 2:
                                result = _a.sent();
                                expect(result.status).toEqual("Closed");
                                return [3, 4];
                            case 3:
                                e_6 = _a.sent();
                                assertError(e_6);
                                return [3, 4];
                            case 4: return [2];
                        }
                    });
                });
            });
            it("should suspend account holder", function () {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_7;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                nock_1.default.restore();
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4, platforms.Account.suspendAccountHolder({
                                        accountHolderCode: accountHolderToSuspend.accountHolderCode,
                                    })];
                            case 2:
                                result = _a.sent();
                                expect(result.pspReference).toBeDefined();
                                return [3, 4];
                            case 3:
                                e_7 = _a.sent();
                                assertError(e_7);
                                return [3, 4];
                            case 4: return [2];
                        }
                    });
                });
            });
            it("should unsuspend account holder", function () {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_8;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                nock_1.default.restore();
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4, platforms.Account.unSuspendAccountHolder({ accountHolderCode: accountHolderToUnSuspend.accountHolderCode })];
                            case 2:
                                result = _a.sent();
                                expect(result.pspReference).toBeDefined();
                                return [3, 4];
                            case 3:
                                e_8 = _a.sent();
                                assertError(e_8);
                                return [3, 4];
                            case 4: return [2];
                        }
                    });
                });
            });
            it("should update account holder state", function () {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_9;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                nock_1.default.restore();
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4, platforms.Account.updateAccountHolderState({
                                        accountHolderCode: accountHolder.accountHolderCode,
                                        disable: false,
                                        stateType: "Payout"
                                    })];
                            case 2:
                                result = _a.sent();
                                expect(result.pspReference).toBeDefined();
                                return [3, 4];
                            case 3:
                                e_9 = _a.sent();
                                assertError(e_9);
                                return [3, 4];
                            case 4: return [2];
                        }
                    });
                });
            });
            it("should close account holder", function () {
                return __awaiter(this, void 0, void 0, function () {
                    var result, e_10;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                nock_1.default.restore();
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4, platforms.Account.closeAccountHolder({
                                        accountHolderCode: accountHolderToClose.accountHolderCode
                                    })];
                            case 2:
                                result = _a.sent();
                                expect(result.pspReference).toBeDefined();
                                return [3, 4];
                            case 3:
                                e_10 = _a.sent();
                                assertError(e_10);
                                return [3, 4];
                            case 4: return [2];
                        }
                    });
                });
            });
        });
    });
    describe("Fund", function () {
        it("should retrieve the balance of an account holder", function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, e_11;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            nock_1.default.restore();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, platforms.Fund.accountHolderBalance({
                                    accountHolderCode: generateRandomCode()
                                })];
                        case 2:
                            result = _a.sent();
                            expect(result.balancePerAccount[0].detailBalance).toBeDefined();
                            return [3, 4];
                        case 3:
                            e_11 = _a.sent();
                            assertError(e_11);
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        });
        it("should retrieve a list of transaction for an account holder's accounts", function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, e_12;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            nock_1.default.restore();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, platforms.Fund.accountHolderTransactionList({
                                    accountHolderCode: generateRandomCode()
                                })];
                        case 2:
                            result = _a.sent();
                            expect(result.accountTransactionLists[0].transactions).toBeDefined();
                            return [3, 4];
                        case 3:
                            e_12 = _a.sent();
                            assertError(e_12);
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        });
        it("should transfer funds between two accounts", function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, e_13;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            nock_1.default.restore();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, platforms.Fund.transferFunds({
                                    sourceAccountCode: "8515883280985939",
                                    destinationAccountCode: "8815883278206345",
                                    amount: {
                                        currency: "EUR",
                                        value: 1
                                    },
                                    transferCode: "SUBSCRIPTION"
                                })];
                        case 2:
                            result = _a.sent();
                            expect(result.pspReference).toBeDefined();
                            return [3, 4];
                        case 3:
                            e_13 = _a.sent();
                            assertError(e_13);
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        });
    });
    describe("Notification Configuration", function () {
        var configurationID;
        it("should retrieve all Notification Configurations", function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, resultStr, e_14;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            nock_1.default.restore();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, platforms.NotificationConfiguration.getNotificationConfigurationList({})];
                        case 2:
                            result = _a.sent();
                            resultStr = JSON.stringify(result);
                            expect(resultStr.includes("pspReference")).toBeTruthy();
                            return [3, 4];
                        case 3:
                            e_14 = _a.sent();
                            assertError(e_14);
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        });
        it("should create a Notification Configuration", function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, e_15;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            nock_1.default.restore();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, platforms.NotificationConfiguration.createNotificationConfiguration({
                                    configurationDetails: __assign(__assign({}, notificationConfigurationDetails), { description: "" + generateRandomCode() })
                                })];
                        case 2:
                            result = _a.sent();
                            expect(result.configurationDetails.active).toBeTruthy();
                            return [3, 4];
                        case 3:
                            e_15 = _a.sent();
                            assertError(e_15);
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        });
        it("should retrieve a Notification Configuration", function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, e_16;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            nock_1.default.restore();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            configurationID = notificationConfigurationToRetrieve.configurationDetails.notificationId;
                            return [4, platforms.NotificationConfiguration.getNotificationConfiguration({
                                    notificationId: configurationID
                                })];
                        case 2:
                            result = _a.sent();
                            expect(result.configurationDetails.notifyURL).toEqual("https://www.adyen.com/notification-handler");
                            return [3, 4];
                        case 3:
                            e_16 = _a.sent();
                            assertError(e_16);
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        });
        it("should update a Notification Configuration", function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, accountHolderVerification, e_17;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            nock_1.default.restore();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, platforms.NotificationConfiguration.updateNotificationConfiguration({
                                    configurationDetails: {
                                        eventConfigs: [
                                            {
                                                eventType: "ACCOUNT_HOLDER_VERIFICATION",
                                                includeMode: "EXCLUDE"
                                            },
                                            {
                                                "eventType": "ACCOUNT_CREATED",
                                                "includeMode": "INCLUDE"
                                            }
                                        ],
                                        notifyURL: "https://www.adyen.com/notification-handler",
                                        notificationId: configurationID
                                    }
                                })];
                        case 2:
                            result = _a.sent();
                            accountHolderVerification = result.configurationDetails.eventConfigs.filter(function (event) { return event.eventType === "ACCOUNT_HOLDER_VERIFICATION"; })[0];
                            expect(accountHolderVerification.includeMode).toEqual("EXCLUDE");
                            return [3, 4];
                        case 3:
                            e_17 = _a.sent();
                            assertError(e_17);
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        });
        it("should delete a Notification Configuration", function () {
            return __awaiter(this, void 0, void 0, function () {
                var notificationIds, result, e_18;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            nock_1.default.restore();
                            notificationIds = [];
                            notificationIds.push(configurationID);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, platforms.NotificationConfiguration.deleteNotificationConfigurations({ notificationIds: notificationIds })];
                        case 2:
                            result = _a.sent();
                            expect(result.pspReference).toBeDefined();
                            return [3, 4];
                        case 3:
                            e_18 = _a.sent();
                            assertError(e_18);
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            });
        });
    });
});
//# sourceMappingURL=platforms.spec.js.map