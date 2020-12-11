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
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
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

type AccountType = AccountTypesEnum.Accounts;
type VerificationType = AccountTypesEnum.Verification;
type AccountHoldersType = AccountTypesEnum.AccountHolders;

type AccountsAccount = PlatformsAccount<AccountType>;
type AccountsVerification = PlatformsAccount<VerificationType>;
type AccountsAccountHolders = PlatformsAccount<AccountHoldersType>;
type PlatformsTypes = AccountsAccount | AccountsVerification | AccountsAccountHolders | PlatformsFund | PlatformsHostedOnboardingPage;
type PostRequest<T, U> = { post: (request: T) => Promise<U> };

class Platforms extends Service {
    /* PlatformsAccount */
    // Accounts
    public readonly closeAccount: PlatformsAccount<AccountType>;
    public readonly updateAccount: PlatformsAccount<AccountType>;
    public readonly createAccount: PlatformsAccount<AccountType>;
    // Verification
    public readonly uploadDocument: PlatformsAccount<VerificationType>;
    public readonly getUploadedDocuments: PlatformsAccount<VerificationType>;
    public readonly deleteBankAccounts: PlatformsAccount<VerificationType>;
    public readonly deletePayoutMethods: PlatformsAccount<VerificationType>;
    public readonly deleteShareholders: PlatformsAccount<VerificationType>;
    public readonly checkAccountHolder: PlatformsAccount<VerificationType>;
    // Account Holders
    public readonly createAccountHolder: PlatformsAccount<AccountHoldersType>;
    public readonly getAccountHolder: PlatformsAccount<AccountHoldersType>;
    public readonly updateAccountHolder: PlatformsAccount<AccountHoldersType>;
    public readonly updateAccountHolderState: PlatformsAccount<AccountHoldersType>;
    public readonly suspendAccountHolder: PlatformsAccount<AccountHoldersType>;
    public readonly unSuspendAccountHolder: PlatformsAccount<AccountHoldersType>;
    public readonly closeAccountHolder: PlatformsAccount<AccountHoldersType>;

    /* PlatformsFund */
    public readonly accountHolderBalance: PlatformsFund;
    public readonly accountHolderTransactionList: PlatformsFund;
    public readonly payoutAccountHolder: PlatformsFund;
    public readonly transferFunds: PlatformsFund;
    public readonly refundFundsTransfer: PlatformsFund;
    public readonly setupBeneficiary: PlatformsFund;
    public readonly refundNotPaidOutTransfers: PlatformsFund;

    /* HOP */
    public readonly getOnboardingUrl: PlatformsHostedOnboardingPage;

    /* Notification Configuration */
    public readonly createNotificationConfiguration: PlatformsNotificationConfiguration;
    public readonly getNotificationConfiguration: PlatformsNotificationConfiguration;
    public readonly getNotificationConfigurationList: PlatformsNotificationConfiguration;
    public readonly testNotificationConfiguration: PlatformsNotificationConfiguration;
    public readonly updateNotificationConfiguration: PlatformsNotificationConfiguration;
    public readonly deleteNotificationConfiguration: PlatformsNotificationConfiguration;


    public constructor(client: Client) {
        super(client);

        // Account
        this.closeAccount = new PlatformsAccount<AccountType>(this, "/closeAccount");
        this.updateAccount = new PlatformsAccount<AccountType>(this, "/updateAccount");
        this.createAccount = new PlatformsAccount<AccountType>(this, "/createAccount");
        this.uploadDocument = new PlatformsAccount<VerificationType>(this, "/uploadDocument");
        this.getUploadedDocuments = new PlatformsAccount<VerificationType>(this, "/getUploadedDocuments");
        this.deleteBankAccounts = new PlatformsAccount<VerificationType>(this, "/deleteBankAccounts");
        this.deletePayoutMethods = new PlatformsAccount<VerificationType>(this, "/deletePayoutMethods");
        this.deleteShareholders = new PlatformsAccount<VerificationType>(this, "/deleteShareholders");
        this.checkAccountHolder = new PlatformsAccount<VerificationType>(this, "/checkAccountHolder");
        this.createAccountHolder = new PlatformsAccount<AccountHoldersType>(this, "/createAccountHolder");
        this.getAccountHolder = new PlatformsAccount<AccountHoldersType>(this, "/getAccountHolder");
        this.updateAccountHolder = new PlatformsAccount<AccountHoldersType>(this, "/updateAccountHolder");
        this.updateAccountHolderState = new PlatformsAccount<AccountHoldersType>(this, "/updateAccountHolderState");
        this.suspendAccountHolder = new PlatformsAccount<AccountHoldersType>(this, "/suspendAccountHolder");
        this.unSuspendAccountHolder = new PlatformsAccount<AccountHoldersType>(this, "/unSuspendAccountHolder");
        this.closeAccountHolder = new PlatformsAccount<AccountHoldersType>(this, "/closeAccountHolder");

        // Fund
        this.accountHolderBalance = new PlatformsFund(this, "/accountHolderBalance");
        this.accountHolderTransactionList = new PlatformsFund(this, "/accountHolderTransactionList");
        this.payoutAccountHolder = new PlatformsFund(this, "/payoutAccountHolder");
        this.transferFunds = new PlatformsFund(this, "/transferFunds");
        this.refundFundsTransfer = new PlatformsFund(this, "/refundFundsTransfer");
        this.setupBeneficiary = new PlatformsFund(this, "/setupBeneficiary");
        this.refundNotPaidOutTransfers = new PlatformsFund(this, "/refundNotPaidOutTransfers");

        // HOP
        this.getOnboardingUrl = new PlatformsHostedOnboardingPage(this, "/getOnboardingUrl");

        // Notification Configuration
        this.createNotificationConfiguration = new PlatformsNotificationConfiguration(this, "/createNotificationConfiguration");
        this.getNotificationConfiguration = new PlatformsNotificationConfiguration(this, "/getNotificationConfiguration");
        this.getNotificationConfigurationList = new PlatformsNotificationConfiguration(this, "/getNotificationConfigurationList");
        this.testNotificationConfiguration = new PlatformsNotificationConfiguration(this, "/testNotificationConfiguration");
        this.updateNotificationConfiguration = new PlatformsNotificationConfiguration(this, "/updateNotificationConfiguration");
        this.deleteNotificationConfiguration = new PlatformsNotificationConfiguration(this, "/deleteNotificationConfigurations");
    }

    createPostRequest = <T extends PlatformsTypes, U, V>(service: T): PostRequest<U, V> => {
        return { post: (request: U): Promise<V> => getJsonResponse.call<T, [U], Promise<V>>(service, request) };
    }

    public get Account(): {
        getAccountHolder: PostRequest<IPlatformsAccount.GetAccountHolderRequest, IPlatformsAccount.GetAccountHolderResponse>;
        getUploadedDocuments: PostRequest<IPlatformsAccount.GetUploadedDocumentsRequest, IPlatformsAccount.GetUploadedDocumentsResponse>;
        createAccountHolder: PostRequest<IPlatformsAccount.CreateAccountHolderRequest, IPlatformsAccount.CreateAccountHolderResponse>;
        closeAccountHolder: PostRequest<IPlatformsAccount.CloseAccountHolderRequest, IPlatformsAccount.CloseAccountHolderResponse>;
        createAccount: PostRequest<IPlatformsAccount.CreateAccountRequest, IPlatformsAccount.CreateAccountResponse>;
        deleteBankAccounts: PostRequest<IPlatformsAccount.DeleteBankAccountRequest, IPlatformsAccount.GenericResponse>;
        deletePayoutMethods: PostRequest<IPlatformsAccount.DeletePayoutMethodRequest, IPlatformsAccount.GenericResponse>;
        updateAccount: PostRequest<IPlatformsAccount.UpdateAccountRequest, IPlatformsAccount.UpdateAccountResponse>;
        uploadDocument: PostRequest<IPlatformsAccount.UploadDocumentRequest, IPlatformsAccount.GetUploadedDocumentsResponse>;
        unSuspendAccountHolder: PostRequest<IPlatformsAccount.UnSuspendAccountHolderRequest, IPlatformsAccount.UnSuspendAccountHolderResponse>;
        closeAccount: PostRequest<IPlatformsAccount.CloseAccountRequest, IPlatformsAccount.CloseAccountResponse>;
        suspendAccountHolder: PostRequest<IPlatformsAccount.SuspendAccountHolderRequest, IPlatformsAccount.SuspendAccountHolderResponse>;
        updateAccountHolder: PostRequest<IPlatformsAccount.UpdateAccountHolderRequest, IPlatformsAccount.UpdateAccountHolderResponse>;
        deleteShareholders: PostRequest<IPlatformsAccount.DeleteShareholderRequest, IPlatformsAccount.GenericResponse>;
        checkAccountHolder: PostRequest<IPlatformsAccount.PerformVerificationRequest, IPlatformsAccount.GenericResponse>;
        updateAccountHolderState: PostRequest<IPlatformsAccount.UpdateAccountHolderStateRequest, IPlatformsAccount.GetAccountHolderStatusResponse>;
    } {
        const closeAccount = this.createPostRequest<AccountsAccount, IPlatformsAccount.CloseAccountRequest, IPlatformsAccount.CloseAccountResponse>(this.closeAccount);
        const updateAccount = this.createPostRequest<AccountsAccount, IPlatformsAccount.UpdateAccountRequest, IPlatformsAccount.UpdateAccountResponse>(this.updateAccount);
        const createAccount = this.createPostRequest<AccountsAccount, IPlatformsAccount.CreateAccountRequest, IPlatformsAccount.CreateAccountResponse>(this.createAccount);

        const uploadDocument = this.createPostRequest<AccountsVerification, IPlatformsAccount.UploadDocumentRequest, IPlatformsAccount.GetUploadedDocumentsResponse>(this.uploadDocument);
        const getUploadedDocuments = this.createPostRequest<AccountsVerification, IPlatformsAccount.GetUploadedDocumentsRequest, IPlatformsAccount.GetUploadedDocumentsResponse>(this.getUploadedDocuments);
        const deleteBankAccounts = this.createPostRequest<AccountsVerification, IPlatformsAccount.DeleteBankAccountRequest, IPlatformsAccount.GenericResponse>(this.deleteBankAccounts);
        const deletePayoutMethods = this.createPostRequest<AccountsVerification, IPlatformsAccount.DeletePayoutMethodRequest, IPlatformsAccount.GenericResponse>(this.deletePayoutMethods);
        const deleteShareholders = this.createPostRequest<AccountsVerification, IPlatformsAccount.DeleteShareholderRequest, IPlatformsAccount.GenericResponse>(this.deleteShareholders);

        const createAccountHolder = this.createPostRequest<AccountsAccountHolders, IPlatformsAccount.CreateAccountHolderRequest, IPlatformsAccount.CreateAccountHolderResponse>(this.createAccountHolder);
        const getAccountHolder = this.createPostRequest<AccountsAccountHolders, IPlatformsAccount.GetAccountHolderRequest, IPlatformsAccount.GetAccountHolderResponse>(this.getAccountHolder);
        const updateAccountHolder = this.createPostRequest<AccountsAccountHolders, IPlatformsAccount.UpdateAccountHolderRequest, IPlatformsAccount.UpdateAccountHolderResponse>(this.updateAccountHolder);
        const updateAccountHolderState = this.createPostRequest<AccountsAccountHolders, IPlatformsAccount.UpdateAccountHolderStateRequest, IPlatformsAccount.GetAccountHolderStatusResponse>(this.updateAccountHolderState);
        const suspendAccountHolder = this.createPostRequest<AccountsAccountHolders, IPlatformsAccount.SuspendAccountHolderRequest, IPlatformsAccount.SuspendAccountHolderResponse>(this.suspendAccountHolder);
        const unSuspendAccountHolder = this.createPostRequest<AccountsAccountHolders, IPlatformsAccount.UnSuspendAccountHolderRequest, IPlatformsAccount.UnSuspendAccountHolderResponse>(this.unSuspendAccountHolder);
        const closeAccountHolder = this.createPostRequest<AccountsAccountHolders, IPlatformsAccount.CloseAccountHolderRequest, IPlatformsAccount.CloseAccountHolderResponse>(this.closeAccountHolder);
        const checkAccountHolder = this.createPostRequest<AccountsVerification, IPlatformsAccount.PerformVerificationRequest, IPlatformsAccount.GenericResponse>(this.checkAccountHolder);

        const accounts = { closeAccount, updateAccount, createAccount };
        const verification = { uploadDocument, getUploadedDocuments, deleteBankAccounts, deletePayoutMethods, deleteShareholders, checkAccountHolder };
        const accountHolders = { createAccountHolder, getAccountHolder, updateAccountHolder, updateAccountHolderState, suspendAccountHolder, unSuspendAccountHolder, closeAccountHolder};

        return {...accounts, ...verification, ...accountHolders };
    }

    public get Fund(): {
        refundNotPaidOutTransfers: PostRequest<IPlatformsFund.RefundNotPaidOutTransfersRequest, IPlatformsFund.RefundNotPaidOutTransfersResponse>;
        accountHolderTransactionList: PostRequest<IPlatformsFund.AccountHolderTransactionListRequest, IPlatformsFund.AccountHolderTransactionListResponse>;
        setupBeneficiary: PostRequest<IPlatformsFund.SetupBeneficiaryRequest, IPlatformsFund.SetupBeneficiaryResponse>;
        transferFunds: PostRequest<IPlatformsFund.TransferFundsRequest, IPlatformsFund.TransferFundsResponse>;
        refundFundsTransfer: PostRequest<IPlatformsFund.RefundFundsTransferRequest, IPlatformsFund.RefundFundsTransferResponse>;
        payoutAccountHolder: PostRequest<IPlatformsFund.PayoutAccountHolderRequest, IPlatformsFund.PayoutAccountHolderResponse>;
        accountHolderBalance: PostRequest<IPlatformsFund.AccountHolderBalanceRequest, IPlatformsFund.AccountHolderBalanceResponse>;
    } {
        const accountHolderBalance = this.createPostRequest<PlatformsFund, IPlatformsFund.AccountHolderBalanceRequest, IPlatformsFund.AccountHolderBalanceResponse>(this.accountHolderBalance);
        const accountHolderTransactionList = this.createPostRequest<PlatformsFund, IPlatformsFund.AccountHolderTransactionListRequest, IPlatformsFund.AccountHolderTransactionListResponse>(this.accountHolderTransactionList);
        const payoutAccountHolder = this.createPostRequest<PlatformsFund, IPlatformsFund.PayoutAccountHolderRequest, IPlatformsFund.PayoutAccountHolderResponse>(this.payoutAccountHolder);
        const transferFunds = this.createPostRequest<PlatformsFund, IPlatformsFund.TransferFundsRequest, IPlatformsFund.TransferFundsResponse>(this.transferFunds);
        const refundFundsTransfer = this.createPostRequest<PlatformsFund, IPlatformsFund.RefundFundsTransferRequest, IPlatformsFund.RefundFundsTransferResponse>(this.refundFundsTransfer);
        const setupBeneficiary = this.createPostRequest<PlatformsFund, IPlatformsFund.SetupBeneficiaryRequest, IPlatformsFund.SetupBeneficiaryResponse>(this.setupBeneficiary);
        const refundNotPaidOutTransfers = this.createPostRequest<PlatformsFund, IPlatformsFund.RefundNotPaidOutTransfersRequest, IPlatformsFund.RefundNotPaidOutTransfersResponse>(this.refundNotPaidOutTransfers);

        return { accountHolderBalance, accountHolderTransactionList, payoutAccountHolder, refundFundsTransfer, transferFunds, setupBeneficiary, refundNotPaidOutTransfers };
    }

    public get HostedOnboardingPage(): { getOnboardingUrl: PostRequest<IPlatformsHostedOnboardingPage.GetOnboardingUrlRequest, IPlatformsHostedOnboardingPage.GetOnboardingUrlResponse> } {
        const getOnboardingUrl = this.createPostRequest<PlatformsHostedOnboardingPage, IPlatformsHostedOnboardingPage.GetOnboardingUrlRequest, IPlatformsHostedOnboardingPage.GetOnboardingUrlResponse>(this.getOnboardingUrl);

        return { getOnboardingUrl };
    }

    public get NotificationConfiguration(): {
        createNotificationConfiguration: PostRequest<IPlatformsNotificationConfiguration.CreateNotificationConfigurationRequest, IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>;
        updateNotificationConfiguration: PostRequest<IPlatformsNotificationConfiguration.UpdateNotificationConfigurationRequest, IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>;
        getNotificationConfiguration: PostRequest<IPlatformsNotificationConfiguration.GetNotificationConfigurationRequest, IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>;
        testNotificationConfiguration: PostRequest<IPlatformsNotificationConfiguration.TestNotificationConfigurationRequest, IPlatformsNotificationConfiguration.TestNotificationConfigurationResponse>;
        getNotificationConfigurationList: PostRequest<{}, IPlatformsNotificationConfiguration.GetNotificationConfigurationListResponse>;
        deleteNotificationConfigurations: PostRequest<IPlatformsNotificationConfiguration.DeleteNotificationConfigurationRequest, IPlatformsNotificationConfiguration.GenericResponse>;
    } {
        const createNotificationConfiguration = this.createPostRequest<PlatformsHostedOnboardingPage, IPlatformsNotificationConfiguration.CreateNotificationConfigurationRequest, IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>(this.createNotificationConfiguration);
        const getNotificationConfiguration = this.createPostRequest<PlatformsHostedOnboardingPage, IPlatformsNotificationConfiguration.GetNotificationConfigurationRequest, IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>(this.getNotificationConfiguration);
        const getNotificationConfigurationList = this.createPostRequest<PlatformsHostedOnboardingPage, {}, IPlatformsNotificationConfiguration.GetNotificationConfigurationListResponse>(this.getNotificationConfigurationList);
        const testNotificationConfiguration = this.createPostRequest<PlatformsHostedOnboardingPage, IPlatformsNotificationConfiguration.TestNotificationConfigurationRequest, IPlatformsNotificationConfiguration.TestNotificationConfigurationResponse>(this.testNotificationConfiguration);
        const updateNotificationConfiguration = this.createPostRequest<PlatformsHostedOnboardingPage, IPlatformsNotificationConfiguration.UpdateNotificationConfigurationRequest, IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>(this.updateNotificationConfiguration);
        const deleteNotificationConfigurations = this.createPostRequest<PlatformsHostedOnboardingPage, IPlatformsNotificationConfiguration.DeleteNotificationConfigurationRequest, IPlatformsNotificationConfiguration.GenericResponse>(this.deleteNotificationConfiguration);

        return { createNotificationConfiguration, getNotificationConfiguration, getNotificationConfigurationList, testNotificationConfiguration, updateNotificationConfiguration, deleteNotificationConfigurations };
    }
}

export default Platforms;

