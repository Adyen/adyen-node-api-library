import nock from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import BalancePlatform from "../services/balancePlatform";
import * as models from "../typings/balancePlatform/models";
import { AccountHolderUpdate } from "../services/balancePlaftform/accountHolders";
import { SweepConfigurationV2Create, SweepConfigurationV2Update } from "../services/balancePlaftform/balanceAccounts";

let client: Client;
let balancePlatform: BalancePlatform;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(`${client.config.balancePlatformEndpoint}/${Client.BALANCE_PLATFORM_API_VERSION}`);
    balancePlatform = new BalancePlatform(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Balance Platform", (): void => {
    describe("AccountHolders", (): void => {
        it("should support POST /accountHolders", async (): Promise<void> => {
            scope.post("/accountHolders")
                .reply(200, {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "contactDetails": {
                        "email": "s.hopper@example.com",
                        "phone": {
                            "number": "+315551231234",
                            "type": "Mobile"
                        },
                        "address": {
                            "city": "Amsterdam",
                            "country": "NL",
                            "street": "Brannan Street",
                            "houseNumberOrName": "274",
                            "postalCode": "1020CD"
                        }
                    },
                    "description": "S.Hopper - Staff 123",
                    "legalEntityId": "LE322KT223222D5FJ7THR293F",
                    "id": "AH3227C223222B5CMD2SXFKGT",
                    "status": "active"
                });
            const request: models.AccountHolderInfo = {
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "description": "S.Hopper - Staff 123",
                "legalEntityId": "LE322KT223222D5FJ7THR293F",
                "contactDetails": {
                    "email": "s.hopper@example.com",
                    "phone": {
                        "number": "+315551231234",
                        "type": models.Phone.TypeEnum.Mobile
                    },
                    "address": {
                        "city": "Amsterdam",
                        "country": "NL",
                        "street": "Brannan Street",
                        "houseNumberOrName": "274",
                        "postalCode": "1020CD"
                    }
                }
            };

            const response: models.AccountHolder = await balancePlatform.AccountHolders.create(request);

            expect(response.id).toBe("AH3227C223222B5CMD2SXFKGT");
            expect(response.legalEntityId).toBe("LE322KT223222D5FJ7THR293F");
        });

        it("should support GET /accountHolders/{id}", async (): Promise<void> => {
            scope.get("/accountHolders/AH32272223222B5CM4MWJ892H")
                .reply(200, {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "contactDetails": {
                        "address": {
                            "city": "Amsterdam",
                            "country": "NL",
                            "houseNumberOrName": "274",
                            "postalCode": "1020CD",
                            "street": "Brannan Street"
                        },
                        "email": "s.hopper@example.com",
                        "phone": {
                            "number": "+315551231234",
                            "type": "Mobile"
                        }
                    },
                    "description": "S.Hopper - Staff 123",
                    "id": "AH32272223222B5CM4MWJ892H",
                    "status": "Active"
                });

            const response: models.AccountHolder = await balancePlatform.AccountHolders.retrieve("AH32272223222B5CM4MWJ892H");

            expect(response.id).toBe("AH32272223222B5CM4MWJ892H");
            expect(response.balancePlatform).toBe("YOUR_BALANCE_PLATFORM");
        });

        it("should support PATCH /accountHolders/{id}", async (): Promise<void> => {
            scope.patch("/accountHolders/AH32272223222B5CM4MWJ892H")
                .reply(200, {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "contactDetails": {
                        "address": {
                            "city": "Amsterdam",
                            "country": "NL",
                            "houseNumberOrName": "274",
                            "postalCode": "1020CD",
                            "street": "Brannan Street"
                        },
                        "email": "s.hopper@example.com",
                        "phone": {
                            "number": "+315551231234",
                            "type": "Mobile"
                        }
                    },
                    "description": "S.Hopper - Staff 123",
                    "id": "AH32272223222B5CM4MWJ892H",
                    "status": "Suspended"
                });
            const request: AccountHolderUpdate = {
                status: models.AccountHolder.StatusEnum.Suspended,
                legalEntityId: "LE322KT223222D5FJ7THR293F",
            };

            const response: models.AccountHolder = await balancePlatform.AccountHolders.update('AH32272223222B5CM4MWJ892H', request);

            expect(response.status).toBe("Suspended");
        });

        it("should support GET /accountHolders/{id}/balanceAccounts", async (): Promise<void> => {
            scope.get("/accountHolders/AH32272223222B5CM4MWJ892H/balanceAccounts?limit=5&offset=10")
                .reply(200, {
                    "balanceAccounts": [
                        {
                            "accountHolderId": "AH32272223222B59K6ZKBBFNQ",
                            "defaultCurrencyCode": "EUR",
                            "id": "BA32272223222B59K6ZXHBFN6",
                            "status": "Active"
                        },
                        {
                            "accountHolderId": "AH32272223222B59K6ZKBBFNQ",
                            "defaultCurrencyCode": "EUR",
                            "id": "BA32272223222B59K72CKBFNJ",
                            "status": "Active"
                        },
                        {
                            "accountHolderId": "AH32272223222B59K6ZKBBFNQ",
                            "defaultCurrencyCode": "EUR",
                            "id": "BA32272223222B5BRR27B2M7G",
                            "status": "Active"
                        }
                    ],
                    "hasNext": true,
                    "hasPrevious": false
                });

            const response: models.PaginatedBalanceAccountsResponse = await balancePlatform.AccountHolders.list("AH32272223222B5CM4MWJ892H", {
                params: {
                    "limit": "5",
                    "offset": "10"
                }
            });

            expect(response.balanceAccounts[0].id).toBe("BA32272223222B59K6ZXHBFN6");
        });
    });

    describe("BalanceAccounts", (): void => {
        const balanceAccountId = "BA32272223222B59CZ3T52DKZ";
        const sweepId = "SWPC4227C224555B5FTD2NT2JV4WN5";

        it("should support POST /balanceAccounts", async (): Promise<void> => {
            scope.post("/balanceAccounts")
                .reply(200, {
                    "accountHolderId": "AH32272223222B59K6ZKBBFNQ",
                    "defaultCurrencyCode": "EUR",
                    "reference": "S.Hopper - Main balance account",
                    "balances": [
                        {
                            "available": 0,
                            "balance": 0,
                            "currency": "EUR",
                            "reserved": 0
                        }
                    ],
                    "id": balanceAccountId,
                    "status": "active"
                });
            const request: models.BalanceAccountInfo = {
                "accountHolderId": "AH32272223222B59K6ZKBBFNQ",
                "description": "S.Hopper - Main balance account"
            };

            const response: models.BalanceAccount = await balancePlatform.BalanceAccounts.create(request);

            expect(response.id).toBe(balanceAccountId);
        });

        it("should support GET /balanceAccounts/{balanceAccountId}/sweeps", async (): Promise<void> => {
            scope.get(`/balanceAccounts/${balanceAccountId}/sweeps`)
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

            const response: models.BalanceSweepConfigurationsResponse = await balancePlatform.BalanceAccounts.listSweeps(balanceAccountId);

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
            const request: SweepConfigurationV2Create = {
                "counterparty": {
                    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
                },
                "triggerAmount": {
                    "currency": "EUR",
                    "value": 50000
                },
                "currency": "EUR",
                "schedule": {
                    "type": models.SweepSchedule.TypeEnum.Balance 
                },
                "type": models.SweepConfigurationV2.TypeEnum.Pull,
                "status": models.SweepConfigurationV2.StatusEnum.Active
            };

            const response: models.SweepConfigurationV2 = await balancePlatform.BalanceAccounts.createSweep(balanceAccountId, request);

            expect(response.id).toBe(sweepId);
            expect(response.triggerAmount!.value).toBe(50000);
        });

        it("should support DELETE /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}", async (): Promise<void> => {
            scope.delete(`/balanceAccounts/${balanceAccountId}/sweeps/${sweepId}`).reply(204);

            await balancePlatform.BalanceAccounts.deleteSweep(balanceAccountId, sweepId);
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

            const response: models.SweepConfigurationV2 = await balancePlatform.BalanceAccounts.retrieveSweep(balanceAccountId, sweepId);

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
            const request: SweepConfigurationV2Update = {
                "status": models.SweepConfigurationV2.StatusEnum.Inactive
            };

            const response: models.SweepConfigurationV2 = await balancePlatform.BalanceAccounts.updateSweep(balanceAccountId, sweepId, request);

            expect(response.status).toBe('inactive');
        });

        it("should support GET /balanceAccounts/{id}", async (): Promise<void> => {
            scope.get(`/balanceAccounts/${balanceAccountId}`)
                .reply(200, {
                    "accountHolderId": "AH32272223222B59K6RTQBFNZ",
                    "defaultCurrencyCode": "EUR",
                    "balances": [
                        {
                            "available": 0,
                            "balance": 0,
                            "currency": "EUR",
                            "reserved": 0
                        }
                    ],
                    "id": balanceAccountId,
                    "status": "Active"
                });

            const response: models.BalanceAccount = await balancePlatform.BalanceAccounts.retrieve(balanceAccountId);

            expect(response.id).toBe(balanceAccountId);
            expect(response.status).toBe('Active');
        });

        it("should support PATCH /balanceAccounts/{id}", async (): Promise<void> => {
            scope.patch(`/balanceAccounts/${balanceAccountId}`)
                .reply(200, {
                    "accountHolderId": "string",
                    "balances": [
                        {
                            "available": 0,
                            "balance": 0,
                            "currency": "string",
                            "reserved": 0
                        }
                    ],
                    "defaultCurrencyCode": "string",
                    "description": "Testing",
                    "id": "string",
                    "reference": "string",
                    "status": "active",
                    "timeZone": "Europe/Amsterdam"
                });
            const request: models.BalanceAccountUpdateRequest = {
                "description": "Testing",
                "status": models.BalanceAccountUpdateRequest.StatusEnum.Active,
                "timeZone": "Europe/Amsterdam"
            };

            const response: models.BalanceAccount = await balancePlatform.BalanceAccounts.update(balanceAccountId, request);

            expect(response.status).toBe("active");
            expect(response.timeZone).toBe("Europe/Amsterdam");
        });

        it("should support GET /balanceAccounts/{id}/paymentInstruments", async (): Promise<void> => {
            scope.get(`/balanceAccounts/${balanceAccountId}/paymentInstruments`)
                .reply(200, {
                    "hasNext": "true",
                    "hasPrevious": "false",
                    "paymentInstruments": [
                        {
                            "balanceAccountId": balanceAccountId,
                            "issuingCountryCode": "GB",
                            "status": "Active",
                            "type": "card",
                            "card": {
                                "brandVariant": "mc",
                                "cardholderName": "name",
                                "formFactor": "virtual",
                                "bin": "555544",
                                "expiration": {
                                    "month": "12",
                                    "year": "2022"
                                },
                                "lastFour": "2357",
                                "number": "************2357"
                            },
                            "id": "PI32272223222B59M5TM658DT"
                        },
                        {
                            "balanceAccountId": balanceAccountId,
                            "issuingCountryCode": "GB",
                            "status": "Active",
                            "type": "card",
                            "card": {
                                "brandVariant": "mc",
                                "cardholderName": "name",
                                "formFactor": "virtual",
                                "bin": "555544",
                                "expiration": {
                                    "month": "01",
                                    "year": "2023"
                                },
                                "lastFour": "8331",
                                "number": "************8331"
                            },
                            "id": "PI32272223222B59PXDGQDLSF"
                        }
                    ]
                });

            const response: models.PaginatedPaymentInstrumentsResponse = await balancePlatform.BalanceAccounts.listPaymentInstruments(balanceAccountId);

            expect(response.paymentInstruments.length).toBe(2);
            expect(response.paymentInstruments[0].id).toBe("PI32272223222B59M5TM658DT");
        });
    });
});