import nock from "nock";
import Client from "../../client";
import { Types } from "../..";
import { BalancePlatformAPI } from "../..";
import { createClient } from "../../__mocks__/base";

let client: Client;
let balancePlatformService: BalancePlatformAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock("https://balanceplatform-api-test.adyen.com/bcl/v2");
    balancePlatformService = new BalancePlatformAPI(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("ManagedPayoutSchedules", (): void => {
    const balanceAccountId = "BA000000000000000000001";
    const balancePlatformId = "BP000000000000000000001";
    const scheduleId = "PSAC00000000000000000000000001";
    const balancePlatformScheduleId = "PSPC00000000000000000000000001";
    const transferInstrumentId = "SE00000000000000000000001";

    const balanceAccountConfigurationMock: Types.balancePlatform.BalanceAccountConfiguration = {
        id: scheduleId,
        balancePlatformPayoutScheduleId: balancePlatformScheduleId,
        balanceAccountId: balanceAccountId,
        transferInstrumentId: transferInstrumentId,
        currency: "EUR",
        reference: "Monthly payout",
        description: "Scheduled payout to merchant bank account",
        referenceForBeneficiary: "PAYOUT-REF-001",
        retainedAmount: 10000,
        minPayoutAmount: 1000,
        maxPayoutAmount: 100000000,
        createdAt: new Date("2024-01-15T10:30:00Z"),
        enabled: true,
        frequency: "monthly",
        frequencyValue: 1
    };

    describe("Balance account payout schedules", (): void => {
        it("should support POST /balanceAccounts/{id}/payoutSchedules", async (): Promise<void> => {
            scope.post(`/balanceAccounts/${balanceAccountId}/payoutSchedules`)
                .reply(200, balanceAccountConfigurationMock);

            const request: Types.balancePlatform.BalanceAccountConfigurationRequest = {
                balancePlatformPayoutScheduleId: balancePlatformScheduleId,
                transferInstrumentId: transferInstrumentId,
                currency: "EUR",
                reference: "Monthly payout",
                description: "Scheduled payout to merchant bank account",
                referenceForBeneficiary: "PAYOUT-REF-001",
                retainedAmount: 10000,
                minPayoutAmount: 1000,
                maxPayoutAmount: 100000000,
                enabled: true,
                frequency: Types.balancePlatform.BalanceAccountConfigurationRequest.FrequencyEnum.Monthly,
                frequencyValue: 1
            };

            const response: Types.balancePlatform.BalanceAccountConfiguration = await balancePlatformService.ManagedPayoutSchedulesApi.applyManagedSchedule(balanceAccountId, request);

            expect(response.id).toBe(scheduleId);
            expect(response.balanceAccountId).toBe(balanceAccountId);
            expect(response.currency).toBe("EUR");
            expect(response.enabled).toBe(true);
            expect(response.frequency).toBe("monthly");
        });

        it("should support GET /balanceAccounts/{id}/payoutSchedules", async (): Promise<void> => {
            scope.get(`/balanceAccounts/${balanceAccountId}/payoutSchedules`)
                .reply(200, {
                    balanceAccountPayoutSchedules: [balanceAccountConfigurationMock],
                    link: {
                        next: {
                            href: `/balanceAccounts/${balanceAccountId}/payoutSchedules?limit=10`
                        }
                    }
                });

            const response: Types.balancePlatform.BalanceAccountConfigurations = await balancePlatformService.ManagedPayoutSchedulesApi.getBalanceAccountManagedSchedules(balanceAccountId);

            expect(response.balanceAccountPayoutSchedules).toBeDefined();
            expect(response.balanceAccountPayoutSchedules!.length).toBe(1);
            expect(response.balanceAccountPayoutSchedules![0].id).toBe(scheduleId);
            expect(response.balanceAccountPayoutSchedules![0].currency).toBe("EUR");
        });

        it("should support GET /balanceAccounts/{id}/payoutSchedules with currency filter", async (): Promise<void> => {
            scope.get(`/balanceAccounts/${balanceAccountId}/payoutSchedules?currency=EUR`)
                .reply(200, {
                    balanceAccountPayoutSchedules: [balanceAccountConfigurationMock]
                });

            const response: Types.balancePlatform.BalanceAccountConfigurations = await balancePlatformService.ManagedPayoutSchedulesApi.getBalanceAccountManagedSchedules(balanceAccountId, "EUR");

            expect(response.balanceAccountPayoutSchedules![0].currency).toBe("EUR");
        });

        it("should support GET /balanceAccounts/{id}/payoutSchedules/{scheduleId}", async (): Promise<void> => {
            scope.get(`/balanceAccounts/${balanceAccountId}/payoutSchedules/${scheduleId}`)
                .reply(200, balanceAccountConfigurationMock);

            const response: Types.balancePlatform.BalanceAccountConfiguration = await balancePlatformService.ManagedPayoutSchedulesApi.getBalanceAccountManagedScheduleById(balanceAccountId, scheduleId);

            expect(response.id).toBe(scheduleId);
            expect(response.balancePlatformPayoutScheduleId).toBe(balancePlatformScheduleId);
            expect(response.retainedAmount).toBe(10000);
        });

        it("should support DELETE /balanceAccounts/{id}/payoutSchedules/{scheduleId}", async (): Promise<void> => {
            scope.delete(`/balanceAccounts/${balanceAccountId}/payoutSchedules/${scheduleId}`)
                .reply(204);

            await balancePlatformService.ManagedPayoutSchedulesApi.deleteBalanceAccountManagedSchedule(balanceAccountId, scheduleId);
        });

        it("should support PATCH /balanceAccounts/{id}/payoutSchedules/{scheduleId}", async (): Promise<void> => {
            const updatedMock = {
                ...balanceAccountConfigurationMock,
                description: "Updated payout description",
                retainedAmount: 20000,
                enabled: false,
                updatedAt: new Date("2024-01-16T14:00:00Z")
            };

            scope.patch(`/balanceAccounts/${balanceAccountId}/payoutSchedules/${scheduleId}`)
                .reply(200, updatedMock);

            const request: Types.balancePlatform.BalanceAccountConfigurationUpdate = {
                description: "Updated payout description",
                enabled: false,
                retainedAmount: 20000
            };

            const response: Types.balancePlatform.BalanceAccountConfiguration = await balancePlatformService.ManagedPayoutSchedulesApi.updateBalanceAccountManagedSchedule(balanceAccountId, scheduleId, request);

            expect(response.id).toBe(scheduleId);
            expect(response.description).toBe("Updated payout description");
            expect(response.retainedAmount).toBe(20000);
            expect(response.enabled).toBe(false);
        });

        it("should support GET /balanceAccounts/{id}/payoutSchedules/{scheduleId}/executions", async (): Promise<void> => {
            scope.get(`/balanceAccounts/${balanceAccountId}/payoutSchedules/${scheduleId}/executions?offset=1`)
                .reply(200, {
                    payoutScheduleExecutions: [
                        {
                            id: "PS0000000000001",
                            result: "skipped",
                            triggeredAt: "2026-03-11T08:00:00Z",
                            resultDetails: {
                                reasonCode: "noBalanceToPayOut",
                                reason: "No balance to pay out"
                            }
                        },
                        {
                            id: "PS0000000000002",
                            result: "succeeded",
                            triggeredAt: "2026-03-12T08:00:00Z",
                            resultDetails: {
                                transferId: "A0A0A0A0A0A0A0A0"
                            }
                        }
                    ]
                });

            const response: Types.balancePlatform.PayoutScheduleExecutions = await balancePlatformService.ManagedPayoutSchedulesApi.getPayoutScheduleExecutions(balanceAccountId, scheduleId, 1);

            expect(response.payoutScheduleExecutions).toBeDefined();
            expect(response.payoutScheduleExecutions.length).toBe(2);
            expect(response.payoutScheduleExecutions[0].id).toBe("PS0000000000001");
            expect(response.payoutScheduleExecutions[0].result).toBe("skipped");
            expect(response.payoutScheduleExecutions[1].id).toBe("PS0000000000002");
            expect(response.payoutScheduleExecutions[1].result).toBe("succeeded");
        });

        it("should support GET /balanceAccounts/{id}/payoutSchedules/{scheduleId}/executions with results filter", async (): Promise<void> => {
            scope.get(`/balanceAccounts/${balanceAccountId}/payoutSchedules/${scheduleId}/executions?results=succeeded&offset=1`)
                .reply(200, {
                    payoutScheduleExecutions: [
                        {
                            id: "PS0000000000002",
                            result: "succeeded",
                            triggeredAt: "2026-03-12T08:00:00Z",
                            resultDetails: {
                                transferId: "A0A0A0A0A0A0A0A0"
                            }
                        }
                    ]
                });

            const response: Types.balancePlatform.PayoutScheduleExecutions = await balancePlatformService.ManagedPayoutSchedulesApi.getPayoutScheduleExecutions(
                balanceAccountId,
                scheduleId,
                1,
                [Types.balancePlatform.ExecutionResult.Succeeded]
            );

            expect(response.payoutScheduleExecutions.length).toBe(1);
            expect(response.payoutScheduleExecutions[0].result).toBe("succeeded");
        });
    });

    describe("Balance platform payout schedules", (): void => {
        const balancePlatformConfigMock = {
            id: balancePlatformScheduleId,
            balancePlatformId: balancePlatformId,
            currency: "EUR",
            countryCode: "NL",
            defaultFrequency: "monthly",
            defaultFrequencyValue: 1,
            defaultDescription: "Scheduled payout",
            enabled: true,
            createdAt: "2024-01-15T10:30:00Z"
        };

        it("should support GET /balancePlatforms/{id}/payoutSchedules", async (): Promise<void> => {
            scope.get(`/balancePlatforms/${balancePlatformId}/payoutSchedules`)
                .reply(200, {
                    balancePlatformPayoutSchedules: [balancePlatformConfigMock]
                });

            const response: Types.balancePlatform.BalancePlatformConfigurations = await balancePlatformService.ManagedPayoutSchedulesApi.getBalancePlatformManagedSchedules(balancePlatformId);

            expect(response.balancePlatformPayoutSchedules).toBeDefined();
            expect(response.balancePlatformPayoutSchedules!.length).toBe(1);
            expect(response.balancePlatformPayoutSchedules![0].id).toBe(balancePlatformScheduleId);
        });

        it("should support GET /balancePlatforms/{id}/payoutSchedules with filters", async (): Promise<void> => {
            scope.get(`/balancePlatforms/${balancePlatformId}/payoutSchedules?countryCode=NL&currency=EUR`)
                .reply(200, {
                    balancePlatformPayoutSchedules: [balancePlatformConfigMock]
                });

            const response: Types.balancePlatform.BalancePlatformConfigurations = await balancePlatformService.ManagedPayoutSchedulesApi.getBalancePlatformManagedSchedules(balancePlatformId, "NL", "EUR");

            expect(response.balancePlatformPayoutSchedules![0].currency).toBe("EUR");
            expect(response.balancePlatformPayoutSchedules![0].countryCode).toBe("NL");
        });

        it("should support GET /balancePlatforms/{id}/payoutSchedules/{scheduleId}", async (): Promise<void> => {
            scope.get(`/balancePlatforms/${balancePlatformId}/payoutSchedules/${balancePlatformScheduleId}`)
                .reply(200, balancePlatformConfigMock);

            const response: Types.balancePlatform.BalancePlatformConfiguration = await balancePlatformService.ManagedPayoutSchedulesApi.getBalancePlatformManagedScheduleById(balancePlatformId, balancePlatformScheduleId);

            expect(response.id).toBe(balancePlatformScheduleId);
            expect(response.currency).toBe("EUR");
            expect(response.defaultFrequency).toBe("monthly");
        });
    });
});
