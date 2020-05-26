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
import Service from "../service";
import PlatformsAccount from "./resource/platforms/account";
import getJsonResponse from "./../helpers/getJsonResponse";
import PlatformsFund from "./resource/platforms/fund";
import PlatformsHostedOnboardingPage from "./resource/platforms/hop";
import PlatformsNotificationConfiguration from "./resource/platforms/notificationConfiguration";
var Platforms = (function (_super) {
    __extends(Platforms, _super);
    function Platforms(client) {
        var _this = _super.call(this, client) || this;
        _this.createRequest = function (service) {
            return function (request) { return getJsonResponse(service, request); };
        };
        _this._closeAccount = new PlatformsAccount(_this, "/closeAccount");
        _this._updateAccount = new PlatformsAccount(_this, "/updateAccount");
        _this._createAccount = new PlatformsAccount(_this, "/createAccount");
        _this._uploadDocument = new PlatformsAccount(_this, "/uploadDocument");
        _this._getUploadedDocuments = new PlatformsAccount(_this, "/getUploadedDocuments");
        _this._deleteBankAccounts = new PlatformsAccount(_this, "/deleteBankAccounts");
        _this._deletePayoutMethods = new PlatformsAccount(_this, "/deletePayoutMethods");
        _this._deleteShareholders = new PlatformsAccount(_this, "/deleteShareholders");
        _this._checkAccountHolder = new PlatformsAccount(_this, "/checkAccountHolder");
        _this._createAccountHolder = new PlatformsAccount(_this, "/createAccountHolder");
        _this._getAccountHolder = new PlatformsAccount(_this, "/getAccountHolder");
        _this._updateAccountHolder = new PlatformsAccount(_this, "/updateAccountHolder");
        _this._updateAccountHolderState = new PlatformsAccount(_this, "/updateAccountHolderState");
        _this._suspendAccountHolder = new PlatformsAccount(_this, "/suspendAccountHolder");
        _this._unSuspendAccountHolder = new PlatformsAccount(_this, "/unSuspendAccountHolder");
        _this._closeAccountHolder = new PlatformsAccount(_this, "/closeAccountHolder");
        _this._accountHolderBalance = new PlatformsFund(_this, "/accountHolderBalance");
        _this._accountHolderTransactionList = new PlatformsFund(_this, "/accountHolderTransactionList");
        _this._payoutAccountHolder = new PlatformsFund(_this, "/payoutAccountHolder");
        _this._transferFunds = new PlatformsFund(_this, "/transferFunds");
        _this._refundFundsTransfer = new PlatformsFund(_this, "/refundFundsTransfer");
        _this._setupBeneficiary = new PlatformsFund(_this, "/setupBeneficiary");
        _this._refundNotPaidOutTransfers = new PlatformsFund(_this, "/refundNotPaidOutTransfers");
        _this._getOnboardingUrl = new PlatformsHostedOnboardingPage(_this, "/getOnboardingUrl");
        _this._createNotificationConfiguration = new PlatformsNotificationConfiguration(_this, "/createNotificationConfiguration");
        _this._getNotificationConfiguration = new PlatformsNotificationConfiguration(_this, "/getNotificationConfiguration");
        _this._getNotificationConfigurationList = new PlatformsNotificationConfiguration(_this, "/getNotificationConfigurationList");
        _this._testNotificationConfiguration = new PlatformsNotificationConfiguration(_this, "/testNotificationConfiguration");
        _this._updateNotificationConfiguration = new PlatformsNotificationConfiguration(_this, "/updateNotificationConfiguration");
        _this._deleteNotificationConfiguration = new PlatformsNotificationConfiguration(_this, "/deleteNotificationConfigurations");
        return _this;
    }
    Object.defineProperty(Platforms.prototype, "Account", {
        get: function () {
            var closeAccount = this.createRequest(this._closeAccount);
            var updateAccount = this.createRequest(this._updateAccount);
            var createAccount = this.createRequest(this._createAccount);
            var uploadDocument = this.createRequest(this._uploadDocument);
            var getUploadedDocuments = this.createRequest(this._getUploadedDocuments);
            var deleteBankAccounts = this.createRequest(this._deleteBankAccounts);
            var deletePayoutMethods = this.createRequest(this._deletePayoutMethods);
            var deleteShareholders = this.createRequest(this._deleteShareholders);
            var createAccountHolder = this.createRequest(this._createAccountHolder);
            var getAccountHolder = this.createRequest(this._getAccountHolder);
            var updateAccountHolder = this.createRequest(this._updateAccountHolder);
            var updateAccountHolderState = this.createRequest(this._updateAccountHolderState);
            var suspendAccountHolder = this.createRequest(this._suspendAccountHolder);
            var unSuspendAccountHolder = this.createRequest(this._unSuspendAccountHolder);
            var closeAccountHolder = this.createRequest(this._closeAccountHolder);
            var checkAccountHolder = this.createRequest(this._checkAccountHolder);
            var accounts = { closeAccount: closeAccount, updateAccount: updateAccount, createAccount: createAccount };
            var verification = { uploadDocument: uploadDocument, getUploadedDocuments: getUploadedDocuments, deleteBankAccounts: deleteBankAccounts, deletePayoutMethods: deletePayoutMethods, deleteShareholders: deleteShareholders, checkAccountHolder: checkAccountHolder };
            var accountHolders = { createAccountHolder: createAccountHolder, getAccountHolder: getAccountHolder, updateAccountHolder: updateAccountHolder, updateAccountHolderState: updateAccountHolderState, suspendAccountHolder: suspendAccountHolder, unSuspendAccountHolder: unSuspendAccountHolder, closeAccountHolder: closeAccountHolder };
            return __assign(__assign(__assign({}, accounts), verification), accountHolders);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Platforms.prototype, "Fund", {
        get: function () {
            var accountHolderBalance = this.createRequest(this._accountHolderBalance);
            var accountHolderTransactionList = this.createRequest(this._accountHolderTransactionList);
            var payoutAccountHolder = this.createRequest(this._payoutAccountHolder);
            var transferFunds = this.createRequest(this._transferFunds);
            var refundFundsTransfer = this.createRequest(this._refundFundsTransfer);
            var setupBeneficiary = this.createRequest(this._setupBeneficiary);
            var refundNotPaidOutTransfers = this.createRequest(this._refundNotPaidOutTransfers);
            return { accountHolderBalance: accountHolderBalance, accountHolderTransactionList: accountHolderTransactionList, payoutAccountHolder: payoutAccountHolder, refundFundsTransfer: refundFundsTransfer, transferFunds: transferFunds, setupBeneficiary: setupBeneficiary, refundNotPaidOutTransfers: refundNotPaidOutTransfers };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Platforms.prototype, "HostedOnboardingPage", {
        get: function () {
            var getOnboardingUrl = this.createRequest(this._getOnboardingUrl);
            return { getOnboardingUrl: getOnboardingUrl };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Platforms.prototype, "NotificationConfiguration", {
        get: function () {
            var createNotificationConfiguration = this.createRequest(this._createNotificationConfiguration);
            var getNotificationConfiguration = this.createRequest(this._getNotificationConfiguration);
            var getNotificationConfigurationList = this.createRequest(this._getNotificationConfigurationList);
            var testNotificationConfiguration = this.createRequest(this._testNotificationConfiguration);
            var updateNotificationConfiguration = this.createRequest(this._updateNotificationConfiguration);
            var deleteNotificationConfigurations = this.createRequest(this._deleteNotificationConfiguration);
            return { createNotificationConfiguration: createNotificationConfiguration, getNotificationConfiguration: getNotificationConfiguration, getNotificationConfigurationList: getNotificationConfigurationList, testNotificationConfiguration: testNotificationConfiguration, updateNotificationConfiguration: updateNotificationConfiguration, deleteNotificationConfigurations: deleteNotificationConfigurations };
        },
        enumerable: false,
        configurable: true
    });
    return Platforms;
}(Service));
export default Platforms;
//# sourceMappingURL=platforms.js.map