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


import Service from "../service";
import Client from "../client";
import PlatformsAccount, { AccountTypesEnum }  from "./resource/platforms/account";
import getJsonResponse from "./../helpers/getJsonResponse";
import PlatformsFund from "./resource/platforms/fund";
import PlatformsHostedOnboardingPage from "./resource/platforms/hop";
import PlatformsNotificationConfiguration from "./resource/platforms/notificationConfiguration";

type AccountType = AccountTypesEnum.Accounts
type VerificationType = AccountTypesEnum.Verification
type AccountHoldersType = AccountTypesEnum.AccountHolders

type AccountsAccount = PlatformsAccount<AccountType>
type AccountsVerification = PlatformsAccount<VerificationType>
type AccountsAccountHolders = PlatformsAccount<AccountHoldersType>
type PlatformsTypes = AccountsAccount | AccountsVerification | AccountsAccountHolders | PlatformsFund | PlatformsHostedOnboardingPage

class Platforms extends Service {
    /* PlatformsAccount */
    // Accounts
    private readonly _closeAccount: PlatformsAccount<AccountType>;
    private readonly _updateAccount: PlatformsAccount<AccountType>;
    private readonly _createAccount: PlatformsAccount<AccountType>;
    // Verification
    private readonly _uploadDocument: PlatformsAccount<VerificationType>;
    private readonly _getUploadedDocuments: PlatformsAccount<VerificationType>;
    private readonly _deleteBankAccounts: PlatformsAccount<VerificationType>;
    private readonly _deletePayoutMethods: PlatformsAccount<VerificationType>;
    private readonly _deleteShareholders: PlatformsAccount<VerificationType>;
    private readonly _checkAccountHolder: PlatformsAccount<VerificationType>;
    // Account Holders
    private readonly _createAccountHolder: PlatformsAccount<AccountHoldersType>;
    private readonly _getAccountHolder: PlatformsAccount<AccountHoldersType>;
    private readonly _updateAccountHolder: PlatformsAccount<AccountHoldersType>;
    private readonly _updateAccountHolderState: PlatformsAccount<AccountHoldersType>;
    private readonly _suspendAccountHolder: PlatformsAccount<AccountHoldersType>;
    private readonly _unSuspendAccountHolder: PlatformsAccount<AccountHoldersType>;
    private readonly _closeAccountHolder: PlatformsAccount<AccountHoldersType>;

    /* PlatformsFund */
    private readonly _accountHolderBalance: PlatformsFund
    private readonly _accountHolderTransactionList: PlatformsFund
    private readonly _payoutAccountHolder: PlatformsFund
    private readonly _transferFunds: PlatformsFund
    private readonly _refundFundsTransfer: PlatformsFund
    private readonly _setupBeneficiary: PlatformsFund
    private readonly _refundNotPaidOutTransfers: PlatformsFund

    /* HOP */
    private readonly _getOnboardingUrl: PlatformsHostedOnboardingPage

    /* Notification Configuration */
    private readonly _createNotificationConfiguration: PlatformsNotificationConfiguration
    private readonly _getNotificationConfiguration: PlatformsNotificationConfiguration
    private readonly _getNotificationConfigurationList:  PlatformsNotificationConfiguration
    private readonly _testNotificationConfiguration: PlatformsNotificationConfiguration
    private readonly _updateNotificationConfiguration: PlatformsNotificationConfiguration
    private readonly _deleteNotificationConfiguration: PlatformsNotificationConfiguration


    public constructor(client: Client) {
        super(client);

        // Account
        this._closeAccount = new PlatformsAccount<AccountType>(this, "/closeAccount");
        this._updateAccount = new PlatformsAccount<AccountType>(this, "/updateAccount");
        this._createAccount = new PlatformsAccount<AccountType>(this, "/createAccount");
        this._uploadDocument = new PlatformsAccount<VerificationType>(this, "/uploadDocument");
        this._getUploadedDocuments = new PlatformsAccount<VerificationType>(this, "/getUploadedDocuments");
        this._deleteBankAccounts = new PlatformsAccount<VerificationType>(this, "/deleteBankAccounts");
        this._deletePayoutMethods = new PlatformsAccount<VerificationType>(this, "/deletePayoutMethods");
        this._deleteShareholders = new PlatformsAccount<VerificationType>(this, "/deleteShareholders");
        this._checkAccountHolder = new PlatformsAccount<VerificationType>(this, "/checkAccountHolder");
        this._createAccountHolder = new PlatformsAccount<AccountHoldersType>(this, "/createAccountHolder");
        this._getAccountHolder = new PlatformsAccount<AccountHoldersType>(this, "/getAccountHolder");
        this._updateAccountHolder = new PlatformsAccount<AccountHoldersType>(this, "/updateAccountHolder");
        this._updateAccountHolderState = new PlatformsAccount<AccountHoldersType>(this, "/updateAccountHolderState");
        this._suspendAccountHolder = new PlatformsAccount<AccountHoldersType>(this, "/suspendAccountHolder");
        this._unSuspendAccountHolder = new PlatformsAccount<AccountHoldersType>(this, "/unSuspendAccountHolder");
        this._closeAccountHolder = new PlatformsAccount<AccountHoldersType>(this, "/closeAccountHolder");

        // Fund
        this._accountHolderBalance = new PlatformsFund(this, "/accountHolderBalance");
        this._accountHolderTransactionList = new PlatformsFund(this, "/accountHolderTransactionList");
        this._payoutAccountHolder = new PlatformsFund(this, "/payoutAccountHolder");
        this._transferFunds = new PlatformsFund(this, "/transferFunds");
        this._refundFundsTransfer = new PlatformsFund(this, "/refundFundsTransfer");
        this._setupBeneficiary = new PlatformsFund(this, "/setupBeneficiary");
        this._refundNotPaidOutTransfers = new PlatformsFund(this, "/refundNotPaidOutTransfers");

        // HOP
        this._getOnboardingUrl = new PlatformsHostedOnboardingPage(this, "/getOnboardingUrl");

        // Notification Configuration
        this._createNotificationConfiguration = new PlatformsNotificationConfiguration(this, "/createNotificationConfiguration");
        this._getNotificationConfiguration = new PlatformsNotificationConfiguration(this, "/getNotificationConfiguration");
        this._getNotificationConfigurationList = new PlatformsNotificationConfiguration(this, "/getNotificationConfigurationList");
        this._testNotificationConfiguration = new PlatformsNotificationConfiguration(this, "/testNotificationConfiguration");
        this._updateNotificationConfiguration = new PlatformsNotificationConfiguration(this, "/updateNotificationConfiguration");
        this._deleteNotificationConfiguration = new PlatformsNotificationConfiguration(this, "/deleteNotificationConfigurations");
    }

    createRequest = <T extends PlatformsTypes, U, V>(service: T) => {
        return (request: U): Promise<V> => getJsonResponse<U, V>(service, request);
    }

    public get Account(): {
        getAccountHolder: (request: IPlatformsAccount.GetAccountHolderRequest) => Promise<IPlatformsAccount.GetAccountHolderResponse>;
        getUploadedDocuments: (request: IPlatformsAccount.GetUploadedDocumentsRequest) => Promise<IPlatformsAccount.GetUploadedDocumentsResponse>;
        createAccountHolder: (request: IPlatformsAccount.CreateAccountHolderRequest) => Promise<IPlatformsAccount.CreateAccountHolderResponse>;
        closeAccountHolder: (request: IPlatformsAccount.CloseAccountHolderRequest) => Promise<IPlatformsAccount.CloseAccountHolderResponse>;
        createAccount: (request: IPlatformsAccount.CreateAccountRequest) => Promise<IPlatformsAccount.CreateAccountResponse>;
        deleteBankAccounts: (request: IPlatformsAccount.DeleteBankAccountRequest) => Promise<IPlatformsAccount.GenericResponse>;
        deletePayoutMethods: (request: IPlatformsAccount.DeletePayoutMethodRequest) => Promise<IPlatformsAccount.GenericResponse>;
        updateAccount: (request: IPlatformsAccount.UpdateAccountRequest) => Promise<IPlatformsAccount.UpdateAccountResponse>;
        uploadDocument: (request: IPlatformsAccount.UploadDocumentRequest) => Promise<IPlatformsAccount.GetUploadedDocumentsResponse>;
        unSuspendAccountHolder: (request: IPlatformsAccount.UnSuspendAccountHolderRequest) => Promise<IPlatformsAccount.UnSuspendAccountHolderResponse>;
        closeAccount: (request: IPlatformsAccount.CloseAccountRequest) => Promise<IPlatformsAccount.CloseAccountResponse>;
        suspendAccountHolder: (request: IPlatformsAccount.SuspendAccountHolderRequest) => Promise<IPlatformsAccount.SuspendAccountHolderResponse>;
        updateAccountHolder: (request: IPlatformsAccount.UpdateAccountHolderRequest) => Promise<IPlatformsAccount.UpdateAccountHolderResponse>;
        deleteShareholders: (request: IPlatformsAccount.DeleteShareholderRequest) => Promise<IPlatformsAccount.GenericResponse>;
        checkAccountHolder: (request: IPlatformsAccount.PerformVerificationRequest) => Promise<IPlatformsAccount.GenericResponse>;
        updateAccountHolderState: (request: IPlatformsAccount.UpdateAccountHolderStateRequest) => Promise<IPlatformsAccount.UpdateAccountHolderStateResponse>;
    } {
        const closeAccount = this.createRequest<AccountsAccount, IPlatformsAccount.CloseAccountRequest, IPlatformsAccount.CloseAccountResponse>(this._closeAccount);
        const updateAccount = this.createRequest<AccountsAccount, IPlatformsAccount.UpdateAccountRequest, IPlatformsAccount.UpdateAccountResponse>(this._updateAccount);
        const createAccount = this.createRequest<AccountsAccount, IPlatformsAccount.CreateAccountRequest, IPlatformsAccount.CreateAccountResponse>(this._createAccount);

        const uploadDocument = this.createRequest<AccountsVerification, IPlatformsAccount.UploadDocumentRequest, IPlatformsAccount.GetUploadedDocumentsResponse>(this._uploadDocument);
        const getUploadedDocuments = this.createRequest<AccountsVerification, IPlatformsAccount.GetUploadedDocumentsRequest, IPlatformsAccount.GetUploadedDocumentsResponse>(this._getUploadedDocuments);
        const deleteBankAccounts = this.createRequest<AccountsVerification, IPlatformsAccount.DeleteBankAccountRequest, IPlatformsAccount.GenericResponse>(this._deleteBankAccounts);
        const deletePayoutMethods = this.createRequest<AccountsVerification, IPlatformsAccount.DeletePayoutMethodRequest, IPlatformsAccount.GenericResponse>(this._deletePayoutMethods);
        const deleteShareholders = this.createRequest<AccountsVerification, IPlatformsAccount.DeleteShareholderRequest, IPlatformsAccount.GenericResponse>(this._deleteShareholders);

        const createAccountHolder = this.createRequest<AccountsAccountHolders, IPlatformsAccount.CreateAccountHolderRequest, IPlatformsAccount.CreateAccountHolderResponse>(this._createAccountHolder);
        const getAccountHolder = this.createRequest<AccountsAccountHolders, IPlatformsAccount.GetAccountHolderRequest, IPlatformsAccount.GetAccountHolderResponse>(this._getAccountHolder);
        const updateAccountHolder = this.createRequest<AccountsAccountHolders, IPlatformsAccount.UpdateAccountHolderRequest, IPlatformsAccount.UpdateAccountHolderResponse>(this._updateAccountHolder);
        const updateAccountHolderState = this.createRequest<AccountsAccountHolders, IPlatformsAccount.UpdateAccountHolderStateRequest, IPlatformsAccount.UpdateAccountHolderStateResponse>(this._updateAccountHolderState);
        const suspendAccountHolder = this.createRequest<AccountsAccountHolders, IPlatformsAccount.SuspendAccountHolderRequest, IPlatformsAccount.SuspendAccountHolderResponse>(this._suspendAccountHolder);
        const unSuspendAccountHolder = this.createRequest<AccountsAccountHolders, IPlatformsAccount.UnSuspendAccountHolderRequest, IPlatformsAccount.UnSuspendAccountHolderResponse>(this._unSuspendAccountHolder);
        const closeAccountHolder = this.createRequest<AccountsAccountHolders, IPlatformsAccount.CloseAccountHolderRequest, IPlatformsAccount.CloseAccountHolderResponse>(this._closeAccountHolder);
        const checkAccountHolder = this.createRequest<AccountsVerification, IPlatformsAccount.PerformVerificationRequest, IPlatformsAccount.GenericResponse>(this._checkAccountHolder);

        const accounts = { closeAccount, updateAccount, createAccount };
        const verification = { uploadDocument, getUploadedDocuments, deleteBankAccounts, deletePayoutMethods, deleteShareholders, checkAccountHolder };
        const accountHolders = { createAccountHolder, getAccountHolder, updateAccountHolder, updateAccountHolderState, suspendAccountHolder, unSuspendAccountHolder, closeAccountHolder};

        return {...accounts, ...verification, ...accountHolders };
    }

    public get Fund(): {
        refundNotPaidOutTransfers: (request: IPlatformsFund.RefundNotPaidOutTransfersRequest) => Promise<IPlatformsFund.RefundNotPaidOutTransfersResponse>;
        accountHolderTransactionList: (request: IPlatformsFund.AccountHolderTransactionListRequest) => Promise<IPlatformsFund.AccountHolderTransactionListResponse>;
        setupBeneficiary: (request: IPlatformsFund.SetupBeneficiaryRequest) => Promise<IPlatformsFund.SetupBeneficiaryResponse>;
        transferFunds: (request: IPlatformsFund.TransferFundsRequest) => Promise<IPlatformsFund.TransferFundsResponse>;
        refundFundsTransfer: (request: IPlatformsFund.RefundFundsTransferRequest) => Promise<IPlatformsFund.RefundFundsTransferResponse>;
        payoutAccountHolder: (request: IPlatformsFund.PayoutAccountHolderRequest) => Promise<IPlatformsFund.PayoutAccountHolderResponse>;
        accountHolderBalance: (request: IPlatformsFund.AccountHolderBalanceRequest) => Promise<IPlatformsFund.AccountHolderBalanceResponse>;
    } {
        const accountHolderBalance = this.createRequest<PlatformsFund, IPlatformsFund.AccountHolderBalanceRequest, IPlatformsFund.AccountHolderBalanceResponse>(this._accountHolderBalance);
        const accountHolderTransactionList = this.createRequest<PlatformsFund, IPlatformsFund.AccountHolderTransactionListRequest, IPlatformsFund.AccountHolderTransactionListResponse>(this._accountHolderTransactionList);
        const payoutAccountHolder = this.createRequest<PlatformsFund, IPlatformsFund.PayoutAccountHolderRequest, IPlatformsFund.PayoutAccountHolderResponse>(this._payoutAccountHolder);
        const transferFunds = this.createRequest<PlatformsFund, IPlatformsFund.TransferFundsRequest, IPlatformsFund.TransferFundsResponse>(this._transferFunds);
        const refundFundsTransfer = this.createRequest<PlatformsFund, IPlatformsFund.RefundFundsTransferRequest, IPlatformsFund.RefundFundsTransferResponse>(this._refundFundsTransfer);
        const setupBeneficiary = this.createRequest<PlatformsFund, IPlatformsFund.SetupBeneficiaryRequest, IPlatformsFund.SetupBeneficiaryResponse>(this._setupBeneficiary);
        const refundNotPaidOutTransfers = this.createRequest<PlatformsFund, IPlatformsFund.RefundNotPaidOutTransfersRequest, IPlatformsFund.RefundNotPaidOutTransfersResponse>(this._refundNotPaidOutTransfers);

        return { accountHolderBalance, accountHolderTransactionList, payoutAccountHolder, refundFundsTransfer, transferFunds, setupBeneficiary, refundNotPaidOutTransfers };
    }

    public get HostedOnboardingPage(): { getOnboardingUrl: (request: IPlatformsHostedOnboardingPage.GetOnboardingUrlRequest) => Promise<IPlatformsHostedOnboardingPage.GetOnboardingUrlResponse> } {
        const getOnboardingUrl = this.createRequest<PlatformsHostedOnboardingPage, IPlatformsHostedOnboardingPage.GetOnboardingUrlRequest, IPlatformsHostedOnboardingPage.GetOnboardingUrlResponse>(this._getOnboardingUrl);

        return { getOnboardingUrl };
    }

    public get NotificationConfiguration(): {
        createNotificationConfiguration: (request: IPlatformsNotificationConfiguration.CreateNotificationConfigurationRequest) => Promise<IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>;
        updateNotificationConfiguration: (request: IPlatformsNotificationConfiguration.UpdateNotificationConfigurationRequest) => Promise<IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>;
        getNotificationConfiguration: (request: IPlatformsNotificationConfiguration.GetNotificationConfigurationRequest) => Promise<IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>;
        testNotificationConfiguration: (request: IPlatformsNotificationConfiguration.TestNotificationConfigurationRequest) => Promise<IPlatformsNotificationConfiguration.TestNotificationConfigurationResponse>;
        getNotificationConfigurationList: (request: {}) => Promise<IPlatformsNotificationConfiguration.GetNotificationConfigurationListResponse>;
        deleteNotificationConfigurations: (request: IPlatformsNotificationConfiguration.DeleteNotificationConfigurationRequest) => Promise<IPlatformsNotificationConfiguration.GenericResponse>;
    } {
        const createNotificationConfiguration = this.createRequest<PlatformsHostedOnboardingPage, IPlatformsNotificationConfiguration.CreateNotificationConfigurationRequest, IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>(this._createNotificationConfiguration);
        const getNotificationConfiguration = this.createRequest<PlatformsHostedOnboardingPage, IPlatformsNotificationConfiguration.GetNotificationConfigurationRequest, IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>(this._getNotificationConfiguration);
        const getNotificationConfigurationList = this.createRequest<PlatformsHostedOnboardingPage, {}, IPlatformsNotificationConfiguration.GetNotificationConfigurationListResponse>(this._getNotificationConfigurationList);
        const testNotificationConfiguration = this.createRequest<PlatformsHostedOnboardingPage, IPlatformsNotificationConfiguration.TestNotificationConfigurationRequest, IPlatformsNotificationConfiguration.TestNotificationConfigurationResponse>(this._testNotificationConfiguration);
        const updateNotificationConfiguration = this.createRequest<PlatformsHostedOnboardingPage, IPlatformsNotificationConfiguration.UpdateNotificationConfigurationRequest, IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>(this._updateNotificationConfiguration);
        const deleteNotificationConfigurations = this.createRequest<PlatformsHostedOnboardingPage, IPlatformsNotificationConfiguration.DeleteNotificationConfigurationRequest, IPlatformsNotificationConfiguration.GenericResponse>(this._deleteNotificationConfiguration);

        return { createNotificationConfiguration, getNotificationConfiguration, getNotificationConfigurationList, testNotificationConfiguration, updateNotificationConfiguration, deleteNotificationConfigurations };
    }
}

export default Platforms;

