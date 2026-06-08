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

describe("CustomPayoutSchedulesSweeps", (): void => {
    const balanceAccountId = "BA32272223222B59CZ3T52DKZ";
    const sweepId = "SWPC4227C224555B5FTD2NT2JV4WN5";

    it("should support GET /balanceAccounts/{balanceAccountId}/sweeps", async (): Promise<void> => {
        scope.get(`/balanceAccounts/${balanceAccountId}/sweeps?limit=5&offset=10`)
            .reply(200, {
                "hasNext": false,
                "hasPrevious": false,
                "sweeps": [
                    {
                        "id": sweepId,
                        "schedule": {
                            "type": "daily"
                        },
                        "status": "active",
                        "targetAmount": {
                            "currency": "EUR",
                            "value": 0
                        },
                        "triggerAmount": {
                            "currency": "EUR",
                            "value": 0
                        },
                        "type": "push",
                        "counterparty": {
                            "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
                        },
                        "currency": "EUR"
                    }
                ]
            });

        const response: Types.balancePlatform.BalanceSweepConfigurationsResponse = await balancePlatformService.CustomPayoutSchedulesSweepsApi.getAllSweepsForBalanceAccount(balanceAccountId, undefined, undefined, {
            params: {
                "limit": "5",
                "offset": "10"
            }
        });

        expect(response.hasNext).toBeFalsy();
        expect(response.sweeps.length).toBe(1);
    });

    it("should support POST /balanceAccounts/{balanceAccountId}/sweeps", async (): Promise<void> => {
        scope.post(`/balanceAccounts/${balanceAccountId}/sweeps`)
            .reply(200, {
                "id": sweepId,
                "counterparty": {
                    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
                },
                "triggerAmount": {
                    "currency": "EUR",
                    "value": 50000
                },
                "currency": "EUR",
                "schedule": {
                    "type": "balance"
                },
                "type": "pull",
                "status": "active"
            });
        const request: Types.balancePlatform.SweepConfigurationV2 = {
            "id": "SWEEP_ID",
            "counterparty": {
                "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
            },
            "triggerAmount": {
                "currency": "EUR",
                "value": 50000
            },
            "currency": "EUR",
            "schedule": {
                "type": Types.balancePlatform.SweepSchedule.TypeEnum.Balance
            },
            "type": Types.balancePlatform.SweepConfigurationV2.TypeEnum.Pull,
            "status": Types.balancePlatform.SweepConfigurationV2.StatusEnum.Active
        };

        const response: Types.balancePlatform.SweepConfigurationV2 = await balancePlatformService.CustomPayoutSchedulesSweepsApi.createSweep(balanceAccountId, request);

        expect(response.id).toBe(sweepId);
        expect(response.triggerAmount!.value).toBe(50000);
    });

    it("should support DELETE /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}", async (): Promise<void> => {
        scope.delete(`/balanceAccounts/${balanceAccountId}/sweeps/${sweepId}`).reply(204);

        await balancePlatformService.CustomPayoutSchedulesSweepsApi.deleteSweep(balanceAccountId, sweepId);
    });

    it("should support GET /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}", async (): Promise<void> => {
        scope.get(`/balanceAccounts/${balanceAccountId}/sweeps/${sweepId}`)
            .reply(200, {
                "id": sweepId,
                "schedule": {
                    "type": "daily"
                },
                "status": "active",
                "targetAmount": {
                    "currency": "EUR",
                    "value": 0
                },
                "triggerAmount": {
                    "currency": "EUR",
                    "value": 0
                },
                "type": "push",
                "counterparty": {
                    "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
                },
                "currency": "EUR"
            });

        const response: Types.balancePlatform.SweepConfigurationV2 = await balancePlatformService.CustomPayoutSchedulesSweepsApi.getSweep(balanceAccountId, sweepId);

        expect(response.id).toBe(sweepId);
        expect(response.status).toBe("active");
    });

    it("should support PATCH /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}", async (): Promise<void> => {
        scope.patch(`/balanceAccounts/${balanceAccountId}/sweeps/${sweepId}`)
            .reply(200, {
                "id": sweepId,
                "counterparty": {
                    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
                },
                "triggerAmount": {
                    "currency": "EUR",
                    "value": 50000
                },
                "currency": "EUR",
                "schedule": {
                    "type": "balance"
                },
                "type": "pull",
                "status": "inactive"
            });
        const request: Types.balancePlatform.SweepConfigurationV2 = {
            "id": sweepId,
            "counterparty": {
                "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
            },
            "status": Types.balancePlatform.SweepConfigurationV2.StatusEnum.Inactive,
            "currency": "EUR",
            "schedule": {
                "type": Types.balancePlatform.SweepSchedule.TypeEnum.Cron
            }
        };

        const response: Types.balancePlatform.SweepConfigurationV2 = await balancePlatformService.CustomPayoutSchedulesSweepsApi.updateSweep(balanceAccountId, sweepId, request);

        expect(response.status).toBe("inactive");
    });
});
