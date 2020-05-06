import nock from "nock";
import {createMock} from "ts-auto-mock";
import {createBasicAuthClient} from "../__mocks__/base";
import {Client, Platforms} from "../index";

import A = IPlatformsAccount
import F = IPlatformsFund
import N = IPlatformsNotificationConfiguration
import H = IPlatformsHostedOnboardingPage

let client: Client;
let platforms: Platforms;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createBasicAuthClient();
    client.config.password = process.env.ADYEN_MARKETPLACE_PASSWORD;
    client.config.username = process.env.ADYEN_MARKETPLACE_USER;

    platforms = new Platforms(client);
    scope = nock(client.config.marketPayEndpoint!);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Platforms Test", function(): void {
    describe("Account", function(): void {
        describe("Accounts", function () {
            const cases = [
                ["closeAccount", createMock<A.CloseAccountRequest>(), createMock<A.CloseAccountResponse>(), "accounts"],
                ["updateAccount", createMock<A.UpdateAccountRequest>(), createMock<A.UpdateAccountResponse>(), "accounts"],
                ["createAccount", createMock<A.CreateAccountRequest>(), createMock<A.CreateAccountResponse>(), "accounts"],
                ["uploadDocument", createMock<A.UploadDocumentRequest>(), createMock<A.GetUploadedDocumentsResponse>(), "verification"],
                ["getUploadedDocuments", createMock<A.GetUploadedDocumentsRequest>(), createMock<A.GetUploadedDocumentsResponse>(), "verification"],
                ["deleteBankAccounts", createMock<A.DeleteBankAccountRequest>(), createMock<A.GenericResponse>(), "verification"],
                ["deletePayoutMethods", createMock<A.DeletePayoutMethodRequest>(), createMock<A.GenericResponse>(), "verification"],
                ["deleteShareholders", createMock<A.DeleteShareholderRequest>(), createMock<A.GenericResponse>(), "verification"],
                ["checkAccountHolder", createMock<A.PerformVerificationRequest>(), createMock<A.GenericResponse>(), "verification"],
                ["createAccountHolder", createMock<A.CreateAccountRequest>(), createMock<A.CreateAccountHolderRequest>(), "accountHolders"],
                ["getAccountHolder", createMock<A.GetAccountHolderRequest>(), createMock<A.GetAccountHolderRequest>(), "accountHolders"],
                ["updateAccountHolder", createMock<A.UpdateAccountHolderRequest>(), createMock<A.UpdateAccountHolderResponse>(), "accountHolders"],
                ["suspendAccountHolder", createMock<A.SuspendAccountHolderRequest>(), createMock<A.SuspendAccountHolderResponse>(), "accountHolders"],
                ["unSuspendAccountHolder", createMock<A.UnSuspendAccountHolderRequest>(), createMock<A.UnSuspendAccountHolderResponse>(), "accountHolders"],
                ["closeAccountHolder", createMock<A.CloseAccountHolderRequest>(), createMock<A.CloseAccountResponse>(), "accountHolders"],
            ];
            test.each(cases)(
                "should %p",
                async (...args) => {
                    const service = platforms.Account[args[3] as string];
                    scope.post(`/Account/${Client.MARKETPAY_ACCOUNT_API_VERSION}//${args[0]}`).reply(200, args[2]);

                    const result = await service[args[0] as string](args[1] as never);
                    expect(result).toMatchObject(args[2]);
                }
            );

            it("should create account holder", async function() {
                nock.restore();
                try {
                    const result = await platforms.Account.accountHolders.createAccountHolder({
                        accountHolderCode: Date.now().toString(2),
                        accountHolderDetails: {
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
                            }
                        },
                        legalEntity: "Individual",
                    });
                    expect(result.pspReference).toBeDefined();
                } catch (e) {
                    fail(e.responseBody);
                }
            });
        });
    });
    describe("Fund", function () {
        const cases = [
            ["accountHolderBalance", createMock<F.AccountHolderBalanceRequest>(), createMock<F.AccountHolderBalanceResponse>()],
            ["accountHolderTransactionList", createMock<F.AccountHolderTransactionListRequest>(), createMock<F.AccountHolderTransactionListResponse>()],
            ["payoutAccountHolder", createMock<F.PayoutAccountHolderRequest>(), createMock<F.PayoutAccountHolderResponse>()],
            ["transferFunds", createMock<F.TransferFundsRequest>(), createMock<F.TransferFundsResponse>()],
            ["refundFundsTransfer", createMock<F.RefundFundsTransferRequest>(), createMock<F.RefundFundsTransferResponse>()],
            ["setupBeneficiary", createMock<F.SetupBeneficiaryRequest>(), createMock<F.SetupBeneficiaryResponse>()],
            ["refundNotPaidOutTransfers", createMock<F.RefundNotPaidOutTransfersRequest>(), createMock<F.RefundNotPaidOutTransfersResponse>()],
        ];
        test.each(cases)(
            "should %p",
            async (...args) => {
                const fund = platforms.Fund;
                scope.post(`/Fund/${Client.MARKETPAY_FUND_API_VERSION}//${args[0]}`).reply(200, args[2]);

                const result = await fund[args[0] as string](args[1] as never);
                expect(result).toMatchObject(args[2]);
            }
        );
    });
    describe("Notification Configuration", function () {
        const cases = [
            ["createNotificationConfiguration", createMock<N.CreateNotificationConfigurationRequest>(), createMock<N.GetNotificationConfigurationResponse>()],
            ["getNotificationConfiguration", createMock<N.GetNotificationConfigurationRequest>(), createMock<N.GetNotificationConfigurationResponse>()],
            ["getNotificationConfigurationList", {}, createMock<N.GetNotificationConfigurationListResponse>()],
            ["testNotificationConfiguration", createMock<N.TestNotificationConfigurationRequest>(), createMock<N.TestNotificationConfigurationResponse>()],
            ["updateNotificationConfiguration", createMock<N.UpdateNotificationConfigurationRequest>(), createMock<N.GetNotificationConfigurationResponse>()],
            ["deleteNotificationConfigurations", createMock<N.DeleteNotificationConfigurationRequest>(), createMock<N.GenericResponse>()],
        ];
        test.each(cases)(
            "should %p",
            async (...args) => {
                const notificationConfiguration = platforms.NotificationConfiguration;
                scope.post(`/Notification/${Client.MARKETPAY_NOTIFICATION_API_VERSION}//${args[0]}`).reply(200, args[2]);

                const result = await notificationConfiguration[args[0] as string](args[1] as never);
                expect(result).toMatchObject(args[2]);
            }
        );
    });
    describe("Hop", function () {
        const cases = [
            ["getOnboardingUrl", createMock<H.GetOnboardingUrlRequest>(), createMock<H.GetOnboardingUrlResponse>()]
        ];
        test.each(cases)(
            "should %p",
            async (...args) => {
                const hostedOnboardingPage = platforms.HostedOnboardingPage;
                scope.post(`/Hop/${Client.MARKETPAY_HOP_API_VERSION}//${args[0]}`).reply(200, args[2]);

                const result = await hostedOnboardingPage[args[0] as string](args[1] as never);
                expect(result).toMatchObject(args[2]);
            }
        );
    });
});