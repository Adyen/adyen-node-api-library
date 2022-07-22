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

import nock from "nock";
import { createMock } from "ts-auto-mock";
import { createBasicAuthClient } from "../__mocks__/base";
import { documentContent } from "../__mocks__/platforms/documentContent";
import { Client, Platforms } from "../index";

import * as A from  "../typings/platformsAccount/models";
import F = IPlatformsFund;
import N = IPlatformsNotificationConfiguration;
import AccountHolderDetails = A.AccountHolderDetails;
import NotificationConfigurationDetails = N.NotificationConfigurationDetails;
import HttpClientException from "../httpClient/httpClientException";
import { GetOnboardingUrlRequest, GetOnboardingUrlResponse, GetPciUrlRequest, GetPciUrlResponse } from "../typings/platformsHostedOnboardingPage/models";
import { DebitAccountHolderRequest, DebitAccountHolderResponse } from "../typings/platformsFund/models";

let client: Client;
let platforms: Platforms;
let scope: nock.Scope;
let accountHolder: A.CreateAccountHolderResponse;
let account: A.CreateAccountResponse;
let accountHolderToSuspend: A.CreateAccountHolderResponse;
let accountToClose: A.CreateAccountResponse;
let accountHolderToUnSuspend: A.CreateAccountHolderResponse;
let accountHolderToClose: A.CreateAccountHolderResponse;
let notificationConfigurationToRetrieve: N.GetNotificationConfigurationResponse;

const generateRandomCode = (): string => Math.floor(Math.random() * Date.now()).toString();
const accountHolderDetails: AccountHolderDetails = {
    email: "random_email@example.com",
    fullPhoneNumber: "312030291928",
    webAddress: "http://example.com",
    individualDetails: {
        name: {
            firstName: "John",
            gender: A.ViasName.GenderEnum.Male,
            lastName: "Smith"
        }
    },
    address: {
        country: "NL"
    },
};
const notificationConfigurationDetails: NotificationConfigurationDetails = {
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

const assertError = (e: HttpClientException): void => {
    if (e.responseBody?.includes("Account code does not exist or invalid") || e.responseBody?.includes("Failed to retrieve account holder")) {
        return;
    }
    fail(e);
};


beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }

    client = createBasicAuthClient();
    client.config.password = process.env.ADYEN_MARKETPLACE_PASSWORD;
    client.config.username = process.env.ADYEN_MARKETPLACE_USER;

    scope = nock(client.config.marketPayEndpoint!);
    platforms = new Platforms(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Platforms Test", function () {
    describe("Account", function(): void {
        describe("Accounts", function () {
            const cases = [
                ["closeAccount", createMock<A.CloseAccountRequest>(), createMock<A.CloseAccountResponse>()],
                ["updateAccount", createMock<A.UpdateAccountRequest>(), createMock<A.UpdateAccountResponse>()],
                ["createAccount", createMock<A.CreateAccountRequest>(), createMock<A.CreateAccountResponse>()],
                ["uploadDocument", createMock<A.UploadDocumentRequest>(), createMock<A.GetUploadedDocumentsResponse>()],
                ["getUploadedDocuments", createMock<A.GetUploadedDocumentsRequest>(), createMock<A.GetUploadedDocumentsResponse>()],
                ["deleteBankAccounts", createMock<A.DeleteBankAccountRequest>(), createMock<A.GenericResponse>()],
                ["deletePayoutMethods", createMock<A.DeletePayoutMethodRequest>(), createMock<A.GenericResponse>()],
                ["deleteShareholders", createMock<A.DeleteShareholderRequest>(), createMock<A.GenericResponse>()],
                ["checkAccountHolder", createMock<A.PerformVerificationRequest>(), createMock<A.GenericResponse>()],
                ["createAccountHolder", createMock<A.CreateAccountRequest>(), createMock<A.CreateAccountHolderRequest>()],
                ["getAccountHolder", createMock<A.GetAccountHolderRequest>(), createMock<A.GetAccountHolderRequest>()],
                ["updateAccountHolder", createMock<A.UpdateAccountHolderRequest>(), createMock<A.UpdateAccountHolderResponse>()],
                ["updateAccountHolderState", createMock<A.UpdateAccountHolderStateRequest>(), createMock<A.GetAccountHolderStatusResponse>()],
                ["suspendAccountHolder", createMock<A.SuspendAccountHolderRequest>(), createMock<A.SuspendAccountHolderResponse>()],
                ["unSuspendAccountHolder", createMock<A.UnSuspendAccountHolderRequest>(), createMock<A.UnSuspendAccountHolderResponse>()],
                ["closeAccountHolder", createMock<A.CloseAccountHolderRequest>(), createMock<A.CloseAccountResponse>()],
                ["getTaxForm", createMock<A.GetTaxFormRequest>(), createMock<A.GetTaxFormResponse>()],
            ];
            test.each(cases)(
                "should %p",
                async (...args) => {
                    const service = platforms.Account;
                    scope.post(`/Account/${Client.MARKETPAY_ACCOUNT_API_VERSION}//${args[0]}`).reply(200, args[2]);
                    const result = await service[args[0] as string](args[1] as never);
                    expect(result).toMatchObject(args[2]);
                }
            );
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
            ["debitAccountHolder", createMock<DebitAccountHolderRequest>(), createMock<DebitAccountHolderResponse>()],
        ];
        test.only.each(cases)(
            "should %p",
            async (...args) => {
                const fund = platforms.Fund;
                scope.post(`/Fund/${Client.MARKETPAY_FUND_API_VERSION}//${args[0]}`).reply(200, args[2]);

                const result = await fund[args[0] as string](args[1] as never);
                expect(result).toMatchObject(args[2]);
            }
        );
    });

    describe("Notification Configuration", function() {
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
                scope.post(`/Notification/${Client.MARKETPAY_NOTIFICATION_CONFIGURATION_API_VERSION}//${args[0]}`).reply(200, args[2]);

                const result = await notificationConfiguration[args[0] as string](args[1] as never);
                expect(result).toMatchObject(args[2]);
            }
        );
    });

    describe("Hop", function () {
        const cases = [
            ["getOnboardingUrl", createMock<GetOnboardingUrlRequest>(), createMock<GetOnboardingUrlResponse>()],
            ["getPciQuestionnaireUrl", createMock<GetPciUrlRequest>(), createMock<GetPciUrlResponse>()],
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

describe.skip("Platforms Test E2E", function(): void {
    beforeAll(async () => {
        accountHolder = await platforms.Account.createAccountHolder({
            accountHolderCode: generateRandomCode(),
            accountHolderDetails,
            legalEntity: A.CreateAccountHolderRequest.LegalEntityEnum.Individual,
        });

        account = await platforms.Account.createAccount({
            accountHolderCode: generateRandomCode(),
            description: "This is a new account",
            metadata: {meta: "data"},
            payoutSchedule: A.CreateAccountRequest.PayoutScheduleEnum.Weekly,
        });

        accountHolderToSuspend = await platforms.Account.createAccountHolder({
            accountHolderCode: generateRandomCode(),
            accountHolderDetails,
            legalEntity: A.CreateAccountHolderRequest.LegalEntityEnum.Individual,
        });

        accountToClose = await platforms.Account.createAccount({
            accountHolderCode: generateRandomCode(),
            description: "This is a new account",
            metadata: {meta: "data"},
            payoutSchedule: A.CreateAccountRequest.PayoutScheduleEnum.Weekly,
        });

        accountHolderToUnSuspend = await platforms.Account.createAccountHolder({
            accountHolderCode: generateRandomCode(),
            accountHolderDetails,
            legalEntity: A.CreateAccountHolderRequest.LegalEntityEnum.Individual,
        });
        await platforms.Account.suspendAccountHolder({ accountHolderCode: accountHolderToUnSuspend.accountHolderCode});

        accountHolderToClose = await platforms.Account.createAccountHolder({
            accountHolderCode: generateRandomCode(),
            accountHolderDetails,
            legalEntity: A.CreateAccountHolderRequest.LegalEntityEnum.Individual,
        });

        notificationConfigurationToRetrieve = await platforms.NotificationConfiguration.createNotificationConfiguration({
            configurationDetails: {
                ...notificationConfigurationDetails,
                description: `${generateRandomCode()}`
            }
        });
    });
    describe("Account", function(): void {
        describe("Accounts E2E", function () {
            it("should create account holder", async function() {
                nock.restore();
                try {
                    expect(accountHolder.pspReference).toBeDefined();
                } catch (e: any) {
                    assertError(e);
                }
            });
            it("should get account holder", async function() {
                nock.restore();
                try {
                    const result = await platforms.Account.getAccountHolder({
                        accountHolderCode: accountHolder.accountHolderCode,
                    });
                    expect(result.accountHolderDetails.email).toEqual("random_email@example.com");
                } catch (e: any) {
                    assertError(e);
                }
            });

            it("should update account holder", async function() {
                nock.restore();
                try {
                    const result = await platforms.Account.updateAccountHolder({
                        accountHolderCode: accountHolder.accountHolderCode,
                        accountHolderDetails: {
                            ...accountHolderDetails,
                            address: {
                                country: "BE"
                            }
                        }
                    });
                    expect(result.accountHolderDetails!.address?.country).toEqual("BE");
                } catch (e: any) {
                    assertError(e);
                }
            });

            it("should check account holder", async function() {
                nock.restore();
                try {
                    const result = await platforms.Account.checkAccountHolder({
                        accountHolderCode: accountHolder.accountHolderCode,
                        accountStateType: A.PerformVerificationRequest.AccountStateTypeEnum.Processing,
                        tier: 2
                    });
                    expect(result.resultCode).toEqual("Success");
                } catch (e: any) {
                    assertError(e);
                }
            });

            it("should create an account", async function() {
                nock.restore();
                try {
                    expect(account.pspReference).toBeDefined();
                } catch (e: any) {
                    assertError(e);
                }
            });

            it("should upload verification document", async function() {
                nock.restore();
                try {
                    const result = await platforms.Account.uploadDocument({
                        documentContent,
                        documentDetail: {
                            accountHolderCode: account.accountHolderCode,
                            documentType: A.DocumentDetail.DocumentTypeEnum.IdCardFront,
                            description: "test document 000",
                            filename: "IDCardFront.png"
                        }
                    });
                    expect(result.pspReference).toBeDefined();
                } catch (e: any) {
                    assertError(e);
                }
            });

            it("should get uploaded verification documents", async function() {
                nock.restore();
                try {
                    await platforms.Account.uploadDocument({
                        documentContent,
                        documentDetail: {
                            accountHolderCode: account.accountHolderCode,
                            documentType: A.DocumentDetail.DocumentTypeEnum.IdCardFront,
                            description: "test document 000",
                            filename: "IDCardFront.png"
                        }
                    });
                    const result = await platforms.Account.getUploadedDocuments({
                        accountHolderCode: account.accountHolderCode,
                    });
                    expect(result.documentDetails![0].filename).toEqual("IDCardFront.png");
                } catch (e: any) {
                    assertError(e);
                }
            });

            it("should close account", async function() {
                nock.restore();
                try {
                    const result = await platforms.Account.closeAccount({
                        accountCode: accountToClose.accountCode
                    });
                    expect(result.status).toEqual("Closed");
                } catch (e: any) {
                    assertError(e);
                }
            });

            it("should suspend account holder", async function() {
                nock.restore();
                try {
                    const result = await platforms.Account.suspendAccountHolder({
                        accountHolderCode: accountHolderToSuspend.accountHolderCode,
                    });
                    expect(result.pspReference).toBeDefined();
                } catch (e: any) {
                    assertError(e);
                }
            });

            it("should unsuspend account holder", async function() {
                nock.restore();
                try {
                    const result = await platforms.Account.unSuspendAccountHolder({ accountHolderCode: accountHolderToUnSuspend.accountHolderCode });
                    expect(result.pspReference).toBeDefined();
                } catch (e: any) {
                    assertError(e);
                }
            });

            it("should update account holder state", async function() {
                nock.restore();
                try {
                    const result = await platforms.Account.updateAccountHolderState({
                        accountHolderCode: accountHolder.accountHolderCode,
                        disable: false,
                        stateType: A.UpdateAccountHolderStateRequest.StateTypeEnum.Payout
                    });
                    expect(result.pspReference).toBeDefined();
                } catch (e: any) {
                    assertError(e);
                }
            });

            it("should close account holder", async function() {
                nock.restore();
                try {
                    const result = await platforms.Account.closeAccountHolder({
                        accountHolderCode: accountHolderToClose.accountHolderCode
                    });
                    expect(result.pspReference).toBeDefined();
                } catch (e: any) {
                    assertError(e);
                }
            });

            it("should get tax form", async function() {
              nock.restore();
              try {
                const result = await platforms.Account.getTaxForm({
                    accountHolderCode: accountHolder.accountHolderCode,
                    formType: "1099-K",
                    year: 2020
                });
                expect(result.content).toBeDefined();
              } catch (e: any) {
                assertError(e);
              }
            });
        });
    });
    describe("Fund", function () {
        it("should retrieve the balance of an account holder", async function() {
            nock.restore();
            try {
                const result = await platforms.Fund.accountHolderBalance({
                    accountHolderCode: generateRandomCode()
                });
                expect(result.balancePerAccount![0].detailBalance).toBeDefined();
            } catch (e: any) {
                assertError(e);
            }
        });

        it("should retrieve a list of transaction for an account holder's accounts", async function() {
            nock.restore();
            try {
                const result = await platforms.Fund.accountHolderTransactionList({
                    accountHolderCode: generateRandomCode()
                });
                expect(result.accountTransactionLists![0].transactions).toBeDefined();
            } catch (e: any) {
                assertError(e);
            }
        });

        it("should transfer funds between two accounts", async function() {
            nock.restore();
            try {
                const result = await platforms.Fund.transferFunds({
                    sourceAccountCode: "8515883280985939",
                    destinationAccountCode: "8815883278206345",
                    amount: {
                        currency: "EUR",
                        value: 1
                    },
                    transferCode: "SUBSCRIPTION"
                });
                expect(result.pspReference).toBeDefined();
            } catch (e: any) {
                assertError(e);
            }
        });

    });
    describe("Notification Configuration", function () {
        let configurationID: number;

        it("should retrieve all Notification Configurations", async function() {
            nock.restore();
            try {
                const result = await platforms.NotificationConfiguration.getNotificationConfigurationList({});
                const resultStr = JSON.stringify(result);
                expect(resultStr.includes("pspReference")).toBeTruthy();
            } catch (e: any) {
                assertError(e);
            }
        });

        it("should create a Notification Configuration", async function() {
            nock.restore();
            try {
                const result = await platforms.NotificationConfiguration.createNotificationConfiguration({
                    configurationDetails: {
                        ...notificationConfigurationDetails,
                        description: `${generateRandomCode()}`
                    }
                });
                expect(result.configurationDetails.active).toBeTruthy();
            } catch (e: any) {
                assertError(e);
            }
        });

        it("should retrieve a Notification Configuration", async function() {
            nock.restore();
            try {
                configurationID = notificationConfigurationToRetrieve.configurationDetails.notificationId!;
                const result = await platforms.NotificationConfiguration.getNotificationConfiguration({
                    notificationId: configurationID
                });
                expect(result.configurationDetails.notifyURL).toEqual("https://www.adyen.com/notification-handler");
            } catch (e: any) {
                assertError(e);
            }
        });

        it("should update a Notification Configuration", async function() {
            nock.restore();
            try {
                const result = await platforms.NotificationConfiguration.updateNotificationConfiguration({
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
                });
                const accountHolderVerification = result.configurationDetails.eventConfigs.filter(event => event.eventType === "ACCOUNT_HOLDER_VERIFICATION")[0];
                expect(accountHolderVerification.includeMode).toEqual("EXCLUDE");
            } catch (e: any) {
                assertError(e);
            }
        });

        it("should delete a Notification Configuration", async function() {
            nock.restore();
            const notificationIds = [];
            notificationIds.push(configurationID);
            try {
                const result = await platforms.NotificationConfiguration.deleteNotificationConfigurations({notificationIds});
                expect(result.pspReference).toBeDefined();
            } catch (e: any) {
                assertError(e);
            }
        });

    });
});
